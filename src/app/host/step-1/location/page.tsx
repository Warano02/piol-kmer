
function page() {
    return (
        <div className="w-full h-full flex flex-col items-center  mt-6 gap-6">
            <h1 className="text-2xl font-bold text-center">
                Confirm your address
            </h1>
            <p className="text-xl text-gray-500 text-center p">Your address is only shared with guests after they’ve made a reservation.</p>
            {/* need to Add Map Here Using Google Map After to get the host location */}
            <div className="w-2/3 h-[280px] rounded-2xl bg-gray-200 animate-pulse">

            </div>
        </div>
    )
}

export default page