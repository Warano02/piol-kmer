import { HeartSvg, RateStars } from "../Icons"
import { useAppContext } from "@/hooks/useAppContext"
import type { Houses } from "@/types"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function SingleHouse({data}:{data: Houses}) {
    const { formatPrice, whiteList, setShowWhiteListCreator } = useAppContext()
    const [house, setHouse] = useState<Houses>()
    const addToFavorite = async (id: string) => {
        setHouse(prev => {
            if (!prev) return prev; // rien à faire si prev est null
            return { ...prev, isFavorite: !prev.isFavorite };
        });
        try {
            if (!whiteList) return setShowWhiteListCreator(true)
            const ListOfIds = whiteList[0]?.elements ?? []
            const action = ListOfIds.includes(id) ? "remove" : "add"
            console.log(action);
            // simulate sending request to the api
        } catch (e) {
            console.log("Error while executing favorite action " + e)
        }
    }
    useEffect(() => {
        setHouse(data)
    }, [data])
    return house && (
        <Link to={`/rooms/${house._id}`} className="ml-4 relative w-[211px] h-[252px] ">
            <div className="relative w-full h-[195px]">
                <img src={house.icon || house.images[0].urls[0]} alt="" className="absolute h-full object-cover rounded-3xl" />
                <div className="relative w-full h-[40px]  z-1 flex items-center px-3 ">
                    {
                        house.guestFavorite && <div className="w-[105px] h-[32px] bg-[#faf6efc2] rounded-2xl flex justify-center items-center">
                            <span className="text-[11px] font-semibold text-black-secondary">Guest Favorite </span>
                        </div>
                    }

                    <button className="absolute right-5 cursor-pointer w-8 h-8 " type="button" onClick={(e) => { e.preventDefault(); addToFavorite(house._id) }}>
                        <HeartSvg className={`hover:scale-95 ${house.isFavorite ? "text-primary" : "text-[#242322c2]"} `} />
                    </button>
                </div>
            </div>

            <div className="relative w-full h-[55px] pt-1.5 px-2">
                <h3 className="text-[14px] h">{house.title} </h3>
                <div className="text-[#989898] text-[12px] flex items-center gap-1">
                    <span>{formatPrice(house.price)} monthly </span>
                    <span > •  </span>
                    <RateStars />
                    <span >{house.rating?.toFixed(1) || 2.0} </span>
                </div>
            </div>
        </Link>
    )
}

export default SingleHouse