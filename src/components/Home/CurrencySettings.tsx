"use client"
import { useAppContext } from "@/hooks/useAppContext"
import type { CurrencySettingsProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { useCurrency } from "@/hooks/useCurrency"
import { useLanguage } from "@/hooks/useLanguage"




function CurrencySettings() {
  const { currencyList, currency, setCurrency } = useCurrency()
  const { setShowCurrencySettings } = useAppContext()
  const { languageList, language, setLanguage } = useLanguage()

  return (
    <div className="fixed w-full h-full  bg-[#222222ab] z-10 flex justify-center items-center" onClick={() => setShowCurrencySettings(false)}>
      <div className="w-3/4 h-3/4 bg-white rounded-3xl p-5" onClick={(ev) => ev.stopPropagation()}>
        <Tabs defaultValue="currency">
          <TabsList>
            <TabsTrigger value="currency" className="cursor-pointer">Currency</TabsTrigger>
            <TabsTrigger value="language" className="cursor-pointer">Language</TabsTrigger>
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
              <ScrollBar orientation="vertical" />
            </ScrollArea>

          </TabsContent>

          <TabsContent value="language">
            <h1 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0 mb-2">Setup App Language like you want</h1>
            {
              languageList.map((lang) => <LanguageOption
                key={lang.code}
                code={lang.code}
                label={lang.label}
                flag={lang.flag}
                isSelected={language === lang.code}
                onClick={() => setLanguage(lang.code)}
              />)
            }
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
      className={`flex flex-col ${isSelected ? 'border' : ''} rounded p-2 cursor-pointer hover:bg-gray-100 transition w-50`}
    >
      <span>{name}</span>
      <span className="text-muted-foreground text-sm">{abr} - {signe}</span>
    </div>
  )
}

interface ILanguage { code: string, label: string, flag: string, isSelected: boolean, onClick: () => void }
function LanguageOption({ code, label, flag, isSelected, onClick }: ILanguage) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border transition 
        ${isSelected ? "border-black bg-gray-100" : "border-transparent hover:bg-gray-100"}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{flag}</span>
        <span className="font-medium">{label}</span>
      </div>

      <span className="text-muted-foreground text-sm">{code.toUpperCase()}</span>
    </div>
  )
}


export default CurrencySettings