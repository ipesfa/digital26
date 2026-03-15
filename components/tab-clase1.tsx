"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabContenidos } from "@/components/tab-contenidos"
import { TabResumen } from "@/components/tab-resumen"
import { TabRecursos } from "@/components/tab-recursos"
import { TabActividades } from "@/components/tab-actividades"
import { TabCita } from "@/components/tab-cita"
import { TabBibliografia } from "@/components/tab-bibliografia"
import { Sparkles, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export function TabClase1() {
  const [subTab, setSubTab] = useState("overview")

  const features = [
    {
      icon: Sparkles,
      title: "Reflexion critica",
      description: "Pensamos las tecnologias desde una perspectiva pedagogica y cultural",
    },
    {
      icon: Users,
      title: "Produccion colaborativa",
      description: "Creamos juntos recursos y experiencias de aprendizaje",
    },
    {
      icon: Lightbulb,
      title: "Experimentacion",
      description: "Exploramos herramientas digitales con mirada innovadora",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Sub-navigation for Clase 1 sections */}
      <Tabs value={subTab} onValueChange={setSubTab}>
        <TabsList className="flex-wrap h-auto gap-2 bg-card/50 p-2 rounded-xl">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Presentacion
          </TabsTrigger>
          <TabsTrigger value="contenidos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Contenidos
          </TabsTrigger>
          <TabsTrigger value="resumen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Resumen
          </TabsTrigger>
          <TabsTrigger value="recursos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Recursos
          </TabsTrigger>
          <TabsTrigger value="actividades" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Actividades
          </TabsTrigger>
          <TabsTrigger value="cita" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Cita
          </TabsTrigger>
          <TabsTrigger value="bibliografia" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Bibliografia
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 focus-visible:outline-none">
          {/* Hero section */}
          <div className="relative py-8 lg:py-12">
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">Clase 1</span>
                  </div>

                  <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                    Pulgarcita, cultura digital e{" "}
                    <span className="text-primary">inteligencia artificial</span>
                  </h1>

                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Explora las transformaciones de la cultura digital y su impacto en la educacion. 
                    Un recorrido critico y creativo por las nuevas formas de ensenar y aprender.
                  </p>
                </div>

                <div className="relative">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-3xl" />
                    <div className="absolute -inset-2 bg-card rounded-2xl" />
                    
                    <div className="relative rounded-2xl overflow-hidden aspect-square border border-border">
                      <Image
                        src="/images/hero-digital-literacy.jpg"
                        alt="Ilustracion conceptual de alfabetizacion digital"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome section */}
          <div className="py-12 border-t border-border mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                  Un espacio para pensar la educacion en la era digital
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Trabajamos en formato taller, con una mirada critica y creativa sobre las tecnologias 
                  y su impacto en las practicas de ensenanza y aprendizaje.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                    <div className="relative space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contenidos" className="mt-6 focus-visible:outline-none">
          <TabContenidos />
        </TabsContent>

        <TabsContent value="resumen" className="mt-6 focus-visible:outline-none">
          <TabResumen />
        </TabsContent>

        <TabsContent value="recursos" className="mt-6 focus-visible:outline-none">
          <TabRecursos />
        </TabsContent>

        <TabsContent value="actividades" className="mt-6 focus-visible:outline-none">
          <TabActividades />
        </TabsContent>

        <TabsContent value="cita" className="mt-6 focus-visible:outline-none">
          <TabCita />
        </TabsContent>

        <TabsContent value="bibliografia" className="mt-6 focus-visible:outline-none">
          <TabBibliografia />
        </TabsContent>
      </Tabs>
    </div>
  )
}
