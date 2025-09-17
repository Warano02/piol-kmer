import { useRef } from "react";
import SingleHouse from "./SingleHouse";
import { Link } from "react-router-dom";
import { ArrayLeftHome, ArrayRightHome } from "../Icons";
import type { Houses } from "@/types";
interface Props {
  city?: string,
  Houses: Houses[]
}
function HouseCarrousel({ city = "Younde", Houses }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
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