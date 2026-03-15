"use client"

import { 
  BookMarked, 
  Globe, 
  GraduationCap, 
  Brain, 
  FileText, 
  MessageSquareMore 
} from "lucide-react"

const topics = [
  {
    icon: BookMarked,
    title: "Michel Serres y Pulgarcita",
    description: "Reflexiones sobre la transformación cognitiva de las nuevas generaciones",
  },
  {
    icon: Globe,
    title: "Cultura digital",
    description: "Las prácticas culturales mediadas por tecnologías y su impacto social",
  },
  {
    icon: GraduationCap,
    title: "Transformaciones en la enseñanza",
    description: "Nuevos roles docentes y formas de organizar el conocimiento",
  },
  {
    icon: Brain,
    title: "Inteligencia artificial generativa",
    description: "Herramientas de IA y su potencial en contextos educativos",
  },
  {
    icon: FileText,
    title: "Escenas de aprendizaje",
    description: "Narraciones de experiencias pedagógicas con tecnologías",
  },
  {
    icon: MessageSquareMore,
    title: "Reflexión crítica",
    description: "Análisis del impacto de las tecnologías en educación",
  },
]

export function TabContenidos() {
  return (
    <div className="py-8">
      <div className="space-y-6 mb-12">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Eje {index + 1}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
