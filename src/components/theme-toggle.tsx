"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("Switching theme from", theme, "to", newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={handleThemeChange}
      className="btn btn-lg btn-circle bg-sidebar text-sidebar-foreground border-gray-400 hover:bg-primary hover:text-sidebar-primary-foreground transition-all duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      <IconSun className="h-7 w-7 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-7 w-7 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
    </button>
  )
} 