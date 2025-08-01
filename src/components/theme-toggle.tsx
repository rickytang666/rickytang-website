"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Override localStorage with sessionStorage for theme persistence
  React.useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // Override the localStorage getItem and setItem for our theme key
      const originalGetItem = window.localStorage.getItem
      const originalSetItem = window.localStorage.setItem
      
      window.localStorage.getItem = function(key) {
        if (key === 'rickytang-theme') {
          return window.sessionStorage.getItem(key)
        }
        return originalGetItem.call(this, key)
      }
      
      window.localStorage.setItem = function(key, value) {
        if (key === 'rickytang-theme') {
          return window.sessionStorage.setItem(key, value)
        }
        return originalSetItem.call(this, key, value)
      }
    }
  }, [mounted])

  const handleThemeChange = () => {
    if (!mounted) return

    // Determine the current effective theme
    const currentEffectiveTheme = resolvedTheme || theme || 'light'
    
    // If current theme is system, switch to the opposite of what system is showing
    if (theme === "system") {
      const newTheme = currentEffectiveTheme === "dark" ? "light" : "dark"
      setTheme(newTheme)
    } else {
      // If user has already set a preference, toggle between light and dark
      const newTheme = currentEffectiveTheme === "dark" ? "light" : "dark"
      setTheme(newTheme)
    }
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