#!/usr/bin/env bash
set -e

echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║   Pagamee Carousel Generator — Avvio rapido     ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# ── 1. Controlla Node.js ──────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  echo "⚠️  Node.js non trovato. Tentativo di installazione via Homebrew…"
  echo ""

  if ! command -v brew &>/dev/null; then
    echo "📦 Installo Homebrew…"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # Aggiungi brew al PATH (Apple Silicon)
    eval "$(/opt/homebrew/bin/brew shellenv)" 2>/dev/null || true
    # Aggiungi brew al PATH (Intel)
    eval "$(/usr/local/bin/brew shellenv)" 2>/dev/null || true
  fi

  echo "📦 Installo Node.js (LTS)…"
  brew install node
  echo ""
fi

NODE_VER=$(node --version)
NPM_VER=$(npm --version)
echo "✅  Node.js ${NODE_VER} · npm ${NPM_VER}"
echo ""

# ── 2. Installa dipendenze ────────────────────────────────────────────────────
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

if [ ! -d "node_modules" ]; then
  echo "📦 Installo dipendenze npm…"
  npm install
  echo ""
else
  echo "✅  node_modules già presenti"
fi

# ── 3. Avvia dev server ───────────────────────────────────────────────────────
echo ""
echo "🚀 Avvio http://localhost:5173 …"
echo ""
npm run dev
