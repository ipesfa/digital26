"use client"

import React from "react"
import { cn } from "@/lib/utils"

const SECUENCIA_PASOS = [
  {
    num: 1,
    title: "Fundamentos Conceptuales",
    subtitle: "Documento Base: Alfabetización Digital",
    body:
      "Este documento presenta el marco teórico y conceptual de la alfabetización digital: qué implica hoy, qué tensiones atraviesa la escuela y cómo ese marco ofrece una base para interpretar la transformación educativa en la era digital.",
    linkHref: "https://drive.google.com/file/d/1yAQjiDDmAE35YzDvWsxIWVN1av5c5t-s/view",
    linkLabel: "Abrir documento",
  },
  {
    num: 2,
    title: "Implementación Práctica",
    subtitle: "Guía de Implementación: Herramientas Digitales",
    body:
      "Esta guía recorre la implementación práctica de la alfabetización digital con estrategias y herramientas situadas en el aula, incluyendo un enfoque de gamificación digital en educación secundaria, con ejemplos y casos que sirven como modelo para diseñar secuencias propias.",
    linkHref: "https://drive.google.com/file/d/1NGG_K6NrZsSeoz-mCJqrqxmjvSN7OlOb/view",
    linkLabel: "Abrir documento",
  },
  {
    num: 3,
    title: "Perspectiva Global y Futuro",
    subtitle: "UNESCO: Inteligencia Artificial en la Educación",
    body:
      "Una visión global sobre el futuro de la educación digital y el papel de la inteligencia artificial, proporcionando un marco para entender los desafíos y oportunidades emergentes.",
    linkHref: "https://www.unesco.org/es/digital-education/artificial-intelligence",
    linkLabel: "Abrir enlace",
  },
] as const

const OBJETIVOS = [
  "Comprender los fundamentos teóricos de la alfabetización digital",
  "Adquirir herramientas prácticas para la implementación en el aula",
  "Reflexionar sobre el futuro de la educación en la era digital",
] as const

const REF_LIBROS = [
  "Serres, M. (2013). Pulgarcita. Fondo de Cultura Económica.",
  "Buckingham, D. (2019). The Media Education Manifesto. Polity Press.",
  "Jenkins, H. (2009). Confronting the Challenges of Participatory Culture. MIT Press.",
] as const

const REF_ARTICULOS = [
  `Selwyn, N. (2019). "What's the problem with learning analytics?". Journal of Learning Analytics, 6(3), 11-19.`,
  `Livingstone, S. (2018). "iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious". Journal of Children and Media, 12(1), 118-123.`,
] as const

const REF_DIGITAL: { id: string; text: string; href?: string }[] = [
  {
    id: "unesco-futures",
    text: 'UNESCO. (2021). "Reimagining our futures together: A new social contract for education"',
    href: "https://unesdoc.unesco.org/ark:/48223/pf0000377074",
  },
  {
    id: "oecd-future",
    text: 'OECD. (2021). "Back to the Future of Education"',
    href: "https://www.oecd.org/en/publications/back-to-the-future-of-education_9789264297636.html",
  },
]

const REF_VIDEOS: { id: string; text: string; href: string }[] = [
  {
    id: "serres-pulgarcita",
    text: 'Serres, M. (2013). "Pulgarcita: La generación que reinventará el mundo"',
    href: "https://www.youtube.com/watch?v=4-LHiGq8QLI",
  },
  {
    id: "tedx-ia",
    text: 'TEDx Talks. (2018). "¿Qué es la IA generativa? – EducaIA"',
    href: "https://www.youtube.com/watch?v=br9b3-cxTPQ",
  },
]

function pasoCardGradient(num: number) {
  if (num === 1) {
    return "from-sky-500/15 to-blue-500/10 border-sky-200/70 dark:border-sky-800/50"
  }
  if (num === 2) {
    return "from-violet-500/15 to-purple-500/10 border-violet-200/70 dark:border-violet-800/50"
  }
  return "from-amber-500/15 to-orange-500/10 border-amber-200/70 dark:border-amber-800/50"
}

function pasoTitleColor(num: number) {
  if (num === 1) {
    return "text-sky-800 dark:text-sky-300"
  }
  if (num === 2) {
    return "text-violet-800 dark:text-violet-300"
  }
  return "text-amber-900 dark:text-amber-300"
}

function RefBlock({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-foreground border-b border-border/80 pb-2">
        {heading}
      </h3>
      <ul className="space-y-2.5 text-sm sm:text-base text-foreground/90 leading-relaxed pl-1">
        {items.map((line, i) => (
          <li key={`${heading}-${i}`} className="flex gap-2">
            <span className="text-primary shrink-0" aria-hidden>
              ·
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RefBlockLinks({
  heading,
  items,
}: {
  heading: string
  items: readonly { id: string; text: string; href?: string }[]
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-foreground border-b border-border/80 pb-2">
        {heading}
      </h3>
      <ul className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed pl-1">
        {items.map((item) => (
          <li key={item.id} className="flex gap-2">
            <span className="text-primary shrink-0" aria-hidden>
              ·
            </span>
            <span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/90"
                >
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TabBibliografiaSecuencia() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-8">
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">Bibliografía</h1>
        <p className="text-foreground/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Marco de la secuencia, documentos de apoyo y referencias para profundizar la formación.
        </p>
      </header>

      <section className="space-y-6" aria-labelledby="secuencia-titulo">
        <h2
          id="secuencia-titulo"
          className="text-2xl sm:text-3xl font-bold text-foreground border-b border-border pb-3"
        >
          Documentos de la secuencia
        </h2>
        <div className="space-y-5">
          {SECUENCIA_PASOS.map((paso) => (
            <article
              key={paso.num}
              className={cn(
                "rounded-2xl border bg-linear-to-br bg-card/40 px-6 py-6 sm:px-8 sm:py-7",
                pasoCardGradient(paso.num),
              )}
            >
              <div className="flex flex-wrap items-baseline gap-2 gap-x-3 mb-3">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-background/80 border border-border text-sm font-bold text-primary">
                  {paso.num}
                </span>
                <h3 className={cn("text-lg sm:text-xl font-bold", pasoTitleColor(paso.num))}>
                  {paso.title}
                </h3>
              </div>
              <p className="text-sm font-semibold text-foreground/90 mb-2">{paso.subtitle}</p>
              <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">{paso.body}</p>
              <p className="mt-4">
                <a
                  href={paso.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/90"
                >
                  {paso.linkLabel}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-2xl border border-border/80 bg-card/50 px-6 py-8 sm:px-8"
        aria-labelledby="objetivos-titulo"
      >
        <h2
          id="objetivos-titulo"
          className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-5"
        >
          Objetivos de la Secuencia
        </h2>
        <ul className="space-y-3 text-foreground/90 leading-relaxed">
          {OBJETIVOS.map((obj) => (
            <li key={obj} className="flex gap-3">
              <span className="text-violet-600 dark:text-violet-400 font-semibold shrink-0">✓</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-8" aria-labelledby="refs-adicionales">
        <h2
          id="refs-adicionales"
          className="text-2xl sm:text-3xl font-bold text-foreground border-b border-border pb-3"
        >
          Referencias Bibliográficas Adicionales
        </h2>
        <div className="space-y-8 pl-0 sm:pl-1">
          <RefBlock heading="Libros" items={REF_LIBROS} />
          <RefBlock heading="Artículos" items={REF_ARTICULOS} />
          <RefBlockLinks heading="Recursos Digitales" items={REF_DIGITAL} />
          <RefBlockLinks heading="Videos" items={REF_VIDEOS} />
        </div>
      </section>
    </div>
  )
}
