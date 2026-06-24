import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaTruck, 
  FaStar, 
  FaPhone, 
  FaEnvelope, 
  FaUser,
  FaClock,
  FaDollarSign,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaSpinner,
  FaInfoCircle,
  FaRoute,
  FaBuilding,
  FaUsers,
  FaThumbsUp,
  FaShieldAlt,
  FaHandshake
} from 'react-icons/fa';
import { MdLocationOn, MdVerified, MdSecurity } from 'react-icons/md';
import toast from 'react-hot-toast';

const FindDriverModal = ({ isOpen, onClose, onSelectDriver }) => {
  const [searchStep, setSearchStep] = useState(1);
  const [searchData, setSearchData] = useState({
    serviceType: '',
    routeType: '',
    routePrice: '',
    truckType: '',
    location: '',
    duration: '',
    additionalNeeds: false,
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
      description: 'Experienced long-haul driver with 8 years of experience. Specializes in cross-country deliveries.',
      price: '$800/day',
      languages: ['Urdu', 'English', 'Sindhi'],
      license: 'Class A CDL',
      insurance: 'Fully Insured',
      completedJobs: 1245,
      rating: 4.9,
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
      description: 'Professional driver with 6 years of experience. Expert in refrigerated loads and temperature-sensitive cargo.',
      price: '$750/day',
      languages: ['Urdu', 'Punjabi', 'English'],
      license: 'Class A CDL',
      insurance: 'Fully Insured',
      completedJobs: 876,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Bilal Hussain',
      rating: 4.7,
      experience: '4 years',
      location: 'Islamabad',
      vehicle: 'Volvo VNL',
      availability: 'Available',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      phone: '+92 300 3456789',
      email: 'bilal.h@example.com',
      description: 'Reliable driver with 4 years of experience. Specializes in local and regional routes.',
      price: '$650/day',
      languages: ['Urdu', 'English', 'Pashto'],
      license: 'Class B CDL',
      insurance: 'Fully Insured',
      completedJobs: 543,
      rating: 4.7,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const filtered = mockDrivers.filter(driver => {
        const matchesLocation = driver.location.toLowerCase().includes(searchData.location.toLowerCase());
        const matchesVehicle = searchData.truckType ? driver.vehicle.toLowerCase().includes(searchData.truckType.toLowerCase()) : true;
        return matchesLocation && matchesVehicle;
      });
      
      setDrivers(filtered);
      setLoading(false);
      setSearchStep(2);
      
      if (filtered.length === 0) {
        toast.error('No drivers found matching your criteria');
      } else {
        toast.success(`Found ${filtered.length} drivers available`);
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
    const { name, value, type, checked } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Step 1: Search Form
  const renderSearchForm = () => (
    <form onSubmit={handleSearch} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Service Type
          </label>
          <select
            name="serviceType"
            value={searchData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">Select Service</option>
            <option value="hire">Hire a Driver</option>
            <option value="share">Share Availability</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Route Type
          </label>
          <select
            name="routeType"
            value={searchData.routeType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">Select Route</option>
            <option value="local">Local</option>
            <option value="long-haul">Long Haul</option>
            <option value="regional">Regional</option>
            <option value="cross-country">Cross Country</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Route Price
          </label>
          <div className="relative">
            <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              name="routePrice"
              value={searchData.routePrice}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Truck Type
          </label>
          <select
            name="truckType"
            value={searchData.truckType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">Select Truck Type</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Tanker">Tanker</option>
            <option value="Dry Van">Dry Van</option>
            <option value="Dump Truck">Dump Truck</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Route Location
          </label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="location"
              value={searchData.location}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="City, State or Zip"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Select Duration
          </label>
          <select
            name="duration"
            value={searchData.duration}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">Select Duration</option>
            <option value="1-day">1 Day</option>
            <option value="2-day">2 Days</option>
            <option value="3-day">3 Days</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <input
          type="checkbox"
          name="additionalNeeds"
          checked={searchData.additionalNeeds}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">
          Additional Needs Optional
          <span className="block text-xs text-gray-400">Yes, we offer paid requirements</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <FaSearch />
            Request Driver
          </>
        )}
      </button>
    </form>
  );

  // Step 2: Results
  const renderResults = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Found <span className="font-semibold">{drivers.length}</span> drivers
        </p>
        <button
          type="button"
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
        >
          <FaArrowLeft className="text-xs" /> Modify Search
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {drivers.map((driver, index) => (
          <motion.div
            key={driver.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer hover:border-blue-300"
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
                    <h4 className="font-bold text-gray-900">{driver.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-0.5">
                        <FaStar className="text-yellow-400" /> {driver.rating}
                      </span>
                      <span>•</span>
                      <span>{driver.experience}</span>
                      <span>•</span>
                      <span className="text-gray-500">{driver.location}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
                    driver.availability === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {driver.availability}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{driver.vehicle}</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-blue-600 font-semibold">{driver.price}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    {driver.completedJobs} jobs
                  </span>
                  <span className="text-gray-500">{driver.languages?.join(' | ')}</span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-lg transition-all duration-300 whitespace-nowrap">
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handleBack}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-all duration-300 text-sm"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-all duration-300 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );

  // Step 3: Driver Details
  const renderDriverDetails = () => {
    if (!selectedDriver) return null;

    return (
      <div className="space-y-6">
        <button
          type="button"
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
        >
          <FaArrowLeft className="text-xs" /> Back to Results
        </button>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={selectedDriver.image}
            alt={selectedDriver.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{selectedDriver.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{selectedDriver.rating}</span>
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">{selectedDriver.experience} experience</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 flex items-center gap-1">
                <FaCheckCircle className="text-green-500 text-xs" />
                {selectedDriver.completedJobs} jobs completed
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-gray-400" />
              <span className="text-gray-600">{selectedDriver.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <FaTruck className="text-gray-400" />
              <span className="text-gray-600">{selectedDriver.vehicle}</span>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
              selectedDriver.availability === 'Available' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {selectedDriver.availability}
            </span>
            <p className="text-2xl font-bold text-blue-600 mt-2">{selectedDriver.price}</p>
            <p className="text-xs text-gray-400">per day</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl">
          <div>
            <p className="text-xs text-gray-500">Vehicle</p>
            <p className="font-semibold text-sm">{selectedDriver.vehicle}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="font-semibold text-sm">{selectedDriver.phone}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-semibold text-sm">{selectedDriver.email}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Languages</p>
            <p className="font-semibold text-sm">{selectedDriver.languages?.join(', ')}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">License</p>
            <p className="font-semibold text-sm">{selectedDriver.license}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Insurance</p>
            <p className="font-semibold text-sm">{selectedDriver.insurance}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" /> About
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{selectedDriver.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleConfirmBooking}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaHandshake />
            Book This Driver
          </button>
          <button
            type="button"
            onClick={() => setSearchStep(2)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Back
          </button>
        </div>
      </div>
    );
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
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {searchStep === 1 && 'Find a Truck Driver'}
                  {searchStep === 2 && 'Available Drivers'}
                  {searchStep === 3 && 'Driver Details'}
                </h3>
                {searchStep === 1 && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    Fill in the details to find the perfect driver for your needs
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaTimes className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {searchStep === 1 && renderSearchForm()}
              {searchStep === 2 && renderResults()}
              {searchStep === 3 && renderDriverDetails()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FindDriverModal;