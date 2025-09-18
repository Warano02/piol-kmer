import Header from "@/components/Home/Header"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MocksHouseData from "@/mocks/houses.json"
import type { Images } from "@/types"
import RoomsContent from "@/components/rooms/RoomsContent"
import Footer from "@/components/Footer"

function Rooms() {
  const { id } = useParams()
  const [imagesData, setImagesData] = useState<Images[] | null>(null)

  useEffect(() => {
    if (!imagesData) {
      setImagesData(() => MocksHouseData[0].images)
      // Lance la requête vers l'api quand je l'aurais crée mais pour le moment justilise les donné Mocks

    }
  }, [id, imagesData])
  return (
    <>
      <Header width="max-w-[1120px] hidden lg:flex" position="relative" />
      <RoomsContent />
      <Footer />
    </>
  )
}

export default Rooms