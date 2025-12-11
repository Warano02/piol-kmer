"use client"
import { AppContext } from "@/lib/context/AppContext"
import type { GuestType, Houses, User, WhiteList } from "@/types"
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react"
// import icon from "@/assets/icon/Capture d'écran 2024-09-11 184648.png"
type Props = { children: ReactNode }


const languageList = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
]
export const AppProvider = ({ children }: Props) => {
  const router = useRouter()


  const navigate=(link:string)=>{
router.push(link)
  }
const AppName="Airbnb"
  const [user, setUser] = useState<User | undefined>(undefined)
  const [showPlaceFilter, setShowPlaceFilter] = useState(true)
  const [showCurrencySettings, setShowCurrencySettings] = useState(false)
  const [Homes, setHomes] = useState<Houses[] | []>([])
  const [guesFavorite, setGuesFavorite] = useState<Houses[] | []>([])
  const [destination, setDestination] = useState<string | null>("")
  const [selectedDay, setSelectedDay] = useState<Date | string>(new Date())
  const [selectedEnd, setSelectedEnd] = useState<Date | string>("")
  const [guests, setGuests] = useState<GuestType>({ adults: 0, children: 0, infant: 0, pets: 0 })
  const [whiteList, setWhiteList] = useState<WhiteList>(null)
  const [showWhiteListCreator, setShowWhiteListCreator] = useState(false)
  const [showModal, setShowModal] = useState(false)
 

  const addGuesFavorite = async (id: string) => {
    const home = Homes.find(el => el._id === id)
    if (!home) return
    setGuesFavorite(prev => [...prev, home])
  }

  const createWhiteList = async (name: string) => {
    try {
      setWhiteList((prev) => {
        if (!prev) return [{ name, elements: [] }]
        return [...prev, { name, elements: [] }]
      })
    } catch (e) {
      console.log("Error occured when trying to Create List " + e)
    }
  }


  const result = guests.adults! > 0 ? `${guests.adults} Adult, ${guests.children} Children.` : null

  const value = { showModal,AppName,navigate, setShowModal, result, selectedEnd, showWhiteListCreator, setShowWhiteListCreator, guests, whiteList, createWhiteList, setWhiteList, setGuests, setSelectedEnd, selectedDay, setSelectedDay, guesFavorite, destination, setDestination, Homes, setHomes, addGuesFavorite, setGuesFavorite, user, setUser, showPlaceFilter, setShowPlaceFilter, showCurrencySettings, setShowCurrencySettings }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}