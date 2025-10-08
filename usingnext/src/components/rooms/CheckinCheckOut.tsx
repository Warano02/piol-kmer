import { useAppContext } from "@/hooks/useAppContext"
import type { CheckinCheckOutProps } from "@/types/pages/Rooms"

function CheckinCheckOut({ rounded, setSelection ,setTab}: CheckinCheckOutProps) {
    const { selectedDay, selectedEnd } = useAppContext()
    const seter=(v:"check-in" | "check-out")=>{
        setSelection(v)
        setTab((prev)=> prev === "date" ? null : "date")
    }
    return (
        <div className={`flex border-b border-darkBorderColor w-full ${rounded ? "rounded-lg" : ""}`}>
            <div className={`w-1/2 p-3 relative z-10 select-none cursor-pointer border-r border-darkBorderColor`} onClick={() => seter("check-in")}>
                <span className="block text-xs font-semibold">CHECKIN</span>
                <span className="block font-medium mt-1">
                    {selectedDay.toLocaleString().split(",")[0] || "Add dates"}
                </span>
            </div>
            <div className={`w-1/2 p-3 relative z-10 select-none cursor-pointer border-r border-darkBorderColor`} onClick={() => seter("check-out")}>
                <span className="block text-xs font-semibold">CHECKOUT</span>
                <span className="block font-medium mt-1">
                    {selectedEnd.toLocaleString().split(",")[0] || "Add dates"}
                </span>
            </div>

        </div>
    )
}

export default CheckinCheckOut