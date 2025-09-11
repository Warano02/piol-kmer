import type { CarrouselImagesProps } from "@/types"
import { useState } from "react";
import { Link } from "react-router-dom"
import { useAppContext } from "@/hooks/useAppContext";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

function CarrouselImages({ title, link, data }: CarrouselImagesProps) {
    const { formatPrice } = useAppContext()
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // Threshold pour l’effet tilt
    const threshold = 12;

    const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div className="w-full relative">
            <div className="flex items-center justify-between px-5">
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                <Link to={link} className="text-blue-500 text-sm hover:underline">
                    See all &gt;
                </Link>
            </div>

            {/* <div className="flex gap-4 px-5 py-4 overflow-x-auto"> */}
            <Carousel className="w-full max-w-sm">
                <CarouselContent>
                    {data && data.map((piol, i) => (
                        <CarouselItem key={i}>
                            <Link  to={`${link}/${piol?.id || ""}`}>
                                <div
                                    className="rounded-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white shadow"
                                    onMouseMove={handleMove}
                                    onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                                    style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
                                >
                                    <img
                                        src={piol?.src}
                                        alt={piol?.title || "Image"}
                                        className="w-full h-52 object-cover"
                                    />
                                    <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                                        {piol?.title}
                                    </h3>
                                    <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                                        {formatPrice(piol?.price)} - Monthly
                                    </p>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* </div> */}
        </div>
    )
}

export default CarrouselImages
