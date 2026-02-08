"use client"
import { Calendar1, CalendarCheck, Zap } from "lucide-react"
import { useState } from "react"

function InstantBookinkClient() {
    const [selected, setSelected] = useState(1)
    return (
        <div className='space-y-5 mt-6'>
            <div className={`flex justify-between p-4 rounded-[25px] border items-center ${selected == 1 ? "border-2 border-black bg-[#312f2f21]" : ""} cursor-pointer`} onClick={() => setSelected(1)}>
                <div className="space-y-2 flex-1">
                    <h1 className="text-xl font-bold text-gray-800">Approve your first 5 bookings</h1>
                    <span className="text-xs text-green-500">Recommended</span>
                    <p className="w-[80%] text-gray-500">Start by reviewing reservation request, then switch to instant. <br />Book, so guest can book automatically. </p>
                </div>
                <CalendarCheck size={36}/>
            </div>
            <div className={`flex justify-between p-4 rounded-[25px] border ${selected == 2 ? "border-2 border-black bg-[#312f2f21]" : ""} cursor-pointer`} onClick={() => setSelected(2)}>
                <div className="space-y-2 flex-1">
                    <h1 className="text-xl font-bold text-gray-800">Use Instant Book</h1>
                    <p className="w-[80%] text-gray-500">Let guest book automatically.</p>
                </div>
                <Zap size={36} />
            </div>
        </div>
    )
}

export default InstantBookinkClient