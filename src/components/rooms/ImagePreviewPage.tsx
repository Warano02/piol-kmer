import type { ImagePreviewPageProps } from "@/types/pages/Rooms"
import { useEffect } from "react";

function ImagePreviewPage({ setShowNewPage, data, setHider }: ImagePreviewPageProps) {
    console.log(setShowNewPage, data);
    useEffect(() => {
        setHider(false)
    })
    return (
        <section className="fixed top-0 left-0 w-full h-full  z-50 bg-white  select-none">
            <div className="w-full h-16 bg-red-50">

            </div>
        </section>
    )
}

export default ImagePreviewPage