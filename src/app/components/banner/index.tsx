"use client";
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
    <main className="w-full h-auto font-thin flex flex-col justify-between">
      {/* Banner */}
      <section className="w-full h-96 bg-linear-to-br from-slate-800 via-slate-500 to-slate-400 flex items-center justify-center">
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
    </main>
  );
}