#!/bin/bash

# Default values
ENV_VAR=""
TAGS_VAR=""
BROWSER_VAR=""
PARALLEL_VAR=""
LAUNCH_VAR=""

if [ -n "$ENV" ]; then
  ENV_VAR="$ENV"
fi

if [ -n "$TAGS" ]; then
  TAGS_VAR="$TAGS"
fi

if [ -n "$BROWSER" ]; then
  BROWSER_VAR="$BROWSER"
fi

if [ -n "$PARALLEL" ]; then
  PARALLEL_VAR="$PARALLEL"
fi

if [ -n "$LAUNCH" ]; then
 LAUNCH_VAR="$LAUNCH"
fi

echo "enviornment values"
echo npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm_config_BROWSER=$BROWSER_VAR npm_config_PARALLEL=$PARALLEL_VAR npm_config_HEADLESS="true"

npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm_config_BROWSER=$BROWSER_VAR npm_config_PARALLEL=$PARALLEL_VAR npm_config_HEADLESS="true" npm_config_LAUNCH=$LAUNCH_VAR npm run test:reportPortal

