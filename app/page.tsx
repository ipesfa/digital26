"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabInicio } from "@/components/tab-inicio"
import { TabClase1 } from "@/components/tab-clase1"
import { TabAccion } from "@/components/tab-accion"
import { TabRanking } from "@/components/tab-ranking"
import { Footer } from "@/components/footer"
import { Home, BookOpen } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("inicio")

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        {/* Header with tabs */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4">
            <TabsList className="h-14 w-full justify-start bg-transparent gap-1 rounded-none">
              <TabsTrigger 
                value="inicio" 
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary gap-2 px-4"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Inicio</span>
              </TabsTrigger>
              <TabsTrigger
                value="clase1"
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary gap-2 px-4"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Pulgarcita</span>
              </TabsTrigger>
              <TabsTrigger
                value="accion"
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary gap-2 px-4"
              >
                <span className="w-4 h-4 flex items-center justify-center text-xs">🚀</span>
                <span className="hidden sm:inline">Acción</span>
              </TabsTrigger>
              <TabsTrigger
                value="ranking"
                className="gap-2 px-4 border border-amber-400/30 bg-amber-500/10 text-amber-300 data-[state=active]:bg-amber-500/25 data-[state=active]:text-amber-100"
              >
                <span className="w-4 h-4 flex items-center justify-center text-xs">🏆</span>
                <span className="hidden sm:inline">Ranking de insignias</span>
              </TabsTrigger>
              {/* Futuras clases se agregan aqui */}
            </TabsList>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <TabsContent value="inicio" className="mt-0 focus-visible:outline-none">
              <TabInicio />
            </TabsContent>
            <TabsContent value="clase1" className="mt-0 focus-visible:outline-none">
              <TabClase1 />
            </TabsContent>
            <TabsContent value="accion" className="mt-0 focus-visible:outline-none">
              <TabAccion />
            </TabsContent>
            <TabsContent value="ranking" className="mt-0 focus-visible:outline-none">
              <TabRanking />
            </TabsContent>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </Tabs>
    </div>
  )
}
