"use client"
import Header from "@/components/Home/Header"
import { useEffect, useState } from "react"
import type { Houses } from "@/types"
import RoomsContent from "@/components/rooms/RoomsContent"
import Footer from "@/components/Footer"
import Loader from "@/components/Loaders/Loader"

// change when api will be created 
import MocksHouseData from "@/mocks/houses.json"

interface RoomProps{
    id:string
}

function Rooms(params:RoomProps) {
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)
  const [Home, setHome] = useState<Houses | null>(null)
  const [hider, setHider] = useState(true)

  useEffect(() => {
    if (!Home) {
      setHome(() => MocksHouseData[0])
      // Lance la requête vers l'api quand je l'aurais crée mais pour le moment justilise les donné Mocks
      setIsLoading(false)
    }

  }, [id, Home])
  return (
    <>
      {hider && <Header width="max-w-[1120px] hidden lg:flex" position="relative" />}
      {isLoading && <Loader />}
      {Home && <RoomsContent House={Home} setHider={setHider} />}
      {hider && <Footer />}
    </>
  )
}

export default Rooms