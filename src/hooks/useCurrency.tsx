"use client"
import { useContext } from "react"
import { CurrencyContext } from "@/lib/context/CurrencyContext"

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext)
  if (!ctx) {
    throw new Error("useCurrency must be used inside <AppProvider>")
  }
  return ctx
}