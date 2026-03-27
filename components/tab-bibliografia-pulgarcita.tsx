import { BookOpen, ExternalLink, FileText } from "lucide-react"

const REFERENCIAS = [
  {
    titulo: "Lectura / reseña (PDF)",
    descripcion: "Artículo en Dialnet para la lectura obligatoria de la clase.",
    href: "https://dialnet.unirioja.es/descarga/articulo/4903689.pdf",
    icon: FileText,
  },
  {
    titulo: "¿Qué es la IA generativa y cómo funciona?",
    descripcion: "Artículo de Lovelytics sobre IA generativa y su funcionamiento.",
    href: "https://lovelytics.com/es/post/que-es-la-ia-generativa-y-como-funciona/",
    icon: BookOpen,
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
        {REFERENCIAS.map((ref) => (
          <li key={ref.href}>
            <a
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <ref.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ref.titulo}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{ref.descripcion}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-primary break-all">
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  {ref.href}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
