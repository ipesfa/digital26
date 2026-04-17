"use client"

import React from "react"
import {
  IoHomeOutline,
  IoBookOutline,
  IoGlobeOutline,
  IoLibraryOutline,
  IoRocketOutline,
  IoTrophyOutline,
} from "react-icons/io5"

interface NavItem {
  value: string
  title: string
  icon: React.ReactNode
  gradientFrom: string
  gradientTo: string
}

const navItems: NavItem[] = [
  {
    value: "inicio",
    title: "Inicio",
    icon: <IoHomeOutline />,
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
  },
  {
    value: "clase1",
    title: "Pulgarcita",
    icon: <IoBookOutline />,
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
  },
  {
    value: "clase2",
    title: "Cabildo 2.0",
    icon: <IoGlobeOutline />,
    gradientFrom: "#6366f1",
    gradientTo: "#a855f7",
  },
  {
    value: "bibliografia",
    title: "Bibliografía",
    icon: <IoLibraryOutline />,
    gradientFrom: "#64748b",
    gradientTo: "#334155",
  },
  {
    value: "accion",
    title: "Acción",
    icon: <IoRocketOutline />,
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
  },
  {
    value: "ranking",
    title: "Ranking",
    icon: <IoTrophyOutline />,
    gradientFrom: "#fbbf24",
    gradientTo: "#f59e0b",
  },
]

interface SiteNavProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export function SiteNav({ activeTab, onTabChange }: SiteNavProps) {
  return (
    <ul
      className={[
        "flex min-w-0 max-w-[min(100%,calc(100vw-7.5rem))] sm:max-w-none flex-nowrap gap-3 sm:gap-4",
        "overflow-x-auto overflow-y-hidden scroll-smooth pb-0.5",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
      ].join(" ")}
    >
      {navItems.map(({ value, title, icon, gradientFrom, gradientTo }) => {
        const isActive = activeTab === value
        return (
          <li
            key={value}
            onClick={() => onTabChange(value)}
            style={
              {
                "--gradient-from": gradientFrom,
                "--gradient-to": gradientTo,
              } as React.CSSProperties
            }
            className={[
              "relative h-[42px] flex items-center justify-center cursor-pointer",
              "rounded-full transition-all duration-500",
              "hover:shadow-none",
              isActive
                ? "w-[130px] sm:w-[150px] shadow-md"
                : "w-[42px] hover:w-[130px] sm:hover:w-[150px] shadow-sm",
              "group",
              isActive
                ? "bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]"
                : "bg-white dark:bg-card border border-gray-200 dark:border-border",
            ].join(" ")}
          >
            {/* Gradient overlay — shows on hover when not active */}
            {!isActive && (
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            )}

            {/* Blur glow */}
            <span
              className={[
                "absolute top-[8px] inset-x-0 h-full rounded-full blur-[14px] -z-10",
                "bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]",
                "transition-all duration-500",
                isActive ? "opacity-40" : "opacity-0 group-hover:opacity-40",
              ].join(" ")}
            />

            {/* Icon — hidden when expanded */}
            <span
              className={[
                "relative z-10 text-xl transition-all duration-300",
                isActive
                  ? "scale-0 w-0 overflow-hidden"
                  : "scale-100 group-hover:scale-0 group-hover:w-0 group-hover:overflow-hidden",
                isActive ? "text-white" : "text-gray-500 dark:text-muted-foreground",
              ].join(" ")}
            >
              {icon}
            </span>

            {/* Label — shows when expanded */}
            <span
              className={[
                "absolute text-white text-xs font-semibold uppercase tracking-wider",
                "transition-all duration-300 whitespace-nowrap z-10",
                isActive ? "scale-100" : "scale-0 group-hover:scale-100 delay-100",
              ].join(" ")}
            >
              {title}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
