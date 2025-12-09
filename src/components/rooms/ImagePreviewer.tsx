import type { RoomImagesPreviewProps } from "@/types/pages/Rooms"
import { Grid } from "../Icons"

function ImagePreviewer({ images, setSelectedImage, setShowHouseImages,setShowNewPage }: RoomImagesPreviewProps) {
    const seter = (selected: string): void => {
        setShowHouseImages(true)
        setSelectedImage(selected)
    }

    return (
        <div className="flex gap-2 w-full h-full">
            <div className={` ${images.length >= 4 ? "w-6/12" : "w-8/12"} `}>
                <div className="image-cover h-full w-full" onClick={() => seter(images[0])}>
                    {images?.length > 0 && (
                        <img
                            src={images[0]}
                            className="h-full w-full object-cover"
                            alt="First Image"
                        />
                    )}
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
                {images.slice(1, 5).map((el, i) => (
                    <div
                        key={i}
                        onClick={() => seter(el)}
                        className="image-cover w-full h-full"
                    >
                        <img src={el} className="w-full h-full object-cover" alt="" />
                    </div>
                ))}
            </div>
            <button onClick={()=>setShowNewPage(true)} className="flex cursor-pointer items-center justify-center gap-2 absolute bottom-4 right-4 rounded-md font-medium border border-black h bg-white text-blackColor px-3 py-1">
                <span>
                    <Grid />
                </span>
                <span className="h">Show all photos</span>
            </button>

        </div>
    )
}

export default ImagePreviewer