import ImageViewer from "./ImageViewer"
import { useEffect, useRef, useState } from "react"

import type { RoomsContentProps } from "@/types/pages/Rooms"
import { useAppContext } from "@/hooks/useAppContext"
import { Stars } from "lucide-react"
import BtnPrimary from "../ux/BtnPrimary"


function RoomsContent({ House }: RoomsContentProps) {
    const { formatPrice } = useAppContext()
    const [selectedImage] = useState<string | null>(null)
    const [showHouseImages, setShowHouseImages] = useState(false)
    const [images, setImages] = useState<string[] | null>(null)
    const [isSaved, setIsSaved] = useState(false)

    const ImagesRef = useRef<HTMLDivElement>(null);
    const AmenitiesRef = useRef<HTMLDivElement>(null);
    const ReviewsRef = useRef<HTMLDivElement>(null);
    const LocationRef = useRef<HTMLDivElement>(null);
    const CardRef = useRef<HTMLDivElement>(null);

    const [scroll, setScroll] = useState<'photos' | "amenities" | "reviews" | "location" | string | null>(null);

    const [showHeader] = useState(true)
    const [rightSectionHeader, setRightSectionHeader] = useState(true);

    useEffect(() => {
        if (!images) {
            const urls: string[] = []
            House.images.forEach(imgs => {
                urls.push(...imgs.urls)
            });
            setImages(urls)
        }
    }, [images, House])

    useEffect(() => {
        if (CardRef.current) {
            const { x } = CardRef.current?.getBoundingClientRect() || 0;
            window.addEventListener("scroll", () => setRightSectionHeader(() => window.scrollY > x));
        }
    }, [CardRef]);
    const TabElem = ["Photos", "Amenities", "Reviews", "Location"]
    useEffect(() => {
        if (scroll) {
            switch (scroll) {
                case "photos":
                    window.scrollBy(
                        0,
                        ImagesRef.current?.getBoundingClientRect().top || 80 - 80
                    );
                    break;
                case "amenities":
                    window.scrollBy(
                        0,
                        AmenitiesRef.current?.getBoundingClientRect().top || 80 - 80
                    );
                    break;
                case "reviews":
                    window.scrollBy(
                        0,
                        ReviewsRef.current?.getBoundingClientRect().top || 80 - 80
                    );
                    break;
                case "location":
                    window.scrollBy(
                        0,
                        LocationRef.current?.getBoundingClientRect().top || 80 - 80
                    );
                    break;
            }
        }
    }, [scroll]);

    return (
        <>
            {showHouseImages && <ImageViewer setIsSaved={setIsSaved} isSaved={isSaved} selectedImage={selectedImage} setShowHouseImages={setShowHouseImages} images={images || [""]} />}

            <header className={`w-full bg-white fixed bottom-0 lg:top-0 lg:bottom-auto left-0  border-t lg:border-b border-borderColor shadow-top ${showHeader ? "opacity-1 z-51" : "lg:opacity-0 lg:z-0"}`}>
                <div className="max-w-[1120px] px-4 mx-auto flex items-center justify-between">
                    <ul className="hidden md:flex gap-4">
                        {
                            TabElem.map((el, i) => (
                                <li
                                    key={i}
                                    onClick={() => setScroll(el.toLocaleLowerCase())}
                                    className="text-md font-medium py-6 px-2 border-b-4 border-transparent transition duration-200 cursor-pointer hover:border-blackColor"
                                >
                                    {el}
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`gap-4 w-full justify-between md:w-fit md:justify-start py-3 md:py-0 flex md:${rightSectionHeader ? "flex" : "hidden"}`}>
                        <div className="whitespace-nowrap">
                            <span>
                                <span className="font-medium text-lg">
                                    {formatPrice(House.price)}
                                </span>
                                <span className="text-md"> night</span>
                            </span>
                            <div className="flex gap-1 items-center">
                                <span>
                                    <Stars />
                                </span>
                                <span className="text-xs font-medium">
                                    {House.rating}
                                </span>
                                <span> ·</span>
                                <span className="text-xs underline text-lightTextColor">
                                    20 reviews
                                </span>
                            </div>
                        </div>
                    </div>
                    <BtnPrimary style={{ fontSize: "1rem", width: "fit-content" }}>
                        Reserve
                    </BtnPrimary>
                </div>
            </header>

        </>
    )
}

export default RoomsContent