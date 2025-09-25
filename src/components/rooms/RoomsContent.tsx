import ImageViewer from "./ImageViewer"
import { useEffect, useRef, useState } from "react"

import type { RoomsContentProps } from "@/types/pages/Rooms"
import { useAppContext } from "@/hooks/useAppContext"
import { Stars } from "lucide-react"
import BtnPrimary from "../ux/BtnPrimary"
import { Link } from "react-router-dom"
import { ArrayLeftHome } from "../Icons"
import ImagePreviewer from "./ImagePreviewer"
import ImagePreviewPage from "./ImagePreviewPage"
import ShareLinks from "../Common/ShareLinks"
import AddToWhiteList from "../Common/AddToWhiteList"
import Infos from "./Infos"
import Date_GuestsPickerCard from "./Date_GuestsPickerCard"
import Reviews from "./Reviews"
import Location from "./Location"

function RoomsContent({ House, setHider }: RoomsContentProps) {
    const { formatPrice } = useAppContext()
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [showHouseImages, setShowHouseImages] = useState(false)
    const [showNewPage, setShowNewPage] = useState(false)

    const [images, setImages] = useState<string[] | null>(null)
    const [isSaved, setIsSaved] = useState(false)

    const ImagesRef = useRef<HTMLDivElement>(null);
    const AmenitiesRef = useRef<HTMLDivElement>(null);
    const ReviewsRef = useRef<HTMLDivElement>(null);
    const LocationRef = useRef<HTMLDivElement>(null);
    const CardRef = useRef<HTMLDivElement>(null);

    const [scroll, setScroll] = useState<'photos' | "amenities" | "reviews" | "location" | string | null>(null);

    const [showHeader, setShowHeader] = useState(false)
    const [rightSectionHeader, setRightSectionHeader] = useState(false);

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

    useEffect(() => {
        if (!ImagesRef.current) return;
        const { bottom } = ImagesRef.current.getBoundingClientRect();
        const onScroll = () => setShowHeader(window.scrollY > bottom);

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [ImagesRef]);

    return (
        <>
            {showHouseImages && images && <ImageViewer setHider={setHider} setIsSaved={setIsSaved} isSaved={isSaved} selectedImage={selectedImage} setShowHouseImages={setShowHouseImages} images={images} />}
            {showNewPage && House && <ImagePreviewPage setSelectedImage={setSelectedImage} setShowHouseImages={setShowHouseImages} setHider={setHider} setShowNewPage={setShowNewPage} isSaved={isSaved} data={House.images} />}
            <header className={`w-full bg-white fixed bottom-0 lg:top-0 lg:bottom-auto left-0  border-t lg:border-b border-borderColor shadow-top ${showHeader ? "opacity-1 z-51" : "lg:opacity-0 lg:z-90"}`}>
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

            <main className="w-full relative block lg:hidden">
                <nav className="absolute top-0 left-0 w-full p-2 z-20 flex items-center justify-between">
                    <Link to={"/"} className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                        <ArrayLeftHome />
                    </Link>
                    <div className="w-full min-h-[30vh]">
                        {images && (<img src={images[0]} className="w-full object-cover" alt="" />)}
                    </div>
                </nav>
            </main>

            <section className="w-full px-4">
                <div className="max-w-[1120px] mx-auto py-8">
                    {/* Title of the House */}
                    <div className="text-2xl lg:text-3xl font-medium mb-2 w-full flex justify-between">
                        <h2 className="h"> {House.title}</h2>
                        <div className="gap-4 items-center hidden lg:flex">
                            <ShareLinks />
                            <AddToWhiteList isSaved={isSaved} />
                        </div>
                    </div>

                    {/* Images Preview  */}
                    <div ref={ImagesRef} className="hidden lg:block h-screen rounded-2xl overflow-hidden my-8 relative min-h-[20vh] max-h-[40vh]">
                        {images && <ImagePreviewer setShowNewPage={setShowNewPage} images={images} setSelectedImage={setSelectedImage} setShowHouseImages={setShowHouseImages} />}
                    </div>

                    <div className="flex gap-16 relative mb-8 mt-8 lg:mt-0">
                        <Infos House={House} />
                        <div className="hidden lg:block">
                            <Date_GuestsPickerCard price={House.price} rating={House.rating} reviews={House.reviews.length} />
                        </div>
                    </div>
                    <Reviews />
                    <Location />
                </div>
            </section>
        </>
    )
}

export default RoomsContent