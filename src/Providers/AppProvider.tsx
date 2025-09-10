import { AppContext } from "@/context/AppContext"
import type { User } from "@/types"
import { useState, type ReactNode } from "react"
// import icon from "@/assets/icon/Capture d'écran 2024-09-11 184648.png"
type Props = { children: ReactNode }

export const AppProvider = ({ children }: Props) => {
    // const mockUser = {
    //     id: "1225",
    //     name: 'warano',
    //     profile: icon
    // }
    const [user, setUser] = useState<User | undefined>(undefined)
    const [showCurrencySettings, setShowCurrencySettings] = useState(false)
    const value = { user, setUser, showCurrencySettings, setShowCurrencySettings }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}