import { useRef } from "react";
import data from "@/mocks/houses.json"
import SingleHouse from "./SingleHouse";
import { Link } from "react-router-dom";
import { ArrayLeftHome, ArrayRightHome } from "../Icons";
function HouseCarrousel({ city = "Younde" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const o = data[0]
  const Houses = Array.from({ length: 50 }, () => { return { ...o, _id: o._id + "d11d" + Math.random() } })
  const scroll = (dir: 'left' | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full relative">
      <div className="w-full h-11  flex justify-between px-[24px] ">
        <Link to={`/`} className="h text-2xl flex justify-center items-center">
          <span className="h">  Stay near in {city} </span> <ArrayRightHome />
        </Link>

        <div className="flex justify-center w-16 items-center h-8 ">

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-6 h-6 rounded-full bg-gray flex justify-center items-center cursor-pointer hover:bg-gray-200"
            >
              <ArrayLeftHome />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-6 h-6 rounded-full bg-gray flex justify-center items-center cursor-pointer hover:bg-gray-200"
            >
              <ArrayRightHome />
            </button>
          </div>
        </div>

      </div>

      <div ref={scrollRef} className="overflow-x-auto scroll-smooth px-4 pb-6 hide-scrollbar ">
        <div className="flex gap-6 py-4 w-max">
          {
            Houses.map((house, index) => (
              <SingleHouse data={house} key={index} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default HouseCarrousel