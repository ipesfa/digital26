#!/usr/bin/env bash
# pnpm/Volta suele dejar Node 18 *antes* que Homebrew en PATH: el primer "node" no es v20.
# Elegimos el primer ejecutable "node" en PATH (y fallbacks Homebrew) con versión >= 20.9.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  source "${NVM_DIR:-$HOME/.nvm}/nvm.sh" 2>/dev/null || true
  nvm use 2>/dev/null || nvm use 20 2>/dev/null || true
fi
if command -v fnm &>/dev/null; then
  eval "$(fnm env)" 2>/dev/null || true
  fnm use 2>/dev/null || true
fi

node_ok() {
  local bin="$1"
  [[ -x "$bin" ]] || return 1
  "$bin" -e '
const m = /^v(\d+)\.(\d+)/.exec(process.version);
if (!m) process.exit(1);
const maj = +m[1], min = +m[2];
process.exit(maj > 20 || (maj === 20 && min >= 9) ? 0 : 1);
' 2>/dev/null
}

pick_node() {
  local dir
  local IFS=:
  for dir in $PATH; do
    [[ -n "$dir" && -x "$dir/node" ]] || continue
    if node_ok "$dir/node"; then
      printf '%s\n' "$dir/node"
      return 0
    fi
  done
  for try in /opt/homebrew/opt/node@20/bin/node /opt/homebrew/bin/node \
             /usr/local/opt/node@20/bin/node /usr/local/bin/node; do
    if node_ok "$try"; then
      printf '%s\n' "$try"
      return 0
    fi
  done
  return 1
}

NODE_BIN="$(pick_node)" || {
  echo "" >&2
  echo "No hay Node.js >= 20.9 usable: en PATH solo apareció Node 18 (típico con Volta)." >&2
  echo "  • Instalá Node 20 (brew install node@20) y poné su bin antes que ~/.volta/bin en PATH, o" >&2
  echo "  • corepack:  corepack enable && corepack prepare pnpm@10 --activate  (con Node 20 como predeterminado)" >&2
  echo "" >&2
  exit 1
}

"$NODE_BIN" scripts/ensure-node.cjs
cmd="${1:?usage: run-next.sh dev|build|start [args...]}"
shift
exec "$NODE_BIN" ./node_modules/next/dist/bin/next "$cmd" "$@"
