import Footer from "@/components/Footer"
import CurrencySettings from "@/components/Home/CurrencySettings"
import Header from "@/components/Home/Header"
import HouseCarrousel from "@/components/Home/HouseCarrousel"
// import SingleHouse from "@/components/Home/SingleHouse"
import { useAppContext } from "@/hooks/useAppContext"
import MockHouse from "@/mocks/houses.json"

function Home() {

  const { showCurrencySettings } = useAppContext()
  const o = MockHouse[0]
  const Houses = Array.from({ length: 50 }, () => { return { ...o, _id: o._id + "d11d" + Math.random() } })

  // const [isLoading,setIsLoading]=useState(true)

  return (
    <div className="flex flex-col gap-1">
      {showCurrencySettings && <CurrencySettings />}
      <Header width="200" />
      {/* <SingleHouse data={MockHouse[0]}/> */}
      <HouseCarrousel Houses={Houses} />
      <Footer />
    </div>
  )
}



export default Home