import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaParking, FaCheckCircle, FaArrowRight, FaPhoneAlt,
  FaHeadset, FaShieldAlt, FaUsers, FaClock,
  FaBuilding, FaWarehouse, FaCamera, FaLock,
  FaCar, FaTruck, FaMotorcycle
} from 'react-icons/fa';

const VehicleStorage = () => {
  const features = [
    { icon: <FaParking className="text-xl md:text-2xl" />, title: 'Secure Storage', desc: 'Safe vehicle storage' },
    { icon: <FaClock className="text-xl md:text-2xl" />, title: '24/7 Access', desc: 'Available anytime' },
    { icon: <FaShieldAlt className="text-xl md:text-2xl" />, title: 'Fully Insured', desc: 'Complete coverage' },
    { icon: <FaCamera className="text-xl md:text-2xl" />, title: '24/7 Monitoring', desc: 'Round-the-clock security' },
  ];

  const vehicles = [
    { name: 'Cars', icon: <FaCar className="text-3xl md:text-4xl" /> },
    { name: 'Trucks', icon: <FaTruck className="text-3xl md:text-4xl" /> },
    { name: 'Motorcycles', icon: <FaMotorcycle className="text-3xl md:text-4xl" /> },
    { name: 'RVs', icon: <FaBuilding className="text-3xl md:text-4xl" /> },
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
                <FaParking className="text-sky-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Vehicle Storage</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Secure 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100">
                  Vehicle Storage
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                Safe and secure storage for all types of vehicles. 
                Fully monitored facility with 24/7 access.
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

      {/* Vehicles */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaParking className="inline mr-2" />
              All Vehicle Types
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              We Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300">All Vehicles</span>
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
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-sky-100 transition-colors">
                  <span className="text-sky-500">{vehicle.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{vehicle.name}</h4>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Vehicle Storage?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Secure, monitored, and accessible storage for your vehicle.
            </p>
            <a href="tel:+18005550199" className="inline-block mt-4 md:mt-6 bg-white text-sky-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto text-sm md:text-base">
              <FaPhoneAlt /> Call Now: +1-800-555-0199Call Now
              Get a Quote
              Up to 50 Tons
              
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleStorage;