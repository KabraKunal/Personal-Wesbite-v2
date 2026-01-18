"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder during hydration to prevent layout shift
  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
        <div className="rounded-full p-1.5">
          <Sun className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="rounded-full p-1.5">
          <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    );
  }

  const isLight = resolvedTheme === "light";
  const isDark = resolvedTheme === "dark";

  const handleLightMode = () => {
    setTheme("light");
  };

  const handleDarkMode = () => {
    setTheme("dark");
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
      <button
        type="button"
        onClick={handleLightMode}
        className={`rounded-full p-1.5 transition-all duration-200 ${
          isLight
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to light mode"
        aria-pressed={isLight}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={handleDarkMode}
        className={`rounded-full p-1.5 transition-all duration-200 ${
          isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to dark mode"
        aria-pressed={isDark}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
