import { HeartSvg } from "../Icons"

function AddToWhiteList({isSaved,className}:{isSaved:boolean,className?:string}) {
    return (
        <button className="bg-white cursor-pointer hover:bg-gray flex items-center gap-2 px-4 py-2 underline rounded-md">
            <HeartSvg className={`h-[23px] w-[23px] stroke-white stroke-[3] ${isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"} ${className}`} />
            <span className="block text-lg font-medium h">Save</span>
        </button>
    )
}

export default AddToWhiteList