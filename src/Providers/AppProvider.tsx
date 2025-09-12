import { AppContext } from "@/context/AppContext"
import type { GuestType, SingleHome, User } from "@/types"
import { useState, type ReactNode } from "react"
// import icon from "@/assets/icon/Capture d'écran 2024-09-11 184648.png"
type Props = { children: ReactNode }
const currencyList = [
  { name: "United States dollar", abr: "USD", signe: "$", ratePerUSD: 1.0000 },
  { name: "Euro", abr: "EUR", signe: "€", ratePerUSD: 0.8555 },
  { name: "British pound sterling", abr: "GBP", signe: "£", ratePerUSD: 0.7401 },
  { name: "Japanese yen", abr: "JPY", signe: "¥", ratePerUSD: 147.8771 },
  { name: "Australian dollar", abr: "AUD", signe: "$", ratePerUSD: 1.5138 },
  { name: "Canadian dollar", abr: "CAD", signe: "$", ratePerUSD: 1.3883 },
  { name: "Swiss franc", abr: "CHF", signe: "Fr.", ratePerUSD: 0.7995 },
  { name: "Chinese yuan renminbi", abr: "CNY", signe: "¥", ratePerUSD: 7.1244 },
  { name: "Swedish krona", abr: "SEK", signe: "kr", ratePerUSD: 9.3583 },
  { name: "New Zealand dollar", abr: "NZD", signe: "$", ratePerUSD: 1.6866 },
  { name: "South Korean won", abr: "KRW", signe: "₩", ratePerUSD: 1392.43 },
  { name: "Singapore dollar", abr: "SGD", signe: "$", ratePerUSD: 1.2846 },
  { name: "Norwegian krone", abr: "NOK", signe: "kr", ratePerUSD: 10.0776 },
  { name: "Indian rupee", abr: "INR", signe: "₹", ratePerUSD: 88.4459 },
  { name: "Brazilian real", abr: "BRL", signe: "R$", ratePerUSD: 5.4069 },
  { name: "Mexican peso", abr: "MXN", signe: "$", ratePerUSD: 18.6247 },
  { name: "Russian ruble", abr: "RUB", signe: "₽", ratePerUSD: 85.3558 },
  { name: "South African rand", abr: "ZAR", signe: "R", ratePerUSD: 17.5266 },
  { name: "Turkish lira", abr: "TRY", signe: "₺", ratePerUSD: 41.2923 },
  { name: "Saudi riyal", abr: "SAR", signe: "﷼", ratePerUSD: 3.7500 },
  { name: "United Arab Emirates dirham", abr: "AED", signe: "د.إ", ratePerUSD: 3.6725 },
  { name: "Malaysian ringgit", abr: "MYR", signe: "RM", ratePerUSD: 4.2196 },
  { name: "Thai baht", abr: "THB", signe: "฿", ratePerUSD: 36.9450 },
  { name: "Indonesian rupiah", abr: "IDR", signe: "Rp", ratePerUSD: 16471.34 },
  { name: "Philippine peso", abr: "PHP", signe: "₱", ratePerUSD: 58.3200 },
  { name: "Czech koruna", abr: "CZK", signe: "Kč", ratePerUSD: 22.2500 },
  { name: "Hungarian forint", abr: "HUF", signe: "Ft", ratePerUSD: 336.1850 },
  { name: "Israeli new shekel", abr: "ILS", signe: "₪", ratePerUSD: 3.3300 },
  { name: "Chilean peso", abr: "CLP", signe: "$", ratePerUSD: 962.3265 },
  { name: "Colombian peso", abr: "COP", signe: "$", ratePerUSD: 3923.1458 },
  { name: "Egyptian pound", abr: "EGP", signe: "£", ratePerUSD: 48.13 },
  { name: "Vietnamese dong", abr: "VND", signe: "₫", ratePerUSD: 26387.0 },
  { name: "Nigerian naira", abr: "NGN", signe: "₦", ratePerUSD: 1580.50 },
  { name: "Argentine peso", abr: "ARS", signe: "$", ratePerUSD: 1430.00 },
  { name: "Peruvian sol", abr: "PEN", signe: "S/.", ratePerUSD: 3.80 },
  { name: "Romanian leu", abr: "RON", signe: "lei", ratePerUSD: 4.10 },
  { name: "Icelandic krona", abr: "ISK", signe: "kr", ratePerUSD: 122.51 },
  { name: "Sri Lankan rupee", abr: "LKR", signe: "₨", ratePerUSD: 323.00 },
  { name: "Kenyan shilling", abr: "KES", signe: "Sh", ratePerUSD: 157.50 },
  { name: "Moroccan dirham", abr: "MAD", signe: "د.م.", ratePerUSD: 10.20 },
  { name: "Algerian dinar", abr: "DZD", signe: "د.ج", ratePerUSD: 146.00 },
  { name: "Ghanaian cedi", abr: "GHS", signe: "₵", ratePerUSD: 13.90 },
  { name: "Kuwaiti dinar", abr: "KWD", signe: "د.ك", ratePerUSD: 0.2996 },
  { name: "Bahraini dinar", abr: "BHD", signe: "ب.د", ratePerUSD: 0.3760 },
  { name: "Omani rial", abr: "OMR", signe: "﷼", ratePerUSD: 0.3845 },
  { name: "Qatari riyal", abr: "QAR", signe: "﷼", ratePerUSD: 3.6400 },
  { name: "Pakistani rupee", abr: "PKR", signe: "₨", ratePerUSD: 286.70 }
];

export const AppProvider = ({ children }: Props) => {
  // const mockUser = {
  //     id: "1225",
  //     name: 'warano',
  //     profile: icon
  // }
  const [user, setUser] = useState<User | undefined>(undefined)
  const [showPlaceFilter, setShowPlaceFilter] = useState(true)
  const [showCurrencySettings, setShowCurrencySettings] = useState(false)
  const [currency, setCurrency] = useState("USD")
  const [Homes, setHomes] = useState<SingleHome[] | []>([])
  const [guesFavorite, setGuesFavorite] = useState<SingleHome[] | []>([])
  const [destination, setDestination] = useState<string | null>("")
  const [selectedDay, setSelectedDay] = useState<Date |string>(new Date())
  const [selectedEnd, setSelectedEnd] = useState<Date |string>("")
  const [guests, setGuests] = useState<GuestType>({ adults: 0, children: 0, infant: 0, pets: 0 })
  const formatPrice = (price: number) => {
    const rate = currencyList.find((r) => r.abr == currency)
    return !rate ? `$ ${price}` : `${rate?.signe} ${Math.floor(price * rate?.ratePerUSD)}`
  }

  const addGuesFavorite = async (id: string) => {
    const home = Homes.find(el => el.id === id)
    if (!home) return
    setGuesFavorite(prev => [...prev, home])
  }

  const result = guests.adults! > 0 ? `${guests.adults} Adult, ${guests.children} Children.` : null

  const value = { result, selectedEnd, guests, setGuests, setSelectedEnd, selectedDay, setSelectedDay, guesFavorite, destination, setDestination, Homes, setHomes, addGuesFavorite, setGuesFavorite, user, formatPrice, setUser, showPlaceFilter, setShowPlaceFilter, showCurrencySettings, currencyList, currency, setCurrency, setShowCurrencySettings }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}