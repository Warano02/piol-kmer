export const metadata = {
  title: "Step 3: Finished Setup Your listening – PiolKmer",
  description: "Configure your place setup "
}

function page() {
  return (
    <div className="w-full h-full  my-2 gap-4 flex flex-col md:flex-row px-2">
      <div className="flex-1 h-full  flex justify-center px-8 flex-col gap-5 ">
        <h3 className="font-bold h text-2xl text-gray-700">Step 3</h3>
        <h1 className="text-5xl font-bold h">Finish up and publish</h1>
        <p className="text-xl p">Finally, you'll choose booking settings, set up pricing, and publish your listing.</p>
      </div>
      <div className="flex-1  ">
        <video autoPlay
          muted
          playsInline
          className="w-full h-full rounded-xl " src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"></video>
      </div>
    </div>
  )
}

export default page