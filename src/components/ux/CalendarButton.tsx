import type { CalendarButtonType } from "@/types"
import { classNameInit, classNames } from "@/utils/style"
import { format, isBefore, isEqual, isPast, isToday } from "date-fns";

function CalendarButton({ selectedDay, setSelectedDay, selectedEnd, setSelectedEnd, day, dayIdx, hoveredDate, setHoveredDate, }: CalendarButtonType) {
    return (
        <div key={day?.toString()} className={classNameInit({ setSelectedDay,setSelectedEnd, hoveredDate, selectedEnd, selectedDay, day, dayIdx })}>
            <button
                type="button"
                onMouseMove={() => setHoveredDate(day)}
                disabled={isPast(day) && !isToday(day) ? true : false}
                onClick={async () => {
                    if (selectedDay === null) setSelectedDay(day);

                    if (isBefore(day, selectedDay)) {
                        await setSelectedDay(day);
                        await setSelectedEnd("");
                    } else {
                        if (selectedDay && !isEqual(day, selectedDay)) {
                            await setSelectedEnd(day);
                        }
                    }
                }}
                className={classNames(
                    selectedEnd !== null &&
                    isEqual(day, selectedEnd) &&
                    "text-white bg-black",

                    isPast(day) && !isToday(day) && "text-gray-300",

                    isEqual(day, selectedDay) && "bg-black text-white",

                    !isEqual(day, selectedDay) && isToday(day) && "text-black",

                    "cursor-pointer flex w-[2.8rem] h-[2.8rem] mx-auto items-center hover:border hover:border-black justify-center rounded-full transition-none"
                )}
                style={{ transition: "none!important" }}
            >
                <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
            </button>
        </div>
    )
}

export default CalendarButton