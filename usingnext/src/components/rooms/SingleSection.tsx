import img1 from "@/assets/icon/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.avif"
import img2 from "@/assets/icon/b4005b30-79ff-4287-860c-67829ecd7412.avif"
import { BadgeCheck, KeyRound, Map, MessageCircle, Sparkles } from "lucide-react"
import Image from "next/image"
function SingleSection() {
    const rating = 5
    return (
        <section className="w-full py-8 border-t">
            <div className="w-full h-36 flex justify-center items-center">
                <Image src={img1} alt="image to present rating" className="h-full" />
                <h1 className="text-4xl lg:text-8xl h lg:mt-[-90px] ">{rating.toFixed(1)} </h1>
                <Image src={img2} alt="image to present rating" className="h-full" />
            </div>
            <div className="w-full h-34 flex justify-center items-center flex-col">
                <h1 className="h text-2xl">Guest favorite</h1>
                <p className="max-w-[400px] p-2 p text-center">This home is a guest favorite based on rating, reviews, and reliability.  </p>
            </div>

            <div className="w-full lg:px-4 relative flex ">
                <div className="w-44 h-32 border-r px-2">
                    <h1 className="h text-black-secondary text-[23px]">Overall rating</h1>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="w-full flex justify-center items-center">
                            <span className="w-[20px] text-black-secondary">{5 - index}</span>
                            <span
                                className={`w-full h-[4px] rounded-[18px] ${rating === 5 - index ? "bg-black" : "bg-gray"
                                    }`}
                            ></span>
                        </div>
                    ))}

                </div>
                <div className="w-44 h-32 border-r px-6 flex flex-col gap-2">
                    <h1 className="h text-black-secondary text-[20px]">Cleanliness</h1>
                    <h2 className="text-xl font-bold">4.9</h2>
                    <Sparkles className="w-9 h-9" />
                </div>
                <div className="w-44 h-32 border-r px-6 flex flex-col gap-2">
                    <h1 className="h text-black-secondary text-[20px]">Accuracy</h1>
                    <h2 className="text-xl font-bold">4.9</h2>
                    <BadgeCheck className="w-9 h-9" />
                </div>
                <div className="w-44 h-32 border-r px-6 flex flex-col gap-2">
                    <h1 className="h text-black-secondary text-[20px]">Check-in</h1>
                    <h2 className="text-xl font-bold">4.9</h2>
                    <KeyRound className="w-9 h-9" />
                </div>
                <div className="w-44 h-32 border-r px-6 flex flex-col gap-2">
                    <h1 className="h text-black-secondary text-[20px]">Communication</h1>
                    <h2 className="text-xl font-bold">4.9</h2>
                    <MessageCircle className="w-9 h-9" />
                </div>
                <div className="w-44 h-32  px-6 flex flex-col gap-2">
                    <h1 className="h text-black-secondary text-[20px]">Location</h1>
                    <h2 className="text-xl font-bold">4.9</h2>
                    <Map className="w-9 h-9" />
                </div>
            </div>

        </section>
    )
}

export default SingleSection