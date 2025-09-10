import { useAppContext } from "@/hooks/useAppContext"
import type { CurrencySettingsProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

function CurrencySettings() {
  const { setShowCurrencySettings } = useAppContext()
  const currencyList=[
    {
      name:"United State dollar",
      abr:"USD",
      signe:"$"
    },
    {
      name:"Australlian dollar",
      abr:"AUD",
      signe:"$"
    },{
      name:"Brazillian real",
      abr:"BRL",
      signe:"R$"
    },{
      name:"Bulgarian lev",
      abr:"BGN",
      

    }
  ]
  return (
    <div className="fixed w-full h-full  bg-[#222222ab] z-10 flex justify-center items-center" onClick={() => setShowCurrencySettings(false)}>
      <div className="w-3/4 h-3/4 bg-white rounded-3xl p-5" onClick={(ev) => ev.stopPropagation()}>
        <Tabs defaultValue="currency">
         <TabsList>
          <TabsTrigger value="currency" className="cursor-pointer">Currency</TabsTrigger>
          <TabsTrigger value="password" className="cursor-pointer">Password</TabsTrigger>
        </TabsList>

          <TabsContent value="currency">
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">Choose a currency</h1>
            <div className="relative grid grid-cols-4 gap-2">
              <Currency name="United State dollar" abr="USD" signe="$" isSelected={true} />
            </div>
          </TabsContent>
        </Tabs>


      </div>
    </div>
  )
}

function Currency({ name, abr, signe, isSelected }: CurrencySettingsProps) {
  return <div className={`flex flex-col ${isSelected ? 'border' : ''} rounded w-auto p-1 cursor-pointer hover:bg-gray transition`}>
    <span >{name} </span>
    <span className="text-muted-foreground text-sm">{abr}- {signe} </span>
  </div>
}

export default CurrencySettings