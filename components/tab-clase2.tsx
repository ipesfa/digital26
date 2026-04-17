"use client"

import React from "react"
import Image from "next/image"

const GENIALLY_SRC = "https://view.genially.com/682c82cbb342df338363e997"

export function TabClase2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-primary/80 mb-2">Clase 2</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Cabildo 2.0</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
          Presentación interactiva: Año 2125 — Escuela Orbital Argentina.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-sm">
          <div className="relative w-full pb-[56.25%] pt-0 h-0">
            <iframe
              title="Año 2125 Escuela Orbital Argentina"
              className="absolute top-0 left-0 w-full h-full"
              src={GENIALLY_SRC}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <section className="w-full max-w-3xl mx-auto scroll-mt-8 pt-4">
        <div className="rounded-2xl border border-border/80 bg-card/50 px-6 py-8 sm:px-8 sm:py-10 space-y-6 text-foreground/90 leading-relaxed [&_p]:text-justify [&_li]:text-justify hyphens-auto">
          <h2 className="text-left text-xl sm:text-2xl font-bold text-violet-700 dark:text-violet-400">
            Consigna:
          </h2>
          <p>
            En grupos de 2 a 3 personas, deberán ponerse en el rol de docentes de un área curricular
            (Ej: Lengua, Matemática, Educación Artística, Formación Ética, etc.) y desarrollar una
            breve secuencia didáctica creativa para trabajar el 25 de mayo en un aula de nivel.
          </p>
          <div className="space-y-3 pt-1">
            <p className="text-left font-semibold text-foreground">
              <span aria-hidden className="mr-1.5">
                {"\u{1F9E9}"}
              </span>
              Incluí:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-violet-600 dark:marker:text-violet-400">
              <li>Nivel y curso al que está dirigida la secuencia</li>
              <li>Objetivo de aprendizaje</li>
              <li>Actividad o escena pedagógica concreta (en vínculo con la efeméride)</li>
              <li>Herramienta digital utilizada (Genially, video, Canva, etc.)</li>
              <li>
                Producto final (puede ser un video, mural, afiche interactivo, podcast, obra breve,
                infografía, etc.)
              </li>
              <li>Subir al Padlet colaborativo.</li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 border-border/60 max-w-xs mx-auto" />
      </section>

      <div className="w-full max-w-3xl mx-auto pt-2">
        <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden border border-border/80 bg-muted/30">
          <Image
            src="/argentina.jpg"
            alt="Argentina"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>
    </div>
  )
}
