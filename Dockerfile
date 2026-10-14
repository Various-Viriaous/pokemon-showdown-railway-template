# Pokemon Showdown on Railway with Custom File Injection
ARG NODE_IMAGE=node:22-slim

FROM ${NODE_IMAGE} AS build
ARG SHOWDOWN_COMMIT=aa17ca0fac8bc5605df673bd8774c2d0e91efa43
WORKDIR /build

# 1. Download the clean, upstream base code
RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && git clone https://github.com/smogon/pokemon-showdown.git . \
    && git checkout "${SHOWDOWN_COMMIT}"

# 2. INJECT YOUR CUSTOM FILES FROM YOUR REPO OVER THE BASE CODE
# This copies your config/, data/, and sim/ folders right into the workspace
COPY . .

# 3. Build the combined workspace
RUN npm install --omit=dev --ignore-scripts \
    && node build

FROM ${NODE_IMAGE}
LABEL org.opencontainers.image.title="pokemon-showdown-railway" \
      org.opencontainers.image.description="Self-hosted Pokemon Showdown battle server with custom modifications" \
      org.opencontainers.image.source="https://github.com/smogon/pokemon-showdown"
WORKDIR /app

COPY --from=build /build /app
COPY start.sh /app/start.sh

# If you pushed a modified config.js, this ensures it isn't broken by a missing folder
RUN chmod +x /app/start.sh \
    && if [ ! -f /app/config/config.js ]; then cp /app/config/config-example.js /app/config/config.js; fi \
    && cp -a /app/config /app/config-dist

ENV PORT=8000
EXPOSE 8000
CMD node build && /app/start.sh