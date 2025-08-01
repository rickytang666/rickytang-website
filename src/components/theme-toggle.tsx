"use client"

import * as React from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const handleThemeChange = () => {
    if (!mounted) return

    // Toggle theme
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark', newIsDark)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="btn btn-md btn-circle bg-sidebar text-sidebar-foreground border-2 border-gray-400 hover:bg-primary hover:text-sidebar-primary-foreground transition-all duration-200 ease-in-out"
        aria-label="Toggle theme"
      >
        <IconSun className="absolute h-5 w-5 hover:h-7 hover:w-7 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute h-5 w-5 hover:h-7 hover:w-7 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
      </button>
    )
  }

  return (
    <button
      onClick={handleThemeChange}
      className="btn btn-md btn-circle bg-sidebar text-sidebar-foreground border-2 border-gray-400 hover:bg-primary hover:text-sidebar-primary-foreground transition-all duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      <IconSun className="absolute h-5 w-5 hover:h-7 hover:w-7 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-5 w-5 hover:h-7 hover:w-7 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
    </button>
  )
} 