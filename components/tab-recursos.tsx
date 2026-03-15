"use client"

import { 
  FileText, 
  Video, 
  LayoutGrid, 
  CheckSquare, 
  Presentation,
  ExternalLink 
} from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Leer Pulgarcita",
    description: "Texto de Michel Serres sobre la transformacion digital",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
    href: "#",
  },
  {
    icon: Video,
    title: "Ver video",
    description: "Introduccion audiovisual a la cultura digital",
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-400",
    href: "#",
  },
  {
    icon: LayoutGrid,
    title: "Ir al Padlet",
    description: "Muro colaborativo para compartir producciones",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
    href: "#",
  },
  {
    icon: CheckSquare,
    title: "Abrir checklist",
    description: "Lista de verificacion de actividades",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400",
    href: "#",
  },
  {
    icon: Presentation,
    title: "Explorar presentacion",
    description: "Material visual de apoyo en Genially",
    color: "from-violet-500/20 to-violet-600/20",
    iconColor: "text-violet-400",
    href: "#",
  },
  {
    icon: ExternalLink,
    title: "Recurso adicional",
    description: "Material complementario de lectura",
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-400",
    href: "#",
  },
]

export function TabRecursos() {
  return (
    <div className="py-8">
      <div className="space-y-6 mb-12">
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">
          Materiales
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
          Recursos de la clase
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Accede a todos los materiales necesarios para trabajar en la Clase 1.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            className="group block"
          >
            <div className="relative h-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className={`w-7 h-7 ${resource.iconColor}`} />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {resource.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {resource.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
