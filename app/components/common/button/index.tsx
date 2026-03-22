"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button className="w-10 h-10 flex justify-center items-center  text-text-principal cursor-pointer " onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <FaSun className="text-[10px] md:text-xs" /> : <FaMoon className="text-[10px] md:text-xs" />}
    </button>
  );
}
