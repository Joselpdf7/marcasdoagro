use anyhow::{Context, Result};
use std::{env, path::PathBuf};

// App settings use the MDA_ prefix so they never collide with other tools' variables.

#[derive(Debug, Clone)]
pub struct Config {
    pub api_url: String,
    pub api_key: String,
    pub model: String,
    pub effort: String,
    pub max_tokens: u32,
    pub bind_addr: String,
    pub allowed_origins: Vec<String>,
    pub data_dir: PathBuf,
    pub fastembed_cache: PathBuf,
    /// Seconds to replenish one request per client IP.
    pub rate_period_secs: u64,
    pub rate_burst: u32,
}

fn var_or(key: &str, default: &str) -> String {
    env::var(key).ok().filter(|v| !v.trim().is_empty()).unwrap_or_else(|| default.to_owned())
}

impl Config {
    pub fn from_env() -> Result<Self> {
        Ok(Self {
            api_url: var_or("MDA_API_URL", crate::claude::DEFAULT_API_URL),
            api_key: env::var("ANTHROPIC_API_KEY").context("ANTHROPIC_API_KEY is not set")?,
            model: var_or("MDA_MODEL", "claude-opus-5-5"),
            effort: var_or("MDA_EFFORT", "low"),
            max_tokens: var_or("MDA_MAX_TOKENS", "4000").parse().context("MDA_MAX_TOKENS")?,
            bind_addr: var_or("MDA_BIND_ADDR", "0.0.0.0:8080"),
            allowed_origins: var_or("MDA_ALLOWED_ORIGINS", "http://localhost:4321")
                .split(',')
                .map(|s| s.trim().to_owned())
                .filter(|s| !s.is_empty())
                .collect(),
            data_dir: var_or("MDA_DATA_DIR", "../data").into(),
            fastembed_cache: var_or("MDA_FASTEMBED_CACHE", ".fastembed_cache").into(),
            rate_period_secs: var_or("MDA_RATE_PERIOD_SECS", "10").parse().context("MDA_RATE_PERIOD_SECS")?,
            rate_burst: var_or("MDA_RATE_BURST", "4").parse().context("MDA_RATE_BURST")?,
        })
    }
}
