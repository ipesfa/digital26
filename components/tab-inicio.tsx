"use client"

import { CodeTitle } from "@/components/code-title"
import { Lightbulb, Wrench, GraduationCap, Rocket } from "lucide-react"

export function TabInicio() {
  return (
    <div className="min-h-[70vh] flex flex-col py-16">
      {/* Hero */}
      <div className="w-full section-flow">
        <p className="text-center text-sm sm:text-base text-foreground/80 mb-6">
          Docente a cargo: <span className="text-foreground font-medium">Prof. Leonardo Nausan</span>
        </p>
        <CodeTitle />

        {/* Cita integrada en el flujo */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="italic text-base sm:text-lg leading-relaxed text-foreground/95">
            «La generación Pulgarcita tendrá que reinventar una forma de vivir juntos, instituciones y formas de ser y conocer.»
          </p>
          <p className="mt-4 text-sm font-semibold text-primary/90">— Michel Serres</p>
          <button
            type="button"
            className="btn-viaje group mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5 animate-bounce-slow group-hover:translate-y-[-2px] transition-transform duration-300" />
              <span>Comenzar el viaje</span>
            </span>
          </button>
        </div>
      </div>

      {/* Tres dimensiones */}
      <div className="w-full mt-20 section-flow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {/* Conceptual */}
          <article className="group relative flex flex-col items-center text-center rounded-3xl border border-border/40 bg-transparent p-6 lg:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-4 group-hover:bg-primary/25 transition-colors shape-blob">
                <Lightbulb className="h-7 w-7" />
              </div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 1</span>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Conceptual</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              Vinculada con la comprensión de la alfabetización digital, la cultura digital,
              la inteligencia artificial, la ciudadanía digital y los cambios en las prácticas
              de enseñanza y aprendizaje.
            </p>
          </article>

          {/* Instrumental */}
          <article className="group relative flex flex-col items-center text-center rounded-3xl border border-border/40 bg-transparent p-6 lg:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-4 group-hover:bg-primary/25 transition-colors shape-blob">
              <Wrench className="h-7 w-7" />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 2</span>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Instrumental</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              Orientada a la exploración y apropiación de herramientas como Canva, Genially,
              Padlet, Tally, Classroom, Kahoot, Notion, formularios interactivos, repositorios,
              recursos audiovisuales y herramientas de IA generativa.
            </p>
          </article>

          {/* Pedagógica */}
          <article className="group relative flex flex-col items-center text-center rounded-3xl border border-border/40 bg-transparent p-6 lg:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-4 group-hover:bg-primary/25 transition-colors shape-blob">
              <GraduationCap className="h-7 w-7" />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 3</span>
            <h3 className="mt-2 text-xl font-semibold text-foreground">Pedagógica</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              Centrada en la toma de decisiones sobre cómo, cuándo y para qué integrar estas
              herramientas en propuestas reales de aula, con una clara intencionalidad didáctica.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
