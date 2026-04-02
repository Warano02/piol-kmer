type Lang = { code: string; label: string; flag: string };

export interface ILanguage {
  languageList: Lang[];
  language:string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}
