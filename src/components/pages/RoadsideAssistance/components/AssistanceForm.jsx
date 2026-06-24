// src/components/pages/RoadsideAssistance/AssistanceForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  FaTimes, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCar, 
  FaTools, 
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaSpinner,
  FaExclamationTriangle,
  FaBatteryFull,
  FaGasPump,
  FaWrench,
  FaLock,
  FaInfoCircle,
  FaTruck
} from 'react-icons/fa';

const AssistanceForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    vehicle: '',
    issue: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.location.trim()) newErrors.location = 'Current location is required';
    if (!formData.issue) newErrors.issue = 'Please select an issue type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message with toast
      toast.success(
        <div className="flex items-start gap-3">
          <FaCheckCircle className="text-green-500 text-xl mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Assistance Request Submitted!</p>
            <p className="text-sm text-gray-600">We'll be there shortly. Our team is on the way.</p>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <FaClock className="text-blue-400" />
              Estimated arrival: 30-45 minutes
            </p>
          </div>
        </div>,
        { duration: 5000 }
      );
      
      onClose();
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        vehicle: '',
        issue: '',
        description: '',
      });
    } catch (error) {
      toast.error(
        <div className="flex items-center gap-2">
          <FaExclamationTriangle className="text-red-500" />
          <span>Something went wrong. Please try again.</span>
        </div>
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Issue options with icons
  const issueOptions = [
    { value: '', label: 'Select Issue Type', icon: null },
    { value: 'Flat Tire', icon: <FaWrench className="text-orange-500" />, label: 'Flat Tire' },
    { value: 'Battery Issue', icon: <FaBatteryFull className="text-green-500" />, label: 'Battery Issue' },
    { value: 'Out of Fuel', icon: <FaGasPump className="text-red-500" />, label: 'Out of Fuel' },
    { value: 'Engine Problems', icon: <FaTools className="text-yellow-500" />, label: 'Engine Problems' },
    { value: 'Accident', icon: <FaExclamationTriangle className="text-red-600" />, label: 'Accident' },
    { value: 'Lockout', icon: <FaLock className="text-blue-500" />, label: 'Lockout' },
    { value: 'Other', icon: <FaInfoCircle className="text-gray-500" />, label: 'Other' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <FaHeadset className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Request Roadside Assistance</h2>
                  <p className="text-white/80 text-xs flex items-center gap-2">
                    <FaClock className="text-white/60 text-xs" />
                    <span>24/7 Emergency Support</span>
                    <span className="w-px h-3 bg-white/30"></span>
                    <FaShieldAlt className="text-white/60 text-xs" />
                    <span>Verified Technicians</span>
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/20"
                disabled={submitting}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Emergency Note */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
                <div className="bg-red-500 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <FaTruck className="text-white text-xs" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-700 flex items-center gap-2">
                    <FaClock className="text-red-500 text-xs" />
                    Emergency Response
                  </p>
                  <p className="text-xs text-red-600">
                    Our team will contact you immediately. Average response time: 30-45 minutes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaUser className="inline mr-1.5 text-blue-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    disabled={submitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-red-500 text-xs" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaPhone className="inline mr-1.5 text-blue-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                    disabled={submitting}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-red-500 text-xs" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FaEnvelope className="inline mr-1.5 text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                  disabled={submitting}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FaMapMarkerAlt className="inline mr-1.5 text-blue-500" />
                  Current Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Street address or landmark"
                  disabled={submitting}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FaExclamationTriangle className="text-red-500 text-xs" />
                    {errors.location}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Vehicle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaCar className="inline mr-1.5 text-blue-500" />
                    Vehicle Make/Model
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Toyota Camry"
                    disabled={submitting}
                  />
                </div>

                {/* Issue Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaTools className="inline mr-1.5 text-blue-500" />
                    Issue Type *
                  </label>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.issue ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={submitting}
                  >
                    {issueOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.issue && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-red-500 text-xs" />
                      {errors.issue}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  <FaFileAlt className="inline mr-1.5 text-blue-500" />
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Provide more details about the issue..."
                  disabled={submitting}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaHeadset />
                      <span>Submit Request</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={submitting}
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 pt-2 border-t border-gray-200">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaClock className="text-blue-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaShieldAlt className="text-green-500" />
                  <span>Verified Technicians</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <FaCheckCircle className="text-green-500" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AssistanceForm;