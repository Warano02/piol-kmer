import type {  classNameInitType } from "@/types";
import { getDay, isAfter, isBefore, isEqual } from "date-fns";

export const classNames = (...classes: (string | number | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const textResizer = (data: string, value = 10): string => {
  if (data?.length > value) {
    return data.slice(0, value) + "...";
  } else {
    return data;
  }
};

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export const classNameInit = ({
  hoveredDate,
  selectedEnd,
  selectedDay,
  day,
  dayIdx,
}: classNameInitType) => {
  return classNames(
    hoveredDate !== null &&
    selectedEnd === null &&
    selectedDay !== null &&
    (isEqual(selectedDay, day) || isAfter(day, selectedDay)) &&
    isAfter(hoveredDate, day) &&
    "bg-zinc-100",

    isEqual(selectedDay, day) && "date-gradient-start",
    isEqual(selectedEnd, day) && "date-gradient-end",

    selectedDay && !selectedEnd && isEqual(day, hoveredDate) && "bg-zinc-100",

    selectedDay &&
    (isEqual(day, selectedDay) || isAfter(day, selectedDay)) &&
    selectedEnd &&
    (isEqual(day, selectedEnd) || isBefore(day, selectedEnd)) &&
    "bg-zinc-100",

    dayIdx === 0 && colStartClasses[getDay(day)],
    "my-[1.5px]"
  );
};