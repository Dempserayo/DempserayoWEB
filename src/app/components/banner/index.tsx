"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Clean & Minimal",
      description:
        "DUI Component está diseñado para mantenerse fuera de tu camino. Estética sin fricción.",
    },
    {
      title: "Accessible by default",
      description:
        "Cada componente cumple con WCAG 2.1. Accesibilidad no es un extra, es el estándar.",
    },
    {
      title: "Ready to ship",
      description:
        "Copia, pega y despliega. Componentes listos para producción desde el primer día.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full font-thin flex flex-col justify-between gap-20">

      {/* Banner */}
      <section className="w-full h-80 bg-linear-to-br from-slate-800 via-slate-500 to-slate-400 flex items-center justify-center">
        <div className="w-full max-w-7xl">

          <p className="text-slate-500 text-xs">
            0{current + 1} — 0{slides.length}
          </p>

          <h1 className="text-4xl text-white uppercase mt-2">
            {slides[current].title}
          </h1>

          <p className="text-white/60 text-sm mt-3 max-w-md">
            {slides[current].description}
          </p>

          <div className="flex gap-2 mt-10">
            <button
              onClick={() => setCurrent(0)}
              className={`h-1 transition-all duration-500 ${
                current === 0 ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />

            <button
              onClick={() => setCurrent(1)}
              className={`h-1 transition-all duration-500 ${
                current === 1 ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />

            <button
              onClick={() => setCurrent(2)}
              className={`h-1 transition-all duration-500 ${
                current === 2 ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          </div>

        </div>
      </section>

      {/* Footer */}
      <section className="w-full h-auto text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Perfil */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Dempserayo"
              className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-rose-500 hover:text-rose-500 transition"
            >
              MA
            </Link>

            <div>
              <p className="text-sm">Miguel Angel J P</p>
              <p className="text-xs text-slate-500">
                Dempserayo · Creator & Maintainer
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:flex gap-10">

            <div>
              <p>+0 / 150</p>
              <p className="text-slate-500">Components</p>
            </div>

            <div>
              <p className="text-rose-500">98% / 100%</p>
              <p className="text-rose-500/60">Accessibility</p>
            </div>

            <div>
              <p>1 / 1</p>
              <p className="text-slate-500">Development Team</p>
            </div>

          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8">

            <div>
              <Link
                href="https://www.npmjs.com/package/dempserayo-ui"
                className="hover:text-rose-500 transition"
              >
                0.0.4
              </Link>
              <p className="text-slate-500">Version</p>
            </div>

            <div>
              <Link
                href="https://www.npmjs.com/package/dempserayo-ui"
                className="hover:text-rose-500 transition"
              >
                Documentation
              </Link>
              <p className="text-slate-500">Docs</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}