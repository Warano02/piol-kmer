import ImageViewer from "./ImageViewer"
import { useEffect, useState } from "react"

import type { RoomsContentProps } from "@/types/pages/Rooms"


function RoomsContent({ House }: RoomsContentProps) {
    const [selectedImage] = useState<string | null>(null)
    const [showHouseImages, setShowHouseImages] = useState(true)
    const [images, setImages] = useState<string[] | null>(null)
    const [isSaved,setIsSaved]=useState(false)
    useEffect(() => {
        if (!images) {
            const urls: string[] = []
            House.images.forEach(imgs => {
                urls.push(...imgs.urls)
            });
            setImages(urls)
        }
    }, [images, House])
    return (
        <>
            {showHouseImages && <ImageViewer setIsSaved={setIsSaved} isSaved={isSaved}  selectedImage={selectedImage} setShowHouseImages={setShowHouseImages} images={images || [""]} />}
        </>
    )
}

export default RoomsContent