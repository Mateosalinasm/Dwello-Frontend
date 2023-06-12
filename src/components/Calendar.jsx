import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingDates, setBookingDates] = useState({
    startDate: null,
    endDate: null,
  });
const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [numberOfGuests, setNumberOfGuests] = useState(1);


  const generateCalendarDays = (month) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });

    // Add days from the previous month to fill the first week
    while (days[0].getDay() !== 1) {
      days.unshift(new Date(days[0].getTime() - 86400000));
    }

    // Add days from the next month to fill the last week
    while (days[days.length - 1].getDay() !== 0) {
      days.push(new Date(days[days.length - 1].getTime() + 86400000));
    }

    return days;
  };

  const [daysOfTheMonth, setDaysOfTheMonth] = useState(
    generateCalendarDays(currentMonth)
  );

  useEffect(() => {
    setDaysOfTheMonth(generateCalendarDays(currentMonth));
  }, [currentMonth]);

  const goToNextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  const goToPrevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );

  const handleDateSelection = (selectedDay) => {
    if (
      !bookingDates.startDate ||
      (bookingDates.startDate && bookingDates.endDate)
    ) {
      setBookingDates({ startDate: selectedDay, endDate: null });
    } else if (selectedDay < bookingDates.startDate) {
      setBookingDates({
        startDate: selectedDay,
        endDate: bookingDates.startDate,
      });
    } else {
      setBookingDates({ ...bookingDates, endDate: selectedDay });
    }
  };

  const isWithinBookingRange = (day) => {
    if (!bookingDates.startDate || !bookingDates.endDate) return false;
    return day >= bookingDates.startDate && day <= bookingDates.endDate;
  };


  return (
    <div>
      <div className="">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={goToPrevMonth}
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">
              {format(currentMonth, "MMMM yyyy")}
            </div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              onClick={goToNextMonth}
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="text-xs mt-6 grid grid-cols-7 leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {daysOfTheMonth.map((day) => (
              <button
                key={day}
                type="button"
                className={classNames(
                  "py-1.5 hover:bg-amber-50 focus:z-10",
                  isSameMonth(day, currentMonth) ? "bg-white" : "bg-gray-100",
                  isToday(day) && "font-semibold text-amber-600",
                  day.getTime() === bookingDates.startDate?.getTime() &&
                    "bg-gray-900 font-semibold text-amber-800",
                  day.getTime() === bookingDates.endDate?.getTime() &&
                    "bg-gray-900 font-semibold text-amber-800",
                  isWithinBookingRange(day) && "bg-amber-100"
                )}
                onClick={() => handleDateSelection(day)}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  {format(day, "d")}
                </time>
              </button>
            ))}
          </div>
          {/* <button
            type="button"
            className="mt-8 w-full rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Add event
          </button> */}
        </div>
      </div>
    </div>
  );
}

