/* Fail fast if the shell is not using Node 20+ (Next.js 16 requirement). */
const major = Number(process.version.slice(1).split(".")[0])
const minor = Number(process.version.slice(1).split(".")[1])
const ok = major > 20 || (major === 20 && minor >= 9)
if (!ok) {
  console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Se requiere Node.js >= 20.9 (Next.js 16). Ahora: ${process.version}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Suele pasar: en otra terminal ves v20, pero ESTA sigue con v18 en el PATH
  (Cursor/VS Code a veces no carga nvm/fnm hasta que abrís una shell nueva).

  Opción rápida (carga nvm/fnm y arranca Next):
    pnpm run dev:sh

  O en ESTA misma terminal, antes de pnpm dev:
    source ~/.zshrc
    nvm use        # o: fnm use
    node -v        # debe ser v20.x
    pnpm dev

  En el repo está Node 20 en .nvmrc / .node-version.

`)
  process.exit(1)
}
