# Build from the repository root:  docker build -f api/Dockerfile -t marcasdoagro-api .
FROM rust:1-bookworm AS build
WORKDIR /src
COPY api/ ./api/
RUN cd api && cargo build --release --locked

FROM debian:bookworm-slim
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates libstdc++6 \
 && rm -rf /var/lib/apt/lists/* \
 && useradd --system --home /app app
WORKDIR /app
COPY --from=build /src/api/target/release/marcasdoagro-api ./marcasdoagro-api
COPY data/base/chunks.jsonl data/base/embeddings.npy ./data/base/
COPY data/contexto_chat.md ./data/
ENV MDA_DATA_DIR=/app/data \
    MDA_FASTEMBED_CACHE=/app/.fastembed_cache \
    MDA_BIND_ADDR=0.0.0.0:8080
RUN ./marcasdoagro-api --baixar-modelo && chown -R app /app
USER app
EXPOSE 8080
CMD ["./marcasdoagro-api"]
