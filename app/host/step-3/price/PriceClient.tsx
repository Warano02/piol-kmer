"use client";

import { useState, useRef } from "react";
import { ArrowBigUp, ChevronDown, ChevronUp, Pen } from "lucide-react";
import { parse } from "path";

function PriceClient() {
  const [price, setPrice] = useState("255");
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex  items-end gap-2">
        <span className="text-[96px] font-extrabold">$</span>

        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={price}
          readOnly={!isEditing}
          onClick={() => setIsEditing(true)}
          onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }}
          className="w-64 text-[96px] font-extrabold  border-none outline-none text-left focus:ring-0 p-0"
        />

        {!isEditing && <button
          onClick={startEditing}
          className="w-9 h-9 rounded-full border flex items-center justify-center
          hover:bg-gray-100 transition"
        >
          <Pen size={16} className="text-gray-600" />
        </button>}
      </div>

      {!showDetails && <button onClick={() => setShowDetails(true)} className="my-6 text-xl font-bol text-gray-500 flex gap-2">
        Guest price before Taxe : ${Math.floor((parseInt(price) * 0.14) + parseInt(price)) || 0} <ChevronDown size={24} />
      </button>}
      {showDetails && (
        <Details price={parseInt(price)} onClick={() => setShowDetails(false)} />

      )}

    </div>
  );
}

const Details = ({ price, onClick }: { price: number, onClick: () => void }) => {
  const [selected, setSelected] = useState<"guest" | "host">("guest")
  return (
    <div aria-label="Price details, for renting and about earn of host" className="my-6 space-y-4">
      <div className={`p-4 rounded-lg border cursor-pointer ${selected === "guest" ? "bg-gray-20 border-2 border-black" : "border-gray-200"}`} onClick={() => setSelected("guest")}>
        {selected == "guest" && <>
          <div className="w-full flex justify-between text-gray-600 text-xl">
            <span>Base Price</span><span className="font-bold">${price || 0} </span>
          </div>
          <div className="w-full flex justify-between text-gray-600 text-xl">
            <span>Guest service fee</span>
            <span className="font-bold">${Math.floor(price * 0.14) || 0} </span>
          </div>
          <div className="my-4 h-0.5 w-full bg-gray" />
        </>}

        <div className="w-full flex justify-between text-gray-600 text-xl">
          <span>Guest price before taxe:</span>
          <span className="font-bold">${Math.floor((price * 0.14) + price) || 0} </span>
        </div>

      </div>

      <div className={`p-4 rounded-lg border cursor-pointer ${selected === "host" ? "bg-gray-20 border-2 border-black" : "border-gray-200"}`} onClick={() => setSelected("host")}>
        {selected == "host" && <>
          <div className="w-full flex justify-between text-gray-600 text-xl">
            <span>Base Price</span><span className="font-bold">${price || 0} </span>
          </div>
          <div className="w-full flex justify-between text-gray-600 text-xl">
            <span>Host fee</span>
            <span className="font-bold">-${Math.floor(price * 0.04) || 0} </span>
          </div>
          <div className="my-4 h-0.5 w-full bg-gray" />
        </>}

        <div className="w-full flex justify-between text-gray-600 text-xl">
          <span>You earn</span>
          <span className="font-bold">${Math.round(price - (price * 0.04)) || 0} </span>
        </div>

      </div>

      <button onClick={onClick} className="my-6 text-xl font-bol text-gray-500 flex gap-2 cursor-pointer">
        Show less <ChevronUp size={24} />
      </button>
    </div>
  )
}

export default PriceClient;
