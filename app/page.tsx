"use client"

import { useState } from "react"
import { TabInicio } from "@/components/tab-inicio"
import { TabClase1 } from "@/components/tab-clase1"
import { TabClase2 } from "@/components/tab-clase2"
import { TabAccion } from "@/components/tab-accion"
import { TabRanking } from "@/components/tab-ranking"
import { TabBibliografiaSecuencia } from "@/components/tab-bibliografia-secuencia"
import { Footer } from "@/components/footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("inicio")

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* ── Header con gradient-menu nav ──────────────────── */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Brand mark */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-display italic text-lg font-semibold tracking-tight text-foreground/90">
                AD
              </span>
              <span className="hidden sm:block text-muted-foreground/40 text-xs">|</span>
              <span className="hidden sm:block text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
                Alfabetización Digital
              </span>
            </div>

            {/* Gradient pill navigation + theme toggle */}
            <div className="flex min-w-0 items-center gap-3">
              <SiteNav activeTab={activeTab} onTabChange={setActiveTab} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────── */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {activeTab === "inicio"   && <TabInicio />}
          {activeTab === "clase1"   && <TabClase1 />}
          {activeTab === "clase2"   && <TabClase2 />}
          {activeTab === "bibliografia" && <TabBibliografiaSecuencia />}
          {activeTab === "accion"   && <TabAccion />}
          {activeTab === "ranking"  && <TabRanking />}
        </div>
      </main>

      <Footer />
    </div>
  )
}
