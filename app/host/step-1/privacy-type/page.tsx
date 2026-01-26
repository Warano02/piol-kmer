"use client";
import { DoorOpen, Home, Hotel } from "lucide-react"
import { useState } from "react"

function page() {
    const [selected, setSelected] = useState('')
    const typeOfEntrie = [
        {
            icon: <Home size={50} />,
            label: "An entire palce",
            desc: "Guest have the place to themselves.",
        },
        {
            icon: <DoorOpen size={50} />,
            label: "A room",
            desc: "Guest have their own room in a home, plus access to shared spaces."
        },
        {
            icon: <Hotel size={50} />,
            label: "A shared room in a hostel",
            desc: "Guest sleep in a professionally managed hostel with staff onsite 24/7"
        }
    ]
    return (
        <div className="w-full h-full flex flex-col items-center mt-6 gap-6">
            <h1 className="text-2xl font-bold text-center">
                What type of place will guests have?
            </h1>
            <div className="w-2/3 h-full flex flex-col gap-4">
                {
                    typeOfEntrie.map((entrie, idx) => (
                        <div onClick={()=>setSelected(entrie.label.toLocaleLowerCase())} key={idx} className={`w-full h-[100px] flex px-4 justify-between items-center border rounded-2xl cursor-pointer   ${selected === entrie.label.toLocaleLowerCase()
                                ? "border-gray-800 border-2 bg-gray-100"
                                : "border-gray-300 hover:border-gray-500"
                            }`} >
                            <div className="flex-1 flex flex-col gap-2">
                                <h1 className="font-bold text-xl h">{entrie.label} </h1>
                                <p className="text-[18px] text-gray-500 p">{entrie.desc} </p>
                            </div>
                            {entrie.icon}
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default page