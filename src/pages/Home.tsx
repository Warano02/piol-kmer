import Footer from "@/components/Footer"
import CurrencySettings from "@/components/Home/CurrencySettings"
import Header from "@/components/Home/Header"
import HouseCarrousel from "@/components/Home/HouseCarrousel"
// import SingleHouse from "@/components/Home/SingleHouse"
import { useAppContext } from "@/hooks/useAppContext"
// import MockHouse from "@/mocks/houses.json"
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
  // const [data, setData] = useState<Houses | undefined>(undefined)
  // const [isLoading,setIsLoading]=useState(true)

  return (
    <div className="flex flex-col gap-1">
      {showCurrencySettings && <CurrencySettings />}
      <Header width="200" />
      {/* <SingleHouse data={MockHouse[0]}/> */}
      <HouseCarrousel/>
      <Footer/> 
    </div>
  )
}



export default Home