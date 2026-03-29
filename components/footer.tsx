import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 mt-auto">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo-ipesfa.png"
            alt="Logo IPESFA"
            width={280}
            height={56}
            className="h-14 w-auto max-w-full object-contain opacity-90 dark:brightness-0 dark:invert"
          />
          <p className="text-center text-sm text-muted-foreground">
            Certificación Docente - IPESFA 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
