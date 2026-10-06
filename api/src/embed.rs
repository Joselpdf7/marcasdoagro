//! Query embedding with the same model used to build the base
//! (paraphrase-multilingual-MiniLM-L12-v2, mean pooling).

use anyhow::{anyhow, Result};
use fastembed::{EmbeddingModel, TextEmbedding, TextInitOptions};
use std::{path::PathBuf, sync::Mutex};

pub struct Embedder {
    model: Mutex<TextEmbedding>,
}

impl Embedder {
    pub fn new(cache_dir: PathBuf) -> Result<Self> {
        let opts = TextInitOptions::new(EmbeddingModel::ParaphraseMLMiniLML12V2)
            .with_cache_dir(cache_dir)
            .with_max_length(128) // same truncation as sentence-transformers for this model
            .with_show_download_progress(false);
        Ok(Self { model: Mutex::new(TextEmbedding::try_new(opts)?) })
    }

    /// Blocking: call from `spawn_blocking`.
    pub fn embed(&self, text: &str) -> Result<Vec<f32>> {
        let mut model = self.model.lock().map_err(|_| anyhow!("embedder lock poisoned"))?;
        model
            .embed(vec![text], None)?
            .into_iter()
            .next()
            .ok_or_else(|| anyhow!("empty embedding"))
    }
}
