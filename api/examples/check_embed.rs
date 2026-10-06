//! Verifies that Rust query embeddings match the vectors shipped with the base.
//! Run: cargo run --release --example check_embed
use marcasdoagro_api::{embed::Embedder, index};
use std::path::Path;

fn main() -> anyhow::Result<()> {
    let base = Path::new("../data/base");
    let chunks = index::load_chunks(&base.join("chunks.jsonl"))?;
    let (vecs, _rows, dim) = index::load_npy_f32(&base.join("embeddings.npy"))?;
    let emb = Embedder::new(".fastembed_cache".into())?;
    let mut worst = 1.0f32;
    for i in [0usize, 1, 500, 3000, chunks.len() - 1] {
        let v = emb.embed(&chunks[i].texto)?;
        let s = &vecs[i * dim..(i + 1) * dim];
        let cos = v.iter().zip(s).map(|(a, b)| a * b).sum::<f32>()
            / (v.iter().map(|x| x * x).sum::<f32>().sqrt() * s.iter().map(|x| x * x).sum::<f32>().sqrt());
        println!("chunk {i:>5}: cos = {cos:.6}");
        worst = worst.min(cos);
    }
    anyhow::ensure!(worst > 0.999, "embeddings diverge (worst {worst})");
    println!("OK: worst cosine {worst:.6}");
    Ok(())
}
