"use client"
import React from "react"
import { AppProvider } from "./AppProvider"
import { ThemeProvider } from "./ThemeProvider"

function Provider({children}:{children:React.ReactNode}) {
  return (
    <AppProvider>
<ThemeProvider>
    {children}
</ThemeProvider>
    </AppProvider>
  )
}

export default Provider