import Footer from "@/components/Footer"
import Header from "@/components/Home/Header"
import HouseCarrousel from "@/components/Home/HouseCarrousel"
import MockHouse from "@/mocks/houses.json"

function Home() {

  const o = MockHouse[0]
  const Houses = Array.from({ length: 50 }, () => { return { ...o, _id: o._id + "d11d" + Math.random() } })
  return (
    <div className="flex flex-col gap-1">
      <Header width="200" />
      <HouseCarrousel Houses={Houses} title="Guest Favorite" />
      <HouseCarrousel Houses={Houses} title="Your whitelist" />
      <HouseCarrousel Houses={Houses} />
      <HouseCarrousel Houses={Houses} title="Stay near in Ngaoundere" />
      <HouseCarrousel Houses={Houses} title="Stay Near in Buea" />
      <Footer />
    </div>
  )
}



export default Home