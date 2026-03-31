import { useAppContext } from "@/hooks/useAppContext"
import type { TabPropsForSingleRoom } from "@/types/pages/Rooms"
import GuestsPicker from "../Home/GuestsPicker"

function Guests({ tab,setTab }: TabPropsForSingleRoom) {
    const { result } = useAppContext()
   
    return (
        <div className="p-3 relative select-none">

            <div className="cursor-pointer" onClick={() => setTab(tab === "guests" ? null : "guests")}>
                <span className="block text-xs font-semibold">GUESTS</span>
                <span className="block font-medium mt-1">{result || "Add guests"}</span>
            </div>
            {
                tab === "guests" && (
                    <div className="absolute top-full left-0 w-full">
                        <GuestsPicker css="rounded-lg border border-lightBorderColor shadow px-5 bg-white" />
                    </div>
                )
            }
        </div>
    )
}

export default Guests