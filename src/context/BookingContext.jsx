import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const createBooking = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setBookings(prev => [...prev, newBooking]);
    setCurrentBooking(newBooking);
    return newBooking;
  };

  const updateBooking = (id, updates) => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === id ? { ...booking, ...updates } : booking
      )
    );
    if (currentBooking?.id === id) {
      setCurrentBooking(prev => ({ ...prev, ...updates }));
    }
  };

  const cancelBooking = (id) => {
    updateBooking(id, { status: 'cancelled' });
  };

  const getBookingById = (id) => {
    return bookings.find(booking => booking.id === id);
  };

  const getUserBookings = (userId) => {
    return bookings.filter(booking => booking.userId === userId);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        currentBooking,
        createBooking,
        updateBooking,
        cancelBooking,
        getBookingById,
        getUserBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};