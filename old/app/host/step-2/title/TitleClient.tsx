"use client"

import { useState } from "react"

function TitleClient() {
  const [title, setTitle] = useState("")
  return (
    <div className='gap-6'>
      <textarea   maxLength={50} value={title} onChange={(e) => setTitle(e.target.value)} className="w-full min-h-10 max-h-40 h-20 border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 " />
      <h2 className="text-sm mt-2  text-gray font-bold">{title.length}/50</h2>
    </div>
  )
}

export default TitleClient