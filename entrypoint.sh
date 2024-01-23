#!/bin/bash

# Default values
ENV=""
TAGS=""

while [ "$#" -gt 0 ]; do
    case "$1" in
        --env)
            ENV=$2
            shift 2
            ;;
        --tags)
            TAGS=$2
            shift 2
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done
echo "+++++++++++++++"
echo npm run test:reportPortal --ENV="$ENV_VAR" --TAGS="$TAGS_VAR"
npm run test:reportPortal --ENV="$ENV_VAR" --TAGS="$TAGS_VAR"
