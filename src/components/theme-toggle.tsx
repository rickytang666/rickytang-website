"use client";

import * as React from "react";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";

type ThemeMode = "system" | "light" | "dark";

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeMode>("system");
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    // Check initial theme from localStorage or default to system
    const savedTheme = localStorage.getItem("rickytang-theme") as ThemeMode;
    if (savedTheme && ["system", "light", "dark"].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (theme: ThemeMode) => {
    if (!mounted) return;

    setCurrentTheme(theme);
    localStorage.setItem("rickytang-theme", theme);

    // Apply theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-sidebar rounded-full border border-sidebar-border">
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="System theme"
        >
          <IconDeviceDesktop stroke={2} className="h-4 w-4" />
        </button>
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="Light theme"
        >
          <IconSun stroke={2} className="h-4 w-4" />
        </button>
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="Dark theme"
        >
          <IconMoon stroke={2} className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-sidebar text-foreground rounded-full border border-sidebar-border shadow-sm">
      {/* System Theme */}
      <button
        onClick={() => handleThemeChange("system")}
        className={`p-2 rounded-full transition-all duration-300 ${
          currentTheme === "system"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="System theme"
        title="Use system theme"
      >
        <IconDeviceDesktop stroke={2} className="h-5 w-5" />
      </button>

      {/* Light Theme */}
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 rounded-full transition-all duration-300 ${
          currentTheme === "light"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="Light theme"
        title="Light theme"
      >
        <IconSun stroke={2} className="h-5 w-5" />
      </button>

      {/* Dark Theme */}
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 rounded-full transition-all duration-300 ${
          currentTheme === "dark"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="Dark theme"
        title="Dark theme"
      >
        <IconMoon stroke={2} className="h-5 w-5" />
      </button>
    </div>
  );
}
