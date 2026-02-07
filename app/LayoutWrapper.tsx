"use client"
import { ReactNode } from "react"
import Provider from "@/lib/Providers/Provider"
import { useAppContext } from "@/hooks/useAppContext"
import Settings from "@/components/Home/Settings"

function LayoutContent() {
  const { showCurrencySettings } = useAppContext()
  return (
    <>
      {showCurrencySettings && <Settings />}
    </>
  )
}

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <LayoutContent /> 
      {children}
    </Provider>
  )
}
