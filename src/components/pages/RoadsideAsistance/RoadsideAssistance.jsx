// src/components/pages/RoadsideAssistance/RoadsideAssistance.jsx
// 
// Features added:
// 1. Premium background image with towing van from Unsplash
// 2. Three action buttons: Request Emergency Help, View Membership Plans, Speak to an Expert
// 3. Fast Dispatch, Verified Technicians, 24/7 Emergency Support on the right side
// 4. All animations with Framer Motion
// 5. React Icons instead of emojis
// 6. Responsive design
// 7. Buy Cars-like layout with service cards grid

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaArrowRight, 
  FaPhone, 
  FaClock, 
  FaTools, 
  FaBolt,
  FaWrench,
  FaGasPump,
  FaShieldAlt,
  FaUserTie,
  FaHeadset,
  FaCheckCircle,
  FaTruck,
  FaBatteryFull,
  FaRoad,
  FaExclamationTriangle,
  FaStar,
  FaUsers,
  FaThumbsUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFilter,
  FaSearch,
  FaTimes,
  FaInfoCircle
} from 'react-icons/fa';
import AssistanceForm from './AssistanceForm';
import ServiceAreas from './ServiceAreas';

const RoadsideAssistance = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeAction, setActiveAction] = useState('emergency');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const handleRequestAssistance = () => {
    setShowForm(true);
  };

  // Action buttons data
  const actionButtons = [
    {
      id: 'emergency',
      icon: <FaPhone className="text-lg" />,
      label: 'Request Emergency Help',
      description: 'Immediate assistance 24/7',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'membership',
      icon: <FaShieldAlt className="text-lg" />,
      label: 'View Membership Plans',
      description: 'Save with annual plans',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'expert',
      icon: <FaUserTie className="text-lg" />,
      label: 'Speak to an Expert',
      description: 'Get professional advice',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Service cards data
  const allServices = [
    {
      id: 1,
      icon: <FaTruck className="text-3xl" />,
      title: 'Towing Service',
      description: 'Professional towing to the nearest service center',
      category: 'towing',
      responseTime: '15-30 min',
      price: 'Free with membership',
      bg: 'from-blue-50 to-blue-100',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: <FaBatteryFull className="text-3xl" />,
      title: 'Battery Jump Start',
      description: 'Get your battery charged and start your car',
      category: 'battery',
      responseTime: '10-20 min',
      price: '$50 flat fee',
      bg: 'from-green-50 to-green-100',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      icon: <FaWrench className="text-3xl" />,
      title: 'Tire Change',
      description: 'Quick and safe tire replacement service',
      category: 'tire',
      responseTime: '15-25 min',
      price: '$40 per tire',
      bg: 'from-yellow-50 to-yellow-100',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      icon: <FaGasPump className="text-3xl" />,
      title: 'Fuel Delivery',
      description: 'Emergency fuel delivery to get you moving',
      category: 'fuel',
      responseTime: '20-30 min',
      price: '$35 + fuel cost',
      bg: 'from-red-50 to-red-100',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 5,
      icon: <FaTools className="text-3xl" />,
      title: 'Lockout Service',
      description: 'Quick lockout assistance to get you back in your car',
      category: 'lockout',
      responseTime: '15-25 min',
      price: '$45 flat fee',
      bg: 'from-purple-50 to-purple-100',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      icon: <FaCar className="text-3xl" />,
      title: 'Flatbed Transport',
      description: 'Safe transport for luxury or damaged vehicles',
      category: 'towing',
      responseTime: '20-40 min',
      price: 'Starting at $75',
      bg: 'from-indigo-50 to-indigo-100',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Services' },
    { value: 'towing', label: 'Towing' },
    { value: 'battery', label: 'Battery' },
    { value: 'tire', label: 'Tire' },
    { value: 'fuel', label: 'Fuel' },
    { value: 'lockout', label: 'Lockout' }
  ];

  // Filter and search services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || service.category === filterType;
    return matchesSearch && matchesFilter;
  });

  // Features for the right side
  const features = [
    {
      icon: <FaClock className="text-xl" />,
      title: 'Fast Dispatch',
      description: 'Quick response time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: 'Verified Technicians',
      description: 'Certified professionals',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaHeadset className="text-xl" />,
      title: '24/7 Emergency Support',
      description: 'Always here for you',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Emergency tips data
  const emergencyTips = [
    {
      icon: <FaRoad className="text-xl" />,
      title: 'Stay Safe',
      description: 'Pull over to a safe location and turn on hazard lights'
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: 'Call for Help',
      description: 'Contact our emergency hotline for immediate assistance'
    },
    {
      icon: <FaExclamationTriangle className="text-xl" />,
      title: 'Stay Visible',
      description: 'Use reflectors or warning triangles if available'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Towing Van Background Image */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Premium Towing Van Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1549317661-b3f32c6b64b6?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          {/* Multi-layer overlay for better text readability and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
          
          {/* Accent glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-2xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <FaTruck className="text-blue-400 text-sm" />
                <span className="text-white text-sm font-medium tracking-wide">24/7 Premium Roadside Assistance</span>
                <FaArrowRight className="text-white/60 text-xs" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Emergency
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  Roadside Help
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl leading-relaxed"
              >
                Professional towing, battery boosts, tire changes, fuel delivery, 
                and lockout assistance - available 24/7 across the country.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-6 mt-6"
              >
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <div className="bg-blue-500/30 rounded-full p-2">
                    <FaTruck className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">500+</p>
                    <p className="text-gray-300 text-xs">Tows Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <div className="bg-green-500/30 rounded-full p-2">
                    <FaClock className="text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">15 min</p>
                    <p className="text-gray-300 text-xs">Avg Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <div className="bg-yellow-500/30 rounded-full p-2">
                    <FaStar className="text-yellow-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">4.9</p>
                    <p className="text-gray-300 text-xs">Customer Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {actionButtons.map((btn) => (
                  <motion.button
                    key={btn.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setActiveAction(btn.id);
                      if (btn.id === 'emergency') {
                        handleRequestAssistance();
                      }
                    }}
                    className={`group relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeAction === btn.id
                        ? `bg-gradient-to-r ${btn.color} text-white shadow-xl shadow-blue-500/30`
                        : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {btn.icon}
                      <span>{btn.label}</span>
                      <FaArrowRight className={`text-xs transition-all duration-300 ${
                        activeAction === btn.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Features Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-default shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Emergency Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-lg border border-red-400/30 rounded-xl p-4 text-center shadow-lg"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <p className="text-red-200 text-xs font-medium tracking-wider">EMERGENCY HOTLINE</p>
                </div>
                <p className="text-2xl font-bold text-white tracking-wide">+1-800-555-0199</p>
                <p className="text-gray-300 text-xs mt-1 flex items-center justify-center gap-2">
                  <FaClock className="text-blue-400 text-xs" />
                  Available 24/7 - Free Call
                </p>
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
            <span className="text-white/40 text-xs uppercase tracking-widest font-light">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 shadow-lg shadow-blue-500/50"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Section - Buy Cars Layout */}
      <div className="section-padding pt-8 sm:pt-12 md:pt-16">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Services
              </h2>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500 text-xs" />
                {filteredServices.length} services available
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors text-sm"
              >
                <FaFilter className="text-blue-500" />
                <span>Filters</span>
                {filterType !== 'all' && (
                  <span className="bg-blue-500 text-white rounded-full px-1.5 py-0.5 text-xs">
                    1
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Filters Row */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-md p-4 mb-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                {/* Search */}
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Filter Dropdown */}
                <div className="min-w-[150px]">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                {(searchTerm || filterType !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilterType('all');
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <FaTimes />
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <FaTools className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No services found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <FaSearch className="text-sm" />
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" />
                Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`bg-gradient-to-br ${service.bg} rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-default border border-white/50 group`}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    
                    {/* Service Details */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="inline-flex items-center gap-1 bg-white/60 rounded-full px-2 py-0.5">
                        <FaClock className="text-blue-500" />
                        {service.responseTime}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/60 rounded-full px-2 py-0.5">
                        <FaInfoCircle className="text-blue-500" />
                        {service.price}
                      </span>
                    </div>

                    <button
                      onClick={handleRequestAssistance}
                      className="mt-3 w-full bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-white"
                    >
                      <FaPhone className="text-blue-500 text-xs" />
                      <span className="text-sm">Request Service</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Emergency Tips */}
      <div className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaExclamationTriangle className="text-yellow-500" />
              Emergency Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {emergencyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white/60 rounded-lg p-3 hover:bg-white/80 transition-colors"
                >
                  <div className="text-yellow-500 text-xl mt-0.5">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {showForm && <AssistanceForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default RoadsideAssistance;