import type React from "react";
import type { SingleHome } from "./Components";

export type User = {
  id: string;
  name: string;
  profile: string;
};
export type Currency = {
  name: string;
  abr: string;
  signe: string;
  ratePerUSD: number;
};

export type AppContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  currency: string; // the currency of the app
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  destination: string; // where user find home
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  selectedDay: string | null; // when user come at home
  setSelectedDay: React.Dispatch<React.SetStateAction<string | null>>;
  selectedEnd: string | null; // when user wanna go
  setSelectedEnd: React.Dispatch<React.SetStateAction<string | null>>;
  showCurrencySettings: boolean;
  setShowCurrencySettings: React.Dispatch<React.SetStateAction<boolean>>;
  currencyList: Currency[];
  showPlaceFilter: boolean;
  setShowPlaceFilter: React.Dispatch<React.SetStateAction<boolean>>;
  formatPrice: (price: number) => string;
  addGuesFavorite: (id: string) => void;
  guesFavorite: SingleHome[];
  Homes: SingleHome[];
  setHomes: React.Dispatch<React.SetStateAction<SingleHome[]>>;
  setGuesFavorite: React.Dispatch<React.SetStateAction<SingleHome[]>>;
};

export type CurrencySettingsProps = {
  name: string;
  abr: string;
  signe: string;
  isSelected: boolean;
  onClick: () => void;
};
