"use client"

import { Check, Circle, Target } from "lucide-react"

const STEP_COLORS = [
  { border: "border-cyan-500/40", bg: "bg-cyan-500/10", text: "text-cyan-400" },
  { border: "border-violet-500/40", bg: "bg-violet-500/10", text: "text-violet-400" },
  { border: "border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-400" },
  { border: "border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-400" },
  { border: "border-rose-500/40", bg: "bg-rose-500/10", text: "text-rose-400" },
] as const

const activities = [
  {
    number: 1,
    title: "Dar de alta el correo institucional",
    description: "Configura tu cuenta de correo para acceder a los recursos del espacio.",
    completed: false,
  },
  {
    number: 2,
    title: "Leer artículo sobre IA generativa",
    description: "Lectura introductoria sobre inteligencia artificial en educación.",
    completed: false,
  },
  {
    number: 3,
    title: "Escribir una escena de aprendizaje",
    description: "Narra una experiencia pedagógica significativa mediada por tecnologías.",
    completed: false,
  },
  {
    number: 4,
    title: "Subir la producción al Padlet",
    description: "Comparte tu escena de aprendizaje en el muro colaborativo.",
    completed: false,
  },
  {
    number: 5,
    title: "Reflexión inicial sobre tecnologías y educación",
    description: "Participa del foro con tu primera reflexión sobre el tema.",
    completed: false,
  },
]

export function TabActividades() {
  return (
    <div className="py-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* Header centrado */}
        <div className="space-y-4 mb-14 text-center">
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

        {/* Roadmap centrado con colores por paso */}
        <div className="relative flex flex-col items-center">
          {/* Línea vertical de gradiente (detrás de los nodos) */}
          <div
            className="absolute left-1/2 top-[3.5rem] bottom-[2rem] w-1 -translate-x-1/2 rounded-full opacity-25 pointer-events-none hidden sm:block bg-gradient-to-b from-cyan-400 via-violet-400 to-rose-400"
            aria-hidden
          />
          {activities.map((activity, index) => {
            const colors = STEP_COLORS[index]
            return (
              <div key={index} className="relative flex flex-col items-center w-full mb-2">
                <div className="flex flex-col items-center w-full gap-4">
                  {/* Nodo con número */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 ${colors.border} ${colors.bg} transition-all duration-300 hover:scale-105`}
                  >
                    {activity.completed ? (
                      <Check className={`h-6 w-6 ${colors.text}`} />
                    ) : (
                      <span className={`text-xl font-bold ${colors.text}`}>
                        {activity.number}
                      </span>
                    )}
                  </div>
                  {/* Card */}
                  <div
                    className={`w-full rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 text-center sm:text-left">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {activity.title}
                          </h3>
                          {activity.completed && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              Completada
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {activity.description}
                        </p>
                      </div>
                      <div className="flex justify-center sm:justify-end shrink-0">
                        {activity.completed ? (
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                        ) : (
                          <Circle className={`w-8 h-8 ${colors.text} opacity-50`} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Objetivo centrado con color */}
        <div className="mt-14 w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-emerald-500/10 border-2 border-primary/20 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-lg">
              Objetivo de la clase
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Al completar estas actividades, habrás iniciado tu recorrido por la alfabetización digital
              con una primera reflexión crítica sobre tecnologías y educación.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
