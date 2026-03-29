"use client"

export function TabRanking() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Ranking de insignias 🏆
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          Seguimiento en tiempo real del ranking de insignias del curso.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <iframe
          src="https://coherent-sycamore-5c5.notion.site/ebd//4f18245c26254979a786f31b157c925c?v=3f806c6bd3694e41b008737181c22411"
          width="100%"
          frameBorder="0"
          allowFullScreen
          style={{ width: "100%", height: "80vh", minHeight: 720, display: "block" }}
          title="Ranking de insignias"
        />
      </div>
    </div>
  )
}
