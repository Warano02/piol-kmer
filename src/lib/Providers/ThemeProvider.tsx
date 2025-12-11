"use client"
import {  useState, useEffect } from "react"

import type { ReactNode } from "react"
import type { Theme } from "../types"
import { ThemeContext } from "../context/ThemeContext"

type Props = { children: ReactNode }

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light")

  // Charger le thème depuis le localStorage si disponible
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) setTheme(savedTheme)
  }, [])

  // Appliquer le thème au body et sauvegarder
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
