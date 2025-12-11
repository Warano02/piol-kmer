"use client"
import { createContext } from "react"
import type { Theme } from "../types"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export  const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

