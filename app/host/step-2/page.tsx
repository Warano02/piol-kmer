import React from 'react'

export const metadata = {
  title: "House Benefits – House Setup",
  description: "Configure your place setup "
}

function page() {
  return (
    <div className="w-full h-full  my-2 gap-4 flex flex-col md:flex-row px-2">
      <div className="flex-1 h-full  flex justify-center px-8 flex-col gap-5 ">
        <h3 className="font-bold h text-2xl text-gray-700">Step 2</h3>
        <h1 className="text-5xl font-bold h">Tell us about your place Benefits</h1>
        <p className="text-xl p">During this step, you will be asked to enter information about the benefits offered by your accommodation.</p>
      </div>
      <div className="flex-1  ">
        <video autoPlay
          muted
          playsInline
          className="w-full h-full rounded-xl " src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"></video>
      </div>
    </div>
  )
}

export default page