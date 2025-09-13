// import CarrouselImages from "@/components/Home/CarrouselImages"
import CurrencySettings from "@/components/Home/CurrencySettings"
 import Header from "@/components/Home/Header"
 import { useAppContext } from "@/hooks/useAppContext"
// import type { SingleHome } from "@/types"
// import { useState } from "react"
// //mock
// import icon from "@/assets/icon/icon.png"


function Home() {
  const { showCurrencySettings } = useAppContext()
  // const [data] = useState<SingleHome[] | undefined>(Array.from({length:50}, () => {
  //   return {
  //     id: "d4d5f",
  //     src: icon,
  //     price: 200,
  //     title: "Condo in Yaounde"
  //   }
  // }))
  return (
    <div className="flex flex-col gap-1">
      {showCurrencySettings && <CurrencySettings />}
      <Header width="200" />
      {/* <CarrouselImages title="Stay Near" link="/homes/near" data={data} /> */}
    </div>
  )
}



export default Home