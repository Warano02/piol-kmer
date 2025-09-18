import { Upload } from "lucide-react"

function ShareLinks({ Link, className }: { Link?: string, className?: string }) {
    console.log(Link)
    return (
        <button className={`bg-white cursor-pointer hover:bg-gray flex items-center gap-2 px-4 py-2 underline rounded-md ${className}`}>
            <Upload />
            <span className="block text-lg font-medium h">Share</span>
        </button>
    )
}

export default ShareLinks