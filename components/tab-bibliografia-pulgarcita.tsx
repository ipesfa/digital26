"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GlowingButton } from "@/components/ui/glowing-button"

const REFERENCIAS = [
  {
    titulo: "Lectura / reseña (PDF)",
    descripcion: "Artículo en Dialnet para la lectura obligatoria de la clase.",
    href: "https://dialnet.unirioja.es/descarga/articulo/4903689.pdf",
    icon: FileText,
    border: "#0891b2",
    badgeClass: "bg-cyan-100 dark:bg-cyan-900/25 text-cyan-700 dark:text-cyan-400 border-cyan-300/60 dark:border-cyan-700/40",
    glowColor: "#06b6d4",
    label: "Abrir PDF",
  },
  {
    titulo: "¿Qué es la IA generativa y cómo funciona?",
    descripcion: "Artículo de Lovelytics sobre IA generativa y su funcionamiento.",
    href: "https://lovelytics.com/es/post/que-es-la-ia-generativa-y-como-funciona/",
    icon: BookOpen,
    border: "#7c3aed",
    badgeClass: "bg-violet-100 dark:bg-violet-900/25 text-violet-700 dark:text-violet-400 border-violet-300/60 dark:border-violet-700/40",
    glowColor: "#8b5cf6",
    label: "Leer artículo",
  },
] as const

export function TabBibliografiaPulgarcita() {
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <div className="space-y-4 mb-10 text-center">
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
          Pulgarcita
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Bibliografía y cita</h2>
        <p className="text-muted-foreground text-lg">
          Materiales de lectura y referencia para profundizar en los temas de la clase.
        </p>
      </div>

      <ul className="space-y-4">
        {REFERENCIAS.map((ref, index) => {
          const Icon = ref.icon
          return (
            <motion.li
              key={ref.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card
                className="transition-all duration-300 hover:shadow-md"
                style={{ borderTopColor: ref.border, borderTopWidth: 3 }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${ref.badgeClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-semibold mb-1">{ref.titulo}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{ref.descripcion}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex items-center justify-between flex-wrap gap-3">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground/70 min-w-0">
                    <ExternalLink className="h-3 w-3 shrink-0" />
                    <span className="truncate">{ref.href}</span>
                  </p>
                  <GlowingButton
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    glowColor={ref.glowColor}
                    className="shrink-0"
                  >
                    {ref.label}
                  </GlowingButton>
                </CardContent>
              </Card>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
