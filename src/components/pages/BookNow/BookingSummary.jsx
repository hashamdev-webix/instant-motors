import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button';

const BookingSummary = ({ bookingData, onBack, onConfirm }) => {
  const calculateTotal = () => {
    if (!bookingData.pickupDate || !bookingData.returnDate) return 0;
    
    const pickup = new Date(bookingData.pickupDate);
    const returnDate = new Date(bookingData.returnDate);
    const days = Math.ceil((returnDate - pickup) / (1000 * 60 * 60 * 24));
    
    // Base price $50/day
    let total = days * 50;
    
    // Add extras
    const extras = bookingData.extras || [];
    const extrasPrices = {
      gps: 10,
      insurance: 25,
      childSeat: 15,
      additionalDriver: 20,
    };
    
    extras.forEach(ext => {
      if (extrasPrices[ext]) {
        total += extrasPrices[ext] * days;
      }
    });
    
    return total;
  };

  const getExtrasLabel = (ext) => {
    const labels = {
      gps: 'GPS Navigation',
      insurance: 'Full Insurance',
      childSeat: 'Child Seat',
      additionalDriver: 'Additional Driver',
    };
    return labels[ext] || ext;
  };

  const totalPrice = calculateTotal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Booking Summary
      </h2>

      <div className="space-y-6">
        {/* Booking Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Pickup Date</p>
            <p className="font-semibold">
              {bookingData.pickupDate ? new Date(bookingData.pickupDate).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Return Date</p>
            <p className="font-semibold">
              {bookingData.returnDate ? new Date(bookingData.returnDate).toLocaleDateString() : 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pickup Location</p>
            <p className="font-semibold">{bookingData.pickupLocation || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Return Location</p>
            <p className="font-semibold">{bookingData.returnLocation || 'Same as pickup'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Driver's Age</p>
            <p className="font-semibold">{bookingData.driverAge || 'N/A'}</p>
          </div>
        </div>

        {/* Extras */}
        {bookingData.extras && bookingData.extras.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Additional Extras</h3>
            <div className="flex flex-wrap gap-2">
              {bookingData.extras.map((ext) => (
                <span key={ext} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                  {getExtrasLabel(ext)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Total Price */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-3xl font-bold text-primary-600">
              ${totalPrice}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">* Final price may vary based on availability</p>
        </div>

        <div className="flex gap-4 pt-4">
          <Button variant="primary" size="lg" onClick={onConfirm} className="flex-1">
            Confirm Booking
          </Button>
          <Button variant="secondary" size="lg" onClick={onBack} className="flex-1">
            Back to Edit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingSummary;