"use client"
import { ReactNode } from "react"
import Provider from "@/lib/Providers/Provider"
import { useAppContext } from "@/hooks/useAppContext"
import CurrencySettings from "@/components/Home/CurrencySettings"

function LayoutContent() {
  const { showCurrencySettings } = useAppContext()
  return (
    <>
      {showCurrencySettings && <CurrencySettings />}
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
