"use client"

import { CodeTitle } from "@/components/code-title"
import { Lightbulb, Wrench, GraduationCap, Rocket } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
            <Accordion type="single" collapsible className="mt-4 w-full text-left">
              <AccordionItem value="concepto-1" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  1. Qué significa alfabetizar hoy
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  Ya no solo leer y escribir en papel, sino interpretar, seleccionar, producir,
                  combinar formatos y leer críticamente entornos digitales.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="concepto-2" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  2. Qué cambió en la cultura digital
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  Cambian los tiempos, la atención, la circulación de la información,
                  la autoría y la forma de construir verdad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="concepto-3" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  3. Qué trae la IA a la escuela
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  La IA entra no solo como recurso, sino como problema pedagógico:
                  autoría, evaluación, búsqueda, creación y sesgos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="concepto-4" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  4. Qué implica ciudadanía digital
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  No alcanza con saber usar redes o apps; hay que pensar convivencia,
                  responsabilidad, exposición, privacidad y criterio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="concepto-5" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  5. Qué cambia en la enseñanza
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  Si cambia el modo de conocer, también cambian las decisiones del docente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            <button
              type="button"
              className="mt-6 w-full aspect-square inline-flex items-center justify-center rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent hover:from-primary/30 hover:via-primary/15 hover:border-primary/60 transition-all duration-300"
              aria-label="Explorar herramientas"
            >
              <span aria-hidden className="text-5xl sm:text-6xl drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">🛠️</span>
            </button>
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
            <Accordion type="single" collapsible className="mt-4 w-full text-left">
              <AccordionItem value="pedagogica-1" className="border-border/40">
                <AccordionTrigger className="text-sm sm:text-base text-foreground/95 hover:no-underline">
                  Qué habilita didácticamente
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  <p className="mb-3">Esta parte permite hacer preguntas muy formativas:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>¿Qué herramienta sirve para este contenido?</li>
                    <li>¿Qué experiencia quiero provocar?</li>
                    <li>¿Cómo cambia la consigna si uso IA?</li>
                    <li>¿Cuándo una herramienta aporta y cuándo distrae?</li>
                    <li>¿Qué evaluación tendría sentido en ese entorno?</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </div>
      </div>
    </div>
  )
}
