"use client"
import { useAppContext } from "@/hooks/useAppContext"
import { Svg } from "../page"
import Progress from "@/components/Hosting/Progress"

function page() {
    const { AppName } = useAppContext()
    return (
        <div className="w-full h-full relative">
            <header className={`w-full h-22 flex px-4 items-center justify-between border `} >
                <span>
                    <Svg />
                </span>
                <button className="py-2 px-6 rounded border border-black hover:border-gray cursor-pointer font-semibold p">
                    Exit
                </button>
            </header>
            <div className="w-full h-[490px]  my-2 gap-4 flex flex-col md:flex-row px-2">
                <div className="flex-1 h-full  flex justify-center px-8 flex-col gap-5 ">
                    <h3 className="font-bold h text-2xl text-gray-700">Step 1</h3>
                    <h1 className="text-5xl font-bold h">Tell us about your place</h1>
                    <p className="text-xl p">In this step, we'll ask you wich type of property you have and if guest will book the entire place or just a room. Then let us know the location and how many guest can stay</p>
                </div>
                <div className="flex-1  ">
                    <video autoPlay
                        muted
                        playsInline
                        className="w-full h-full rounded-xl " src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"></video>
                </div>
            </div>
            <Progress />
        </div>
    )
}

export default page