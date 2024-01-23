#!/bin/bash

if [ -z "$ENV" ] || [ -z "$TAGS" ]; then
  echo "Error: ENV and TAGS environment variables must be set."
  exit 1
fi


echo "Environment: $ENV"
echo "Tags: $TAGS"

