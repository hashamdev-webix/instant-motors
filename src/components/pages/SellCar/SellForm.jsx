import React, { useState } from 'react';
import { 
  FaCar, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaTools, 
  FaClock, 
  FaTruck, 
  FaSyncAlt, 
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaFileAlt,
  FaImage,
  FaInfoCircle
} from 'react-icons/fa';

const SellForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setErrors({
        ...errors,
        images: 'Maximum 5 images allowed',
      });
      return;
    }
    setFormData({
      ...formData,
      images: files,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.brand) newErrors.brand = 'Brand is required';
    if (!formData.model) newErrors.model = 'Model is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.mileage) newErrors.mileage = 'Mileage is required';
    if (!formData.condition) newErrors.condition = 'Condition is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  // Service type options
  const serviceTypes = [
    { value: '', label: 'Select Service Type' },
    { value: 'sell', label: 'Sell My Car' },
    { value: 'trade', label: 'Trade-In' },
    { value: 'inspection', label: 'Vehicle Inspection' },
    { value: 'valuation', label: 'Quick Valuation' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaCar className="text-blue-500" />
        Car Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaTools className="inline mr-2 text-blue-500" />
            Service Type *
          </label>
          <select
            name="serviceType"
            value={formData.serviceType || ''}
            onChange={handleChange}
            className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.serviceType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {serviceTypes.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaCar className="inline mr-2 text-blue-500" />
              Brand *
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.brand ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Toyota"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
            )}
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaCar className="inline mr-2 text-blue-500" />
              Vehicle Model *
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.model ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Camry"
            />
            {errors.model && (
              <p className="text-red-500 text-sm mt-1">{errors.model}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaCalendarAlt className="inline mr-2 text-blue-500" />
              Year *
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.year ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="2023"
              min="2000"
              max="2024"
            />
            {errors.year && (
              <p className="text-red-500 text-sm mt-1">{errors.year}</p>
            )}
          </div>

          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaTruck className="inline mr-2 text-blue-500" />
              Mileage (km) *
            </label>
            <input
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.mileage ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="15000"
            />
            {errors.mileage && (
              <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>
            )}
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaShieldAlt className="inline mr-2 text-blue-500" />
              Condition *
            </label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.condition ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Condition</option>
              <option value="Excellent">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
            {errors.condition && (
              <p className="text-red-500 text-sm mt-1">{errors.condition}</p>
            )}
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaFileAlt className="inline mr-2 text-blue-500" />
            Asking Price ($) *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.price ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="25000"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
            Your Location *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="City, State or Zip Code"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaPhone className="inline mr-2 text-blue-500" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            className={`input-field w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaFileAlt className="inline mr-2 text-blue-500" />
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="input-field w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Describe your car's features, condition, and any modifications..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaImage className="inline mr-2 text-blue-500" />
            Upload Images (Max 5)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="input-field w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}
          {formData.images.length > 0 && (
            <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              {formData.images.length} image(s) selected
            </p>
          )}
        </div>

        {/* Service Features */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" />
            What to Expect
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaClock className="text-blue-500" />
              <span>Avg Arrival 30-45 min</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaTruck className="text-blue-500" />
              <span>Towing Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaSyncAlt className="text-blue-500" />
              <span>Live Status Updates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaShieldAlt className="text-blue-500" />
              <span>Secure Service Request</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            type="submit" 
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <FaTools />
            <span>Get Help Now</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            type="button"
            onClick={() => onSubmit(formData)}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <FaFileAlt />
            <span>Get Price Estimate</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellForm;