
interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    // const handleClick = (image: string) => {
    //     // Optionnel : ici tu peux gérer un clic si nécessaire
    // };

    return (
     
            <div className="flex gap-2 w-full h-[300px]">
                {/* Première image large */}
                {images[0] && (
                   <span  className={`flex-1 overflow-hidden rounded-2xl`}>
                        <img
                            src={images[0]}
                            alt="Gallery image 1"
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        />
                    </span>
                )}

                {/* Deuxième et troisième images en colonne */}
                <div className="flex flex-1 flex-col gap-2">
                    {images.slice(1, 3).map((img, i) => (
                       <span key={i}  className="flex-1 overflow-hidden rounded-2xl">
                            <img
                                src={img}
                                alt={`Gallery image ${i + 2}`}
                                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                            />
                        </span>
                    ))}
                </div>

                {/* Quatrième image si existante */}
                {images[3] && (
                   <span  className="flex-1 overflow-hidden rounded-2xl">
                        <img
                            src={images[3]}
                            alt="Gallery image 4"
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                        />
                    </span>
                )}
            </div>
    );
}
