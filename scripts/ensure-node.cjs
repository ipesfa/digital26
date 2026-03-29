/* Fail fast if the shell is not using Node 20+ (Next.js 16 requirement). */
const major = Number(process.version.slice(1).split(".")[0])
const minor = Number(process.version.slice(1).split(".")[1])
const ok = major > 20 || (major === 20 && minor >= 9)
if (!ok) {
  console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Se requiere Node.js >= 20.9 (Next.js 16). Ahora: ${process.version}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  En el repo ya está fijado Node 20 (.nvmrc y .node-version).

  • nvm:   nvm install 20 && nvm use
  • fnm:   fnm install && fnm use
  • Volta: volta install node@20

  Comprueba: node -v   → debe ser v20.x o superior

`)
  process.exit(1)
}
