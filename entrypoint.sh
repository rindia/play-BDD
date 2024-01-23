#!/bin/bash

# Default values
ENV_VAR=""
TAGS_VAR=""
BROWSER_VAR=""
PARALLEL_VAR=""

if [ -n "$ENV" ]; then
  ENV_VAR="$ENV"
fi

if [ -n "$TAGS" ]; then
  TAGS_VAR="$TAGS"
fi

if [ -n "$BROWSER" ]; then
  BROWSER_VAR="$BROWSER"
fi

if [ -n "$PARALLE" ]; then
  PARALLEL_VAR="$PARALLE"
fi

echo npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm run test:reportPortal
npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm_config_BROWSER=$BROWSER_VAR npm_config_PARALLE=$PARALLE_VAR npm run test:reportPortal

