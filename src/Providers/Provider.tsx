"use client"
import React from "react"
import { AppProvider } from "./AppProvider"
import { ThemeProvider } from "./ThemeProvider"
import CurrencyProvider from "./CurrencyProvider"

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <CurrencyProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CurrencyProvider>
    </AppProvider>
  )
}

export default Provider