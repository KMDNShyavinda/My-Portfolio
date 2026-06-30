"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialise from localStorage or OS preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      apply(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      apply("dark");
    }
  }, []);

  function apply(t: Theme) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }

  function toggle() {
    apply(theme === "light" ? "dark" : "light");
  }

  return { theme, toggle };
}
