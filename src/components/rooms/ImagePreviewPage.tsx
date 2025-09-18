import type { ImagePreviewPageProps } from "@/types/pages/Rooms"
import { useEffect } from "react";
import { ArrayLeftHome } from "../Icons";
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
            <div className="w-full h-16 bg-[#f8f8f828] flex justify-between items-center">
                <button onClick={() => closer()} className="w-8 h-8 rounded-full  hover:bg-white-secondary cursor-pointer flex justify-center items-center">
                    <ArrayLeftHome />
                </button>
                <div className=" flex gap-2">
                    <ShareLinks />
                    <AddToWhiteList isSaved={isSaved} />
                </div>
            </div>
        </section>
    )
}

export default ImagePreviewPage