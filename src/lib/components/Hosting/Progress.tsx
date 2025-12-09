
function Progress() {
    const handleNextStep = () => alert("Yo next step")
    const handleBack = () => alert("Yo need to go back")
    return (
        <section className="w-full h-[80px] fixed bottom-0">
            <div className="w-full h-full relative  flex flex-col">
                <div className="w-full h-[10px] flex relative">
                    <div className={`w-1/3 h-full bg-gray`}></div>
                    <span className={`w-[10px] h-full`}></span>
                    <div className={`w-1/3 h-full bg-gray`}></div>
                    <span className={`w-[10px] h-full`}></span>
                    <div className={`w-1/3 h-full bg-gray`}></div>
                </div>
                <div className="w-full h-[80px] flex justify-between items-center px-8">
                    <button onClick={ handleBack} className="px-8 py-4 rounded-2xl underline font-bold  h cursor-pointer">Back</button>
                    <button onClick={ handleNextStep} className="px-6 py-3 rounded-xl bg-black text-white text-xl font-bold cursor-pointer h">
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Progress