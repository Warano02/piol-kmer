import type { GalleryProps, GalleryTemplateProps } from "@/types/pages/Rooms";

export default function Gallery({ images, setShowHouseImages, setSelectedImage }: GalleryProps) {
    const handleClick = (image: string) => {
        setSelectedImage(image)
        setShowHouseImages(true)
    };

    return (

        <div className={`flex gap-2 w-full`}>
            {images.length === 1 && <TemplateFor1 urls={images} handleClick={handleClick} />}
            {<TemplateFor2 handleClick={handleClick} urls={images} />}
            {images.length === 4 && <TemplateFor4 urls={images} handleClick={handleClick} />}
        </div>
    );
}

const TemplateFor2 = ({ handleClick, urls, width = "full" }: GalleryTemplateProps) => {
    return (
        <div className="w-full h-[320px] flex gap-2">
            <span className="w-1/2">
                <img
                    onClick={() => handleClick(urls[0])}
                    src={urls[0]}
                    alt="Gallery image 1"
                    className={`w-${width} h-full object-cover cursor-pointer hover:scale-105 transition-transform`}
                />
            </span>
            <span className="w-1/2">
                <img
                    onClick={() => handleClick(urls[0])}
                    src={urls[1]}
                    alt="Gallery image 1"
                    className={`w-${width} h-full object-cover cursor-pointer hover:scale-105 transition-transform`}
                />
            </span>
           
        </div>
    )
}

const TemplateFor1 = ({ handleClick, urls, width = "full" }: GalleryTemplateProps) => {
    return (
       <div className="flex gap-2 w-full h-[330px]">
         <img
            onClick={() => handleClick(urls[0])}
            src={urls[0]}
            alt="Gallery image 1"
            className={`w-${width} h-full object-cover cursor-pointer hover:scale-105 transition-transform`}
        />
       </div>
    )
}



const TemplateFor4 = ({ handleClick, urls }: GalleryTemplateProps) => {
    return (
        <div className="flex gap-2 w-full h-[301px]">
            <span className={`flex-1 overflow-hidden rounded-2xl`}>
                <img
                    onClick={() => handleClick(urls[0])}
                    src={urls[0]}
                    alt="Gallery image 1"
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                />
            </span>


            <div className="flex flex-1 flex-col gap-2">
                {urls.slice(1, 3).map((img, i) => (
                    <span key={i} className="flex-1 overflow-hidden rounded-2xl">
                        <img
                            onClick={() => handleClick(img)}
                            src={img}
                            alt={`Gallery image ${i + 2}`}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        />
                    </span>
                ))}
            </div>

            <span className="flex-1 overflow-hidden rounded-2xl">
                <img
                    onClick={() => handleClick(urls[3])}
                    src={urls[3]}
                    alt="Gallery image 4"
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                />
            </span>
        </div>

    )
}