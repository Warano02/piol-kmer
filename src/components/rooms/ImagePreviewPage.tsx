import type { ImagePreviewPageProps } from "@/types/pages/Rooms"
import { useEffect } from "react";
import { ArrayLeftHome } from "../Icons";
import { HashLink } from 'react-router-hash-link';
import ShareLinks from "../Common/ShareLinks";
import AddToWhiteList from "../Common/AddToWhiteList";
import Gallery from "./Gallery";

function ImagePreviewPage({ setShowNewPage, data, setHider, isSaved,setShowHouseImages,setSelectedImage }: ImagePreviewPageProps) {
    const closer = () => {
        setShowNewPage(false)
        setHider(true)
    }

    useEffect(() => {
        setHider(false)
    })

    return (
        <div className="fixed top-0 left-0 w-full h-full  z-50 bg-white px-5 select-none overflow-y-scroll">
            <div className="sticky top-0 w-full h-16 bg-white flex justify-between items-center mb-1 z-10">
                <button onClick={() => closer()} className="w-8 h-8 rounded-full  hover:bg-white-secondary cursor-pointer flex justify-center items-center">
                    <ArrayLeftHome />
                </button>
                <div className=" flex gap-2">
                    <ShareLinks />
                    <AddToWhiteList isSaved={isSaved} />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-5">
                <h2 className="text-2xl lg:text-3xl h">Photo tour</h2>
                <div className="w-full flex gap-2  px-2 min-h-[150px] relative">
                    {
                        data.map((section, index) => (
                            <HashLink to={`#${section.name}`} key={index} className="flex w-41 h-36 flex-col gap-2 ">
                                <div className="w-full h-32 relative image-cover">
                                    <img src={section.urls[0]} alt="" className="w-full shadow min-h-full h-full object-cover" />
                                </div>
                                <span className="h2 text-[18px]">{section.name} </span>
                            </HashLink>
                        ))
                    }
                </div>
            </div>

            {/** Main section of the page */}
            <main className="flex flex-col gap-4 mt-6 ">

                {
                    data.map((group, groupIndex) => (
                        <section key={groupIndex} id={group.name} className="flex w-full px-5 relative">
                            <div className="flex-1">
                                <h1 className="h text-2xl md:text-3xl ">{group.name} </h1>
                            </div>
                            <div className="flex-1">
                                <Gallery images={group.urls} setShowHouseImages={setShowHouseImages} setSelectedImage={setSelectedImage} />
                            </div>

                        </section>
                    ))
                }
            </main>

        </div>
    )
}

export default ImagePreviewPage