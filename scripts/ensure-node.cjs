/* Fail fast if the shell is not using Node 20+ (Next.js 16 requirement). */
const major = Number(process.version.slice(1).split(".")[0])
const minor = Number(process.version.slice(1).split(".")[1])
const ok = major > 20 || (major === 20 && minor >= 9)
if (!ok) {
  console.error(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Se requiere Node.js >= 20.9 (Next.js 16). Ahora: ${process.version}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Volta suele poner Node 18 *antes* que Homebrew en PATH: el primer "node" es v18.
  run-next.sh debería elegir otro node del PATH si hay v20; si seguís viendo esto,
  no hay ningún Node >= 20 en el PATH de este proceso (instalá node@20 o reordená PATH).

  Arreglo recomendado: con Homebrew Node 20 en el PATH antes que ~/.volta/bin, o:
    corepack enable && corepack prepare pnpm@10 --activate

`)
  process.exit(1)
}
