import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaCog, 
  FaUser, 
  FaCheckCircle, 
  FaTimesCircle,
  FaCar 
} from 'react-icons/fa';

const RentalCard = ({ rental }) => {
  const { id, name, pricePerDay, year, image, type, transmission, seats, available, rating } = rental;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm">
              Currently Unavailable
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          ${pricePerDay}/day
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <FaStar className="text-yellow-400 text-xs sm:text-sm" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-500 mb-3">{year} • {type}</div>

        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <FaCog className="text-gray-500 text-xs sm:text-sm" />
            <span className="truncate">{transmission}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaUser className="text-gray-500 text-xs sm:text-sm" />
            <span>{seats} seats</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            {available ? (
              <FaCheckCircle className="text-green-500 text-xs sm:text-sm" />
            ) : (
              <FaTimesCircle className="text-red-500 text-xs sm:text-sm" />
            )}
            <span className="text-xs">{available ? 'Available' : 'Unavailable'}</span>
          </div>
        </div>

        <Link
          to={`/book-now?car=${id}`}
          className={`w-full btn-primary text-center block text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg font-medium transition-colors mt-auto ${
            !available ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' : ''
          }`}
          onClick={(e) => !available && e.preventDefault()}
        >
          {available ? 'Book Now' : 'Unavailable'}
        </Link>
      </div>
    </motion.div>
  );
};

export default RentalCard;