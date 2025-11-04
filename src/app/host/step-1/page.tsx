import { Svg } from "../page"

function page() {
    return (
        <div className="w-full h-full relative">
            <header className={`w-full h-22 flex px-4 items-center justify-between border `} >
                <span>
                    <Svg />
                </span>
                <button className="py-2 px-6 rounded border border-black hover:border-gray cursor-pointer font-semibold p">
                    Exit
                </button>
            </header>
        </div>
    )
}

export default page