import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingSummary from './BookingSummary';

const BookNow = () => {
  const location = useLocation();
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    carId: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    driverAge: '',
    extras: [],
    totalPrice: 0,
  });

  useEffect(() => {
    // Get car ID from URL params
    const params = new URLSearchParams(location.search);
    const carId = params.get('car');
    if (carId) {
      setBookingData(prev => ({ ...prev, carId }));
    }
  }, [location]);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setBookingStep(2);
  };

  const handleConfirmBooking = () => {
    // Process booking
    console.log('Booking confirmed:', bookingData);
    setBookingStep(3);
  };

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Book Your <span className="text-primary-600">Car</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Complete your booking in just a few easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    bookingStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    1
                  </div>
                  <div>
                    <p className="font-medium">Booking Details</p>
                    <p className="text-sm text-gray-500">Fill in your information</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    bookingStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    2
                  </div>
                  <div>
                    <p className="font-medium">Review & Confirm</p>
                    <p className="text-sm text-gray-500">Check your booking details</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    bookingStep >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    3
                  </div>
                  <div>
                    <p className="font-medium">Complete</p>
                    <p className="text-sm text-gray-500">Booking confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Content */}
          <div className="lg:col-span-2">
            {bookingStep === 1 && (
              <BookingForm 
                onSubmit={handleBookingSubmit} 
                initialData={bookingData}
              />
            )}
            {bookingStep === 2 && (
              <BookingSummary 
                bookingData={bookingData}
                onBack={() => setBookingStep(1)}
                onConfirm={handleConfirmBooking}
              />
            )}
            {bookingStep === 3 && (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Confirmed!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your booking has been confirmed. We'll send you a confirmation email shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Reference</h4>
                  <p className="text-primary-600 font-mono text-xl">
                    #IM-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </p>
                </div>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="btn-primary"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;