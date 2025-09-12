import type { GuessPickerType, GuestCardType } from "@/types"
import { Minus, Plus } from "../Icons";
import { useAppContext } from "@/hooks/useAppContext";

function GuestCard({ operation, type }: GuestCardType) {
    const { guests, setGuests } = useAppContext()

    const getDisabledGuest = () => {
        let total = 0;
        Object.entries(guests).forEach(guest => {
            if (type === "children" || type === "adults") { total += guest[1].value; }
        })
        if (total >= 16 && operation === "add") return true

        return operation === "add" ? guests[type]! <= 12 : guests[type]! >= 0
    }
    const guestsHandler = () => {
        switch (operation) {
            case "add":
                if (type !== "adults" && guests.adults === 0) {
                    setGuests((prev) => ({ ...prev, adults: 1 }))
                }
                setGuests((prev) => ({ ...prev, [type]: prev[type]! + 1 }))
                break;
            case "minus":
                setGuests((prev) => ({ ...prev, [type]: prev[type]! - 1 }))
                break
            default:
                break;
        }
    }
    return (
        <button
            className={`p-2 rounded-full border border-borderColor flex items-center justify-center ${getDisabledGuest() ? "opacity-40" : "opacity-100"
                }
          `}
            onClick={() => guestsHandler()}
            disabled={getDisabledGuest()}
        >
            {operation === "add" ? <Plus /> : <Minus />}
        </button>
    );
}

function GuestsPicker({ css }: GuessPickerType) {
    const { guests } = useAppContext()
    return (
        <div className={`${css ||
            "w-full rounded-3xl bg-white relative z-10 px-8 py-2 shadow border border-borderColor"
            }`}>
            <div className="flex items-center justify-between my-6">
                <div>
                    <h6 className="text-md font-medium">Adults</h6>
                    <p className="text-sm font-normal text-gray-600 mt-1">
                        Ages 13 or above
                    </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <GuestCard operation="minus" type="adults" />
                    <p className="text-gray-700 font-semibold">{guests.adults}</p>
                    <GuestCard operation="add" type="adults" />

                </div>
            </div>
        </div>
    )
}


export default GuestsPicker