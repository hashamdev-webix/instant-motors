import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from '../../common/Modal';

const ShareAvailability = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    location: '',
    availability: '',
    experience: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    toast.success('Availability shared successfully!');
    onClose();
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleType: '',
      location: '',
      availability: '',
      experience: '',
      description: '',
    });
  };

  // Prevent click from bubbling up to the overlay
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Your Availability" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6" onClick={handleModalContentClick}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              required
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Type *
            </label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="input-field"
              required
              onClick={(e) => e.stopPropagation()}
            >
              <option value="">Select Vehicle Type</option>
              <option value="Flatbed">Flatbed</option>
              <option value="Refrigerated">Refrigerated</option>
              <option value="Tanker">Tanker</option>
              <option value="Dry Van">Dry Van</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input-field"
              placeholder="City, State"
              required
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability *
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="input-field"
              required
              onClick={(e) => e.stopPropagation()}
            >
              <option value="">Select Availability</option>
              <option value="Immediate">Immediate</option>
              <option value="Within 24 hours">Within 24 hours</option>
              <option value="Within 48 hours">Within 48 hours</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="input-field"
              placeholder="5"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="input-field"
            placeholder="Describe your experience, specializations, or any other details..."
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="submit" 
            className="btn-primary flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            Share Availability
          </button>
          <button 
            type="button" 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }} 
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ShareAvailability;