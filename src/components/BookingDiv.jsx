import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import BookingModal from "./BookingModal";

const BookingDiv = ({ property }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookDwello() {
    // Input validation
    if (new Date(checkIn) < new Date()) {
      setErrorMessage("Check-in date cannot be in the past");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage("Check-out date must be after check-in date");
      return;
    }

    if (numberOfGuests <= 0) {
      setErrorMessage("Number of guests must be greater than 0");
      return;
    }

    if (numberOfGuests > property.maxGuests) {
      setErrorMessage("Number of guests exceeds the maximum limit");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4005/booking`,
        {
          property: property._id,
          checkIn,
          checkOut,
          numberOfGuests,
          price: numberOfNights * property.price,
        }
      );

      setShowBookingModal(true);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Booking failed, please try again");
    }
  }

  return (
    <div>
      <div className="my-10 w-full rounded-2xl border border-gray-300 bg-stone-50 p-4 text-gray-700 shadow-2xl">
        <div className="flex justify-between px-2">
          <div className="text-sm ">
            <span className="text-base font-bold ">${property.price}</span> /
            night
          </div>
          <div className="flex">
            <p className="text-sm">Super Host</p>{" "}
            <StarIcon className="ml-1 h-4 w-4 text-amber-500" />
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-gray-400">
          <div className="flex justify-between">
            <div className="flex flex-grow flex-col px-4 py-3 text-sm">
              <label className="text-xxs font-bold">CHECK-IN</label>
              <input
                className="rounded-xl border-none bg-stone-50 p-0 focus:ring-amber-500"
                type="date"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-grow flex-col border-l border-gray-300 px-4 py-3 text-sm">
              <label className="text-xxs font-bold">CHECK-OUT</label>
              <input
                className="rounded-xl border-none bg-stone-50 p-0 focus:ring-amber-500"
                type="date"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="mx-4 flex flex-col justify-center py-3">
              <label className="text-xxs font-bold">GUESTS</label>
              <input
                className="rounded-2xl border-none border-gray-300 bg-stone-50 focus:ring-amber-500"
                type="number"
                value={numberOfGuests}
                onChange={(e) => {
                  setNumberOfGuests(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <button
          onClick={bookDwello}
          className="mt-4 flex w-full max-w-2xl flex-1 items-center justify-center rounded-md border border-transparent bg-amber-600 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 "
        >
          Book
        </button>
        <div className="mt-8 flex justify-between border-t px-1 pt-4">
          {checkIn && checkOut ? (
            <>
              ${property.price} x {numberOfNights} nights
              {numberOfNights > 0 && (
                <span> ${numberOfNights * property.price}</span>
              )}
            </>
          ) : (
            <></>
          )}
          <BookingModal
            showBookingModal={showBookingModal}
            onClose={() => setShowBookingModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingDiv;
