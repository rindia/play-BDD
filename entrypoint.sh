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

echo "enviornment values"
echo npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm_config_BROWSER=$BROWSER_VAR npm_config_PARALLEL=$PARALLEL_VAR npm_config_HEADLESS="true"

npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm_config_BROWSER=$BROWSER_VAR npm_config_PARALLEL=$PARALLEL_VAR npm_config_HEADLESS="true" npm run test:reportPortal

