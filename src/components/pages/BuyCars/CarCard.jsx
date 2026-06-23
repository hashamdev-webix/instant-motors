import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaTachometerAlt, 
  FaCog, 
  FaGasPump, 
  FaCar,
  FaArrowRight,
  FaTag,
  FaCalendarAlt,
  FaPalette,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
  FaBolt,
  FaBatteryFull,
  FaLeaf,
  FaFire,
  FaTools,
  FaWifi,
  FaBluetooth,
  FaCamera,
  FaMapMarkedAlt,
  FaSnowflake,
  FaSun,
  FaCloudSun,
  FaChair,
  FaParking,
  FaChargingStation,
  FaThList
} from 'react-icons/fa';

const CarCard = ({ car }) => {
  const { 
    id, 
    name, 
    brand,
    price, 
    year, 
    mileage, 
    image, 
    type, 
    bodyType,
    transmission, 
    fuelType, 
    rating,
    available,
    condition,
    color,
    features,
    seats,
    pricePerDay,
    description
  } = car;

  // Get fuel type icon and color
  const getFuelIcon = (fuel) => {
    switch(fuel?.toLowerCase()) {
      case 'electric':
        return { 
          icon: <FaBolt className="text-cyan-500 text-sm" />, 
          label: 'Electric',
          color: 'from-cyan-400 to-cyan-600',
          bgColor: 'bg-cyan-50'
        };
      case 'diesel':
        return { 
          icon: <FaGasPump className="text-blue-600 text-sm" />, 
          label: 'Diesel',
          color: 'from-blue-500 to-blue-700',
          bgColor: 'bg-blue-50'
        };
      case 'hybrid':
        return { 
          icon: <FaLeaf className="text-emerald-500 text-sm" />, 
          label: 'Hybrid',
          color: 'from-emerald-400 to-emerald-600',
          bgColor: 'bg-emerald-50'
        };
      case 'cng':
        return { 
          icon: <FaFire className="text-green-600 text-sm" />, 
          label: 'CNG',
          color: 'from-green-500 to-green-700',
          bgColor: 'bg-green-50'
        };
      default:
        return { 
          icon: <FaGasPump className="text-orange-500 text-sm" />, 
          label: 'Petrol',
          color: 'from-orange-400 to-orange-600',
          bgColor: 'bg-orange-50'
        };
    }
  };

  // Get condition badge color
  const getConditionColor = (condition) => {
    switch(condition?.toLowerCase()) {
      case 'excellent':
        return 'from-green-400 to-green-600';
      case 'very good':
        return 'from-blue-400 to-blue-600';
      case 'good':
        return 'from-yellow-400 to-yellow-600';
      case 'fair':
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const fuelInfo = getFuelIcon(fuelType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={image || 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600'}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {available ? (
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5">
              <FaCheckCircle className="text-white text-xs" />
              Available
            </span>
          ) : (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5">
              <FaTimesCircle className="text-white text-xs" />
              Unavailable
            </span>
          )}
        </div>
        
        {/* Type Badge - Top Left */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5">
          <FaCar className="text-white text-xs" />
          {type || 'Car'}
        </div>

        {/* Price Tag - Bottom Left */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1.5">
          <FaTag className="text-yellow-400 text-xs" />
          ${price?.toLocaleString() || 'N/A'}
        </div>

        {/* Year Badge - Bottom Right */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
          <FaCalendarAlt className="text-blue-400 text-xs" />
          <span>{year || 'N/A'}</span>
        </div>
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{name}</h3>
            {brand && (
              <p className="text-sm text-gray-500">{brand}</p>
            )}
          </div>
          {rating && (
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-sm font-semibold text-gray-900">{rating}</span>
            </div>
          )}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          <div className={`flex items-center gap-1.5 ${fuelInfo.bgColor} rounded-lg px-2 py-1.5`}>
            {fuelInfo.icon}
            <span className="text-xs font-medium">{fuelInfo.label}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5">
            <FaUsers className="text-blue-500 text-xs" />
            <span className="text-xs">{seats || 4} seats</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5">
            <FaCog className="text-blue-500 text-xs" />
            <span className="text-xs truncate">{transmission || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5">
            <FaTachometerAlt className="text-blue-500 text-xs" />
            <span className="text-xs">{mileage?.toLocaleString() || '0'} km</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {color && (
            <span className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg text-xs">
              <FaPalette className="text-gray-500 text-xs" />
              {color}
            </span>
          )}
          {condition && (
            <span className={`inline-flex items-center gap-1 bg-gradient-to-r ${getConditionColor(condition)} text-white px-2 py-1 rounded-lg text-xs`}>
              <FaShieldAlt className="text-white text-xs" />
              {condition}
            </span>
          )}
          {bodyType && (
            <span className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg text-xs">
              <FaCar className="text-gray-500 text-xs" />
              {bodyType}
            </span>
          )}
          {pricePerDay && (
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
              <FaTag className="text-blue-500 text-xs" />
              ${pricePerDay}/day
            </span>
          )}
        </div>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 4).map((feature, index) => (
                <span key={index} className="inline-flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full text-xs text-gray-600">
                  <FaCheckCircle className="text-blue-400 text-[10px]" />
                  {feature}
                </span>
              ))}
              {features.length > 4 && (
                <span className="text-xs text-gray-400">
                  +{features.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* View Details Button */}
        <Link
          to={`/buy-cars/${id}`}
          className={`w-full text-center block text-sm py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            available 
              ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/30' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={(e) => !available && e.preventDefault()}
        >
          <span>{available ? 'View Details' : 'Unavailable'}</span>
          {available && (
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      </div>
    </motion.div>
  );
};

// Car Grid Component with View All Cars Button at Bottom Only
export const CarGrid = ({ cars, onViewAll, title = "Our Inventory", showViewAll = true }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xs" />
            {cars.length} cars available
          </p>
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Bottom View All Button */}
      {showViewAll && cars.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10 pt-6 border-t border-gray-200"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onViewAll}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <FaThList className="text-lg" />
            <span>View All {cars.length} Cars</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <p className="text-xs text-gray-400 mt-3">
            Browse our complete inventory of {cars.length} premium vehicles
          </p>
        </motion.div>
      )}

      {/* Empty State */}
      {cars.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 bg-gray-50 rounded-xl"
        >
          <FaCar className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No Cars Found</h3>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
        </motion.div>
      )}
    </div>
  );
};

export default CarCard;