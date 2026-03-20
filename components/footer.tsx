export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 mt-auto">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/logo-ipesfa.png"
            alt="Logo IPESFA"
            className="h-14 w-auto object-contain opacity-95"
            loading="lazy"
          />
          <p className="text-center text-base sm:text-lg text-white/90">
            Certificación Docente - IPESFA 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
