import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button';

const DriverCard = ({ driver, onContact, onBook }) => {
  const { 
    id, 
    name, 
    rating, 
    experience, 
    location, 
    vehicle, 
    availability, 
    image,
    phone,
    email,
    description,
  } = driver;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6 hover:shadow-xl transition-all"
    >
      <div className="flex items-start gap-4">
        <img
          src={image || 'https://via.placeholder.com/80'}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-primary-100"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>⭐ {rating || 4.5}</span>
                <span>•</span>
                <span>{experience || 'N/A'}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </div>
            {/* Inline Badge instead of importing Badge component */}
            <span className={`px-2.5 py-1 text-sm font-medium rounded-full ${
              availability === 'Available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {availability || 'Available'}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mt-2">{vehicle}</p>
          
          {description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => onBook && onBook(driver)}
            >
              Book Now
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => onContact && onContact(driver)}
            >
              Contact
            </Button>
          </div>
          
          {phone && (
            <p className="text-xs text-gray-400 mt-2">📞 {phone}</p>
          )}
          {email && (
            <p className="text-xs text-gray-400">✉️ {email}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DriverCard;