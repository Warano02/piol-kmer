"use client"
import type { Houses } from "@/types"
import { useState } from "react";
import { ImgLeft, ImgRight, Times } from "../Icons";
import { useAppContext } from "@/hooks/useAppContext";
import { Star } from "lucide-react";
import Link from "next/link";

function Infos({ House }: { House: Houses }) {
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  const { AppName } = useAppContext()
  const [vl, svl] = useState(false)
  return (
    <div className="w-full">
      <div className="flex items-start  justify-between flex-col  gap-1 pb-6">
        <h1 className="text-lg md:text-2xl mb-2 font-semibold h">
          {House.title}
        </h1>
        <div className="flex items-center gap-1 text-md">
          {House.capacity?.person_capacity} guests{" · "}
          {House.capacity?.pets_capacity > 0 &&
            `${House.capacity?.person_capacity} pets`}
          {" · "}
          {House.capacity?.bedrooms} bedrooms {" · "} {House.capacity?.bed}{" "}
          beds
        </div>
        <Link  href={""} className="w-full h-24 rounded-2xl border mt-8 flex justify-between items-center px-4">
          <div className="flex gap-1 ">
            <ImgLeft />
            <h1 className="h text-xl max-w-[80px] mt-[-14px] text-center">Guest Favorite</h1>
            <ImgRight />
          </div>
          <p className="flex-1 h px-4 text-center">
            One of the most loved homes on {AppName}, according to guests
          </p>
          <div className="flex gap-1">
            <div className="flex flex-col border-r pr-8">
              <h1 className="h text-xl text-center">5.0 </h1>
              <div className="flex">
                {Array.from({ length: 5 }, ((_, i) => (
                  <Star key={i} className="w-3" />
                )))}
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <h1 className="h text-xl">8</h1>
              <h6 className="text-black-secondary text-[14px]">Reviews</h6>
            </div>
            <div>
            </div>
          </div>
        </Link>

        <div className="w-full mt-4 flex justify-start">
          <div className="min-w-2xs h-[80px] flex gap-2 px-2">
            <img src={"https://a0.muscache.com/im/pictures/user/User/original/1c9147e8-be36-4b5b-967c-ef7f02a62d06.jpeg?im_w=240"} alt="Host profil" className="w-[50px] h-[50px] rounded-full mr-2" />
            <div className="flex flex-col gap-2">
              <h1 className="h text-xl">Hosted by Cyrille </h1>
              <h6 className="text-xs text-black-secondary">7 months hosting  </h6>
            </div>
          </div>

        </div>
      </div>
      <div className="py-8 border-y border-gray">
        <p className="text-md leading-7 text-justify p">
          {vl ? House?.about : House?.about?.slice(0, 250) + "..."}
        </p>
        {House?.about?.length > 250 && <span className="mt-8 text-bold text-[18px] h cursor-pointer hover:underline hover:text-[#524d4d]" onClick={() => svl((prev) => !prev)}>
          {vl ? "Show less" : "Show more"}
        </span>
        }
      </div>

      <div className="py-8">
        <h1 className="text-2xl mb-4 font-semibold">What this place offers?</h1>
        <ul className="block md:flex flex-wrap">
          {House.amenities?.slice(0, 10)?.map((el, i) => (
            <li
              className="w-[calc(100%/2-10px)] flex gap-2 my-2 py-2 md:py-0"
              key={i}
            >
              <img
                src={`/icons/${el.icon
                  .toLowerCase()
                  .trim()
                  .replaceAll(" ", "_")}.png`}
                className="w-6 h-6 mt-1"
                alt=""
              />
              {el.name}
            </li>
          ))}
        </ul>
        <button
          className="border border-darkBorderColor rounded-xl px-6 py-3 text-sm md:text-base font-medium hover:bg-gray-100 outline-offset-[2.8px] cursor-pointer mt-8"
          onClick={() => setAmenitiesModal(true)}
        >
          See all {House?.amenities?.length} amenities
        </button>
      </div>
      {amenitiesModal && (<div className="fixed w-screen h-screen inset-0 z-30 flex items-center justify-center">
        <div
          className="fixed top-0 left-0 w-full h-full z-30 bg-[#0000006b] bg-opacity-40"
          onClick={() => setAmenitiesModal(false)}
        ></div>
        <div className="w-[50rem] h-full max-h-[calc(100vh-110px)] bg-white z-40 relative rounded-xl animation_primary">
          <header className="flex items-center py-6 px-4 cursor-pointer" onClick={() => setAmenitiesModal(false)}>
            <button onClick={() => setAmenitiesModal(false)} className="cursor-pointer p-2 rounded-full hover:bg-gray-200 transition-all">
              <Times />
            </button>
          </header>
          <main className="h-full w-full max-h-[calc(100vh-180px)] pt-3 md:pt-6 overflow-auto px-4">
            <h1 className="text-2xl font-semibold">What this place offers?</h1>
            <div className="h-full w-full">
              {House.amenities?.map((e, i) => (
                <li
                  className="w-full py-4 md:py-6 border-b border-borderColor flex gap-2 items-center my-2"
                  key={i}
                >
                  <img
                    src={`/icons/${e.icon
                      .toLowerCase()
                      .trim()
                      .replaceAll(" ", "_")}.png`}
                    className="w-6 h-6"
                    alt=""
                  />
                  {e.name}
                </li>
              ))}
              {House.amenities?.map((e, i) => (
                <li
                  className="w-full py-6 border-b border-borderColor flex gap-2 items-center my-2"
                  key={i}
                >
                  <img
                    src={`/icons/${e.icon
                      .toLowerCase()
                      .trim()
                      .replaceAll(" ", "_")}.png`}
                    className="w-6 h-6"
                    alt=""
                  />
                  {e.name}
                </li>
              ))}
            </div>
          </main>
        </div>
      </div>)}

    </div>
  )
}

export default Infos