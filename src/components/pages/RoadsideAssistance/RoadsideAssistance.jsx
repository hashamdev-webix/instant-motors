import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaTruck, FaClock, FaCar, FaTachometerAlt, FaRoad, 
  FaMotorcycle, FaParking, FaBuilding, FaArrowRight,
  FaPhoneAlt, FaHeadset, FaShieldAlt, FaUsers,
  FaStar, FaCheckCircle, FaMapMarkerAlt
} from 'react-icons/fa';

const RoadsideAssistance = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 'emergency',
      icon: <FaClock className="text-xl md:text-2xl" />,
      title: 'Emergency Towing',
      description: '24/7 emergency towing for all vehicle types',
      path: '/towing/emergency',
      category: 'emergency',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600', // Emergency towing
    },
    {
      id: 'heavy-duty',
      icon: <FaTruck className="text-xl md:text-2xl" />,
      title: 'Heavy Duty Towing',
      description: 'Commercial vehicles and large equipment towing',
      path: '/towing/heavy-duty',
      category: 'commercial',
      color: 'from-blue-600 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600', // Heavy truck
    },
    {
      id: 'light-medium',
      icon: <FaCar className="text-xl md:text-2xl" />,
      title: 'Light & Medium Duty',
      description: 'Cars, vans, and SUVs towing services',
      path: '/towing/light-medium',
      category: 'standard',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600', // Car breakdown
    },
    {
      id: 'flatbed',
      icon: <FaTachometerAlt className="text-xl md:text-2xl" />,
      title: 'Flatbed Towing',
      description: 'Safe transport for luxury and specialty vehicles',
      path: '/towing/flatbed',
      category: 'specialty',
      color: 'from-blue-600 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600', // Luxury car transport
    },
    {
      id: 'long-distance',
      icon: <FaRoad className="text-xl md:text-2xl" />,
      title: 'Long Distance Towing',
      description: 'Inter-city and nationwide towing services',
      path: '/towing/long-distance',
      category: 'long-haul',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600', // Highway
    },
    {
      id: 'motorcycle',
      icon: <FaMotorcycle className="text-xl md:text-2xl" />,
      title: 'Motorcycle Towing',
      description: 'Specialized towing for motorcycles and scooters',
      path: '/towing/motorcycle',
      category: 'specialty',
      color: 'from-blue-600 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1508357941501-0924cf312bbd?w=600', // Motorcycle
    },
    {
      id: 'storage',
      icon: <FaParking className="text-xl md:text-2xl" />,
      title: 'Vehicle Storage',
      description: 'Secure storage for all vehicle types',
      path: '/towing/storage',
      category: 'storage',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600', // Garage / storage
    },
    {
      id: 'impound',
      icon: <FaBuilding className="text-xl md:text-2xl" />,
      title: 'Impound Towing',
      description: 'Professional impound for property owners',
      path: '/towing/impound',
      category: 'commercial',
      color: 'from-blue-700 to-blue-800',
      bgImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600', // Impound lot
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'standard', label: 'Standard' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'specialty', label: 'Specialty' },
    { id: 'long-haul', label: 'Long Haul' },
    { id: 'storage', label: 'Storage' },
  ];

  const stats = [
    { value: '24/7', label: 'Available', icon: <FaClock /> },
    { value: '15-30', label: 'Min Response', icon: <FaTachometerAlt /> },
    { value: '500+', label: 'Vehicles Towed', icon: <FaTruck /> },
    { value: '4.9', label: 'Rating', icon: <FaStar /> },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="w-full mt-8">
      {/* Hero Section - Towing Fleet Background */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600")',
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
                <FaTruck className="text-blue-300 text-sm md:text-base" />
                <span className="text-white text-xs md:text-sm font-medium">Professional Towing Services</span>
              </span>
              
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reliable Towing & 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Roadside Assistance
                </span>
              </h1>
              
              <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl">
                24/7 professional towing services for all vehicle types. 
                Fast response, affordable rates, and certified professionals.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6">
                <Link 
                  to="/towing/emergency"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2 text-sm md:text-base"
                >
                  <FaClock /> Emergency Towing
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                >
                  <FaPhoneAlt /> Call Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm md:text-base">{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-lg">{stat.value}</p>
                    <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaTruck className="inline mr-2" />
              Our Towing Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Towing</span> Solutions
            </h2>
            <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
              We provide comprehensive towing and roadside assistance services for all vehicle types.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-32 md:h-40">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
                  <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white`}>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-sm md:text-base">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
                  <Link
                    to={service.path}
                    className="w-full bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold py-1.5 md:py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <FaShieldAlt className="inline mr-2" />
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Towing</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <FaClock className="text-xl md:text-2xl" />, title: '24/7 Availability', desc: 'Round-the-clock towing services' },
              { icon: <FaShieldAlt className="text-xl md:text-2xl" />, title: 'Fully Insured', desc: 'Complete insurance coverage' },
              { icon: <FaUsers className="text-xl md:text-2xl" />, title: 'Expert Team', desc: 'Certified professionals' },
              { icon: <FaTachometerAlt className="text-xl md:text-2xl" />, title: 'Fast Response', desc: 'Quick dispatch and arrival' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 md:p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <span className="text-blue-500">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600')] bg-cover bg-center opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaPhoneAlt className="text-2xl md:text-3xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Need Emergency Towing?</h2>
            <p className="text-white/80 mt-2 md:mt-3 text-sm sm:text-base">
              Our team is ready to assist you 24/7. Call us now for immediate help.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <a href="tel:+18005550199" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2.5 md:py-3 px-5 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base">
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

export default RoadsideAssistance;