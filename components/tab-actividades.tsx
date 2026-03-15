"use client"

import { Check, Circle, Target } from "lucide-react"

const activities = [
  {
    number: 1,
    title: "Dar de alta el correo institucional",
    description: "Configura tu cuenta de correo para acceder a los recursos del espacio.",
    completed: false,
  },
  {
    number: 2,
    title: "Leer articulo sobre IA generativa",
    description: "Lectura introductoria sobre inteligencia artificial en educacion.",
    completed: false,
  },
  {
    number: 3,
    title: "Escribir una escena de aprendizaje",
    description: "Narra una experiencia pedagogica significativa mediada por tecnologias.",
    completed: false,
  },
  {
    number: 4,
    title: "Subir la produccion al Padlet",
    description: "Comparte tu escena de aprendizaje en el muro colaborativo.",
    completed: false,
  },
  {
    number: 5,
    title: "Reflexion inicial sobre tecnologias y educacion",
    description: "Participa del foro con tu primera reflexion sobre el tema.",
    completed: false,
  },
]

export function TabActividades() {
  return (
    <div className="py-8">
      <div className="max-w-3xl">
        <div className="space-y-6 mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
            Misiones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Actividades de la clase
          </h2>
          <p className="text-lg text-muted-foreground">
            Completa las siguientes actividades para avanzar en tu recorrido de aprendizaje.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden sm:block" />

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group relative flex gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-card border-2 border-primary/30 items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  {activity.completed ? (
                    <Check className="w-6 h-6 text-primary" />
                  ) : (
                    <span className="text-xl font-bold text-primary">
                      {activity.number}
                    </span>
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card rounded-2xl p-6 border border-border group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Mobile number */}
                    <div className="sm:hidden shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {activity.number}
                      </span>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                        {activity.completed && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                            Completada
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>

                    <div className="hidden sm:block shrink-0">
                      {activity.completed ? (
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                      ) : (
                        <Circle className="w-6 h-6 text-border" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Objetivo de la clase
              </p>
              <p className="text-muted-foreground">
                Al completar estas actividades, habras iniciado tu recorrido por la alfabetizacion digital 
                con una primera reflexion critica sobre tecnologias y educacion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
