"use client"

import { Quote } from "lucide-react"

export function TabCita() {
  return (
    <div className="py-8 flex items-center justify-center min-h-[60vh]">
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/20">
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-8" />
          
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed text-balance">
            "La alfabetizacion digital no consiste solo en aprender a usar herramientas, 
            sino en pensar con y sobre ellas."
          </blockquote>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-primary/30 rounded-full" />
            <p className="text-muted-foreground font-medium">
              Espacio Alfabetizacion Digital
            </p>
            <div className="w-12 h-0.5 bg-primary/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
