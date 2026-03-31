export const metadata = {
  title: "Basics – Host Setup",
  description: "Configure your basic hosting information"
}

function page() {
    return (
        <div className="w-full h-full  my-2 gap-4 flex flex-col md:flex-row px-2">
            <div className="flex-1 h-full  flex justify-center px-8 flex-col gap-5 ">
                <h3 className="font-bold h text-2xl text-gray-700">Step 1</h3>
                <h1 className="text-5xl font-bold h">Tell us about your place</h1>
                <p className="text-xl p">In this step, we'll ask you wich type of property you have and if guest will book the entire place or just a room. Then let us know the location and how many guest can stay</p>
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