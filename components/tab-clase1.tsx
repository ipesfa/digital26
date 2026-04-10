"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { GlowingButton } from "@/components/ui/glowing-button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TabContenidos } from "@/components/tab-contenidos"
import { TabResumen } from "@/components/tab-resumen"
import { TabActividades } from "@/components/tab-actividades"
import { TabCita } from "@/components/tab-cita"
import { TabBibliografiaPulgarcita } from "@/components/tab-bibliografia-pulgarcita"
import { cn } from "@/lib/utils"
import type { IconType } from "react-icons"
import {
  IoReaderOutline,
  IoLayersOutline,
  IoClipboardOutline,
  IoConstructOutline,
  IoChatbubblesOutline,
  IoLibraryOutline,
  IoChevronDown,
} from "react-icons/io5"

function InteractiveTextButton({
  label,
  text,
}: {
  label: string
  text: string
}) {
  const [show, setShow] = useState(false)
  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="text-sm font-medium text-primary hover:text-primary/90 underline underline-offset-2"
      >
        {label}
      </button>
      {show && (
        <p className="text-sm text-foreground/90 bg-card border border-border rounded-lg p-3 leading-relaxed">
          {text}
        </p>
      )}
    </div>
  )
}

const HERRAMIENTAS = [
  { letra: "P", nombre: "Padlet" },
  { letra: "C", nombre: "Canva" },
  { letra: "G", nombre: "Google Classroom" },
  { letra: "AI", nombre: "ChatGPT" },
  { letra: "G", nombre: "Genially" },
  { letra: "C", nombre: "CapCut" },
  { letra: "A", nombre: "Audacity" },
  { letra: "GD", nombre: "Google Drive" },
  { letra: "I", nombre: "Infod" },
  { letra: "S", nombre: "Social Media" },
]

const ESCENAS_IMAGENES = [
  { src: "/personalizacion.jpg", alt: "Pulgarcita en el aula" },
  { src: "/autonomo.jpg", alt: "Profe ChatGPT" },
  { src: "/colaboracion.jpg", alt: "Tutorial de YouTube a las 3 AM" },
] as const

const IA_CAROUSEL_IMAGES = [
  { src: "/01.jpeg", alt: "IA en el aula - imagen 1", label: "01" },
  { src: "/02.jpeg", alt: "IA en el aula - imagen 2", label: "02" },
  { src: "/03.jpeg", alt: "IA en el aula - imagen 3", label: "03" },
  { src: "/04.jpeg", alt: "IA en el aula - imagen 4", label: "04" },
] as const

function IACarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    queueMicrotask(() => setCurrent(api.selectedScrollSnap()))
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {IA_CAROUSEL_IMAGES.map((img, index) => (
            <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border/80 bg-muted/30">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <span className="absolute bottom-3 right-3 text-sm font-bold text-white/90 bg-black/50 px-2.5 py-1 rounded-md">
                  {img.label}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:-left-12 border-emerald-400 bg-background/90 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300" />
        <CarouselNext className="right-2 sm:-right-12 border-emerald-400 bg-background/90 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {IA_CAROUSEL_IMAGES.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
              current === index
                ? "bg-emerald-500 text-white"
                : "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
            }`}
            aria-label={`Ir a imagen ${img.label}`}
          >
            {img.label}
          </button>
        ))}
      </div>
    </div>
  )
}

const SUB_NAV: {
  value: string
  label: string
  Icon: IconType
  gradientFrom: string
  gradientTo: string
}[] = [
  { value: "overview", label: "Presentación", Icon: IoReaderOutline, gradientFrom: "#56CCF2", gradientTo: "#2F80ED" },
  { value: "contenidos", label: "Contenidos", Icon: IoLayersOutline, gradientFrom: "#a955ff", gradientTo: "#ea51ff" },
  { value: "resumen", label: "Resumen", Icon: IoClipboardOutline, gradientFrom: "#80FF72", gradientTo: "#7EE8FA" },
  { value: "actividades", label: "Actividades", Icon: IoConstructOutline, gradientFrom: "#FF9966", gradientTo: "#FF5E62" },
  { value: "cita", label: "Cita", Icon: IoChatbubblesOutline, gradientFrom: "#ffa9c6", gradientTo: "#f434e2" },
  { value: "bibliografia", label: "Bibliografía", Icon: IoLibraryOutline, gradientFrom: "#fbbf24", gradientTo: "#f59e0b" },
]

export function TabClase1() {
  const [subTab, setSubTab] = useState("overview")
  const [imageEnlarged, setImageEnlarged] = useState(false)
  const [enlargedSceneImage, setEnlargedSceneImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="space-y-8">
      <Tabs value={subTab} onValueChange={setSubTab}>
        {/* Mismo patrón que el header (SiteNav): icono → texto al hover / activo; scroll horizontal en móvil */}
        <TabsList
          className={cn(
            "flex h-auto w-full min-w-0 max-w-full flex-nowrap justify-start gap-3 sm:gap-4",
            "overflow-x-auto overflow-y-hidden scroll-smooth bg-transparent p-0 pb-2",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {SUB_NAV.map(({ value, label, Icon, gradientFrom, gradientTo }) => {
            const isActive = subTab === value
            return (
              <TabsTrigger
                key={value}
                value={value}
                style={
                  {
                    "--gradient-from": gradientFrom,
                    "--gradient-to": gradientTo,
                  } as React.CSSProperties
                }
                className={cn(
                  "relative flex h-[42px] flex-none shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full p-0",
                  "border-0 shadow-none outline-none transition-all duration-500",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  "data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=inactive]:bg-white data-[state=inactive]:dark:border-border data-[state=inactive]:dark:bg-card",
                  "group hover:shadow-none",
                  isActive
                    ? "w-[130px] sm:w-[150px] shadow-md data-[state=active]:bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]"
                    : "w-[42px] shadow-sm hover:w-[130px] sm:hover:w-[150px]",
                )}
              >
                {!isActive && (
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
                )}
                <span
                  className={cn(
                    "absolute top-[8px] inset-x-0 -z-10 h-full rounded-full blur-[14px]",
                    "bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]",
                    "transition-all duration-500",
                    isActive ? "opacity-40" : "opacity-0 group-hover:opacity-40",
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 text-xl transition-all duration-300",
                    isActive
                      ? "w-0 scale-0 overflow-hidden text-white"
                      : "scale-100 text-gray-500 group-hover:w-0 group-hover:scale-0 group-hover:overflow-hidden dark:text-muted-foreground",
                  )}
                >
                  <Icon aria-hidden />
                </span>
                <span
                  className={cn(
                    "absolute z-10 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 whitespace-nowrap",
                    isActive ? "scale-100" : "scale-0 delay-100 group-hover:scale-100",
                  )}
                >
                  {label}
                </span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <TabsContent value="overview" className="mt-6 focus-visible:outline-none">
          {/* Introducción */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary/80 mb-2">Clase Pulgarcita</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Pulgarcita, cultura digital e inteligencia artificial
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Un recorrido por la generación que reinventa cómo vivir, enseñar y aprender con tecnología.
            </p>
          </div>

          {/* Pulgarcita */}
          <section className="mb-20 scroll-mt-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
              <div className="space-y-6 lg:pt-[20%]">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700">Pulgarcita</h2>
                <blockquote className="border-l-4 border-cyan-400/60 pl-5 italic text-foreground/90 text-lg">
                  «La generación Pulgarcita tendrá que reinventar una forma de vivir juntos, instituciones y formas de ser y conocer.» — Michel Serres
                </blockquote>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/80">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4-LHiGq8QLI"
                    title="Entrevista a Michel Serres"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full min-h-[200px]"
                  />
                </div>
                <Collapsible className="w-full space-y-3">
                  <CollapsibleTrigger asChild>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 rounded-xl border border-cyan-200 dark:border-cyan-800/60 bg-cyan-50/90 dark:bg-cyan-950/30 px-4 py-3 text-left text-sm font-semibold text-cyan-900 dark:text-cyan-100 transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 data-[state=open]:border-cyan-300 dark:data-[state=open]:border-cyan-700 data-[state=open]:[&_svg]:rotate-180"
                    >
                      <span>Ideas clave de la reseña</span>
                      <IoChevronDown
                        className="h-5 w-5 shrink-0 transition-transform duration-200"
                        aria-hidden
                      />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="rounded-xl border border-border/80 bg-card/50 px-4 py-4 text-sm text-foreground/90 leading-relaxed space-y-5">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">
                        1. Cambió el sujeto que aprende
                      </h4>
                      <p>
                        «Pulgarcita» representa a una generación que aprende, se comunica y accede
                        al conocimiento de otra manera, porque vive inmersa en la cultura digital.
                        El saber ya no está solo en los libros, sino distribuido en la red y en
                        dispositivos.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">
                        2. La escuela no cambió al mismo ritmo
                      </h4>
                      <p>
                        La reseña marca que Serres cuestiona a las instituciones educativas porque
                        siguen respondiendo a modelos viejos, mientras los estudiantes ya habitan
                        otras formas de conocer, vincularse y producir sentido.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">
                        3. La tecnología sola no alcanza
                      </h4>
                      <p>
                        La autora de la reseña también critica a Serres: dice que no basta con
                        tener Internet o dispositivos para aprender mejor. Sigue siendo necesario
                        enseñar a pensar, a buscar, a interpretar y a aprender críticamente.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <GlowingButton
                  href="https://dialnet.unirioja.es/descarga/articulo/4903689.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  glowColor="#22d3ee"
                >
                  Lectura
                </GlowingButton>
              </div>
              <button
                type="button"
                onClick={() => setImageEnlarged(true)}
                className="relative w-full aspect-[4/5] max-h-[420px] lg:max-h-none rounded-2xl overflow-hidden border border-border/80 bg-muted/30 hover:border-cyan-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Ver imagen ampliada"
              >
                <Image
                  src="/la-tecnologia-revoluciona-la-comunicacion.jpg"
                  alt="La tecnología revoluciona la comunicación"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute bottom-2 right-2 text-xs font-medium text-foreground/70 bg-background/80 px-2 py-1 rounded">
                  Clic para agrandar
                </span>
              </button>
            </div>
            <Dialog open={imageEnlarged} onOpenChange={setImageEnlarged}>
              <DialogContent className="max-w-4xl p-2 overflow-hidden bg-background/95">
                <DialogTitle className="sr-only">La tecnología revoluciona la comunicación</DialogTitle>
                <div className="relative w-full max-h-[85vh] rounded-lg overflow-hidden">
                  <Image
                    src="/la-tecnologia-revoluciona-la-comunicacion.jpg"
                    alt="La tecnología revoluciona la comunicación (ampliada)"
                    width={1200}
                    height={900}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </section>

          {/* Aula en acción */}
          <section className="mb-20 scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-violet-700">Aula en acción</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed max-w-3xl mb-8">
              Nuestro curso se desarrolla a través de talleres prácticos donde el aprendizaje ocurre haciendo. Los estudiantes exploran, experimentan y reflexionan sobre el uso de tecnologías digitales en contextos educativos reales.
            </p>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/80">
                <Image src="/aula.jpg" alt="Aula en acción" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-violet-700 mb-4">Herramientas utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {HERRAMIENTAS.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full py-2 px-4 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/50 text-violet-700 dark:text-violet-300 text-sm"
                    >
                      <span className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-700 dark:text-violet-300 font-semibold text-xs">
                        {h.letra}
                      </span>
                      {h.nombre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* IA en el aula */}
          <section className="mb-20 scroll-mt-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700">IA en el aula</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed max-w-3xl mb-8">
              La inteligencia artificial está transformando la educación de maneras que apenas comenzamos a comprender. Desde asistentes virtuales hasta sistemas de aprendizaje adaptativo, la IA ofrece nuevas posibilidades para personalizar la experiencia educativa, pero también plantea importantes desafíos éticos y pedagógicos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/80">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/PDE9b5iU8vI"
                  title="Video YouTube - IA en el aula 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full min-h-[240px]"
                />
              </div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/80">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/j8VGP5pr9OQ"
                  title="Video YouTube - IA en el aula 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full min-h-[240px]"
                />
              </div>
            </div>
            <IACarousel />
            <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-950/30 p-6 lg:p-8 mb-8">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Actividad propuesta</h3>
              <p className="text-foreground/90 font-medium mb-4">«¿Texto humano o texto generado por IA?»</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-full text-xs font-medium border border-cyan-200 dark:border-cyan-800/50">
                  #EfectosDeLaTecnología
                </span>
                <span className="bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 px-3 py-1.5 rounded-full text-xs font-medium border border-violet-200 dark:border-violet-800/50">
                  #InteligenciaArtificial
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-800/50">
                  #EducaciónDigital
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <InteractiveTextButton
                  label="Mostrar texto 1"
                  text="La tecnología me ayuda mucho a estudiar, sobre todo YouTube y Google. Pero a veces me distrae demasiado. Siento que aprendo más cuando hago cosas con otros, como en grupo."
                />
                <InteractiveTextButton
                  label="Mostrar texto 2"
                  text="La tecnología representa una oportunidad transformadora en la educación, pero también exige responsabilidad. Los entornos colaborativos digitales permiten nuevas formas de construir saberes, aunque deben estar guiados por una pedagogía crítica."
                />
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-emerald-400 bg-muted/40 pl-5 py-4 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">Preguntas para reflexionar</h3>
              <ul className="space-y-2 text-foreground/90">
                <li>• ¿En qué situaciones de su vida académica o personal ya usaron o vieron usar IA?</li>
                <li>• ¿Qué oportunidades abre la IA para docentes y estudiantes? ¿Qué riesgos o desafíos plantea?</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-4xl aspect-[16/5] rounded-2xl overflow-hidden border border-border/80">
                  <Image src="/chat.jpeg" alt="Chat - interfaz de conversación" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-4">Para profundizar</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <GlowingButton
                  href="https://gemini.google.com/app?android-min-version=301356232&ios-min-version=322.0&is_sa=1&hl=es_419&utm_campaign=microsite_gemini_image_generation_page&icid=microsite_gemini_image_generation_page&utm_source=gemini&utm_medium=web&_gl=1*p95nzo*_gcl_au*MTU1NDQyOTk1NS4xNzc0NjMxMTE5*_ga*ODIxMjI3MTIuMTc0Nzc0MTI3MQ..*_ga_WC57KJ50ZZ*czE3NzQ2MzExMjAkbzUkZzAkdDE3NzQ2MzExMjAkajYwJGwwJGgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  glowColor="#4ade80"
                >
                  Nano Banana
                </GlowingButton>
                <GlowingButton
                  href="https://www.datalytics.com/blog/que-es-la-ia-generativa-y-como-funciona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  glowColor="#94a3b8"
                >
                  Ver artículo completo
                </GlowingButton>
              </div>
              <ul className="list-none space-y-2 text-foreground/90">
                <li className="flex gap-2"><span className="text-emerald-700">·</span> ¿Qué es una IA generativa? <span className="text-muted-foreground">(texto, imagen, código, audio)</span></li>
                <li className="flex gap-2"><span className="text-emerald-700">·</span> ¿Cómo se usa hoy en educación? <span className="text-muted-foreground">(asistentes, corrección, generación de recursos, personalización del aprendizaje)</span></li>
                <li className="flex gap-2"><span className="text-emerald-700">·</span> ¿Qué preguntas éticas se abren? <span className="text-muted-foreground">(plagio, sesgo, dependencia tecnológica)</span></li>
              </ul>
            </div>
          </section>

          {/* Escenas de aprendizaje */}
          <section className="scroll-mt-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-800">Escenas de aprendizaje</h2>
            </div>
            <p className="text-foreground/80 max-w-2xl mb-8">
              Tres escenas para pensar la atención, la autoría y el aprendizaje en la era digital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="rounded-2xl border border-border/80 overflow-hidden hover:border-amber-500/30 transition-colors">
                <button
                  type="button"
                  onClick={() => setEnlargedSceneImage(ESCENAS_IMAGENES[0])}
                  className="relative aspect-video w-full block focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Ver imagen ampliada"
                >
                  <Image src={ESCENAS_IMAGENES[0].src} alt={ESCENAS_IMAGENES[0].alt} fill className="object-cover" />
                  <span className="absolute bottom-2 right-2 text-xs font-medium text-foreground/70 bg-background/80 px-2 py-1 rounded">
                    Clic para agrandar
                  </span>
                </button>
                <div className="p-5 bg-muted/40">
                  <span className="text-xs font-semibold text-amber-700">Escena 1</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">Pulgarcita en el aula</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Una adolescente entra a clase mientras responde mensajes de voz, mira TikTok y chatea en Discord. El profesor habla de las funciones del lenguaje. Ella está, pero no está. ¿Aprende? ¿Desaprende? ¿Qué tipo de atención circula?
                  </p>
                </div>
              </article>
              <article className="rounded-2xl border border-border/80 overflow-hidden hover:border-amber-500/30 transition-colors">
                <button
                  type="button"
                  onClick={() => setEnlargedSceneImage(ESCENAS_IMAGENES[1])}
                  className="relative aspect-video w-full block focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Ver imagen ampliada"
                >
                  <Image src={ESCENAS_IMAGENES[1].src} alt={ESCENAS_IMAGENES[1].alt} fill className="object-cover" />
                  <span className="absolute bottom-2 right-2 text-xs font-medium text-foreground/70 bg-background/80 px-2 py-1 rounded">
                    Clic para agrandar
                  </span>
                </button>
                <div className="p-5 bg-muted/40">
                  <span className="text-xs font-semibold text-amber-700">Escena 2</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">Profe ChatGPT</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Un estudiante entrega un trabajo brillante, pero el docente duda. «¿Lo hiciste vos?». El alumno responde: «Lo armé con IA, pero aprendí mucho igual». ¿Hubo trampa o hubo proceso? ¿Qué vale más: el resultado o el trayecto?
                  </p>
                </div>
              </article>
              <article className="rounded-2xl border border-border/80 overflow-hidden hover:border-amber-500/30 transition-colors">
                <button
                  type="button"
                  onClick={() => setEnlargedSceneImage(ESCENAS_IMAGENES[2])}
                  className="relative aspect-video w-full block focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Ver imagen ampliada"
                >
                  <Image src={ESCENAS_IMAGENES[2].src} alt={ESCENAS_IMAGENES[2].alt} fill className="object-cover" />
                  <span className="absolute bottom-2 right-2 text-xs font-medium text-foreground/70 bg-background/80 px-2 py-1 rounded">
                    Clic para agrandar
                  </span>
                </button>
                <div className="p-5 bg-muted/40">
                  <span className="text-xs font-semibold text-amber-700">Escena 3</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">Tutorial de YouTube a las 3 AM</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Un joven que no entiende matemáticas encuentra a la madrugada un canal que explica con memes y ejemplos. Por primera vez, resuelve un ejercicio solo. ¿Esa escena cuenta como aprendizaje?
                  </p>
                </div>
              </article>
              <div className="md:col-span-3 rounded-2xl border-2 border-amber-300 dark:border-amber-700/50 bg-amber-500/10 dark:bg-amber-900/20 p-6 lg:p-8 text-center">
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">Nuestra Escena</h3>
                <p className="text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Relaten, creen o reconstruyan una escena significativa. Puede ser con texto, collage, video, podcast, memes, etc.
                </p>
              </div>
            </div>
            <Dialog open={!!enlargedSceneImage} onOpenChange={(open) => !open && setEnlargedSceneImage(null)}>
              <DialogContent className="max-w-4xl p-2 overflow-hidden bg-background/95">
                <DialogTitle className="sr-only">{enlargedSceneImage?.alt}</DialogTitle>
                {enlargedSceneImage && (
                  <div className="relative w-full max-h-[85vh] rounded-lg overflow-hidden">
                    <Image
                      src={enlargedSceneImage.src}
                      alt={`${enlargedSceneImage.alt} (ampliada)`}
                      width={1200}
                      height={675}
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </section>
        </TabsContent>

        <TabsContent value="contenidos" className="mt-6 focus-visible:outline-none">
          <TabContenidos />
        </TabsContent>

        <TabsContent value="resumen" className="mt-6 focus-visible:outline-none">
          <TabResumen />
        </TabsContent>

        <TabsContent value="actividades" className="mt-6 focus-visible:outline-none">
          <TabActividades />
        </TabsContent>

        <TabsContent value="cita" className="mt-6 focus-visible:outline-none">
          <TabCita />
        </TabsContent>

        <TabsContent value="bibliografia" className="mt-6 focus-visible:outline-none">
          <TabBibliografiaPulgarcita />
        </TabsContent>

      </Tabs>
    </div>
  )
}
