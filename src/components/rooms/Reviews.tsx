import { Link } from "react-router-dom"
import userImage from "@/assets/icon/Capture d'écran 2024-09-11 184648.png"
import { useState } from "react"
import { Times } from "../Icons"
function Reviews() {
  const [showAllReviews, setShowAllReviews] = useState(true)
  const text = "The accommodation is very well located, clean and corresponded in every way to the listing. Special mention to Solic for the quality of communication and a big thank you to hdhddhh ksnn jsj  b kbd bjj b dbd b"
  return (
    <div className="w-full mt-4 mb-4 border-t">
      <div className="grid grid-cols-2 gap-2 flex-wrap relative">
        {/* animate-pulse */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="min-w-1/2 h-52  rounded-lg">
            <ReviewCard key={index} setShowAllReviews={setShowAllReviews} text={text} pp={userImage} name={"Mr Warano"} old={"2 years on Airbnb"} date={"2 weeks ago"} period={"Stay a few nights"} showAllReviews={showAllReviews} />

          </div>
        ))}
      </div>
      {showAllReviews && <AllReviews setShowAllReviews={setShowAllReviews} />}

    </div>
  )
}

const ReviewCard = ({ text, pp, name, old, date, period, showAllReviews, setShowAllReviews }: { text: string, pp: string, name: string, old: string, date: string, period: string, showAllReviews: boolean, setShowAllReviews: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (<div className=" ">
    <div className="w-full h-18  rounded-t-lg flex items-center p-4 gap-2">
      <Link to={""} className="w-10 h-10 rounded-full overflow-hidden relative">
        <img src={pp} alt="User Profil" className="w-full h-full object-cover" />
      </Link>
      <div className="flex flex-col">
        <span className="text-[16px] text-semibold h">{name} </span>
        <span className="text-[14px] text-[#22222222] ">{old} </span>
      </div>
    </div>
    <div className=" flex items-center gap-1 px-4 h-4">
      <span>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-[12px]">★</span>
        ))}
      </span>
      <span className="text-center text-[8px] h-full flex justify-center items-center">•</span>
      <span className="text-[14px] text-[#000000] text-bold h">
        {date}
      </span>
      <span className="text-center text-[8px] h-full flex justify-center items-center">•</span>
      <span className="text-[14px] text-[#22222222] text-bold h">{period} </span>
    </div>
    <p className="text-[16px] text-[#222222] p-4 p ">
      {!showAllReviews && text.length > 172 ? text.slice(0, 172) + "..." : text}
    </p>

    {!showAllReviews && text.length > 172 && <span className="text-bold text-[18px] h cursor-pointer hover:underline hover:text-[#524d4d]" onClick={() => setShowAllReviews(true)}>Show more</span>}
  </div>)
}
const AllReviews = ({ setShowAllReviews }: { setShowAllReviews: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div onClick={() => setShowAllReviews(false)} className="fixed w-screen h-screen inset-0 z-58 flex items-center justify-center ">
      <div className="fixed top-0 left-0 w-full h-full z-58 bg-[#0000006b] bg-opacity-40 flex justify-center items-center" >
        <div className="w-[50rem] h-full max-h-[calc(100vh-110px)] bg-white z-40 relative rounded-xl animation_primary" onClick={(e) => e.stopPropagation()}>
          <header className="flex items-center py-6 px-4 cursor-pointer">
            <button onClick={() => setShowAllReviews(false)} className="cursor-pointer">
              <Times />
            </button>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Reviews