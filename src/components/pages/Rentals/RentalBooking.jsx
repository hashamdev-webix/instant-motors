import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from '../../ui/DatePicker';
import Button from '../../common/Button';
import { useToast } from '../../../hooks';

const RentalBooking = ({ car, onClose }) => {
  const [bookingData, setBookingData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    driverAge: '',
  });
  const [errors, setErrors] = useState({});
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!bookingData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!bookingData.returnDate) newErrors.returnDate = 'Return date is required';
    if (!bookingData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
    if (!bookingData.driverAge) newErrors.driverAge = 'Driver age is required';
    
    // Validate dates
    if (bookingData.pickupDate && bookingData.returnDate) {
      const pickup = new Date(bookingData.pickupDate);
      const returnDate = new Date(bookingData.returnDate);
      if (returnDate <= pickup) {
        newErrors.returnDate = 'Return date must be after pickup date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Calculate total
      const pickup = new Date(bookingData.pickupDate);
      const returnDate = new Date(bookingData.returnDate);
      const days = Math.ceil((returnDate - pickup) / (1000 * 60 * 60 * 24));
      const totalPrice = days * car.pricePerDay;
      
      showToast('Booking created successfully!', 'success');
      // Navigate to booking summary
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Book {car?.name}
        </h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Car</p>
          <p className="font-semibold">{car?.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="font-semibold text-primary-600">${car?.pricePerDay}/day</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-semibold">{car?.type}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Transmission</p>
          <p className="font-semibold">{car?.transmission}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Date *
            </label>
            <DatePicker
              name="pickupDate"
              value={bookingData.pickupDate}
              onChange={handleChange}
              error={errors.pickupDate}
              minDate={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return Date *
            </label>
            <DatePicker
              name="returnDate"
              value={bookingData.returnDate}
              onChange={handleChange}
              error={errors.returnDate}
              minDate={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location *
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={bookingData.pickupLocation}
              onChange={handleChange}
              className={`input-field ${errors.pickupLocation ? 'border-red-500' : ''}`}
              placeholder="Enter pickup location"
              required
            />
            {errors.pickupLocation && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return Location
            </label>
            <input
              type="text"
              name="returnLocation"
              value={bookingData.returnLocation}
              onChange={handleChange}
              className="input-field"
              placeholder="Same as pickup"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Driver's Age *
          </label>
          <input
            type="number"
            name="driverAge"
            value={bookingData.driverAge}
            onChange={handleChange}
            className={`input-field ${errors.driverAge ? 'border-red-500' : ''}`}
            placeholder="21"
            min="18"
            required
          />
          {errors.driverAge && (
            <p className="text-red-500 text-sm mt-1">{errors.driverAge}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">Minimum age: 18 years</p>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" variant="primary" className="flex-1">
            Confirm Booking
          </Button>
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default RentalBooking;