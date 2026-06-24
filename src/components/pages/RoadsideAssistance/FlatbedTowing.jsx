import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaTachometerAlt, FaCheckCircle, FaArrowRight, FaPhoneAlt,
  FaHeadset, FaShieldAlt, FaUsers, FaClock,
  FaCar, FaCarSide, FaTruck, FaMotorcycle, FaGem
} from 'react-icons/fa';

const FlatbedTowing = () => {
  const features = [
    { icon: <FaShieldAlt className="text-xl md:text-2xl" />, title: 'Safe Transport', desc: 'No wheel damage' },
    { icon: <FaClock className="text-xl md:text-2xl" />, title: '24/7 Service', desc: 'Always available' },
    { icon: <FaUsers className="text-xl md:text-2xl" />, title: 'Expert Team', desc: 'Certified operators' },
    { icon: <FaTachometerAlt className="text-xl md:text-2xl" />, title: 'Premium Service', desc: 'Luxury vehicle care' },
  ];

  const vehicles = [
    { name: 'Luxury Cars', icon: <FaCar className="text-3xl md:text-4xl" /> },
    { name: 'Exotic Cars', icon: <FaGem className="text-3xl md:text-4xl" /> },
    { name: 'Classic Cars', icon: <FaTruck className="text-3xl md:text-4xl" /> },
    { name: 'Motorcycles', icon: <FaMotorcycle className="text-3xl md:text-4xl" /> },
  ];

  return (
    <div className="w-full mt-8">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600")',
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
                <FaTachometerAlt className="text-blue-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Flatbed Towing</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Flatbed Towing
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                Safe and secure flatbed towing for luxury, exotic, 
                and specialty vehicles. Complete protection during transport.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <a href="tel:+18005550199" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2 text-sm md:text-base">
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

      {/* Features - KEEP EXACTLY AS IS */}
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
              <FaTachometerAlt className="inline mr-2" />
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

      {/* CTA - KEEP EXACTLY AS IS */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Flatbed Towing?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Professional flatbed towing for luxury and specialty vehicles.
            </p>
            <a href="tel:+18005550199" className="inline-block mt-4 md:mt-6 bg-white text-blue-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto text-sm md:text-base">
              <FaPhoneAlt /> Call Now: +1-800-555-0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlatbedTowing;