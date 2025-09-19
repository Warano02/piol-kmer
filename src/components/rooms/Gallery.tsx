import type { GalleryProps, GalleryTemplateProps } from "@/types/pages/Rooms";
import { useEffect, useState } from "react";

export default function Gallery({ images, setShowHouseImages, setSelectedImage }: GalleryProps) {
    const handleClick = (image: string) => {
        setSelectedImage(image)
        setShowHouseImages(true)
    };

    return (

        <div className={`flex gap-2 w-full`}>
            {images.length === 1 && <TemplateFor1 urls={images} handleClick={handleClick} />}
            {images.length === 2 && <TemplateFor2 handleClick={handleClick} urls={images} />}
            {images.length === 3 && <TemplateFor3 handleClick={handleClick} urls={images} />}
            {images.length === 4 && <TemplateFor4 urls={images} handleClick={handleClick} />}
            {images.length === 5 && <TemplateFor5 urls={images} handleClick={handleClick} />}
            {images.length > 5 && <Template urls={images} handleClick={handleClick} />}
        </div>
    );
}

const Template = ({ handleClick, urls }: GalleryTemplateProps) => {
  const [chunks, setChunks] = useState<string[][]>([]);

  const chunkers = (arr: string[]): string[][] => {
    const validLengths = [1, 2, 3, 4, 5];
    const result: string[][] = [];
    let data = [...arr];

    while (data.length > 0) {
      const size =
        validLengths[Math.floor(Math.random() * validLengths.length)];
      result.push(data.slice(0, size));
      data = data.slice(size);
    }
    return result;
  };

  useEffect(() => {
    setChunks(chunkers(urls));
  }, [urls]);

  const renderBlock = (group: string[], idx: number) => {
    switch (group.length) {
      case 1:
        return <TemplateFor1 key={idx} urls={group} handleClick={handleClick} />;
      case 2:
        return <TemplateFor2 key={idx} urls={group} handleClick={handleClick} />;
      case 3:
        return <TemplateFor3 key={idx} urls={group} handleClick={handleClick} />;
      case 4:
        return <TemplateFor4 key={idx} urls={group} handleClick={handleClick} />;
      case 5:
        return <TemplateFor5 key={idx} urls={group} handleClick={handleClick} />;
      default:
        return null;
    }
  };

  return <div className="flex flex-col gap-4">{chunks.map(renderBlock)}</div>;
};
const TemplateFor5 = ({ handleClick, urls }: GalleryTemplateProps) => {
    return (
        <div className="flex flex-col w-full gap-1">
            <TemplateFor1 urls={urls} handleClick={handleClick} />
            <TemplateFor2 urls={urls.slice(1, 3)} handleClick={handleClick} />
            <div className="w-full h-[418px] flex gap-1 overflow-hidden">
                <span className="w-1/3 image-cover">
                    <img
                        src={urls[3]}
                        alt="Gallery image 1"
                        className="w-full h-full object-cover cursor-pointer  transition-transform"
                    />
                </span>
                <span className="w-2/3 h-full image-cover">
                    <img
                        src={urls[4]}
                        alt="Gallery image 1"
                        className="w-full h-full object-cover cursor-pointer  transition-transform"
                    />
                </span>

            </div>
        </div>
    )
}

const TemplateFor3 = ({ handleClick, urls, width = "full" }: GalleryTemplateProps) => {
    return (
        <div className="w-full h-[330px] relative flex gap-1">
            <div className="w-1/2 h-full image-cover" onClick={() => handleClick(urls[0])}>
                <img
                    src={urls[0]}
                    alt="Gallery image 1"
                    className={`w-${width} h-full object-cover cursor-pointer  transition-transform`}
                />
            </div>

            <div className="w-1/2 h-full flex flex-col gap-1 overflow-hidden">
                {
                    urls.slice(1, 3).map((el, i) => (
                        <span key={i} onClick={() => handleClick(el)} className="w-full h-1/2 image-cover">
                            <img
                                src={el}
                                alt="Gallery image 1"
                                className={`w-${width} h-full object-cover cursor-pointer  transition-transform`}
                            />
                        </span>
                    ))
                }

            </div>
        </div>
    )
}

const TemplateFor2 = ({ handleClick, urls, width = "full" }: GalleryTemplateProps) => {
    return (
        <div className="w-full h-[320px] flex gap-2">
            <span className="w-1/2 image-cover" onClick={() => handleClick(urls[0])}>
                <img
                    src={urls[0]}
                    alt="Gallery image 1"
                    className={`w-${width} h-full object-cover cursor-pointer  transition-transform`}
                />
            </span>
            <span className="w-1/2 image-cover" onClick={() => handleClick(urls[0])}>
                <img
                    src={urls[1]}
                    alt="Gallery image 1"
                    className={`w-${width} h-full object-cover cursor-pointer  transition-transform`}
                />
            </span>

        </div>
    )
}

const TemplateFor1 = ({ handleClick, urls, width = "full" }: GalleryTemplateProps) => {
    return (
        <div className="flex gap-2 w-full h-[330px] image-cover" onClick={() => handleClick(urls[0])}>
            <img
                src={urls[0]}
                alt="Gallery image 1"
                className={`w-${width} h-full object-cover cursor-pointer  transition-transform`}
            />
        </div>
    )
}



const TemplateFor4 = ({ handleClick, urls }: GalleryTemplateProps) => {
    return (
        <div className="flex gap-2 w-full h-[301px]">
            <span className={`flex-1 overflow-hidden rounded-2xl image-cover`} onClick={() => handleClick(urls[0])}>
                <img
                    src={urls[0]}
                    alt="Gallery image 1"
                    className="w-full h-full object-cover cursor-pointer  transition-transform"
                />
            </span>


            <div className="flex flex-1 flex-col gap-2">
                {urls.slice(1, 3).map((img, i) => (
                    <span key={i} className="flex-1 overflow-hidden rounded-2xl image-cover" onClick={() => handleClick(img)}>
                        <img
                            src={img}
                            alt={`Gallery image ${i + 2}`}
                            className="w-full h-full object-cover cursor-pointer  transition-transform"
                        />
                    </span>
                ))}
            </div>

            <span className="flex-1 overflow-hidden rounded-2xl" onClick={() => handleClick(urls[3])}>
                <img
                    src={urls[3]}
                    alt="Gallery image 4"
                    className="w-full h-full object-cover cursor-pointer  transition-transform"
                />
            </span>
        </div>

    )
}