"use client"

import { CodeTitle } from "@/components/code-title"
import { Lightbulb, Wrench, GraduationCap, Rocket } from "lucide-react"

export function TabInicio() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative py-16">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Docente a cargo — texto legible */}
        <p className="text-center text-sm sm:text-base text-foreground/80 mb-4">
          Docente a cargo: <span className="text-foreground font-medium">Prof. Leonardo Nausan</span>
        </p>

        {/* Code-style title */}
        <CodeTitle />

        {/* Cita sin caja */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="italic text-base sm:text-lg leading-relaxed text-foreground">
            «La generación Pulgarcita tendrá que reinventar una forma de vivir juntos, instituciones y formas de ser y conocer.»
          </p>
          <p className="mt-3 text-sm sm:text-base font-semibold text-primary">
            — Michel Serres
          </p>
          {/* Botón animado Comenzar el viaje */}
          <button
            type="button"
            className="btn-viaje group mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5 animate-bounce-slow group-hover:translate-y-[-2px] transition-transform duration-300" />
              <span>Comenzar el viaje</span>
            </span>
          </button>
        </div>
      </div>

      {/* Tres dimensiones — ancho completo de la página */}
      <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 text-left max-w-7xl mx-auto">
          {/* Dimensión conceptual */}
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-primary/30 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">Dimensión 1</span>
                <h3 className="mt-1 font-semibold text-foreground">Conceptual</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/90">
                  Vinculada con la comprensión de la alfabetización digital, la cultura digital,
                  la inteligencia artificial, la ciudadanía digital y los cambios en las prácticas
                  de enseñanza y aprendizaje.
                </p>
              </div>
            </div>
          </article>
          {/* Dimensión instrumental */}
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/80 to-primary/30 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">Dimensión 2</span>
                <h3 className="mt-1 font-semibold text-foreground">Instrumental</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/90">
                  Orientada a la exploración y apropiación de herramientas como Canva, Genially,
                  Padlet, Tally, Classroom, Kahoot, Notion, formularios interactivos, repositorios,
                  recursos audiovisuales y herramientas de IA generativa.
                </p>
              </div>
            </div>
          </article>
          {/* Dimensión pedagógica */}
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-primary/80 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">Dimensión 3</span>
                <h3 className="mt-1 font-semibold text-foreground">Pedagógica</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/90">
                  Centrada en la toma de decisiones sobre cómo, cuándo y para qué integrar estas
                  herramientas en propuestas reales de aula, con una clara intencionalidad didáctica.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
