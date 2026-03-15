"use client"

export function TabAccion() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-8">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Acción: espacio colaborativo
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          En este Padlet vamos a construir, compartir recursos y registrar las producciones
          de la cursada. Podés sumar ideas, enlaces, capturas y reflexiones.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card/60 overflow-hidden">
        <div
          className="padlet-embed"
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 2,
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            background: "#F4F4F4",
          }}
        >
          <iframe
            src="https://padlet.com/embed/6rmub4mak330ap5m"
            frameBorder="0"
            allow="camera;microphone;geolocation;display-capture;clipboard-write"
            style={{ width: "100%", height: "80vh", minHeight: 720, display: "block", padding: 0, margin: 0 }}
          />
        </div>
      </div>
    </div>
  )
}
