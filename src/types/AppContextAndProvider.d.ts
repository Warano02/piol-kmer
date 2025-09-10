export type User = {
  id: string;
  name: string;
  profile: string;
};

export type AppContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  showCurrencySettings: boolean;
  setShowCurrencySettings:React.Dispatch<React.SetStateAction<boolean>>;
  
};

export type CurrencySettingsProps={name:string,abr:string,signe:string,isSelected:boolean}