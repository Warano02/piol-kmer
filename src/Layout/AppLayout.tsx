import CurrencySettings from "@/components/Home/CurrencySettings"
import { useAppContext } from "@/hooks/useAppContext"
import { Outlet } from "react-router-dom"

function AppLayout() {
    const { showCurrencySettings } = useAppContext()
    return (
        <div>
            {showCurrencySettings && <CurrencySettings />}
            <Outlet />

        </div>
    )
}

export default AppLayout