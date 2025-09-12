import type { DateSelector } from "./AppContextAndProvider";

export type SingleHome = {
  src: string;
  price: number;
  title: string;
  id: string;
  favName?: string; // Is useFull if Home is favorite
};

export type CarrouselImagesProps = {
  title: string;
  link: string;
  data: SingleHome[] | undefined;
};

export type CustomImageProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  effect?: "zoom";
};

export interface GuestType {
  children?: number;
  pets?: number;
  adults?: number;
  infant?: number;
}

export type Menu1Type = {
  type: "adults" | "children" | "pets";
  title: string;
  text: string;
};

export interface GuestCardType extends GuestCardType {
  operation: "add" | "minus";
  type: "adults" | "children" | "pets";
}

export interface GuessPickerType {
  css?: string;
}
export interface DatePickerType extends GuessPickerType {
  footer?: boolean;
}
export interface CalendarButtonType extends DateSelector{
  day: Date;
  dayIdx: number;
  hoveredDate: string | Date;
  setHoveredDate: React.Dispatch<React.SetStateAction<string | Date>>;
}
export interface classNameInitType extends DateSelector {
  hoveredDate: string|Date;
  day: Date;
  dayIdx: number;
}
