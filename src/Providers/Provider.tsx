"use client"
import React from "react"
import { AppProvider } from "./AppProvider"
import { ThemeProvider } from "./ThemeProvider"
import CurrencyProvider from "./CurrencyProvider"
import LanguageProvider from "./LanguageProvider"

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <LanguageProvider>
        <CurrencyProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </AppProvider>
  )
}

export default Provider