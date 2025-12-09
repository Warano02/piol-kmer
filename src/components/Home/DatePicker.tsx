"use client"

import type { DatePickerType } from "@/types"
import { add, eachDayOfInterval, endOfMonth, format, parse, startOfToday } from "date-fns"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CalendarButton from "../ux/CalendarButton";
import { useAppContext } from "@/hooks/useAppContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function DatePicker({ css, selection }: DatePickerType) {
    const { selectedDay, selectedEnd, setSelectedEnd, setSelectedDay } = useAppContext()
    const today = startOfToday();
    const Days = ["S", "M", "T", "W", "T", "F", "S"]
    const [hoveredDate, setHoveredDate] = useState<string | Date>("");
    const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
    const [nextMonthState, setNextMonth] = useState(
        add(firstDayCurrentMonth, { months: 1 })
    );
    const days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    const nextMonthDays = eachDayOfInterval({
        start: nextMonthState,
        end: endOfMonth(nextMonthState),
    });

    function previousMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));

        const firstDayNextNextMonth = add(nextMonthState, { months: -2 });
        setNextMonth(firstDayNextNextMonth);
    }

    function nextMonth() {
        const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));

        const firstDayNextNextMonth = add(nextMonthState, { months: 2 });
        setNextMonth(firstDayNextNextMonth);
    }
    return (
        <div className={`${css || "date-picker w-full relative z-10 mx-auto shadow border border-gray-300 bg-white rounded-3xl px-8 py-8"}`}>
            <div className="flex gap-6">
                <div className="w-full">
                    <div className="flex items-center">
                        <h2 className="flex-auto font-semibold text-gray-900 text-center">
                            {format(firstDayCurrentMonth, "MMMM yyyy")}
                        </h2>
                    </div>
                    <div className="grid grid-cols-7 mt-10 text-xs leading-6 font-semibold text-center text-gray-500">
                        {Days.map((day) => (
                            <div key={uuidv4()}>{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 mt-2 text-sm">
                        {days.map((day, dayIdx) => {
                            return (
                                <CalendarButton
                                    key={uuidv4()}
                                    selection={selection}
                                    selectedDay={selectedDay}
                                    setSelectedDay={setSelectedDay}
                                    selectedEnd={selectedEnd}
                                    setSelectedEnd={setSelectedEnd}
                                    // firstDayCurrentMonth={firstDayCurrentMonth}
                                    day={day}
                                    dayIdx={dayIdx}
                                    setHoveredDate={setHoveredDate}
                                    hoveredDate={hoveredDate}
                                // setButtonClicked={setButtonClicked}
                                />
                            );
                        })}
                    </div>

                </div>
                {/**Month +1 */}
                <div className="w-full">
                    <div className="flex items-center">
                        <h2 className="flex-auto font-semibold text-gray-900 text-center">
                            {format(nextMonthState, "MMM-yyyy")}
                        </h2>

                        <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 mt-10 text-xs leading-6 font-semibold text-center text-gray-500">
                        {Days.map((day) => (
                            <div key={uuidv4()}>{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 mt-2 text-sm">
                        {nextMonthDays.map((day, dayIdx) => {
                            return (
                                <CalendarButton
                                    selection={selection}
                                    selectedDay={selectedDay}
                                    setSelectedDay={setSelectedDay}
                                    selectedEnd={selectedEnd}
                                    setSelectedEnd={setSelectedEnd}
                                    // firstDayCurrentMonth={firstDayCurrentMonth}
                                    day={day}
                                    key={uuidv4()}
                                    dayIdx={dayIdx}
                                    setHoveredDate={setHoveredDate}
                                    hoveredDate={hoveredDate}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePicker