"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ── Types ─────────────────────────────────────────────
type SlideData = {
  title: string;
  description: string;
};

type SlideProps = {
  slide: SlideData;
  index: number;
  isActive: boolean;
};

type SlideIndicatorProps = {
  index: number;
  isActive: boolean;
  onClick: () => void;
};

type StatItemProps = {
  value: string;
  label: string;
  color: string;
};

// ── Data ──────────────────────────────────────────────
const slides: SlideData[] = [
  {
    title: "Clean & Minimal",
    description: "DUI Component está diseñado para mantenerse fuera de tu camino. Estética sin fricción.",
  },
  {
    title: "Accessible by default",
    description: "Cada componente cumple con WCAG 2.1. Accesibilidad no es un extra, es el estándar.",
  },
  {
    title: "Ready to ship",
    description: "Copia, pega y despliega. Componentes listos para producción desde el primer día.",
  },
];

const stats: StatItemProps[] = [
  { value: "+ 0 / 150",  label: "Components",        color: "slate" },
  { value: "98% / 100%", label: "Accessibility Score", color: "rose"  },
  { value: "1 / 1",      label: "Development Team",   color: "slate" },
];

// ── Sub-components ────────────────────────────────────
function Slide({ slide, index, isActive }: SlideProps) {
  return (
    <div
      className="absolute transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateY(0)" : "translateY(12px)",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <p className="text-slate-500 text-xs font-thin">
        0{index + 1} — 0{slides.length}
      </p>
      <h2 className="text-slate-200 text-2xl uppercase font-thin">
        {slide.title}
      </h2>
      <p className="text-white/50 text-xs font-thin max-w-sm">
        {slide.description}
      </p>
    </div>
  );
}

function SlideIndicator({ index, isActive, onClick }: SlideIndicatorProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`Slide ${index + 1}`}
      className="transition-all duration-500"
      style={{
        width: isActive ? "28px" : "8px",
        height: "4px",
        borderRadius: "0px",
        background: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
      }}
    />
  );
}

function StatItem({ value, label, color }: StatItemProps) {
  return (
    <div>
      <p className={`text-xs font-thin ${color === "rose" ? "text-rose-500" : ""}`}>
        {value}
      </p>
      <p className={`text-xs font-thin ${color === "rose" ? "text-rose-500/50" : ""}`}>
        {label}
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────
export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full font-thin flex flex-col justify-center items-center">
        <section className="relative w-full h-96 px-10 bg-linear-to-br from-slate-800 via-slate-500 to-slate-400 hidden sm:flex flex-col justify-center items-center overflow-hidden">

          <div className="w-full max-w-7xl flex flex-col justify-center">
            {slides.map((slide, i) => (
              <Slide key={i} slide={slide} index={i} isActive={i === current} />
            ))}
          </div>

          <div className="w-full max-w-7xl absolute bottom-6 flex flex-row items-center gap-2 py-20 px-10">
            {slides.map((_, i) => (
              <SlideIndicator key={i} index={i} isActive={i === current} onClick={() => setCurrent(i)} />
            ))}
          </div>

        </section>

        <section className="w-full flex justify-center items-center mb-20 sm:mb-0 sm:py-40 px-10 font-thin text-xs sm:border-b border-slate-200">
          <div className="w-full max-w-7xl flex items-center justify-between">

            {/* Profile */}
            <div className="flex w-full items-center gap-4">
              <Link
                href="https://github.com/Dempserayo"
                className="w-10 h-10 border border-slate-200/50 hover:bg-rose-200/50 hover:text-rose-500 hover:border-rose-500 transition-all duration-500 flex items-center justify-center"
              >
                <span className="uppercase">ma</span>
              </Link>
              <div>
                <p className="text-xs font-thin">Miguel Angel J P</p>
                <p className="text-xs font-thin">Dempserayo · Creator & Maintainer</p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden xl:flex w-full sm:items-center gap-4">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>

            {/* Links */}
            <div className="hidden sm:flex items-center gap-4">
              <span>
                <Link href="https://www.npmjs.com/package/dempserayo-ui" className="hover:text-rose-500 transition-all duration-500 cursor-pointer">0.0.2</Link>
                <p>Version</p>
              </span>
              <span>
                <Link href="https://www.npmjs.com/package/dempserayo-ui" className="hover:text-rose-500 transition-all duration-500 cursor-pointer">Click Here</Link>
                <p>Documentation</p>
              </span>
            </div>

          </div>
        </section>
    </section>
  );
}