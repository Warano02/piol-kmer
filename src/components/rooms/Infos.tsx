import type { Houses } from "@/types"
import { useState } from "react";
import { Times } from "../Icons";

function Infos({ House }: { House: Houses }) {
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 pb-6">
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
      </div>
      <div className="py-8 border-y border-gray">
        <p className="text-md leading-7 text-justify">
          {House?.about}
        </p>
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
              <header className="flex items-center py-6 px-4 cursor-pointer">
                <button onClick={() => setAmenitiesModal(false)} className="cursor-pointer">
                  <Times />
                </button>
              </header>
              <main className="h-full w-full max-h-[calc(100vh-180px)] pt-3 md:pt-6 overflow-auto px-4">
                <h1 className="text-2xl font-semibold">What this place offers?</h1>
                <div className="h-full w-full">
                  {House.amenities?.map((e,i) => (
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
                  {House.amenities?.map((e,i) => (
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