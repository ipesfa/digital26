"use client"

import { motion } from "framer-motion"
import { CodeTitle } from "@/components/code-title"
import { Lightbulb, Wrench, GraduationCap, Rocket } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GlowingButton } from "@/components/ui/glowing-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const TOOLS = ["Canva", "Genially", "Padlet", "Tally", "Classroom", "Kahoot", "Notion", "CapCut", "ChatGPT"]

const DIM_COLORS = {
  conceptual:   { border: "#7c3aed", badgeClass: "bg-violet-100 dark:bg-violet-900/25 text-violet-700 dark:text-violet-400 border-violet-300/60 dark:border-violet-700/40" },
  instrumental: { border: "#059669", badgeClass: "bg-emerald-100 dark:bg-emerald-900/25 text-emerald-700 dark:text-emerald-400 border-emerald-300/60 dark:border-emerald-700/40" },
  pedagogica:   { border: "#ea580c", badgeClass: "bg-orange-100 dark:bg-orange-900/25 text-orange-700 dark:text-orange-400 border-orange-300/60 dark:border-orange-700/40" },
}

export function TabInicio() {
  return (
    <div className="min-h-[70vh] flex flex-col py-16">
      {/* Hero */}
      <div className="w-full section-flow">
        <p className="text-center text-sm sm:text-base text-foreground/80 mb-6">
          Docente a cargo: <span className="text-foreground font-medium">Prof. Leonardo Nausan</span>
        </p>
        <CodeTitle />

        {/* Cita + CTA */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="italic text-base sm:text-lg leading-relaxed text-foreground/90">
            «La generación Pulgarcita tendrá que reinventar una forma de vivir juntos, instituciones y formas de ser y conocer.»
          </p>
          <p className="mt-4 text-sm font-semibold text-primary">— Michel Serres</p>
          <div className="mt-12 flex justify-center">
            <GlowingButton glowColor="#7c3aed" className="!h-12 !px-8 text-base font-semibold gap-2 rounded-xl">
              <Rocket className="w-5 h-5 animate-bounce-slow" />
              <span>Comenzar el viaje</span>
            </GlowingButton>
          </div>
        </div>
      </div>

      {/* Tres dimensiones */}
      <div className="w-full mt-20 section-flow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto">

          {/* ── Dimensión Conceptual ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          >
            <Card
              className="group h-full transition-all duration-300 hover:shadow-lg"
              style={{ borderTopColor: DIM_COLORS.conceptual.border, borderTopWidth: 3 }}
            >
              <CardHeader className="pb-3 items-center text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border mb-3 transition-transform duration-300 group-hover:scale-105 ${DIM_COLORS.conceptual.badgeClass}`}>
                  <Lightbulb className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 1</span>
                <CardTitle className="text-xl">Conceptual</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                  Vinculada con la comprensión de la alfabetización digital, la cultura digital,
                  la inteligencia artificial, la ciudadanía digital y los cambios en las prácticas
                  de enseñanza y aprendizaje.
                </CardDescription>
                <Accordion type="single" collapsible className="text-left">
                  <AccordionItem value="concepto-1" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      1. Qué significa alfabetizar hoy
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      Ya no solo leer y escribir en papel, sino interpretar, seleccionar, producir,
                      combinar formatos y leer críticamente entornos digitales.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="concepto-2" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      2. Qué cambió en la cultura digital
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      Cambian los tiempos, la atención, la circulación de la información,
                      la autoría y la forma de construir verdad.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="concepto-3" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      3. Qué trae la IA a la escuela
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      La IA entra no solo como recurso, sino como problema pedagógico:
                      autoría, evaluación, búsqueda, creación y sesgos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="concepto-4" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      4. Qué implica ciudadanía digital
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      No alcanza con saber usar redes o apps; hay que pensar convivencia,
                      responsabilidad, exposición, privacidad y criterio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="concepto-5" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      5. Qué cambia en la enseñanza
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      Si cambia el modo de conocer, también cambian las decisiones del docente.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Dimensión Instrumental ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14, ease: "easeOut" }}
          >
            <Card
              className="group h-full transition-all duration-300 hover:shadow-lg"
              style={{ borderTopColor: DIM_COLORS.instrumental.border, borderTopWidth: 3 }}
            >
              <CardHeader className="pb-3 items-center text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border mb-3 transition-transform duration-300 group-hover:scale-105 ${DIM_COLORS.instrumental.badgeClass}`}>
                  <Wrench className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 2</span>
                <CardTitle className="text-xl">Instrumental</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed mb-5">
                  Orientada a la exploración y apropiación de herramientas como Canva, Genially,
                  Padlet, Tally, Classroom, Kahoot, Notion, formularios interactivos, repositorios,
                  recursos audiovisuales y herramientas de IA generativa.
                </CardDescription>
                <div className="grid grid-cols-3 gap-2">
                  {TOOLS.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center justify-center rounded-lg border border-border bg-muted/60 px-2 py-2.5 text-center text-xs font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Dimensión Pedagógica ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.23, ease: "easeOut" }}
          >
            <Card
              className="group h-full transition-all duration-300 hover:shadow-lg"
              style={{ borderTopColor: DIM_COLORS.pedagogica.border, borderTopWidth: 3 }}
            >
              <CardHeader className="pb-3 items-center text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border mb-3 transition-transform duration-300 group-hover:scale-105 ${DIM_COLORS.pedagogica.badgeClass}`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-primary/80">Dimensión 3</span>
                <CardTitle className="text-xl">Pedagógica</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                  Centrada en la toma de decisiones sobre cómo, cuándo y para qué integrar estas
                  herramientas en propuestas reales de aula, con una clara intencionalidad didáctica.
                </CardDescription>
                <Accordion type="single" collapsible className="text-left">
                  <AccordionItem value="pedagogica-1" className="border-border/60">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground/90 hover:no-underline">
                      Qué habilita didácticamente
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base leading-relaxed text-foreground/75">
                      <p className="mb-3">Esta dimensión permite hacer preguntas muy formativas:</p>
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
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
