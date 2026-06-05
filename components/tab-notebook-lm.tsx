"use client"

/** Página pública de Notion (mismo workspace que Repositorio) */
const NOTION_NOTEBOOK_LM_SRC =
  "https://coherent-sycamore-5c5.notion.site/ebd/aa73a06601804b2181a7205d5b1eff41?v=9358f9758e23445f98b9e0526187ebcd"

export function TabNotebookLm() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Notebook LM
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          Recursos y notas del espacio Notebook LM en Notion.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <iframe
          title="Notebook LM — Notion"
          src={NOTION_NOTEBOOK_LM_SRC}
          className="block w-full border-0"
          style={{ width: "100%", height: "80vh", minHeight: 720, display: "block" }}
          allowFullScreen
        />
      </div>
    </div>
  )
}
