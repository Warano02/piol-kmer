import AmentiesClient from "@/components/Hosting/AmentiesClient"

export const metadata = {
  title: "Amenties –  Setup Your place Amenties",
  description: "Configure your place setup amenties "
}

function Amenties() {
  return (
    <section id='amenties' className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col items-center">
      <div className="w-2/3 h-full  flex flex-col items-center relative">
        <div aria-label="Description of the section" className="mt-4">
          <h1 className="text-2xl font-bold">Tell guests what your place has to offer</h1>
          <h4 className="text-gray font-semibold">You can add more amenities after you publish your listing.</h4>
        </div>
        <AmentiesClient />
      </div>
    </section>
  )
}

export default Amenties