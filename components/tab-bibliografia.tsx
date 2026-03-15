"use client"

import { BookOpen, ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const references = [
  {
    id: "serres",
    author: "Michel Serres",
    title: "Pulgarcita",
    description: "Ensayo sobre las transformaciones cognitivas y culturales de las nuevas generaciones en la era digital. Serres reflexiona sobre cómo los jóvenes han desarrollado nuevas formas de pensar, aprender y relacionarse con el conocimiento.",
    year: "2013",
  },
  {
    id: "cultura",
    author: "Cultura Digital",
    title: "Conceptos fundamentales",
    description: "Marco teórico sobre las prácticas culturales mediadas por tecnologías digitales, incluyendo la producción, circulación y consumo de contenidos en entornos virtuales.",
    year: "-",
  },
  {
    id: "ia",
    author: "Inteligencia Artificial en Educación",
    title: "Perspectivas y aplicaciones",
    description: "Aproximaciones al uso de herramientas de IA generativa en contextos educativos, con énfasis en su potencial transformador y los desafíos éticos que plantean.",
    year: "2024",
  },
]

export function TabBibliografia() {
  return (
    <div className="py-8">
      <div className="max-w-3xl">
        <div className="space-y-6 mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            Referencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Bibliografía
          </h2>
          <p className="text-muted-foreground">
            Autores y conceptos de referencia para la Clase Pulgarcita
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {references.map((ref) => (
            <AccordionItem
              key={ref.id}
              value={ref.id}
              className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-all"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {ref.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {ref.title} {ref.year !== "-" && `(${ref.year})`}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="pl-16">
                  <p className="text-muted-foreground leading-relaxed">
                    {ref.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Ver más información
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
