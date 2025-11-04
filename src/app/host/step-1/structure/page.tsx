"use client";
import { useState } from "react";
import {
  Home,
  Building2,
  Warehouse,
  Hotel,
  Tent,
  Castle,
  TreePine,
} from "lucide-react";

export default function Page() {
  const [selected, setSelected] = useState("house");

  const items = [
    {
      icon: <Home size={28} />,
      label: "House",
      value: "house",
    },
    {
      icon: <Building2 size={28} />,
      label: "Apartment",
      value: "apartment",
    },
    {
      icon: <Warehouse size={28} />,
      label: "Loft",
      value: "loft",
    },
    {
      icon: <Hotel size={28} />,
      label: "Guesthouse",
      value: "guesthouse",
    },
    {
      icon: <Tent size={28} />,
      label: "Cabin",
      value: "cabin",
    },
    {
      icon: <Castle size={28} />,
      label: "Castle",
      value: "castle",
    },
    {
      icon: <TreePine size={28} />,
      label: "Treehouse",
      value: "treehouse",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center mt-6 gap-6">
      <h1 className="text-2xl font-bold text-center">
        Which of these best describes your place?
      </h1>

      <div className="w-2/3 h-2/3 grid grid-cols-2 md:grid-cols-4  overflow-y-auto hide-scrollbar p-4">
        {items.map((el, idx) => (
          <TypeOfHouse
            key={idx}
            icon={el.icon}
            label={el.label}
            value={el.value}
            isSelected={selected === el.value}
            setSelected={setSelected}
          />
        ))}
      </div>

      
    </div>
  );
}

interface Props {
  isSelected: boolean;
  icon: React.ReactNode;
  value: string;
  label: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const TypeOfHouse = ({
  isSelected,
  value,
  setSelected,
  icon,
  label,
}: Props) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setSelected(value);
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[180px] h-[120px] border rounded-xl font-medium transition-all duration-150 cursor-pointer relative p-4 flex flex-col items-center justify-center gap-2
      ${
        isSelected
          ? "border-gray-800 bg-gray-100"
          : "border-gray-300 hover:border-gray-500"
      }
      ${pressed ? "scale-95" : "scale-100"}`}
    >
      <span
        className={`${
          isSelected ? "text-gray-900" : "text-gray-600"
        } transition-colors`}
      >
        {icon}
      </span>
      <h3 className={`text-sm ${isSelected ? "font-semibold" : ""}`}>
        {label}
      </h3>
    </div>
  );
};
