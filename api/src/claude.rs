//! Minimal streaming client for the Claude Messages API over raw HTTP
//! (there is no official Rust SDK).

use anyhow::{bail, Result};
use futures_util::StreamExt;
use serde::Serialize;
use serde_json::{json, Value};
use tokio::sync::mpsc;

pub const DEFAULT_API_URL: &str = "https://api.anthropic.com/v1/messages";
const API_VERSION: &str = "2023-06-01";
/// Server-side refusal fallback ("default" routing by refusal category).
const FALLBACK_BETA: &str = "server-side-fallback-2026-07-01";

#[derive(Debug, Clone, Serialize)]
pub struct Message {
    pub role: &'static str,
    pub content: String,
}

#[derive(Debug, PartialEq)]
pub enum Upstream {
    Text(String),
    Stop(String),
    Error(String),
    Other,
}

pub struct Claude {
    http: reqwest::Client,
    api_url: String,
    api_key: String,
    model: String,
    effort: String,
    max_tokens: u32,
}

impl Claude {
    pub fn new(api_url: String, api_key: String, model: String, effort: String, max_tokens: u32) -> Result<Self> {
        let http = reqwest::Client::builder()
            .connect_timeout(std::time::Duration::from_secs(10))
            .timeout(std::time::Duration::from_secs(300))
            .build()?;
        Ok(Self { http, api_url, api_key, model, effort, max_tokens })
    }

    fn body(&self, system: &str, messages: &[Message]) -> Value {
        json!({
            "model": self.model,
            "max_tokens": self.max_tokens,
            "stream": true,
            "output_config": { "effort": self.effort },
            "fallbacks": "default",
            "system": [{ "type": "text", "text": system, "cache_control": { "type": "ephemeral" } }],
            "messages": messages,
        })
    }

    /// Streams text deltas into `tx`. Returns the stop reason.
    pub async fn stream(&self, system: &str, messages: &[Message], tx: &mpsc::Sender<Upstream>) -> Result<String> {
        let res = self
            .http
            .post(&self.api_url)
            .header("x-api-key", &self.api_key)
            .header("anthropic-version", API_VERSION)
            .header("anthropic-beta", FALLBACK_BETA)
            .json(&self.body(system, messages))
            .send()
            .await?;

        let status = res.status();
        if !status.is_success() {
            let text = res.text().await.unwrap_or_default();
            bail!("Claude API {status}: {}", text.chars().take(500).collect::<String>());
        }

        let mut buf = String::new();
        let mut stop = String::from("end_turn");
        let mut bytes = res.bytes_stream();
        while let Some(chunk) = bytes.next().await {
            buf.push_str(&String::from_utf8_lossy(&chunk?));
            while let Some(pos) = buf.find("\n\n") {
                let block: String = buf.drain(..pos + 2).collect();
                match parse_sse_block(&block) {
                    Upstream::Text(t) => {
                        if tx.send(Upstream::Text(t)).await.is_err() {
                            return Ok("client_closed".into()); // client went away
                        }
                    }
                    Upstream::Stop(r) => stop = r,
                    Upstream::Error(e) => bail!("Claude stream error: {e}"),
                    Upstream::Other => {}
                }
            }
        }
        Ok(stop)
    }
}

/// Parses one SSE event block from the Messages API stream.
pub fn parse_sse_block(block: &str) -> Upstream {
    let data: String = block
        .lines()
        .filter_map(|l| l.strip_prefix("data:"))
        .map(str::trim_start)
        .collect::<Vec<_>>()
        .join("\n");
    let Ok(v) = serde_json::from_str::<Value>(&data) else {
        return Upstream::Other;
    };
    match v["type"].as_str() {
        Some("content_block_delta") if v["delta"]["type"] == "text_delta" => {
            Upstream::Text(v["delta"]["text"].as_str().unwrap_or_default().to_owned())
        }
        Some("message_delta") => match v["delta"]["stop_reason"].as_str() {
            Some(r) => Upstream::Stop(r.to_owned()),
            None => Upstream::Other,
        },
        Some("error") => Upstream::Error(v["error"]["message"].as_str().unwrap_or("unknown").to_owned()),
        _ => Upstream::Other,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_text_delta() {
        let b = "event: content_block_delta\ndata: {\"type\":\"content_block_delta\",\"index\":1,\"delta\":{\"type\":\"text_delta\",\"text\":\"Olá\"}}\n\n";
        assert_eq!(parse_sse_block(b), Upstream::Text("Olá".into()));
    }

    #[test]
    fn ignores_thinking_and_ping() {
        let t = "event: content_block_delta\ndata: {\"type\":\"content_block_delta\",\"index\":0,\"delta\":{\"type\":\"thinking_delta\",\"thinking\":\"\"}}\n\n";
        assert_eq!(parse_sse_block(t), Upstream::Other);
        assert_eq!(parse_sse_block("event: ping\ndata: {\"type\": \"ping\"}\n\n"), Upstream::Other);
    }

    #[test]
    fn parses_stop_and_error() {
        let s = "event: message_delta\ndata: {\"type\":\"message_delta\",\"delta\":{\"stop_reason\":\"refusal\"}}\n\n";
        assert_eq!(parse_sse_block(s), Upstream::Stop("refusal".into()));
        let e = "event: error\ndata: {\"type\":\"error\",\"error\":{\"type\":\"overloaded_error\",\"message\":\"Overloaded\"}}\n\n";
        assert_eq!(parse_sse_block(e), Upstream::Error("Overloaded".into()));
    }

    #[test]
    fn body_has_fallback_cache_and_effort() {
        let c = Claude::new(DEFAULT_API_URL.into(), "k".into(), "claude-opus-5-5".into(), "low".into(), 100).unwrap();
        let b = c.body("SYS", &[Message { role: "user", content: "oi".into() }]);
        assert_eq!(b["fallbacks"], "default");
        assert_eq!(b["output_config"]["effort"], "low");
        assert_eq!(b["system"][0]["cache_control"]["type"], "ephemeral");
        assert_eq!(b["stream"], true);
        assert!(b.get("thinking").is_none());
    }
}
