import React, { useState } from 'react';

const BookingForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const extrasList = [
    { id: 'gps', label: 'GPS Navigation', price: 10 },
    { id: 'insurance', label: 'Full Insurance Coverage', price: 25 },
    { id: 'childSeat', label: 'Child Seat', price: 15 },
    { id: 'additionalDriver', label: 'Additional Driver', price: 20 },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          extras: [...formData.extras, name],
        });
      } else {
        setFormData({
          ...formData,
          extras: formData.extras.filter(ext => ext !== name),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return date is required';
    if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.driverAge) newErrors.driverAge = 'Driver age is required';
    
    // Validate dates
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
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
      onSubmit(formData);
    }
  };

  // Calculate total price (mock)
  const calculateTotal = () => {
    let total = 0;
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
      const days = Math.ceil((returnDate - pickup) / (1000 * 60 * 60 * 24));
      total = days * 50; // Base price $50/day
      // Add extras
      formData.extras.forEach(ext => {
        const extra = extrasList.find(e => e.id === ext);
        if (extra) total += extra.price * days;
      });
    }
    return total;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Booking Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Date *
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className={`input-field ${errors.pickupDate ? 'border-red-500' : ''}`}
              required
            />
            {errors.pickupDate && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Date *
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className={`input-field ${errors.returnDate ? 'border-red-500' : ''}`}
              required
            />
            {errors.returnDate && (
              <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location *
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Location
            </label>
            <input
              type="text"
              name="returnLocation"
              value={formData.returnLocation}
              onChange={handleChange}
              className="input-field"
              placeholder="Same as pickup"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Driver's Age *
          </label>
          <input
            type="number"
            name="driverAge"
            value={formData.driverAge}
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Additional Extras
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {extrasList.map((extra) => (
              <label key={extra.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  name={extra.id}
                  checked={formData.extras.includes(extra.id)}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">{extra.label}</span>
                  <span className="text-sm text-gray-500 ml-2">+${extra.price}/day</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">Estimated Total:</span>
            <span className="text-2xl font-bold text-primary-600">
              ${calculateTotal()}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">* Final price may vary based on availability</p>
        </div>

        <button type="submit" className="btn-primary w-full">
          Review Booking →
        </button>
      </form>
    </div>
  );
};

export default BookingForm;