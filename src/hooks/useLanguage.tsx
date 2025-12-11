"use client"
import { useContext } from "react"
import { LanguageContext } from "@/lib/context/LanguageContext"

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside <AppProvider>")
  }
  return ctx
}