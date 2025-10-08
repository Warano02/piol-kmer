"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Home/Header"
import { Minimize2, Minus, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import MockHouse from "@/mocks/houses.json"
import type { Houses } from "@/types"
import { HeartSvg, RateStars } from "@/components/Icons"
import { useAppContext } from "@/hooks/useAppContext"
import Thumb from "@/assets/icon/Screenshot 2025-10-07 150236.png"
import Image from "next/image"
import Link from "next/link"
function Search() {
    const o = MockHouse[0]

    const [Home, setHome] = useState<Houses[]>([])
    const [isLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentHouses, setCurrentHouses] = useState<Houses[]>([])
    useEffect(() => {
        const data = Array.from({ length: 50 }, () => ({
            ...o,
            _id: o._id + "d11d" + Math.random(),
        }))
        setHome(data)
    }, [])

    useEffect(() => {
        setPages(Math.ceil(Home.length / 18))
    }, [Home])

    useEffect(() => {
        const startIndex = (currentPage - 1) * 18
        setCurrentHouses(Home.slice(startIndex, startIndex + 18))
    }, [currentPage, Home])

    return (
        <>
            <Header />
            <section className="w-full p-4 max-h-[520px] flex justify-between gap-1 overflow-y-auto hide-scrollbar mb-4">
                <div className="flex-1 px-2 py-4">
                    <div className="w-full flex justify-between my-2 px-4">
                        <span className="h">
                            Over, {Home.length} homes
                        </span>
                        <div className="flex gap-1">
                              <Image src={Thumb} alt="image of thumb" className="-mt-2" />
                            <span className="h">
                                Prices include all fees
                            </span>

                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        {!isLoading && currentHouses.map((house, idx) => (
                            <SingleHome Home={house} key={idx} />
                        ))}
                    </div>
                    {
                        pages > 1 && <div className="flex items-center justify-center gap-2 my-4 w-full  text-gray-500 font-medium">
                            <button type="button" aria-label="prev" className="rounded-full bg-slate-200/50 cursor-pointer" onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" strokeWidth=".078" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-2 text-sm font-medium">
                                {
                                    [...Array(pages)].map((_, idx) => (
                                        <button key={idx} onClick={() => setCurrentPage(idx + 1)} className={`h-10 w-10 flex items-center justify-center aspect-square border-indigo-200 rounded-full cursor-pointer ${currentPage - 1 === idx && "bg-black text-white"}`} >{idx + 1} </button>
                                    ))
                                }

                            </div>

                            <button type="button" aria-label="next" className="rounded-full bg-slate-200/50 cursor-pointer" onClick={() => setCurrentPage((prev) => prev < pages ? prev + 1 : prev)}>
                                <svg className="rotate-180" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" stroke-width=".078" />
                                </svg>
                            </button>
                        </div>
                    }
                </div>
                <div className="sticky top-1/2 -translate-y-1/2">
                    <div className="relative w-[474px] h-[508px] rounded-2xl bg-secondary">
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
                </div>
            </section>

            <Footer />
        </>
    )
}
const SingleHome = ({ Home }: { Home: Houses }) => {
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
        setHouse(Home)
    }, [])
    return <>
        {house && <Link href={`/rooms/${house._id}`} className="ml-4 relative w-[211px] h-[282px] ">
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

            <div className="relative w-full pt-1.5 px-2">
                <div className="flex items-center justify-between text-[16px] ">
                    <h3 className="h">{house.title.length > 22 ? house.title.slice(0, 20).concat('...') : house.title} </h3>
                    <div className="flex items-center gap-2">
                        <RateStars />
                        <span >{house.rating?.toFixed(1) || 2.0} </span>
                    </div>
                </div>
                <div className="text-[#989898] text-[16px] flex flex-col items-center gap-1">
                    <p className="p">{Home.about.slice(0, 25).concat('...')} </p>
                    <span className="font-medium">{formatPrice(house.price)} monthly </span>
                </div>
            </div>
        </Link>
        }
    </>
}

export default Search