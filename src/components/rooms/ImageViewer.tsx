import { useEffect, useState } from "react"

import type { ImagesViewerProps } from "@/types/pages/Rooms";
import { ArrayRightHome, HeartSvg, LeftArrow2 } from "../Icons";

function ImageViewer({ setShowHouseImages, selectedImage, images, isSaved, setIsSaved }: ImagesViewerProps) {
    const [counter, setCounter] = useState(images.indexOf(selectedImage!))
    const [currentImage, setCurentImage] = useState(selectedImage)
    useEffect(() => {
        setCurentImage(() => images[counter])
    }, [counter, images])

    return (
        <section className="fixed top-0 left-0 w-full h-full z-51 bg-black p-10 select-none">
            <header className="flex items-center justify-between">
                <button onClick={() => setShowHouseImages(false)} className="bg-black cursor-pointer text-white hover:bg-gray-600 flex items-center justify-center gap-2 font-semibold px-4 py-2 rounded-md">
                    <Times />
                    <span className="tracking-2">Close</span>
                </button>
                <p className="text-md text-white font-medium">
                    {counter + 1} / {images.length}
                </p>
                <button className="bg-black text-white hover:bg-gray-600 flex items-center justify-center gap-2 font-semibold px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => {
                        setIsSaved((prev) => !prev)
                        // Appel de la fonction pour ajouter a la whiteList 
                    }}>
                    <HeartSvg
                        className={`h-[20px] w-[20px] stroke-white stroke-[3] ${isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"
                            }`}
                    />{" "}
                    <span className="tracking-2 h">Save</span>

                </button>
            </header>

            <main className="pb-20 w-full h-full flex items-center justity-center">
                <div className="w-8/12 rounded-md mx-auto h-full max-h-[calc(100vh-200px)]">
                    <img
                        src={currentImage || ""}
                        className="rounded-md w-full h-full object-cover "
                        alt="House Images"
                    />
                </div>
                {counter >= 1 && (
                    <button
                        onClick={() => setCounter(counter >= 1 ? counter - 1 : counter)}
                        type="button"
                        className="cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 rounded-full absolute top-1/2 -translate-y-1/2 left-6 flex items-center justify-center w-10 h-10 border border-borderColor"
                    >
                        <LeftArrow2 color="white" />
                    </button>
                )}
                {counter < images.length - 1 && (
                    <button
                        onClick={() => setCounter(counter < images.length - 1 ? counter + 1 : counter)}
                        type="button"
                        className="cursor-pointer hover:bg-gray-400 hover:bg-opacity-40 rounded-full absolute top-1/2 -translate-y-1/2 right-6 flex items-center justify-center w-10 h-10 border border-borderColor"
                    >
                        <ArrayRightHome color="white" />
                    </button>
                )}
            </main>
        </section>
    )
}

const Times = () => {
    return (
        <svg
            viewBox="0 0 12 12"
            role="presentation"
            focusable="false"
            className="block fill-current w-[12px] h-[12px]"
        >
            <path
                d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
                fillRule="evenodd"
            ></path>
        </svg>
    );
};


export default ImageViewer