use crate::{
    claude::{Claude, Message, Upstream},
    embed::Embedder,
    index::Index,
    prompt,
};
use axum::{
    extract::State,
    http::StatusCode,
    response::{
        sse::{Event, KeepAlive, Sse},
        IntoResponse, Response,
    },
    Json,
};
use futures_util::Stream;
use serde::{Deserialize, Serialize};
use std::{convert::Infallible, sync::Arc};
use tokio::sync::mpsc;
use tokio_stream::{wrappers::ReceiverStream, StreamExt};

pub const SEGMENTS: [&str; 4] = ["defensivos", "maquinario", "fertilizantes", "sementes"];
const MAX_QUESTION: usize = 600;
const MAX_HISTORY: usize = 6;
const MAX_TURN: usize = 4000;
const TOP_K: usize = 10;
const PER_DOC: usize = 2;

pub struct AppState {
    pub index: Index,
    pub embedder: Embedder,
    pub claude: Claude,
    pub system: String,
}

#[derive(Debug, Deserialize)]
pub struct Turn {
    pub papel: String,
    pub texto: String,
}

#[derive(Debug, Deserialize)]
pub struct AskRequest {
    pub pergunta: String,
    #[serde(default)]
    pub elo: Option<String>,
    #[serde(default)]
    pub historico: Vec<Turn>,
}

#[derive(Debug, Serialize)]
pub struct Fonte {
    pub n: usize,
    pub volume: String,
    pub elo: String,
    pub documento: String,
    pub titulo: String,
    pub secao: String,
}

/// Validated request: question, optional segment, and alternating history.
#[derive(Debug)]
pub struct Ask {
    pub question: String,
    pub segment: Option<String>,
    pub history: Vec<Message>,
}

pub fn validate(req: AskRequest) -> Result<Ask, &'static str> {
    let question = req.pergunta.trim().to_owned();
    let len = question.chars().count();
    if len < 3 {
        return Err("Escreva uma pergunta.");
    }
    if len > MAX_QUESTION {
        return Err("A pergunta passou de 600 caracteres.");
    }
    let segment = match req.elo.as_deref().map(str::trim).filter(|s| !s.is_empty()) {
        None => None,
        Some(s) if SEGMENTS.contains(&s) => Some(s.to_owned()),
        Some(_) => return Err("Elo desconhecido."),
    };
    if req.historico.len() > MAX_HISTORY {
        return Err("Histórico longo demais.");
    }
    // History must alternate user/assistant and start with the user.
    let mut history = Vec::with_capacity(req.historico.len());
    for (i, t) in req.historico.into_iter().enumerate() {
        let role = match (i % 2, t.papel.as_str()) {
            (0, "usuario") => "user",
            (1, "assistente") => "assistant",
            _ => return Err("Histórico inválido."),
        };
        if t.texto.chars().count() > MAX_TURN {
            return Err("Histórico longo demais.");
        }
        history.push(Message { role, content: t.texto });
    }
    if history.len() % 2 != 0 {
        return Err("Histórico inválido.");
    }
    Ok(Ask { question, segment, history })
}

pub async fn health(State(st): State<Arc<AppState>>) -> impl IntoResponse {
    Json(serde_json::json!({ "ok": true, "trechos": st.index.len(), "dim": st.index.dim() }))
}

pub async fn ask(State(st): State<Arc<AppState>>, Json(req): Json<AskRequest>) -> Response {
    let ask = match validate(req) {
        Ok(a) => a,
        Err(msg) => return (StatusCode::BAD_REQUEST, Json(serde_json::json!({ "erro": msg }))).into_response(),
    };

    // Retrieval query: previous user question gives context to follow-ups ("e nos fertilizantes?").
    let prev = ask.history.iter().rev().find(|m| m.role == "user").map(|m| m.content.as_str()).unwrap_or("");
    let query = format!("{prev} {}", ask.question).trim().to_owned();
    let st2 = st.clone();
    let q2 = query.clone();
    let vector = match tokio::task::spawn_blocking(move || st2.embedder.embed(&q2)).await {
        Ok(Ok(v)) => v,
        other => {
            tracing::error!(?other, "embedding failed");
            return (StatusCode::INTERNAL_SERVER_ERROR, Json(serde_json::json!({ "erro": "Falha ao processar a pergunta." })))
                .into_response();
        }
    };

    let hits = st.index.search(&vector, &query, TOP_K, ask.segment.as_deref(), PER_DOC);
    let fontes: Vec<Fonte> = hits
        .iter()
        .enumerate()
        .map(|(i, h)| Fonte {
            n: i + 1,
            volume: h.chunk.volume.clone(),
            elo: h.chunk.segmento.clone(),
            documento: h.chunk.documento.clone(),
            titulo: h.chunk.titulo_documento.clone(),
            secao: h.chunk.secao.clone(),
        })
        .collect();

    let mut messages = ask.history;
    messages.push(Message { role: "user", content: prompt::user_turn(&ask.question, &hits) });

    let (tx, rx) = mpsc::channel::<Event>(64);
    let fontes_ev = Event::default().event("fontes").json_data(&fontes).unwrap_or_default();
    tokio::spawn(async move {
        if tx.send(fontes_ev).await.is_err() {
            return;
        }
        let (utx, mut urx) = mpsc::channel::<Upstream>(64);
        let forward = {
            let tx = tx.clone();
            tokio::spawn(async move {
                while let Some(Upstream::Text(t)) = urx.recv().await {
                    let ev = Event::default().event("delta").json_data(serde_json::json!({ "t": t })).unwrap_or_default();
                    if tx.send(ev).await.is_err() {
                        break;
                    }
                }
            })
        };
        let result = st.claude.stream(&st.system, &messages, &utx).await;
        drop(utx);
        let _ = forward.await;
        let ev = match result {
            Ok(stop) => Event::default().event("fim").json_data(serde_json::json!({ "stop_reason": stop })),
            Err(e) => {
                tracing::error!(error = %e, "claude stream failed");
                Event::default()
                    .event("erro")
                    .json_data(serde_json::json!({ "mensagem": "O assistente não respondeu agora. Tente de novo em instantes." }))
            }
        };
        let _ = tx.send(ev.unwrap_or_default()).await;
    });

    sse(ReceiverStream::new(rx)).into_response()
}

fn sse(stream: impl Stream<Item = Event> + Send + 'static) -> Sse<impl Stream<Item = Result<Event, Infallible>>> {
    Sse::new(stream.map(Ok)).keep_alive(KeepAlive::default())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn req(p: &str, elo: Option<&str>, h: Vec<(&str, &str)>) -> AskRequest {
        AskRequest {
            pergunta: p.into(),
            elo: elo.map(Into::into),
            historico: h.into_iter().map(|(a, b)| Turn { papel: a.into(), texto: b.into() }).collect(),
        }
    }

    #[test]
    fn accepts_valid_request() {
        let a = validate(req("  Quem lidera?  ", Some("sementes"), vec![("usuario", "a"), ("assistente", "b")])).unwrap();
        assert_eq!(a.question, "Quem lidera?");
        assert_eq!(a.segment.as_deref(), Some("sementes"));
        assert_eq!(a.history.len(), 2);
        assert_eq!(a.history[0].role, "user");
    }

    #[test]
    fn rejects_bad_input() {
        assert!(validate(req("oi", None, vec![])).is_err());
        assert!(validate(req(&"x".repeat(601), None, vec![])).is_err());
        assert!(validate(req("pergunta ok", Some("bovinos"), vec![])).is_err());
        assert!(validate(req("pergunta ok", None, vec![("assistente", "x"), ("usuario", "y")])).is_err());
        assert!(validate(req("pergunta ok", None, vec![("usuario", "x")])).is_err());
    }

    #[test]
    fn empty_segment_means_all() {
        assert!(validate(req("pergunta ok", Some(" "), vec![])).unwrap().segment.is_none());
    }
}
