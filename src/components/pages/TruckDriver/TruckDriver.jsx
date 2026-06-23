import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DriverSearch from './DriverSearch';
import FindDriverModal from './FindDriverModal';
import ShareAvailability from './ShareAvailability';
import DriverCard from './DriverCard';
import toast from 'react-hot-toast';

const TruckDriver = () => {
  const [showFindDriver, setShowFindDriver] = useState(false);
  const [showShareAvailability, setShowShareAvailability] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleFindDriver = () => {
    setShowFindDriver(true);
  };

  const handleShareAvailability = () => {
    setShowShareAvailability(true);
  };

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
    toast.success(`Driver ${driver.name} selected!`);
  };

  const handleContact = (driver) => {
    toast.success(`Contacting ${driver.name}...`);
  };

  const handleBook = (driver) => {
    toast.success(`Booking ${driver.name}...`);
  };

  // Featured drivers for display
  const featuredDrivers = [
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
      description: 'Professional driver specializing in refrigerated loads.',
    },
  ];

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Truck Driver <span className="text-primary-600">Services</span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Find reliable truck drivers or share your availability for driving opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Find Driver Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 text-center hover:shadow-xl cursor-pointer group"
            onClick={handleFindDriver}
          >
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Find a Driver
            </h3>
            <p className="text-gray-600">
              Looking for a reliable truck driver? Search and connect with verified drivers in your area.
            </p>
            <button className="btn-primary mt-6 inline-block">
              Find Driver →
            </button>
          </motion.div>

          {/* Share Availability Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 text-center hover:shadow-xl cursor-pointer group"
            onClick={handleShareAvailability}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <span className="text-3xl">📢</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Share Availability
            </h3>
            <p className="text-gray-600">
              Are you a truck driver looking for work? Share your availability and get connected with clients.
            </p>
            <button className="btn-primary mt-6 inline-block bg-green-600 hover:bg-green-700">
              Share Availability →
            </button>
          </motion.div>
        </div>

        {/* Featured Drivers */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured <span className="text-primary-600">Drivers</span>
            </h2>
            <button 
              onClick={handleFindDriver}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDrivers.map((driver) => (
              <DriverCard
                key={driver.id}
                driver={driver}
                onContact={handleContact}
                onBook={handleBook}
              />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Search</h4>
              <p className="text-sm text-gray-600">Search for available drivers in your area</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Connect</h4>
              <p className="text-sm text-gray-600">Contact and discuss requirements with drivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Book</h4>
              <p className="text-sm text-gray-600">Confirm booking and get on the road</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showFindDriver && (
        <FindDriverModal
          isOpen={showFindDriver}
          onClose={() => setShowFindDriver(false)}
          onSelectDriver={handleDriverSelect}
        />
      )}

      {showShareAvailability && (
        <ShareAvailability
          isOpen={showShareAvailability}
          onClose={() => setShowShareAvailability(false)}
        />
      )}
    </div>
  );
};

export default TruckDriver;