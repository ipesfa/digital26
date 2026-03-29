#!/usr/bin/env bash
# Arranca Next sin depender del Node con el que se instaló pnpm: carga nvm/fnm y usa Node del proyecto (.nvmrc).
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  source "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
  nvm use 2>/dev/null || nvm use 20 2>/dev/null || true
fi

if command -v fnm &>/dev/null; then
  # shellcheck disable=SC2046
  eval "$(fnm env)"
  fnm use 2>/dev/null || true
fi

exec bash "$ROOT/scripts/run-next.sh" dev "$@"
