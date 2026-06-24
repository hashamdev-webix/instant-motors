import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMotorcycle, FaCheckCircle, FaArrowRight, FaPhoneAlt,
  FaHeadset, FaShieldAlt, FaUsers, FaClock,
  FaBicycle, FaTachometerAlt, FaWrench, FaTools
} from 'react-icons/fa';

const MotorcycleTowing = () => {
  const features = [
    { icon: <FaMotorcycle className="text-xl md:text-2xl" />, title: 'Specialized Transport', desc: 'Safe motorcycle towing' },
    { icon: <FaClock className="text-xl md:text-2xl" />, title: '24/7 Service', desc: 'Always available' },
    { icon: <FaShieldAlt className="text-xl md:text-2xl" />, title: 'Fully Insured', desc: 'Complete coverage' },
    { icon: <FaUsers className="text-xl md:text-2xl" />, title: 'Expert Team', desc: 'Certified operators' },
  ];

  const bikes = [
    { name: 'Sports Bikes', icon: <FaMotorcycle className="text-3xl md:text-4xl" /> },
    { name: 'Cruisers', icon: <FaMotorcycle className="text-3xl md:text-4xl" /> },
    { name: 'Scooters', icon: <FaBicycle className="text-3xl md:text-4xl" /> },
    { name: 'Dirt Bikes', icon: <FaTools className="text-3xl md:text-4xl" /> },
  ];

  return (
    <div className="w-full  mt-8">
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
                <FaMotorcycle className="text-sky-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Motorcycle Towing</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Motorcycle 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100">
                  Towing Services
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                Specialized towing for motorcycles and scooters. 
                Safe, secure, and professional transport for your bike.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <a href="tel:+18005550199" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30 flex items-center gap-2 text-sm md:text-base">
                  <FaPhoneAlt /> Call Now
                </a>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                  <FaHeadset /> Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-sky-500 text-xl md:text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bikes */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaMotorcycle className="inline mr-2" />
              We Tow All Types
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              We Tow <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300">All Motorcycles</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bikes.map((bike, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-sky-100 transition-colors">
                  <span className="text-sky-500">{bike.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{bike.name}</h4>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Motorcycle Towing?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Specialized towing for your motorcycle or scooter.
            </p>
            <a href="tel:+18005550199" className="inline-block mt-4 md:mt-6 bg-white text-sky-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto text-sm md:text-base">
              <FaPhoneAlt /> Call Now: +1-800-555-0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorcycleTowing;