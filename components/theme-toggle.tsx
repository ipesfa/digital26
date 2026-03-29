"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  if (!mounted) {
    return (
      <div className="w-[38px] h-[38px] rounded-full border border-border bg-card" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="relative w-[38px] h-[38px] rounded-full border border-border bg-card shadow-sm flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-primary/40 text-muted-foreground hover:text-foreground"
    >
      <IoSunnyOutline
        className={`absolute text-lg transition-all duration-300 ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
      />
      <IoMoonOutline
        className={`absolute text-lg transition-all duration-300 ${isDark ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
      />
    </button>
  )
}
