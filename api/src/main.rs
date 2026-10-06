use anyhow::{Context, Result};
use axum::{
    http::{header, HeaderValue, Method},
    routing::{get, post},
    Router,
};
use marcasdoagro_api::{claude::Claude, config::Config, embed::Embedder, index::Index, prompt, routes};
use std::{net::SocketAddr, sync::Arc, time::Duration};
use tower_governor::{governor::GovernorConfigBuilder, key_extractor::SmartIpKeyExtractor, GovernorLayer};
use tower_http::{cors::CorsLayer, limit::RequestBodyLimitLayer, trace::TraceLayer};

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::try_from_default_env().unwrap_or_else(|_| "info".into()))
        .init();

    // Docker build step: fetch the embedding model into the image, then exit.
    if std::env::args().any(|a| a == "--baixar-modelo") {
        let cache = std::env::var("MDA_FASTEMBED_CACHE").unwrap_or_else(|_| ".fastembed_cache".into());
        Embedder::new(cache.into())?;
        tracing::info!("embedding model ready");
        return Ok(());
    }

    let cfg = Config::from_env()?;
    let base = cfg.data_dir.join("base");
    let index = Index::load(&base.join("chunks.jsonl"), &base.join("embeddings.npy"))?;
    let context = std::fs::read_to_string(cfg.data_dir.join("contexto_chat.md")).context("reading contexto_chat.md")?;
    let cache = cfg.fastembed_cache.clone();
    let embedder = tokio::task::spawn_blocking(move || Embedder::new(cache)).await??;
    tracing::info!(trechos = index.len(), model = %cfg.model, "base loaded");

    let state = Arc::new(routes::AppState {
        index,
        embedder,
        claude: Claude::new(cfg.api_url.clone(), cfg.api_key.clone(), cfg.model.clone(), cfg.effort.clone(), cfg.max_tokens)?,
        system: prompt::system_prompt(&context),
    });

    let governor = Arc::new(
        GovernorConfigBuilder::default()
            .per_second(cfg.rate_period_secs)
            .burst_size(cfg.rate_burst)
            .key_extractor(SmartIpKeyExtractor)
            .finish()
            .context("invalid rate limit config")?,
    );
    let limiter = governor.limiter().clone();
    std::thread::spawn(move || loop {
        std::thread::sleep(Duration::from_secs(60));
        limiter.retain_recent();
    });

    let origins: Vec<HeaderValue> = cfg.allowed_origins.iter().filter_map(|o| o.parse().ok()).collect();
    let cors = CorsLayer::new()
        .allow_origin(origins)
        .allow_methods([Method::GET, Method::POST])
        .allow_headers([header::CONTENT_TYPE]);

    let ask = Router::new()
        .route("/api/perguntar", post(routes::ask))
        .layer(GovernorLayer::new(governor));
    let app = Router::new()
        .route("/health", get(routes::health))
        .merge(ask)
        .layer(RequestBodyLimitLayer::new(32 * 1024))
        .layer(cors)
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    let listener = tokio::net::TcpListener::bind(&cfg.bind_addr).await?;
    tracing::info!(addr = %cfg.bind_addr, "listening");
    axum::serve(listener, app.into_make_service_with_connect_info::<SocketAddr>()).await?;
    Ok(())
}
