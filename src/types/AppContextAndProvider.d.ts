import type React from "react";
import type { GuestType, SingleHome } from "./Components";

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

export interface DateSelector {
  selectedDay: string | Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<string | Date>>;
  selectedEnd: string | Date;
  setSelectedEnd: React.Dispatch<React.SetStateAction<string | Date>>;
}

export interface AppContextType extends DateSelector {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  currency: string; // the currency of the app
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  destination: string | null; // where user find home
  setDestination: React.Dispatch<React.SetStateAction<string | null>>;
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
  setGuests: React.Dispatch<React.SetStateAction<GuestType>>;
  guests: GuestType;
  result: string | null; // String notation of guest list
}

export type CurrencySettingsProps = {
  name: string;
  abr: string;
  signe: string;
  isSelected: boolean;
  onClick: () => void;
};
