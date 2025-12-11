"use client"
import { useContext } from "react"
import { AppContext } from "@/lib/context/AppContext"

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) {
    throw new Error("useAppContext must be used inside <AppProvider>")
  }
  return ctx
}
