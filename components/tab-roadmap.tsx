"use client"

const roadmaps = [
  {
    embedSrc:
      "https://www.canva.com/design/DAHKM8qIyf8/iAUvG20MeQDN-14BrwyfQA/watch?embed",
    link: "https://www.canva.com/design/DAHKM8qIyf8/iAUvG20MeQDN-14BrwyfQA/watch?utm_content=DAHKM8qIyf8&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    title: "ROAD MAP SECUENCIA DIDÁCTICA P1",
  },
  {
    embedSrc:
      "https://www.canva.com/design/DAHK_9zFj_M/dwgFOoDMmt1lGN5zET9xeA/watch?embed",
    link: "https://www.canva.com/design/DAHK_9zFj_M/dwgFOoDMmt1lGN5zET9xeA/watch?utm_content=DAHK_9zFj_M&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    title: "road map v2",
  },
] as const

export function TabRoadmap() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-primary/80 mb-2">Planificación</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Road Map</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
          Secuencia didáctica P1 — visualización interactiva.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-10">
        {roadmaps.map(({ embedSrc, link, title }) => (
          <div key={embedSrc}>
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-[0_2px_8px_0_rgba(63,69,81,0.16)] mt-[1.6em] mb-[0.9em] will-change-transform"
              style={{ paddingTop: "56.25%", height: 0 }}
            >
              <iframe
                loading="lazy"
                title={title}
                className="absolute top-0 left-0 w-full h-full border-0 p-0 m-0"
                src={embedSrc}
                allowFullScreen
                allow="fullscreen"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                {title}
              </a>{" "}
              de Leonardo Nausan
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
