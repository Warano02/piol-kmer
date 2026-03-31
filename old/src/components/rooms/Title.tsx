import type { Houses } from "@/types"
import { Upload } from "../Icons"

function Title({ House }: { House: Houses }) {
    return (
        <>
            <div className="text-2xl lg:text-3xl font-medium mb-2 h">
                {House.title}
            </div>
            <div className="flex items-center justify-between my-8 md:my-0">
                <div className="gap-4 items-center hidden lg:flex">
                    <button className="bg-white hover:bg-borderColor flex items-center gap-2 px-4 py-2 underline rounded-md">
                        <Upload />
                        <span className="block text-lg font-medium">Share</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Title