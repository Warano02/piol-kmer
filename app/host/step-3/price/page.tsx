import PriceClient from "./PriceClient"

export const metadata = {
    title: "Set your price - PiolKmer",
    description: "Become a Host and Rent Out Your Room, House or Apartment on PiolKmer",
}

function Price() {
    return (
        <section id="photos-house" className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col  items-center">
            <div className="w-2/3 h-full  flex flex-col  items-center relative">
                <div aria-label="Description of the section" className="mt-4">
                    <h1 className="text-2xl font-bold">Now, set a weekday base price</h1>
                    <h4 className="text-gray font-semibold">Tip: $57. You’ll set a weekend price next.</h4>
                    <PriceClient />
                </div>
            </div>
        </section>
    )
}

export default Price