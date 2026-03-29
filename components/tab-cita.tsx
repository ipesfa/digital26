"use client"

import { Quote } from "lucide-react"

export function TabCita() {
  return (
    <div className="py-8 flex items-center justify-center min-h-[60vh]">
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative glows */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/6 rounded-full blur-3xl" />

        <div className="relative z-10 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/8 via-primary/4 to-transparent border border-primary/15 shadow-sm">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed text-balance">
            «La alfabetización digital no consiste solo en aprender a usar herramientas,
            sino en pensar con y sobre ellas.»
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-border rounded-full" />
            <p className="text-muted-foreground font-medium">
              Espacio Alfabetización Digital
            </p>
            <div className="w-12 h-0.5 bg-border rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
