//! In-memory retrieval index: chunks (JSONL) + embedding matrix (.npy, f32).
//!
//! The matrix is small (~7k x 384), so exact cosine search is a single pass
//! over contiguous memory and needs no ANN structure.

use crate::lexical::Bm25;
use anyhow::{bail, ensure, Context, Result};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::Path};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Chunk {
    pub id: String,
    pub documento: String,
    pub titulo_documento: String,
    pub secao: String,
    pub texto: String,
    pub volume: String,
    pub segmento: String,
}

/// Weight of the normalised BM25 score added to the cosine similarity.
const LEXICAL_WEIGHT: f32 = 0.6;

pub struct Index {
    chunks: Vec<Chunk>,
    bm25: Bm25,
    /// Row-major, L2-normalised vectors (n * dim).
    vectors: Vec<f32>,
    dim: usize,
}

#[derive(Debug, Clone)]
pub struct Hit<'a> {
    pub score: f32,
    pub chunk: &'a Chunk,
}

impl Index {
    pub fn load(chunks_path: &Path, npy_path: &Path) -> Result<Self> {
        let chunks = load_chunks(chunks_path)?;
        let (vectors, rows, dim) = load_npy_f32(npy_path)?;
        ensure!(
            rows == chunks.len(),
            "embeddings rows ({rows}) != chunks ({})",
            chunks.len()
        );
        Ok(Self::from_parts(chunks, vectors, dim))
    }

    pub fn from_parts(chunks: Vec<Chunk>, mut vectors: Vec<f32>, dim: usize) -> Self {
        vectors.chunks_exact_mut(dim).for_each(normalize);
        let docs: Vec<String> = chunks.iter().map(|c| format!("{} {} {}", c.titulo_documento, c.secao, c.texto)).collect();
        let bm25 = Bm25::build(docs.iter().map(String::as_str));
        Self { chunks, bm25, vectors, dim }
    }

    pub fn len(&self) -> usize {
        self.chunks.len()
    }

    pub fn is_empty(&self) -> bool {
        self.chunks.is_empty()
    }

    pub fn dim(&self) -> usize {
        self.dim
    }

    /// Hybrid top-k: cosine similarity plus normalised BM25, optionally restricted
    /// to one segment, with at most `per_doc` chunks from the same document so one
    /// long table cannot crowd out the rest of the evidence.
    pub fn search(&self, query: &[f32], query_text: &str, k: usize, segment: Option<&str>, per_doc: usize) -> Vec<Hit<'_>> {
        let mut q = query.to_vec();
        normalize(&mut q);
        let lexical = self.bm25.scores(query_text);
        let in_scope = |i: usize| segment.is_none_or(|s| self.chunks[i].segmento == s);
        let lex_max = (0..self.chunks.len())
            .filter(|&i| in_scope(i))
            .map(|i| lexical[i])
            .fold(0.0f32, f32::max);

        let mut scored: Vec<(f32, usize)> = self
            .vectors
            .chunks_exact(self.dim)
            .enumerate()
            .filter(|(i, _)| in_scope(*i))
            .map(|(i, v)| {
                let lex = if lex_max > 0.0 { lexical[i] / lex_max } else { 0.0 };
                (dot(v, &q) + LEXICAL_WEIGHT * lex, i)
            })
            .collect();
        scored.sort_unstable_by(|a, b| b.0.total_cmp(&a.0));

        let mut per: HashMap<&str, usize> = HashMap::new();
        let mut out = Vec::with_capacity(k);
        for (score, i) in scored {
            let c = &self.chunks[i];
            let n = per.entry(c.documento.as_str()).or_default();
            if *n >= per_doc {
                continue;
            }
            *n += 1;
            out.push(Hit { score, chunk: c });
            if out.len() == k {
                break;
            }
        }
        out
    }
}

fn dot(a: &[f32], b: &[f32]) -> f32 {
    a.iter().zip(b).map(|(x, y)| x * y).sum()
}

fn normalize(v: &mut [f32]) {
    let n = v.iter().map(|x| x * x).sum::<f32>().sqrt();
    if n > 0.0 {
        v.iter_mut().for_each(|x| *x /= n);
    }
}

pub fn load_chunks(path: &Path) -> Result<Vec<Chunk>> {
    let raw = fs::read_to_string(path).with_context(|| format!("reading {}", path.display()))?;
    raw.lines()
        .filter(|l| !l.trim().is_empty())
        .enumerate()
        .map(|(i, l)| serde_json::from_str(l).with_context(|| format!("chunk line {}", i + 1)))
        .collect()
}

/// Minimal reader for NumPy v1/v2/v3 `.npy` files holding a C-order 2-D `<f4` array.
pub fn load_npy_f32(path: &Path) -> Result<(Vec<f32>, usize, usize)> {
    let bytes = fs::read(path).with_context(|| format!("reading {}", path.display()))?;
    parse_npy_f32(&bytes)
}

pub fn parse_npy_f32(bytes: &[u8]) -> Result<(Vec<f32>, usize, usize)> {
    ensure!(bytes.len() > 10 && &bytes[..6] == b"\x93NUMPY", "not an .npy file");
    let major = bytes[6];
    let (header_len, start) = match major {
        1 => (u16::from_le_bytes([bytes[8], bytes[9]]) as usize, 10),
        2 | 3 => (
            u32::from_le_bytes([bytes[8], bytes[9], bytes[10], bytes[11]]) as usize,
            12,
        ),
        v => bail!("unsupported .npy version {v}"),
    };
    let header = std::str::from_utf8(&bytes[start..start + header_len])?;
    ensure!(header.contains("'descr': '<f4'"), "expected little-endian float32, got {header}");
    ensure!(header.contains("'fortran_order': False"), "expected C order");

    let shape = header
        .split("'shape': (")
        .nth(1)
        .and_then(|s| s.split(')').next())
        .context("shape not found")?;
    let dims: Vec<usize> = shape
        .split(',')
        .map(str::trim)
        .filter(|s| !s.is_empty())
        .map(str::parse)
        .collect::<Result<_, _>>()?;
    ensure!(dims.len() == 2, "expected 2-D array, got {dims:?}");
    let (rows, cols) = (dims[0], dims[1]);

    let data = &bytes[start + header_len..];
    ensure!(data.len() == rows * cols * 4, "data size mismatch");
    let (words, _) = data.as_chunks::<4>();
    let vectors = words.iter().map(|b| f32::from_le_bytes(*b)).collect();
    Ok((vectors, rows, cols))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn chunk(id: &str, doc: &str, seg: &str) -> Chunk {
        Chunk {
            id: id.into(),
            documento: doc.into(),
            titulo_documento: "t".into(),
            secao: "s".into(),
            texto: "x".into(),
            volume: "1".into(),
            segmento: seg.into(),
        }
    }

    fn npy(rows: usize, cols: usize, data: &[f32]) -> Vec<u8> {
        let mut header = format!(
            "{{'descr': '<f4', 'fortran_order': False, 'shape': ({rows}, {cols}), }}"
        );
        while (10 + header.len() + 1) % 64 != 0 {
            header.push(' ');
        }
        header.push('\n');
        let mut out = b"\x93NUMPY\x01\x00".to_vec();
        out.extend_from_slice(&(header.len() as u16).to_le_bytes());
        out.extend_from_slice(header.as_bytes());
        data.iter().for_each(|f| out.extend_from_slice(&f.to_le_bytes()));
        out
    }

    #[test]
    fn parses_npy_roundtrip() {
        let bytes = npy(2, 3, &[1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
        let (v, r, c) = parse_npy_f32(&bytes).unwrap();
        assert_eq!((r, c), (2, 3));
        assert_eq!(v, vec![1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
    }

    #[test]
    fn rejects_wrong_dtype() {
        let mut bytes = npy(1, 1, &[1.0]);
        let pos = bytes.windows(3).position(|w| w == b"<f4").unwrap();
        bytes[pos + 2] = b'8';
        assert!(parse_npy_f32(&bytes).is_err());
    }

    #[test]
    fn search_ranks_by_cosine_and_filters_segment() {
        let chunks = vec![
            chunk("a", "d1", "defensivos"),
            chunk("b", "d2", "sementes"),
            chunk("c", "d3", "defensivos"),
        ];
        // unnormalised on purpose: scale must not matter
        let vectors = vec![10.0, 0.0, 0.0, 1.0, 0.7, 0.7];
        let idx = Index::from_parts(chunks, vectors, 2);

        let all = idx.search(&[1.0, 0.0], "", 3, None, 3);
        assert_eq!(all.iter().map(|h| h.chunk.id.as_str()).collect::<Vec<_>>(), ["a", "c", "b"]);

        let seeds = idx.search(&[1.0, 0.0], "", 3, Some("sementes"), 3);
        assert_eq!(seeds.len(), 1);
        assert_eq!(seeds[0].chunk.id, "b");
    }

    #[test]
    fn lexical_match_breaks_semantic_ties() {
        let mut a = chunk("a", "d1", "x");
        a.texto = "lista de consultas".into();
        let mut b = chunk("b", "d2", "x");
        b.texto = "painel consolidado fidelidade".into();
        // identical vectors: only the keyword score can separate them
        let idx = Index::from_parts(vec![a, b], vec![1.0, 0.0, 1.0, 0.0], 2);
        let hits = idx.search(&[1.0, 0.0], "quem lidera a fidelidade", 2, None, 2);
        assert_eq!(hits[0].chunk.id, "b");
    }

    #[test]
    fn search_caps_chunks_per_document() {
        let chunks = vec![chunk("a", "same", "x"), chunk("b", "same", "x"), chunk("c", "other", "x")];
        let idx = Index::from_parts(chunks, vec![1.0, 0.0, 0.99, 0.1, 0.5, 0.5], 2);
        let hits = idx.search(&[1.0, 0.0], "", 3, None, 1);
        assert_eq!(hits.iter().map(|h| h.chunk.id.as_str()).collect::<Vec<_>>(), ["a", "c"]);
    }
}
