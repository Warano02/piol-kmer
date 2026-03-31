export type Currency = {
  name: string;
  abr: string;
  signe: string;
  ratePerUSD: number;
};

export interface ICurrency {
  currency: string; // the currency of the app
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencyList: Currency[];
  formatPrice:(price:number)=>string
}
