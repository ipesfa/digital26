"use client"

import { CodeTitle } from "@/components/code-title"
import { Sparkles, BookOpen, Users, Brain } from "lucide-react"

export function TabInicio() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative py-16">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Espacio Curricular</span>
          </div>
        </div>

        {/* Code-style title */}
        <CodeTitle />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mt-10 max-w-2xl mx-auto text-center leading-relaxed">
          Formacion docente en cultura digital, tecnologias emergentes e inteligencia artificial aplicada a la educacion
        </p>

        {/* Features grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Contenidos actualizados</h3>
            <p className="text-sm text-muted-foreground">
              Recursos sobre tecnologia educativa y herramientas emergentes
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Aprendizaje colaborativo</h3>
            <p className="text-sm text-muted-foreground">
              Formato taller con actividades practicas y reflexion conjunta
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors">
            <Brain className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Pensamiento critico</h3>
            <p className="text-sm text-muted-foreground">
              Analisis del impacto de la IA en las practicas educativas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
