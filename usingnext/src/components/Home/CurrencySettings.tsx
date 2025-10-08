"use client"
import { useAppContext } from "@/hooks/useAppContext"
import type { CurrencySettingsProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

function CurrencySettings() {
  const { setShowCurrencySettings, currencyList, currency, setCurrency } = useAppContext()

  return (
    <div className="fixed w-full h-full  bg-[#222222ab] z-10 flex justify-center items-center" onClick={() => setShowCurrencySettings(false)}>
      <div className="w-3/4 h-3/4 bg-white rounded-3xl p-5" onClick={(ev) => ev.stopPropagation()}>
        <Tabs defaultValue="currency">
          <TabsList>
            <TabsTrigger value="currency" className="cursor-pointer">Currency</TabsTrigger>
            <TabsTrigger value="password" className="cursor-pointer">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="currency">
            <h1 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0 mb-2">Choose a currency</h1>
            <ScrollArea className="w-full h-64">
              <div className="grid grid-cols-4 gap-2 p-2 w-full h-full">
                {currencyList.map(el => (
                  <Currency
                    key={el.abr}
                    name={el.name}
                    abr={el.abr}
                    signe={el.signe}
                    isSelected={currency === el.abr}
                    onClick={() => setCurrency(el.abr)}
                  />
                ))}
              </div>
              <ScrollBar orientation="vertical"  />
            </ScrollArea>

          </TabsContent>
        </Tabs>


      </div>
    </div>
  )
}

function Currency({ name, abr, signe, isSelected, onClick }: CurrencySettingsProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col ${isSelected ? 'border' : ''} rounded p-2 cursor-pointer hover:bg-gray-100 transition w-[200px]`}
    >
      <span>{name}</span>
      <span className="text-muted-foreground text-sm">{abr} - {signe}</span>
    </div>
  )
}


export default CurrencySettings