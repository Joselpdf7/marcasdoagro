//! BM25 keyword index over chunk title + section + text. Complements the small
//! multilingual embedding model, which is weak on exact names and metric terms.

use std::collections::HashMap;

const K1: f32 = 1.2;
const B: f32 = 0.75;

const STOPWORDS: &[&str] = &[
    "que", "com", "para", "uma", "uns", "umas", "dos", "das", "nos", "nas", "por", "pelo", "pela", "pelos", "pelas", "como",
    "qual", "quais", "quem", "mais", "menos", "entre", "sobre", "seu", "sua", "seus", "suas", "ser", "foi", "sao", "esta",
    "isso", "este", "esse", "essa", "nao", "sim", "tem", "ter", "the", "and", "marca", "marcas", "estudo", "elo", "elos",
    "volume", "qual", "onde", "quando", "porque", "por", "muito", "cada",
];

/// Executive vocabulary → the study's own terms (query side only).
const EXPANSIONS: &[(&str, &[&str])] = &[
    ("lider", &["painel", "consolidado", "posicao", "participacao", "total"]),
    ("ranking", &["painel", "consolidado", "posicao", "participacao"]),
    ("primeir", &["posicao", "painel"]),
    ("margem", &["distancia", "pontos", "empate"]),
    ("empat", &["sensibilidades", "sorteios", "posicao"]),
    ("chatgpt", &["mencao", "citacao", "superficies"]),
    ("assistente", &["mencao", "citacao", "superficies"]),
    ("google", &["busca", "categoria", "top"]),
    ("site", &["autoatendimento", "desempenho"]),
    ("instagram", &["seguidores", "engajamento"]),
];

fn expand(tokens: Vec<String>) -> Vec<String> {
    let mut out = tokens.clone();
    for t in &tokens {
        for (prefix, extra) in EXPANSIONS {
            if t.starts_with(prefix) {
                out.extend(extra.iter().map(|e| (*e).to_owned()));
            }
        }
    }
    out
}

/// Lowercase, strip Portuguese diacritics, split on non-alphanumerics, drop short words and stopwords.
pub fn tokenize(s: &str) -> Vec<String> {
    let folded: String = s
        .chars()
        .map(|c| match c.to_lowercase().next().unwrap_or(c) {
            'á' | 'à' | 'â' | 'ã' | 'ä' => 'a',
            'é' | 'è' | 'ê' | 'ë' => 'e',
            'í' | 'ì' | 'î' | 'ï' => 'i',
            'ó' | 'ò' | 'ô' | 'õ' | 'ö' => 'o',
            'ú' | 'ù' | 'û' | 'ü' => 'u',
            'ç' => 'c',
            other => other,
        })
        .collect();
    folded
        .split(|c: char| !c.is_alphanumeric())
        .filter(|t| t.chars().count() >= 3 && !STOPWORDS.contains(t))
        .map(str::to_owned)
        .collect()
}

pub struct Bm25 {
    vocab: HashMap<String, u32>,
    /// Per document: (term id, term frequency), sorted by term id.
    docs: Vec<Vec<(u32, u16)>>,
    lens: Vec<f32>,
    avg_len: f32,
    idf: Vec<f32>,
}

impl Bm25 {
    pub fn build<'a>(texts: impl Iterator<Item = &'a str>) -> Self {
        let mut vocab: HashMap<String, u32> = HashMap::new();
        let mut df: Vec<u32> = Vec::new();
        let mut docs = Vec::new();
        let mut lens = Vec::new();
        for text in texts {
            let mut tf: HashMap<u32, u16> = HashMap::new();
            let toks = tokenize(text);
            lens.push(toks.len() as f32);
            for t in toks {
                let next = vocab.len() as u32;
                let id = *vocab.entry(t).or_insert(next);
                if id as usize == df.len() {
                    df.push(0);
                }
                *tf.entry(id).or_default() += 1;
            }
            for id in tf.keys() {
                df[*id as usize] += 1;
            }
            let mut v: Vec<(u32, u16)> = tf.into_iter().collect();
            v.sort_unstable_by_key(|(id, _)| *id);
            docs.push(v);
        }
        let n = docs.len().max(1) as f32;
        let avg_len = (lens.iter().sum::<f32>() / n).max(1.0);
        let idf = df.iter().map(|&d| ((n - d as f32 + 0.5) / (d as f32 + 0.5) + 1.0).ln()).collect();
        Self { vocab, docs, lens, avg_len, idf }
    }

    /// BM25 score of every document for the query.
    pub fn scores(&self, query: &str) -> Vec<f32> {
        let mut terms: Vec<u32> = expand(tokenize(query)).iter().filter_map(|t| self.vocab.get(t).copied()).collect();
        terms.sort_unstable();
        terms.dedup();
        self.docs
            .iter()
            .zip(&self.lens)
            .map(|(doc, &len)| {
                terms
                    .iter()
                    .filter_map(|t| doc.binary_search_by_key(t, |(id, _)| *id).ok().map(|i| (t, doc[i].1)))
                    .map(|(t, tf)| {
                        let tf = tf as f32;
                        self.idf[*t as usize] * tf * (K1 + 1.0) / (tf + K1 * (1.0 - B + B * len / self.avg_len))
                    })
                    .sum()
            })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tokenizer_folds_accents_and_drops_stopwords() {
        assert_eq!(tokenize("Quem lidera a Fidelidade nas máquinas?"), vec!["lidera", "fidelidade", "maquinas"]);
        assert_eq!(tokenize("Resposta ao público"), vec!["resposta", "publico"]);
    }

    #[test]
    fn expands_executive_vocabulary() {
        let t = expand(tokenize("quem lidera"));
        assert!(t.contains(&"painel".to_owned()) && t.contains(&"lidera".to_owned()));
    }

    #[test]
    fn bm25_prefers_documents_with_rare_query_terms() {
        let docs = ["painel consolidado john deere lidera", "lista de consultas trator usado", "john deere imprensa matérias"];
        let idx = Bm25::build(docs.iter().copied());
        let s = idx.scores("quem lidera o painel");
        assert!(s[0] > s[1] && s[0] > s[2]);
        assert_eq!(s[1], 0.0);
    }
}
