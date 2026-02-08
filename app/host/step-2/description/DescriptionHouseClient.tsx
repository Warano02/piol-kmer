"use client"

import { useState } from "react"

function DescriptionHouseClient() {
    const [description, setDescription] = useState("")
    return (
        <div className='gap-6'>
            <textarea maxLength={500} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full min-h-50 max-h-80  border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 " />
            <h2 className="text-sm mt-2  text-gray font-bold">{description.length}/500</h2>
        </div>
    )
}

export default DescriptionHouseClient