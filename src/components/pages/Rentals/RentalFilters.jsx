import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaCar, 
  FaDollarSign,
  FaCog,
  FaUser,
  FaUndo 
} from 'react-icons/fa';

const RentalFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    transmission: '',
    seats: '',
    priceRange: '',
  });

  const handleChange = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      pickupLocation: '',
      pickupDate: '',
      returnDate: '',
      carType: '',
      transmission: '',
      seats: '',
      priceRange: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline mr-1 text-primary-600" /> Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={filters.pickupLocation}
            onChange={handleChange}
            placeholder="Enter city or airport"
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaCalendarAlt className="inline mr-1 text-primary-600" /> Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            value={filters.pickupDate}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          />
        </div>

        {/* Return Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaCalendarAlt className="inline mr-1 text-primary-600" /> Return Date
          </label>
          <input
            type="date"
            name="returnDate"
            value={filters.returnDate}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaCar className="inline mr-1 text-primary-600" /> Vehicle Type
          </label>
          <select
            name="carType"
            value={filters.carType}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Luxury">Luxury</option>
            <option value="Truck">Truck</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaCog className="inline mr-1 text-primary-600" /> Transmission
          </label>
          <select
            name="transmission"
            value={filters.transmission}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">All</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Seats */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-1 text-primary-600" /> Seats
          </label>
          <select
            name="seats"
            value={filters.seats}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Any</option>
            <option value="2">2 Seats</option>
            <option value="4">4 Seats</option>
            <option value="5">5 Seats</option>
            <option value="7">7 Seats</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaDollarSign className="inline mr-1 text-primary-600" /> Price Range
          </label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          >
            <option value="">Any Price</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-150">$100 - $150</option>
            <option value="150-200">$150 - $200</option>
            <option value="200+">$200+</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaUndo className="text-sm" />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalFilters;