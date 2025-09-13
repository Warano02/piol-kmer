import { textResizer } from "@/utils/style";
import { format } from "date-fns";
import BtnPrimary from "../ux/BtnPrimary";
import { Search } from "../Icons";
import homeImg from "@/assets/icon/home.avif"
import { useAppContext } from "@/hooks/useAppContext";

interface Props {
    headerSearch: boolean,
    setSelection: (place: string) => void,
    selection: string | null,
    selectedDay: Date | string,
    selectEnd: Date | string,
    destination: string | null,
    setOverlay: React.Dispatch<React.SetStateAction<boolean>>,
}

export const BarLeft = () => <div className="h-[20px] w-1 block border-r border-borderColor"></div>

function HeaderSearchLayoutOne({ headerSearch, selectedDay, selectEnd, setSelection, destination, setOverlay }: Props) {
    const {result}=useAppContext()
    const seterAll = (selection: string): void => {
        if (!headerSearch) setOverlay(true)
        setSelection(selection)
    }
    return (
        <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}
            className={`${headerSearch ? "header_search_layout_one_active" : "header_search_layout_one_inactive"} absolute w-max bg-white border border-borderColor rounded-full shadow px-2 flex items-center justify-center mx-auto`}
        >
            <div className="h-full px-3 py-1 flex gap-1 items-center" onClick={() => seterAll("destination")}>
                <img src={homeImg} alt="Image of home" width={40} />
                <span className="block text-sm text-gray-700 font-semibold cursor-pointer">
                    {destination || "Anywhere"}
                </span>
                <BarLeft />
            </div>
            <div className="h-full px-3 py-1" onClick={() => seterAll("check-in")}>

                <button>
                    <span className="block text-sm text-gray-700 font-semibold cursor-pointer">
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
            <div className="h-full pl-3 py-1 flex gap-2 items-center justify-center">
                <span className="block text-sm font-semibold text-black cursor-pointer" onClick={() => seterAll("guests")}>
                    {textResizer(result||"Any Guest",13)}
                </span>
                <BtnPrimary rounded={true}
                    style={{
                        padding: "12px",
                        background: "#ff385c",
                        backgroundImage: "none!important",
                    }}
                    dark={false}>
                    <Search />
                </BtnPrimary>
            </div>
        </div>
    )
}

export default HeaderSearchLayoutOne