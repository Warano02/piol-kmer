import { Star } from "lucide-react";
import BtnPrimary from "../ux/BtnPrimary";
import Date from "./Date";
import Guests from "./Guests";
import { useState } from "react";
import { useCurrency } from "@/hooks/useCurrency";

interface Date_GuestsPickerCardProps {
    price: number;
    rating: number;
    reviews: number;
}

function Date_GuestsPickerCard({ price, rating, reviews }: Date_GuestsPickerCardProps) {
    const { formatPrice } = useCurrency()
    const [tab, setTab] = useState<"date" | "guests" | null>(null)
    return (
        <div className="sticky top-28 left-0 min-w-[25rem]">
            <div className="rounded-xl shadow border border-lightBorderColor p-5">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-md font-normal h">
                        <span className="font-medium text-2xl h">{formatPrice(price)}</span>
                        /night
                    </h1>
                    <span className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                            <Star />
                            {rating}
                        </span>
                        <span>·</span>
                        <span className="underline">
                            {reviews} reviews
                        </span>
                    </span>
                </div>

                <div className="rounded-lg border border-darkBorderColor mb-6 relative">
                    <Date tab={tab} setTab={setTab} />
                    <Guests tab={tab} setTab={setTab} />
                </div>
                <div>
                    <BtnPrimary onClick={() => alert("Implementar reserva")} style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
                        Reserve
                    </BtnPrimary>
                </div>
            </div>

        </div>
    )
}


export default Date_GuestsPickerCard