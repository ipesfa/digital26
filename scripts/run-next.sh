#!/usr/bin/env bash
# Usa el `node` del PATH (p. ej. v20 de Homebrew/fnm), no el Node con el que corre pnpm/Volta.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
node scripts/ensure-node.cjs
cmd="${1:?usage: run-next.sh dev|build|start [args...]}"
shift
exec node ./node_modules/next/dist/bin/next "$cmd" "$@"
