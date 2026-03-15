"use client"

import { useEffect, useState } from "react"

export function CodeTitle() {
  const [displayedChars, setDisplayedChars] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [glitchActive, setGlitchActive] = useState(false)
  
  const titleParts = [
    { text: "Alfabetización", color: "text-emerald-400" },
    { text: "_", color: "text-yellow-400" },
    { text: "Digital", color: "text-cyan-400" },
  ]
  
  const fullTitle = titleParts.map(p => p.text).join("")
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setDisplayedChars(currentIndex)
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullTitle.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Glitch effect every few seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 4000)

    return () => clearInterval(glitchInterval)
  }, [])

  const getDisplayedTitle = () => {
    let remaining = displayedChars
    return titleParts.map((part, partIndex) => {
      if (remaining <= 0) return null
      const charsToShow = Math.min(remaining, part.text.length)
      remaining -= charsToShow
      return (
        <span key={partIndex} className={part.color}>
          {part.text.slice(0, charsToShow)}
        </span>
      )
    })
  }

  return (
    <div className="font-mono text-center relative px-4 py-8 flex flex-col items-center">
      {/* Main title container - centrado */}
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Decorative brackets */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <span className="text-pink-500 text-2xl sm:text-3xl lg:text-4xl font-light animate-pulse">{"<"}</span>
          <span className="text-muted-foreground/40 text-xs sm:text-sm tracking-[0.3em] uppercase">init</span>
          <span className="text-pink-500 text-2xl sm:text-3xl lg:text-4xl font-light animate-pulse">{"/>"}</span>
        </div>

        {/* Título principal - protagonista y centrado */}
        <div className={`relative w-fit mx-auto flex flex-col items-center ${glitchActive ? 'animate-pulse' : ''}`}>
          {/* Glitch layers - mismo tamaño que el título, centrados */}
          {glitchActive && (
            <>
              <div className="absolute inset-0 flex justify-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-red-500/50 translate-x-[3px] -translate-y-0.5">
                {fullTitle}
              </div>
              <div className="absolute inset-0 flex justify-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-blue-500/50 -translate-x-[3px] translate-y-0.5">
                {fullTitle}
              </div>
            </>
          )}
          
          {/* Main title text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight relative z-10 text-center">
            <span className="inline-flex items-baseline">
              {getDisplayedTitle()}
              <span
                className={`inline-block ml-2 align-baseline text-emerald-400 transition-opacity ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ textShadow: '0 0 20px rgba(52, 211, 153, 0.8)' }}
              >
                /
              </span>
            </span>
          </h1>
          
          {/* Underline animation */}
          <div className="mt-3 sm:mt-4 h-0.5 sm:h-1 bg-secondary rounded-full overflow-hidden w-full max-w-md mx-auto">
            <div 
              className="h-full rounded-full"
              style={{
                width: `${(displayedChars / fullTitle.length) * 100}%`,
                background: 'linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6)',
                transition: 'width 0.1s ease-out',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
              }}
            />
          </div>
        </div>

        {/* Terminal-style subtitle */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-emerald-500">$</span>
            <span className="text-sm sm:text-base lg:text-lg">~/formacion-docente</span>
            <span className="text-yellow-500">&gt;</span>
            <span className="text-pink-400 text-sm sm:text-base">run</span>
            <span className="text-cyan-300 text-sm sm:text-base">espacio_curricular</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground/60">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>status: activo</span>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-purple-400">version: 2026</span>
          </div>
        </div>

        {/* Floating code particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Particle 1 */}
          <span 
            className="absolute text-emerald-500/20 text-xs sm:text-sm font-mono animate-bounce"
            style={{ top: '10%', left: '5%', animationDuration: '3s', animationDelay: '0s' }}
          >
            {"{ }"}
          </span>
          {/* Particle 2 */}
          <span 
            className="absolute text-cyan-500/20 text-xs sm:text-sm font-mono animate-bounce"
            style={{ top: '20%', right: '8%', animationDuration: '4s', animationDelay: '1s' }}
          >
            {"< />"}
          </span>
          {/* Particle 3 */}
          <span 
            className="absolute text-pink-500/20 text-xs sm:text-sm font-mono animate-bounce"
            style={{ bottom: '25%', left: '10%', animationDuration: '3.5s', animationDelay: '0.5s' }}
          >
            {"[ ]"}
          </span>
          {/* Particle 4 */}
          <span 
            className="absolute text-yellow-500/20 text-xs sm:text-sm font-mono animate-bounce"
            style={{ bottom: '15%', right: '12%', animationDuration: '2.8s', animationDelay: '1.5s' }}
          >
            {"( )"}
          </span>
          {/* Particle 5 */}
          <span 
            className="absolute text-purple-500/20 text-lg sm:text-xl font-mono animate-bounce"
            style={{ top: '40%', left: '2%', animationDuration: '5s', animationDelay: '2s' }}
          >
            {"//"}
          </span>
          {/* Particle 6 */}
          <span 
            className="absolute text-emerald-500/20 text-lg sm:text-xl font-mono animate-bounce"
            style={{ top: '50%', right: '3%', animationDuration: '4.5s', animationDelay: '0.8s' }}
          >
            {"=>"}
          </span>
        </div>

        {/* Background glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] rounded-full blur-3xl opacity-10 -z-20"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.65 0.2 160) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] rounded-full blur-3xl opacity-10 -z-20"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.6 0.18 200) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
