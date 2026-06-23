import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Button from '../../common/Button';
import toast from 'react-hot-toast';

const FindDriverModal = ({ isOpen, onClose, onSelectDriver }) => {
  const [searchStep, setSearchStep] = useState(1);
  const [searchData, setSearchData] = useState({
    location: '',
    vehicleType: '',
    date: '',
  });
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [loading, setLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);

  // Mock drivers data
  const mockDrivers = [
    {
      id: 1,
      name: 'Ahmed Khan',
      rating: 4.9,
      experience: '8 years',
      location: 'Karachi',
      vehicle: 'Freightliner Cascadia',
      availability: 'Available',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      phone: '+92 300 1234567',
      email: 'ahmed.khan@example.com',
      description: 'Experienced long-haul driver with 8 years of experience.',
      price: 'Rs. 8,000/day',
      languages: ['Urdu', 'English', 'Sindhi'],
    },
    {
      id: 2,
      name: 'Sajid Ali',
      rating: 4.8,
      experience: '6 years',
      location: 'Lahore',
      vehicle: 'Kenworth T680',
      availability: 'Available',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      phone: '+92 300 2345678',
      email: 'sajid.ali@example.com',
      description: 'Professional driver with 6 years of experience.',
      price: 'Rs. 7,500/day',
      languages: ['Urdu', 'Punjabi', 'English'],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const filtered = mockDrivers.filter(driver => {
        const matchesLocation = driver.location.toLowerCase().includes(searchData.location.toLowerCase());
        const matchesVehicle = searchData.vehicleType ? driver.vehicle.toLowerCase().includes(searchData.vehicleType.toLowerCase()) : true;
        return matchesLocation && matchesVehicle;
      });
      
      setDrivers(filtered);
      setLoading(false);
      setSearchStep(2);
      
      if (filtered.length === 0) {
        toast.error('No drivers found in this area');
      } else {
        toast.success(`Found ${filtered.length} drivers`);
      }
    }, 1500);
  };

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
    setSearchStep(3);
  };

  const handleConfirmBooking = () => {
    if (selectedDriver) {
      toast.success(`Driver ${selectedDriver.name} booked successfully!`);
      if (onSelectDriver) {
        onSelectDriver(selectedDriver);
      }
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  const handleBack = () => {
    if (searchStep === 2) {
      setSearchStep(1);
    } else if (searchStep === 3) {
      setSearchStep(2);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-900">
                {searchStep === 1 && 'Find a Truck Driver'}
                {searchStep === 2 && 'Available Drivers'}
                {searchStep === 3 && 'Driver Details'}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {searchStep === 1 && (
                <form onSubmit={handleSearch} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location *
                    </label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={searchData.location}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={searchData.vehicleType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Any Type</option>
                      <option value="Flatbed">Flatbed</option>
                      <option value="Refrigerated">Refrigerated</option>
                      <option value="Tanker">Tanker</option>
                      <option value="Dry Van">Dry Van</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={searchData.date}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" variant="primary" className="flex-1" loading={loading}>
                      <MagnifyingGlassIcon className="h-5 w-5 mr-2 inline" />
                      Find Drivers
                    </Button>
                    <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </form>
              )}

              {searchStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-600">
                      Found <span className="font-semibold">{drivers.length}</span> drivers
                    </p>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      ← Modify Search
                    </button>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {drivers.map((driver) => (
                      <motion.div
                        key={driver.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => handleDriverSelect(driver)}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={driver.image}
                            alt={driver.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900">{driver.name}</h4>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <span>⭐ {driver.rating}</span>
                                  <span>•</span>
                                  <span>{driver.experience}</span>
                                  <span>•</span>
                                  <span className="text-gray-500">{driver.location}</span>
                                </div>
                              </div>
                              <span className="text-sm font-semibold text-green-600 px-2 py-1 bg-green-50 rounded-full">
                                {driver.availability}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{driver.vehicle}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span className="text-primary-600 font-semibold">{driver.price}</span>
                              <span className="text-gray-400">|</span>
                              <span className="text-gray-500">{driver.languages?.join(' | ')}</span>
                            </div>
                          </div>
                          <button className="btn-primary text-sm py-1 px-4 whitespace-nowrap">
                            Select
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <Button type="button" variant="secondary" onClick={handleBack} className="flex-1">
                      Back
                    </Button>
                    <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
                      Close
                    </Button>
                  </div>
                </div>
              )}

              {searchStep === 3 && selectedDriver && (
                <div className="space-y-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    ← Back to Results
                  </button>

                  <div className="flex items-start gap-6">
                    <img
                      src={selectedDriver.image}
                      alt={selectedDriver.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{selectedDriver.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-semibold">{selectedDriver.rating}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">{selectedDriver.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPinIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{selectedDriver.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-green-600 px-2 py-1 bg-green-50 rounded-full">
                        {selectedDriver.availability}
                      </span>
                      <p className="text-2xl font-bold text-primary-600 mt-2">{selectedDriver.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Vehicle</p>
                      <p className="font-semibold">{selectedDriver.vehicle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold">{selectedDriver.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-sm">{selectedDriver.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Languages</p>
                      <p className="font-semibold">{selectedDriver.languages?.join(', ')}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-gray-600">{selectedDriver.description}</p>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <Button type="button" variant="primary" onClick={handleConfirmBooking} className="flex-1">
                      Book This Driver
                    </Button>
                    <Button type="button" variant="secondary" onClick={() => setSearchStep(2)} className="flex-1">
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FindDriverModal;