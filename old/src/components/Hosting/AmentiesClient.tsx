"use client"

import {
  BriefcaseMedical,
  CarFront,
  Cigarette,
  CookingPot,
  Dumbbell,
  FireExtinguisher,
  Heater,
  LandPlot,
  LucideIcon,
  MonitorCheck,
  Ratio,
  Snowflake,
  ThermometerSun,
  Tv2,
  WashingMachine,
  WavesLadder,
  Wifi
} from "lucide-react"
import { useState } from "react"

const favoritesAmenities = [
  { name: "Wifi", icon: Wifi },
  { name: "TV", icon: Tv2 },
  { name: "Kitchen", icon: CookingPot },
  { name: "Washer", icon: WashingMachine },
  { name: "Parking", icon: CarFront },
  { name: "Air Condition", icon: Snowflake },
  { name: "Workspace", icon: MonitorCheck },
  { name: "Pool", icon: WavesLadder },
  { name: "Hot tub", icon: ThermometerSun },
  { name: "Patio", icon: Ratio },
  { name: "BBQ grill", icon: Ratio },
  { name: "Outdoor dining area", icon: LandPlot },
  { name: "Fire pit", icon: Heater },
  { name:"Exercice equipement", icon: Dumbbell },
  { name:"Smoke alarm", icon: Cigarette },
  { name:"First aid kit", icon: BriefcaseMedical },
  { name:"Fire extender", icon: FireExtinguisher },
]




export default function AmenitiesClient() {
  const [amenities, setAmenities] = useState<string[]>([])

  const toggleAmenity = (name: string) => {
    setAmenities(prev =>
      prev.includes(name)
        ? prev.filter(a => a !== name)
        : [...prev, name]
    )
  }

  return (
      <section className="space-y-6 ">
        <header>
          <h3 className="text-2xl font-semibold tracking-tight">
            Guest favorite amenities
          </h3>
          <p className="text-sm text-muted-foreground">
            Select the amenities you offer
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favoritesAmenities.map(({ name, icon: Icon }) => <SingleAmentie key={name} onClick={() => toggleAmenity(name)} isSelected={amenities.includes(name)} name={name} Icon={Icon} />)}
        </div>
      </section>
  )
}

const SingleAmentie = ({ onClick, Icon, isSelected, name }: { name: string, isSelected: boolean, onClick: () => void, Icon: LucideIcon }) => {
  return (
    <button

      type="button"
      onClick={onClick}
      className={`group cursor-pointer relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                ${isSelected ? "border-black bg-black text-white shadow-xl" : "border-neutral-200 bg-white hover:border-neutral-300"}`} >
      <div className={` flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${isSelected ? "bg-white/10" : "bg-neutral-100 group-hover:bg-neutral-200"}`} >
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium">{name}</span>
      {isSelected && (
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-green-400" />
      )}
    </button>
  )
}