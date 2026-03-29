"use client"

import { motion } from "framer-motion"
import { BookMarked, Globe, GraduationCap, Brain, FileText, MessageSquareMore } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topics = [
  {
    icon: BookMarked,
    title: "Michel Serres y Pulgarcita",
    description: "Reflexiones sobre la transformación cognitiva de las nuevas generaciones",
    border: "#7c3aed",
    badgeClass: "bg-violet-100 dark:bg-violet-900/25 text-violet-700 dark:text-violet-400 border-violet-300/60 dark:border-violet-700/40",
  },
  {
    icon: Globe,
    title: "Cultura digital",
    description: "Las prácticas culturales mediadas por tecnologías y su impacto social",
    border: "#0891b2",
    badgeClass: "bg-cyan-100 dark:bg-cyan-900/25 text-cyan-700 dark:text-cyan-400 border-cyan-300/60 dark:border-cyan-700/40",
  },
  {
    icon: GraduationCap,
    title: "Transformaciones en la enseñanza",
    description: "Nuevos roles docentes y formas de organizar el conocimiento",
    border: "#2563eb",
    badgeClass: "bg-blue-100 dark:bg-blue-900/25 text-blue-700 dark:text-blue-400 border-blue-300/60 dark:border-blue-700/40",
  },
  {
    icon: Brain,
    title: "Inteligencia artificial generativa",
    description: "Herramientas de IA y su potencial en contextos educativos",
    border: "#db2777",
    badgeClass: "bg-pink-100 dark:bg-pink-900/25 text-pink-700 dark:text-pink-400 border-pink-300/60 dark:border-pink-700/40",
  },
  {
    icon: FileText,
    title: "Escenas de aprendizaje",
    description: "Narraciones de experiencias pedagógicas con tecnologías",
    border: "#d97706",
    badgeClass: "bg-amber-100 dark:bg-amber-900/25 text-amber-700 dark:text-amber-400 border-amber-300/60 dark:border-amber-700/40",
  },
  {
    icon: MessageSquareMore,
    title: "Reflexión crítica",
    description: "Análisis del impacto de las tecnologías en educación",
    border: "#ea580c",
    badgeClass: "bg-orange-100 dark:bg-orange-900/25 text-orange-700 dark:text-orange-400 border-orange-300/60 dark:border-orange-700/40",
  },
]

export function TabContenidos() {
  return (
    <div className="py-8">
      <div className="space-y-4 mb-12">
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
          Contenidos
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
          ¿Qué trabajamos en esta clase?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Los ejes principales de la Clase Pulgarcita abordan la relación entre cultura digital,
          educación e inteligencia artificial.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
            >
              <Card
                className="group h-full transition-all duration-300 hover:shadow-lg"
                style={{ borderTopColor: topic.border, borderTopWidth: 3 }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105 ${topic.badgeClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Eje {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
