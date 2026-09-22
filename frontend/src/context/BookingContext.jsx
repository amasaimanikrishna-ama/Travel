import React, { createContext, useState } from 'react';

export const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [bookingDetails, setBookingDetails] = useState({
    item: null,
    startDate: null,
    endDate: null,
    totalPrice: 0,
    guestInfo: {}
  });

  const updateBooking = (details) => {
    setBookingDetails((prev) => ({ ...prev, ...details }));
  };

  const clearBooking = () => {
    setBookingDetails({ item: null, startDate: null, endDate: null, totalPrice: 0, guestInfo: {} });
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, updateBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
