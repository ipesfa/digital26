"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Target, Mail, BookOpen, PenLine, Upload, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const activities = [
  {
    number: 1,
    icon: Mail,
    title: "Dar de alta el correo institucional",
    description: "Configura tu cuenta de correo para acceder a los recursos del espacio.",
    border: "#0891b2",
    badgeClass: "bg-cyan-100 dark:bg-cyan-900/25 text-cyan-700 dark:text-cyan-400 border-cyan-300/60 dark:border-cyan-700/40",
    completed: false,
  },
  {
    number: 2,
    icon: BookOpen,
    title: "Leer artículo sobre IA generativa",
    description: "Lectura introductoria sobre inteligencia artificial en educación.",
    border: "#7c3aed",
    badgeClass: "bg-violet-100 dark:bg-violet-900/25 text-violet-700 dark:text-violet-400 border-violet-300/60 dark:border-violet-700/40",
    completed: false,
  },
  {
    number: 3,
    icon: PenLine,
    title: "Escribir una escena de aprendizaje",
    description: "Narra una experiencia pedagógica significativa mediada por tecnologías.",
    border: "#059669",
    badgeClass: "bg-emerald-100 dark:bg-emerald-900/25 text-emerald-700 dark:text-emerald-400 border-emerald-300/60 dark:border-emerald-700/40",
    completed: false,
  },
  {
    number: 4,
    icon: Upload,
    title: "Subir la producción al Padlet",
    description: "Comparte tu escena de aprendizaje en el muro colaborativo.",
    border: "#d97706",
    badgeClass: "bg-amber-100 dark:bg-amber-900/25 text-amber-700 dark:text-amber-400 border-amber-300/60 dark:border-amber-700/40",
    completed: false,
  },
  {
    number: 5,
    icon: MessageSquare,
    title: "Reflexión inicial sobre tecnologías y educación",
    description: "Participa del foro con tu primera reflexión sobre el tema.",
    border: "#ea580c",
    badgeClass: "bg-orange-100 dark:bg-orange-900/25 text-orange-700 dark:text-orange-400 border-orange-300/60 dark:border-orange-700/40",
    completed: false,
  },
]

export function TabActividades() {
  return (
    <div className="py-8">
      <div className="space-y-4 mb-12 text-center">
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest">
          Misiones
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
          Actividades de la clase
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Completa las siguientes actividades para avanzar en tu recorrido de aprendizaje.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card
                className="transition-all duration-300 hover:shadow-md"
                style={{ borderLeftColor: activity.border, borderLeftWidth: 3 }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Step icon */}
                    <div className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg border ${activity.badgeClass}`}>
                      {activity.completed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <>
                          <Icon className="h-4 w-4 mb-0.5" />
                          <span className="text-[10px] font-bold">{activity.number}</span>
                        </>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-base font-semibold text-foreground">{activity.title}</h3>
                        {activity.completed && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                            Completada
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                    </div>

                    <div className="shrink-0 self-center">
                      {activity.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Circle className="w-5 h-5 opacity-30" style={{ color: activity.border }} />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Objetivo */}
      <motion.div
        className="mt-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      >
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-base">Objetivo de la clase</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-sm leading-relaxed">
              Al completar estas actividades, habrás iniciado tu recorrido por la alfabetización
              digital con una primera reflexión crítica sobre tecnologías y educación.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
