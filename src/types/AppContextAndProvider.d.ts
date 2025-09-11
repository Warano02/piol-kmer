export type User = {
  id: string;
  name: string;
  profile: string;
};
export type Currency = {
  name: string
  abr: string
  signe: string
  ratePerUSD: number
}

export type AppContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  showCurrencySettings: boolean;
  setShowCurrencySettings: React.Dispatch<React.SetStateAction<boolean>>;
  currencyList: Currency[];
};

export type CurrencySettingsProps = {
  name: string;
  abr: string;
  signe: string;
  isSelected: boolean;
  onClick: () => void;
};
