import type { GuessPickerType, GuestCardType, Menu1Type } from "@/types"
import { Minus, Plus } from "../Icons";
import { useAppContext } from "@/hooks/useAppContext";

function GuestCard({ operation, type }: GuestCardType) {
    const { guests, setGuests } = useAppContext()

    const getDisabledGuest = () => {
        let total = 0;
        Object.entries(guests).forEach(([key, val]) => {
            if ((key === "children" || key === "adults") && val) {
                total += val;
            }
        });

        if (total >= 16 && operation === "add") return true;
        const currentValue = guests[type] ?? 0;
        return operation === "add" ? currentValue >= 12 : currentValue <= 0;
    };

    const guestsHandler = () => {
        setGuests((prev) => {
            const currentValue = prev[type] ?? 0;

            switch (operation) {
                case "add":
                    return {
                        ...prev,
                        ...(type !== "adults" && (prev.adults ?? 0) === 0
                            ? { adults: 1 }
                            : {}),
                        [type]: currentValue + 1,
                    };

                case "minus":
                    return {
                        ...prev,
                        [type]: Math.max(0, currentValue - 1),
                    };

                default:
                    return prev;
            }
        });
    };

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
    const menu: Menu1Type[] = [
        { title: "Adults", text: "Ages 13 or above", type: "adults" },
        { title: "Children", text: "Ages 2-12", type: "children" },
        { title: "Pets", text: "", type: "pets" },
    ]

    return (
        <div className={`${css ||
            "w-full rounded-3xl bg-white relative z-10 px-8 py-2 shadow border border-borderColor"
            }`}>
            {menu.map((el) => (
                <div className="flex items-center justify-between my-6">
                    <div>
                        <h6 className="text-md font-medium">{el.title} </h6>
                        <p className="text-sm font-normal text-gray-600 mt-1">
                            {el.text}
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <GuestCard operation="minus" type={el.type} />
                        <p className="text-gray-700 font-semibold">{guests[el.type]}</p>
                        <GuestCard operation="add" type={el.type} />
                    </div>

                </div>
            ))}

        </div>
    )
}


export default GuestsPicker