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
echo npm run test:reportPortal ENV="$ENV_VAR" TAGS="$TAGS_VAR"
npx cross-env npm_config_ENV=apiQA  npm_config_TAGS=@api npm run test:local

