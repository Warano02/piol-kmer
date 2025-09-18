import type { ImagePreviewPageProps } from "@/types/pages/Rooms"
import { useEffect } from "react";
import { ArrayLeftHome } from "../Icons";
import { HashLink } from 'react-router-hash-link';
import ShareLinks from "../Common/ShareLinks";
import AddToWhiteList from "../Common/AddToWhiteList";

function ImagePreviewPage({ setShowNewPage, data, setHider, isSaved }: ImagePreviewPageProps) {
    console.log(data);
    const closer = () => {
        setShowNewPage(false)
        setHider(true)
    }
    useEffect(() => {
        setHider(false)
    })

    return (
        <section className="fixed top-0 left-0 w-full h-full  z-50 bg-white px-5 select-none">
            <div className="sticky top-0 w-full h-16 bg-[#f8f8f828] flex justify-between items-center mb-1">
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
                <div className="w-full flex gap-2 flex-wrap px-2 min-h-[150px] relative">
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

        </section>
    )
}

export default ImagePreviewPage