/* Fail fast if the shell is not using Node 20+ (Next.js 16 requirement). */
const major = Number(process.version.slice(1).split(".")[0])
const minor = Number(process.version.slice(1).split(".")[1])
const ok = major > 20 || (major === 20 && minor >= 9)
if (!ok) {
  console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Se requiere Node.js >= 20.9 (Next.js 16). Ahora: ${process.version}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Si "node -v" ya dice v20 pero esto falla: pnpm (Volta/Corepack) suele ejecutar
  scripts con OTRO Node (v18). Los scripts "dev/build/start" del repo ya usan
  el "node" del PATH vía bash; probá de nuevo:  pnpm dev

  Sin nvm:  pnpm run dev:sh   (carga fnm si existe y arranca Next)

  Arreglo definitivo del gestor de paquetes (con Node 20 activo):
    corepack enable && corepack prepare pnpm@10 --activate
    (o reinstalar pnpm global con Node 20)

  En el repo: Node 20 en .nvmrc / .node-version.

`)
  process.exit(1)
}
