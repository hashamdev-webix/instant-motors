import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCar, FaCheckCircle, FaArrowRight, FaPhoneAlt,
  FaHeadset, FaShieldAlt, FaUsers, FaTachometerAlt,
  FaClock, FaTruck, FaCarSide, FaBus
} from 'react-icons/fa';

const LightMediumTowing = () => {
  const features = [
    { icon: <FaCar className="text-xl md:text-2xl" />, title: 'All Vehicles', desc: 'Cars, vans, SUVs' },
    { icon: <FaClock className="text-xl md:text-2xl" />, title: 'Fast Response', desc: 'Quick dispatch' },
    { icon: <FaShieldAlt className="text-xl md:text-2xl" />, title: 'Fully Insured', desc: 'Complete coverage' },
    { icon: <FaUsers className="text-xl md:text-2xl" />, title: 'Expert Team', desc: 'Certified professionals' },
  ];

  const vehicles = [
    { name: 'Sedans', icon: <FaCar className="text-3xl md:text-4xl" /> },
    { name: 'SUVs', icon: <FaCarSide className="text-3xl md:text-4xl" /> },
    { name: 'Vans', icon: <FaBus className="text-3xl md:text-4xl" /> },
    { name: 'Light Trucks', icon: <FaTruck className="text-3xl md:text-4xl" /> },
  ];

  const benefits = [
    'Fast and reliable service',
    'Fully licensed and insured',
    'Professional and courteous staff',
    'Competitive and transparent pricing',
    'State-of-the-art towing equipment',
    'Available 24/7 for emergencies'
  ];

  return (
    <div className="w-full mt-8">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-700/40" />
        </div>

        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
                <FaCar className="text-blue-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Light & Medium Duty Towing</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Light & Medium 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Duty Towing
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                Reliable towing for cars, vans, SUVs, and light trucks. 
                Fast, affordable, and professional service.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <a href="tel:+18005550199" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2 text-sm md:text-base">
                  <FaPhoneAlt /> Call Now
                </a>
                <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                  <FaHeadset /> Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - KEEP EXACTLY AS IS */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block px-3 md:px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Towing Service</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-blue-500 text-xl md:text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles - KEEP EXACTLY AS IS */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaCar className="inline mr-2" />
              Vehicles We Tow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Vehicles We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Tow</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-blue-100 transition-colors">
                  <span className="text-blue-500">{vehicle.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{vehicle.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - KEEP EXACTLY AS IS */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 md:px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                <FaShieldAlt className="inline mr-2" />
                Our Promise
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Professional <span className="text-blue-500">Towing</span> You Can Trust
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                We provide reliable and affordable towing services for all your light and medium duty vehicles.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                  >
                    <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base">
                <FaHeadset /> Get Help Now <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <FaTachometerAlt className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Fast Response Time</h4>
                  <p className="text-xs md:text-sm text-gray-500">Average arrival time: 15-30 minutes</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs md:text-sm text-gray-600">Response Time</span>
                  <span className="text-xs md:text-sm font-bold text-blue-600">Excellent</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
                <p className="text-xs text-gray-400 mt-2">95% of calls answered within 30 minutes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - KEEP EXACTLY AS IS */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaPhoneAlt className="text-2xl md:text-3xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Towing Service?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Fast, reliable, and affordable towing for your vehicle.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <a href="tel:+18005550199" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base">
                <FaPhoneAlt /> Call Now: +1-800-555-0199
              </a>
              <Link to="/contact" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                <FaHeadset /> Contact Us
              </Link>
            </div>
            <p className="text-white/60 text-xs md:text-sm mt-3">Available 24/7 for all your towing needs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightMediumTowing;