import { Minimize2, Minus, Plus, Search } from "lucide-react"
import React, { useState } from "react"

function Location() {
    const [isLoading] = useState(true)
    const [isSearching, setIsSearching] = useState(true)
    const text = `The studio is ideally located in the Essos neighborhood, one of the most vibrant and sought-after areas in Yaoundé.

It is situated just a few steps from Hôtel du Plateau, on the street of former Minister Garga Haman Hadji—a quiet and easily accessible street known to`
    return (
        <div className="w-full py-5 flex flex-col gap-6 relative">
            <h1 className="text-2xl h text-bold">Where you’ll be</h1>
            {/* To add map later */}
            <div className={`w-full h-[414px] rounded-2xl bg-[#f8f8f8] ${isLoading && "animate-pulse"} relative`}>
                {!isLoading && <div className="absolute top-4 left-4">
                    {isSearching && <button className="w-10 h-10 cursor-pointer rounded-full bg-white flex items-center justify-center text-extrabold" onClick={() => setIsSearching(true)}>
                        <Search className="w-[20px] h-[20px] text-bold" />
                    </button>}
                    {/* Implement it later */}
                    {isSearching && <div onClick={() => setIsSearching(false)} className="w-80 h-56 rounded-2xl bg-white p-4 flex flex-col gap-4 shadow-md transition-all duration-200 ease-in-out relative"
                    >

                    </div>}
                </div>
                }
                {isLoading && <div className="w-full h-full flex space-x-2 items-center justify-center">
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                </div>}


                <div className="absolute top-4 right-4 flex flex-col gap-4">
                    <button className="w-10 h-10 cursor-pointer rounded-full bg-white flex items-center justify-center text-extrabold">

                        <Minimize2 className="w-[20px] h-[20px] text-bold text-[#4e4c4c] " />
                    </button>

                    <div className="w-12 h-23 rounded-4xl bg-white relative flex flex-col   shadow-md overflow-hidden">
                        <button className="z-full h-1/2 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out ">
                            <Plus />
                        </button>
                        <button className="z-full h-1/2 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out ">
                            <Minus />
                        </button>

                    </div>

                </div>

            </div>

            <h2 className="text-bold h">Yaoundé, Région du Centre, Cameroon </h2>
            <p className="text-[18px] text-[#222222] leading-10 w-full p">
                {text.length > 300 ? text.slice(0, 300) + "..." : text}
            </p>
            {text.length > 300 && <h6 className="text-bold underline h text-xl cursor-pointer">Show All</h6>
            }
        </div>
    )
}

export default React.memo(Location)