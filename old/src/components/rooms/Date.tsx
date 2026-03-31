import { useAppContext } from "@/hooks/useAppContext"
import CheckinCheckOut from "./CheckinCheckOut"
import { differenceInDays, format } from "date-fns"
import DatePicker from "../Home/DatePicker"
import { useState } from "react"
import type { TabPropsForSingleRoom } from "@/types/pages/Rooms"


function Date({ tab,setTab }: TabPropsForSingleRoom) {
    const { selectedDay, selectedEnd } = useAppContext()
    const [selection,setSelection] = useState<"check-in" | "check-out" >("check-in")
    return (
        <>
            <CheckinCheckOut rounded={false} setSelection={setSelection} setTab={setTab}/>

            {
                tab === "date" && (
                    <div className="absolute z-20 -top-8 -right-8 w-[48rem] bg-white p-6 rounded-xl shadow-custom border border-borderColor pt-32">
                        <div className="absolute top-8 right-8 rounded-lg border border-b-0 border-darkBorderColor flex w-[22.1rem]">
                            <CheckinCheckOut rounded={true} setSelection={setSelection} setTab={setTab} />
                        </div>
                        <div className="absolute top-8 left-8">
                            <h1 className="text-xl font-semibold">
                                {(selectedDay &&
                                    selectedEnd &&
                                    differenceInDays(selectedEnd, selectedDay) + " nights") ||
                                    "Select dates"}
                            </h1>
                            <p className="text-sm mt-1 text-lightTextColor font-normal">
                                {(selectedDay &&
                                    selectedEnd &&
                                    format(selectedDay, "MMM-dd,yyyy") +
                                    " - " +
                                    format(selectedEnd, "MMM-dd,yyyy")) ||
                                    "Add your travel dates for exact pricing"}
                            </p>
                        </div>
                        <DatePicker selection={selection} />
                    </div>)
            }
        </>

    )

}
export default Date