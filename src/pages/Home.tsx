import CurrencySettings from "@/components/Home/CurrencySettings"
import Header from "@/components/Home/Header"
import { TypographyH2 } from "@/components/Typography/H"
import { useAppContext } from "@/hooks/useAppContext"


function Home() {
  const { showCurrencySettings } = useAppContext()
  return (
    <div className="flex flex-col gap-1">
      {showCurrencySettings && <CurrencySettings />}
      <Header />
      <TypographyH2 text="Stay Near"/>
    </div>
  )
}

export default Home