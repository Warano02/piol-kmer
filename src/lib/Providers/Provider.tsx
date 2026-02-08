"use client"
import React from "react"
import { AppProvider } from "./AppProvider"
import CurrencyProvider from "./CurrencyProvider"
import LanguageProvider from "./LanguageProvider"

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <LanguageProvider>
        <CurrencyProvider>
            {children}
        </CurrencyProvider>
      </LanguageProvider>
    </AppProvider>
  )
}

export default Provider