import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaShareAlt, 
  FaTruck, 
  FaStar, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaUserCheck,
  FaUsers,
  FaHeadset,
  FaCheckCircle,
  FaCalendarAlt,
  FaInfoCircle,
  FaBuilding,
  FaRoute,
  FaUserTie
} from 'react-icons/fa';
import { MdLocationOn, MdSecurity, MdVerified, MdSpeed } from 'react-icons/md';
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

  const benefits = [
    {
      icon: <FaHeadset className="text-2xl" />,
      title: '24/7 Support',
      description: "We're here to help you with any questions you have.",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MdVerified className="text-2xl" />,
      title: 'Verified Drivers',
      description: 'Licensed, insured, and background-checked.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MdSpeed className="text-2xl" />,
      title: 'Fast Matching',
      description: 'Get the right driver on the road—fast.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      title: 'Commercial Ready',
      description: 'Built for business and fleet needs.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: <FaUserTie className="text-xl" />,
      title: 'Hire a Truck Driver',
      description: 'Find professional drivers for short or long-term needs.'
    },
    {
      icon: <FaClock className="text-xl" />,
      title: 'Driver Availability',
      description: 'Real-time availability to match your schedule.'
    },
    {
      icon: <MdSecurity className="text-xl" />,
      title: 'Verified Drivers',
      description: 'All drivers are verified, licensed, and background-checked.'
    },
    {
      icon: <FaRoute className="text-xl" />,
      title: 'Local & Long Haul',
      description: 'Find long-distance truck drivers who can get your goods.'
    }
  ];

  return (
    <div className="w-full mt-8">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                <FaTruck className="text-blue-400 text-sm" />
                <span className="text-white text-sm font-medium">Professional Truck Driver Services</span>
                <FaArrowRight className="text-white/60 text-xs" />
              </span>
              
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hire or Drive.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                  Move Freight Instantly.
                </span>
              </h1>
              
              <p className="text-white/90 text-base sm:text-lg md:text-xl mt-4 max-w-3xl leading-relaxed">
                Instant Motors connects businesses who need reliable truck drivers with professional 
                drivers who want to share their availability. Flexible. Verified. On the road—fast.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all"
                  >
                    <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-300">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                      <p className="text-white/70 text-xs">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <button
                  onClick={handleFindDriver}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <FaSearch /> Hire a Truck Driver
                </button>
                <button
                  onClick={handleShareAvailability}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30 flex items-center gap-2"
                >
                  <FaShareAlt /> I'm a Truck Driver
                </button>
                <button
                  onClick={handleFindDriver}
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaUsers /> View Driver Services
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== QUICK SEARCH SECTION ===== */}
      <section className="relative -mt-16 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>Select Service</option>
                  <option>Hire Driver</option>
                  <option>Share Availability</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City, State or Zip"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    defaultValue="2025-05-24"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Truck Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>Select Truck Type</option>
                  <option>Flatbed</option>
                  <option>Refrigerated</option>
                  <option>Tanker</option>
                  <option>Dry Van</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shift Duration
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>Select Duration</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Long-term</option>
                </select>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">No Hidden Fees</p>
                  <p className="text-xs text-gray-500">Transparent pricing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Verified & Insured</p>
                  <p className="text-xs text-gray-500">Professional drivers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaClock className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Flexible Scheduling</p>
                  <p className="text-xs text-gray-500">Book when you need</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaUsers className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Quick Matching</p>
                  <p className="text-xs text-gray-500">Find drivers fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TWO CARD SECTION ===== */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Find Driver Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all cursor-pointer border border-blue-100 group"
              onClick={handleFindDriver}
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all">
                <FaSearch className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Hire a Truck Driver
              </h3>
              <p className="text-gray-600">
                Find professional drivers for short or long-term needs.
              </p>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2">
                Find Driver <FaArrowRight />
              </button>
            </motion.div>

            {/* Share Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all cursor-pointer border border-green-100 group"
              onClick={handleShareAvailability}
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-all">
                <FaShareAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                I'm a Truck Driver
              </h3>
              <p className="text-gray-600">
                Share your availability and get connected with clients.
              </p>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2">
                Share Availability <FaArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Instant Motors</span>
            </h2>
            <p className="text-gray-600 mt-2">Professional truck driver services you can trust</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED DRIVERS ===== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Drivers</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Verified professional drivers ready to work</p>
            </div>
            <button 
              onClick={handleFindDriver}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All <FaArrowRight className="text-xs" />
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
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Works</span>
            </h2>
            <p className="text-gray-600 mt-2">Simple steps to get your freight moving</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Search</h4>
              <p className="text-sm text-gray-600">Search for available drivers in your area</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-all">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Connect</h4>
              <p className="text-sm text-gray-600">Contact and discuss requirements with drivers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-all">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Book</h4>
              <p className="text-sm text-gray-600">Confirm booking and get on the road</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600')] bg-cover bg-center opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-2xl md:text-3xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to Move Freight?</h2>
            <p className="text-white/80 mt-3 text-sm sm:text-base">
              Join thousands of satisfied customers and professional drivers on Instant Motors.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
              <button
                onClick={handleFindDriver}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <FaSearch /> Hire a Driver
              </button>
              <button
                onClick={handleShareAvailability}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                <FaShareAlt /> Share Availability
              </button>
            </div>
            <p className="text-white/60 text-xs sm:text-sm mt-4">No hidden fees • Verified drivers • Fast matching</p>
          </div>
        </div>
      </section>

      {/* ===== MODALS ===== */}
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