#!/bin/bash

# Default values
ENV_VAR="apiQA"
TAGS_VAR="@api"

if [ -n "$ENV" ]; then
  ENV_VAR="$ENV"
fi

if [ -n "$TAGS" ]; then
  TAGS_VAR="$TAGS"
fi
echo npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm run test:reportPortal
npx cross-env npm_config_ENV=$ENV_VAR  npm_config_TAGS=$TAGS_VAR npm run test:reportPortal

