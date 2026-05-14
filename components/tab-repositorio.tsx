"use client"

/** URL pública de Notion (normalizada: una sola barra tras `ebd/`) */
const NOTION_REPOSITORIO_SRC =
  "https://coherent-sycamore-5c5.notion.site/ebd/f8973092979782f3bb1401dc53ab0088"

export function TabRepositorio() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Repositorio
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          Recursos y contenidos del espacio curricular en Notion.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <iframe
          title="Repositorio — Notion"
          src={NOTION_REPOSITORIO_SRC}
          className="block w-full border-0"
          style={{ width: "100%", height: "80vh", minHeight: 720, display: "block" }}
          allowFullScreen
        />
      </div>
    </div>
  )
}
