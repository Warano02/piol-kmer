import CurrencySettings from "@/components/Home/CurrencySettings"
import Header from "@/components/Home/Header"
import { useAppContext } from "@/hooks/useAppContext"


function Home() {
  const {showCurrencySettings}=useAppContext()
  return (
    <>
          {showCurrencySettings&&<CurrencySettings/>}
      <Header />
    </>
  )
}

export default Home