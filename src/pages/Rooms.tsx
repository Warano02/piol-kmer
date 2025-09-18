import Header from "@/components/Home/Header"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MocksHouseData from "@/mocks/houses.json"
import type { Houses } from "@/types"
import RoomsContent from "@/components/rooms/RoomsContent"
import Footer from "@/components/Footer"
import Loader from "@/components/Loaders/Loader"

function Rooms() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [Home, setHome] = useState<Houses | null>(null)

  useEffect(() => {
    if (!Home) {
      setHome(() => MocksHouseData[0])
      // Lance la requête vers l'api quand je l'aurais crée mais pour le moment justilise les donné Mocks
      setIsLoading(false)
    }

  }, [id, Home])
  return (
    <>
      <Header width="max-w-[1120px] hidden lg:flex" position="relative" />
      {isLoading && <Loader />}
      {Home && <RoomsContent House={Home} />}
      <Footer />
    </>
  )
}

export default Rooms