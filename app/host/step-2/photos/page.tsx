import camera from "@/assets/icon/camera.jpg"
import Image from "next/image"

export const metadata = {
  title: "Add some photos - PiolKmer",
  description: "Upload Your house picture to continue ! "
}

function Photos() {
  return (
    <section id="photos-house" className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col items-center">
      <div className="w-2/3 h-full  flex flex-col items-center relative">
        <div aria-label="Description of the section" className="mt-4">
          <h1 className="text-2xl font-bold">Add some photos of your windmill</h1>
          <h4 className="text-gray font-semibold">To get started, add some photos. You can add more or make changes later.</h4>

          <div className="w-full h-182 bg-[#F7F7F7]  border-dashed flex justify-center items-center flex-col gap-6">
            <Image src={camera} alt="camera image" width={200} height={250} className="object-cover" />
            <button className="px-6 py-4 border bg-white rounded-lg cursor-pointer font-bold">Add Photos</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Photos