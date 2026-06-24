import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaPhoneAlt,
  FaHeadset, FaClock, FaStar, FaCity, FaBuilding,
  FaRoad, FaCar, FaTruck, FaLocationArrow
} from 'react-icons/fa';

const ServiceAreas = () => {
  const cities = [
    { name: 'New York', state: 'NY', available: true, time: '15-30 min' },
    { name: 'Los Angeles', state: 'CA', available: true, time: '20-35 min' },
    { name: 'Chicago', state: 'IL', available: true, time: '15-25 min' },
    { name: 'Houston', state: 'TX', available: true, time: '20-30 min' },
    { name: 'Phoenix', state: 'AZ', available: true, time: '25-40 min' },
    { name: 'Philadelphia', state: 'PA', available: true, time: '15-25 min' },
    { name: 'San Antonio', state: 'TX', available: true, time: '20-35 min' },
    { name: 'San Diego', state: 'CA', available: true, time: '20-30 min' },
    { name: 'Dallas', state: 'TX', available: true, time: '20-35 min' },
    { name: 'Miami', state: 'FL', available: true, time: '15-25 min' },
    { name: 'Atlanta', state: 'GA', available: true, time: '20-30 min' },
    { name: 'Denver', state: 'CO', available: true, time: '25-40 min' },
  ];

  const stats = [
    { value: cities.length + '+', label: 'Cities Covered', icon: <FaCity /> },
    { value: '24/7', label: 'Availability', icon: <FaClock /> },
    { value: '15-40', label: 'Minutes Response', icon: <FaRoad /> },
  ];

  return (
    <div className="w-full mt-8">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 via-sky-800/60 to-sky-700/40" />
        </div>

        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-md border border-sky-400/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
                <FaLocationArrow className="text-sky-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Service Areas</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100">
                  Service Areas
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                We provide professional towing and roadside assistance across multiple cities.
                Find your location and get help fast.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <a href="tel:+18005550199" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30 flex items-center gap-2 text-sm md:text-base">
                  <FaPhoneAlt /> Call Now
                </a>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                  <FaHeadset /> Request Help
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-sky-500 text-lg md:text-xl">{stat.icon}</span>
                  <p className="text-xl md:text-3xl font-bold text-sky-600">{stat.value}</p>
                </div>
                <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaMapMarkerAlt className="inline mr-2" />
              Find Your City
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              We Cover <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300">All These Cities</span>
            </h2>
            <p className="text-gray-600 mt-2 md:mt-3 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Select your city to get fast and reliable towing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center group-hover:bg-sky-100 transition-colors flex-shrink-0">
                      <FaMapMarkerAlt className="text-sky-500 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{city.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{city.state}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                      <FaCheckCircle className="text-xs" /> Available
                    </span>
                    <p className="text-xs text-gray-400 mt-1">⏱ {city.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaPhoneAlt className="text-2xl md:text-3xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Help in Your Area?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Our team is ready to assist you. Call us now for immediate help.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <a href="tel:+18005550199" className="bg-white text-sky-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base">
                <FaPhoneAlt /> Call Now: +1-800-555-0199
              </a>
              <Link to="/contact" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                <FaHeadset /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;