"use client"

import React from "react"
import {
  IoPersonOutline,
  IoDiceOutline,
  IoBookOutline,
  IoListOutline,
  IoBulbOutline,
  IoCalendarOutline,
  IoCloudUploadOutline,
  IoCheckmarkDoneOutline,
  IoFlagOutline,
  IoPeopleOutline,
  IoTimeOutline,
  IoConstructOutline,
  IoBarChartOutline,
  IoCheckmarkCircleOutline,
  IoSparklesOutline,
} from "react-icons/io5"

function NavPill({
  icon,
  from,
  to,
  size = 42,
}: {
  icon: React.ReactNode
  from: string
  to: string
  size?: number
}) {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center rounded-full shadow-md"
      style={{ width: size, height: size, background: `linear-gradient(45deg, ${from}, ${to})` }}
    >
      <span
        className="absolute inset-x-0 h-full rounded-full blur-[14px] -z-10 opacity-40"
        style={{ top: 6, background: `linear-gradient(45deg, ${from}, ${to})` }}
      />
      <span className="relative z-10 text-white" style={{ fontSize: size * 0.44 }}>
        {icon}
      </span>
    </div>
  )
}

export function TabMeta() {
  return (
    <div className="min-h-[60vh] flex flex-col gap-10">

      {/* Encabezado */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Meta: Consigna Final
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          El trabajo integrador que cierra la cursada. Diseñá para transformar.
        </p>
      </div>

      {/* Card principal — modalidad */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <NavPill icon={<IoPersonOutline />} from="#a955ff" to="#ea51ff" />
          <h3 className="text-lg font-semibold text-foreground">Modalidad</h3>
        </div>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          Esta actividad es <strong>individual</strong>. Cada estudiante desarrollará su propia secuencia didáctica
          con integración de herramientas digitales.
        </p>
      </div>

      {/* Grilla de secciones */}
      <div className="grid gap-6 sm:grid-cols-2">

        {/* Ruleta de herramientas */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <NavPill icon={<IoDiceOutline />} from="#FF9966" to="#FF5E62" />
            <h3 className="text-base font-semibold text-foreground">Juego de herramientas</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Para sumar un toque de azar y creatividad, cada uno deberá participar del{" "}
            <strong className="text-foreground">sorteo de la ruleta</strong>.
          </p>
          <div className="rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 px-4 py-3 text-sm text-orange-800 dark:text-orange-300 font-medium">
            Obtendrás <span className="font-bold">2 herramientas digitales aleatorias</span> que deberás incluir en tu secuencia.
          </div>
        </div>

        {/* Criterios de la secuencia */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <NavPill icon={<IoBookOutline />} from="#56CCF2" to="#2F80ED" />
            <h3 className="text-base font-semibold text-foreground">La secuencia didáctica</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-blue-500" />
              Dirigida a <strong className="text-foreground">educación secundaria</strong>.
            </li>
            <li className="flex items-start gap-2">
              <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-blue-500" />
              Cantidad de clases a tu elección — duración mínima de{" "}
              <strong className="text-foreground">80 minutos</strong> cada una.
            </li>
            <li className="flex items-start gap-2">
              <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-blue-500" />
              Contenido desde tu <strong className="text-foreground">especialidad</strong> o desde un tema que estés trabajando en la práctica.
            </li>
          </ul>
        </div>
      </div>

      {/* Qué debe incluir — sección destacada */}
      <div className="relative rounded-3xl p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-xl shadow-violet-200 dark:shadow-violet-950/40">
        <div className="rounded-[22px] bg-white dark:bg-zinc-900 p-7 sm:p-10 space-y-7">

          {/* Encabezado de sección */}
          <div className="flex flex-col items-center text-center gap-3">
            <NavPill icon={<IoListOutline />} from="#7c3aed" to="#db2777" size={56} />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              La secuencia debe incluir de forma clara
            </h3>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
          </div>

          {/* Items */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <IoPeopleOutline />,
                label: "¿A quién está dirigida?",
                from: "#a955ff", to: "#ea51ff",
                cardBg: "from-violet-100 to-violet-50 dark:from-violet-950/50 dark:to-violet-900/20 border-violet-200 dark:border-violet-800/40",
              },
              {
                icon: <IoTimeOutline />,
                label: "Duración estimada de la propuesta",
                from: "#f472b6", to: "#ec4899",
                cardBg: "from-fuchsia-100 to-fuchsia-50 dark:from-fuchsia-950/50 dark:to-fuchsia-900/20 border-fuchsia-200 dark:border-fuchsia-800/40",
              },
              {
                icon: <IoConstructOutline />,
                label: "Desarrollo de las clases (actividades y herramientas)",
                from: "#818cf8", to: "#6366f1",
                cardBg: "from-indigo-100 to-indigo-50 dark:from-indigo-950/50 dark:to-indigo-900/20 border-indigo-200 dark:border-indigo-800/40",
              },
              {
                icon: <IoBarChartOutline />,
                label: "Criterios de evaluación (cualitativa, rúbricas, checklists, etc.)",
                from: "#c084fc", to: "#a855f7",
                cardBg: "from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-purple-900/20 border-purple-200 dark:border-purple-800/40",
              },
            ].map(({ icon, label, from, to, cardBg }) => (
              <div
                key={label}
                className={`flex items-center gap-4 rounded-2xl bg-gradient-to-br border px-5 py-4 ${cardBg}`}
              >
                <NavPill icon={icon} from={from} to={to} />
                <span className="text-sm sm:text-base font-medium text-foreground/85 leading-snug">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Importante */}
      <div className="rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-3">
          <NavPill icon={<IoBulbOutline />} from="#fbbf24" to="#f59e0b" />
          <span className="font-semibold text-amber-700 dark:text-amber-400">Importante</span>
        </div>
        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          Toda la planificación —justificación, objetivos, desarrollo y evaluación— debe estar{" "}
          <strong>integrada en la presentación de la secuencia</strong>. No va en un documento aparte.
        </p>
      </div>

      {/* Fechas clave */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-3">
          <NavPill icon={<IoCalendarOutline />} from="#818cf8" to="#6366f1" />
          <h3 className="text-base font-semibold text-foreground">Fechas clave</h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/40 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <NavPill icon={<IoCloudUploadOutline />} from="#6366f1" to="#818cf8" size={32} />
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                Entrega del avance
              </p>
            </div>
            <p className="text-base font-bold text-foreground">Jueves 11 de junio</p>
            <p className="text-xs text-muted-foreground">Subir al Padlet</p>
          </div>
          <div className="flex-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <NavPill icon={<IoCheckmarkDoneOutline />} from="#10b981" to="#059669" size={32} />
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                Presentaciones
              </p>
            </div>
            <p className="text-base font-bold text-foreground">26 de junio</p>
          </div>
          <div className="flex-1 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <NavPill icon={<IoFlagOutline />} from="#f43f5e" to="#e11d48" size={32} />
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                Cierre
              </p>
            </div>
            <p className="text-base font-bold text-foreground">3 de julio</p>
          </div>
        </div>
      </div>

      {/* Cierre inspiracional */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 dark:from-violet-700 dark:to-purple-800 p-6 sm:p-8 text-white shadow-lg space-y-4">
        <div className="flex justify-center">
          <NavPill icon={<IoSparklesOutline />} from="#e879f9" to="#c026d3" size={52} />
        </div>
        <p className="text-sm sm:text-base leading-relaxed opacity-90 text-center">
          Esta es la oportunidad de demostrar cómo integrás <strong>TIC, innovación, gamificación y creatividad</strong>{" "}
          en una secuencia real. El objetivo no es solo enseñar, sino transformar la experiencia de aprendizaje.
        </p>
        <p className="text-lg sm:text-xl font-bold tracking-tight text-center">
          Diseñá para transformar.
        </p>
      </div>

    </div>
  )
}
