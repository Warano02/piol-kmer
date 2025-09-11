import { format } from "date-fns";

interface Props {
    headerSearch: boolean,
    setSelection: (place: string) => void,
    selection: string | null,
    selectedDay: string | null,
    selectEnd: string | null,
    destination: string
}

export const BarLeft = () => <div className="h-[20px] w-1 block border-r border-borderColor"></div>

function HeaderSearchLayoutOne({ headerSearch, selectedDay, selectEnd, setSelection, destination }: Props) {
    return (
        <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}
            className={`${headerSearch ? "header_search_layout_one_active" : "header_search_layout_one_inactive"} absolute w-max bg-white border border-borderColor rounded-full shadow px-2 flex items-center justify-center mx-auto`}
        >
            <div className="h-full px-3 py-1 flex gap-1 items-center"
                onClick={() => {
                    setSelection("destination");
                }}
            >
                <span className="block text-sm text-gray-700 font-semibold cursor-pointer">
                    {destination || "Anywhere"}
                </span>
                <BarLeft />
            </div>
            <div className="h-full px-3 py-1" onClick={() => {
                setSelection("check-in");
            }}>

                <button>
                    <span className="block text-sm text-gray-700 font-semibold">
                        {selectedDay && selectEnd
                            ? `${format(selectedDay, "MMM dd")} - ${format(
                                selectEnd,
                                "MMM dd"
                            )}`
                            : "Any week"}
                    </span>
                </button>
            </div>
            <BarLeft />

        </div>
    )
}

export default HeaderSearchLayoutOne