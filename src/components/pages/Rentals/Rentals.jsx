import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaCog, 
  FaUser, 
  FaCrown,
  FaGem,
  FaCompass,
  FaFire,
  FaBriefcase,
  FaGasPump,
  FaCar,
  FaUsers,
  FaSearch,
  FaArrowRight,
  FaTimes,
  FaEye,
  FaInfoCircle,
  FaCheckCircle,
  FaHeadset,
  FaBolt,
  FaShieldAlt,
  FaThList,
  FaTh,
  FaClock,
  FaMoneyBillWave,
  FaCarSide,
  FaMousePointer
} from 'react-icons/fa';
import RentalFilters from './RentalFilters';
import MoreRentalCards from './MoreRentalsCar';

// RentalCard Component
const RentalCard = ({ rental }) => {
  // Add safety check for rental prop
  if (!rental) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4">
        <p className="text-gray-500">Car data unavailable</p>
      </div>
    );
  }

  const { 
    id, 
    name, 
    pricePerDay, 
    year, 
    image, 
    type, 
    transmission, 
    seats, 
    bags,
    fuelType,
    available, 
    rating,
    isPremium,
    isLuxury,
    isAdventure,
    tags 
  } = rental;

  // Function to get tag color and icon
  const getTagDetails = (tag) => {
    switch(tag) {
      case 'Premium':
        return { 
          color: 'bg-gradient-to-r from-blue-400 to-blue-600', 
          icon: <FaStar className="text-white text-xs" />,
          label: 'Premium'
        };
      case 'Luxury':
        return { 
          color: 'bg-gradient-to-r from-purple-500 to-purple-700', 
          icon: <FaCrown className="text-white text-xs" />,
          label: 'Luxury'
        };
      case 'Adventure':
        return { 
          color: 'bg-gradient-to-r from-green-500 to-emerald-600', 
          icon: <FaCompass className="text-white text-xs" />,
          label: 'Adventure'
        };
      case 'Sports':
        return { 
          color: 'bg-gradient-to-r from-red-500 to-red-600', 
          icon: <FaFire className="text-white text-xs" />,
          label: 'Sports'
        };
      case 'Electric':
        return { 
          color: 'bg-gradient-to-r from-cyan-400 to-cyan-600', 
          icon: <FaGem className="text-white text-xs" />,
          label: 'Electric'
        };
      case 'Family':
        return { 
          color: 'bg-gradient-to-r from-teal-400 to-teal-600', 
          icon: <FaUsers className="text-white text-xs" />,
          label: 'Family'
        };
      case 'Economy':
        return { 
          color: 'bg-gradient-to-r from-gray-400 to-gray-600', 
          icon: <FaGem className="text-white text-xs" />,
          label: 'Economy'
        };
      case 'Business':
        return { 
          color: 'bg-gradient-to-r from-indigo-400 to-indigo-600', 
          icon: <FaBriefcase className="text-white text-xs" />,
          label: 'Business'
        };
      default:
        return { 
          color: 'bg-gradient-to-r from-gray-400 to-gray-600', 
          icon: null,
          label: tag
        };
    }
  };

  // Get primary tag (luxury > premium > adventure)
  const getPrimaryTag = () => {
    if (isLuxury) return 'Luxury';
    if (isPremium) return 'Premium';
    if (isAdventure) return 'Adventure';
    return null;
  };

  const primaryTag = getPrimaryTag();
  const tagDetails = primaryTag ? getTagDetails(primaryTag) : null;

  // Get fuel type icon and color
  const getFuelIcon = (fuel) => {
    switch(fuel?.toLowerCase()) {
      case 'electric':
        return { icon: <FaGem className="text-cyan-500 text-xs sm:text-sm" />, label: 'Electric' };
      case 'diesel':
        return { icon: <FaGasPump className="text-blue-600 text-xs sm:text-sm" />, label: 'Diesel' };
      case 'hybrid':
        return { icon: <FaGem className="text-emerald-500 text-xs sm:text-sm" />, label: 'Hybrid' };
      default:
        return { icon: <FaGasPump className="text-blue-500 text-xs sm:text-sm" />, label: 'Petrol' };
    }
  };

  const fuelInfo = getFuelIcon(fuelType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card group h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
    >
      {/* Premium/Luxury/Adventure Tag */}
      {tagDetails && (
        <div className={`absolute top-3 right-3 z-10 ${tagDetails.color} text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm`}>
          {tagDetails.icon}
          <span>{tagDetails.label}</span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={image || 'https://via.placeholder.com/600x400?text=No+Image'}
          alt={name || 'Car'}
          className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm">
              Currently Unavailable
            </span>
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1">
          <FaGem className="text-blue-400 text-xs" />
          ${pricePerDay || 0}/day
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">{name || 'Unknown Car'}</h3>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {tags.slice(0, 3).map((tag, index) => {
                  const details = getTagDetails(tag);
                  return (
                    <span 
                      key={index} 
                      className={`${details.color} text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5`}
                    >
                      {details.icon}
                      {details.label}
                    </span>
                  );
                })}
                {tags.length > 3 && (
                  <span className="bg-gray-200 text-gray-700 text-[10px] px-2 py-0.5 rounded-full">
                    +{tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <FaStar className="text-yellow-400 text-xs sm:text-sm" />
            <span className="text-sm font-medium">{rating || 0}</span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-500 mb-3">{year || 'N/A'} • {type || 'Unknown'}</div>

        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <FaCog className="text-gray-500 text-xs sm:text-sm" />
            <span className="truncate">{transmission || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaUser className="text-gray-500 text-xs sm:text-sm" />
            <span>{seats || 0} seats</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaBriefcase className="text-gray-500 text-xs sm:text-sm" />
            <span>{bags || 0} bags</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            {fuelInfo.icon}
            <span>{fuelInfo.label}</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-1 text-gray-600">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              available ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              {available ? 'Available' : 'Unavailable'}
            </span>
          </div>
        </div>

        <Link
          to={`/book-now?car=${id}`}
          className={`w-full btn-primary text-center block text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg font-medium transition-colors mt-auto ${
            !available ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={(e) => !available && e.preventDefault()}
        >
          {available ? 'Book Now' : 'Unavailable'}
        </Link>
      </div>
    </motion.div>
  );
};

// Main Rentals Component
const Rentals = () => {
  const [rentals, setRentals] = useState([]);
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllCars, setShowAllCars] = useState(false);
  const [filters, setFilters] = useState({
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    transmission: '',
    seats: '',
    priceRange: '',
  });
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchRentals = async () => {
      try {
        const mockRentals = [
          {
            id: 1,
            name: 'Toyota Camry',
            pricePerDay: 45,
            year: 2023,
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600',
            type: 'Sedan',
            transmission: 'Automatic',
            seats: 5,
            bags: 3,
            fuelType: 'Petrol',
            available: true,
            rating: 4.5,
            tags: ['Economy', 'Family'],
            isPremium: false,
            isLuxury: false,
            isAdventure: false,
          },
          {
            id: 2,
            name: 'Honda CR-V',
            pricePerDay: 55,
            year: 2023,
            image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=600',
            type: 'SUV',
            transmission: 'Automatic',
            seats: 5,
            bags: 4,
            fuelType: 'Petrol',
            available: true,
            rating: 4.7,
            tags: ['SUV', 'Adventure', 'Family'],
            isPremium: false,
            isLuxury: false,
            isAdventure: true,
          },
          {
            id: 3,
            name: 'Tesla Model Y',
            pricePerDay: 85,
            year: 2024,
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600',
            type: 'Electric',
            transmission: 'Automatic',
            seats: 5,
            bags: 3,
            fuelType: 'Electric',
            available: false,
            rating: 4.9,
            tags: ['Electric', 'Premium', 'Tech'],
            isPremium: true,
            isLuxury: false,
            isAdventure: false,
          },
          {
            id: 4,
            name: 'Mercedes-Benz S-Class',
            pricePerDay: 199,
            year: 2024,
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600',
            type: 'Luxury',
            transmission: 'Automatic',
            seats: 5,
            bags: 4,
            fuelType: 'Petrol',
            available: true,
            rating: 4.9,
            tags: ['Luxury', 'Premium', 'Business'],
            isPremium: true,
            isLuxury: true,
            isAdventure: false,
          },
          {
            id: 5,
            name: 'Jeep Wrangler',
            pricePerDay: 89,
            year: 2023,
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
            type: 'SUV',
            transmission: 'Manual',
            seats: 5,
            bags: 3,
            fuelType: 'Petrol',
            available: true,
            rating: 4.6,
            tags: ['Adventure', 'Off-Road', 'Outdoor'],
            isPremium: false,
            isLuxury: false,
            isAdventure: true,
          },
          {
            id: 6,
            name: 'BMW 7 Series',
            pricePerDay: 175,
            year: 2024,
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600',
            type: 'Luxury',
            transmission: 'Automatic',
            seats: 5,
            bags: 4,
            fuelType: 'Diesel',
            available: true,
            rating: 4.8,
            tags: ['Luxury', 'Premium', 'Executive'],
            isPremium: true,
            isLuxury: true,
            isAdventure: false,
          },
          {
            id: 7,
            name: 'Ford Mustang',
            pricePerDay: 120,
            year: 2023,
            image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=600',
            type: 'Sports',
            transmission: 'Manual',
            seats: 4,
            bags: 2,
            fuelType: 'Petrol',
            available: true,
            rating: 4.7,
            tags: ['Sports', 'Premium', 'Performance'],
            isPremium: true,
            isLuxury: false,
            isAdventure: false,
          },
          {
            id: 8,
            name: 'Toyota Land Cruiser',
            pricePerDay: 145,
            year: 2023,
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
            type: 'SUV',
            transmission: 'Automatic',
            seats: 7,
            bags: 5,
            fuelType: 'Diesel',
            available: true,
            rating: 4.8,
            tags: ['Adventure', 'Off-Road', 'Family', 'Premium'],
            isPremium: true,
            isLuxury: false,
            isAdventure: true,
          },
          {
            id: 9,
            name: 'Porsche 911',
            pricePerDay: 250,
            year: 2024,
            image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600',
            type: 'Sports',
            transmission: 'Automatic',
            seats: 4,
            bags: 2,
            fuelType: 'Petrol',
            available: false,
            rating: 4.9,
            tags: ['Luxury', 'Premium', 'Sports', 'Performance'],
            isPremium: true,
            isLuxury: true,
            isAdventure: false,
          },
          {
            id: 11,
            name: 'Audi Q7',
            pricePerDay: 160,
            year: 2024,
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600',
            type: 'SUV',
            transmission: 'Automatic',
            seats: 7,
            bags: 5,
            fuelType: 'Diesel',
            available: true,
            rating: 4.7,
            tags: ['Luxury', 'Premium', 'Family'],
            isPremium: true,
            isLuxury: true,
            isAdventure: false,
          },
          {
            id: 12,
            name: 'Volkswagen Golf',
            pricePerDay: 40,
            year: 2022,
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
            type: 'Hatchback',
            transmission: 'Manual',
            seats: 5,
            bags: 2,
            fuelType: 'Petrol',
            available: true,
            rating: 4.3,
            tags: ['Economy', 'City'],
            isPremium: false,
            isLuxury: false,
            isAdventure: false,
          },
        ];
        setRentals(mockRentals);
        setFilteredRentals(mockRentals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rentals:', error);
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  useEffect(() => {
    // Apply filters
    let result = [...rentals];
    
    // Apply availability filter first
    if (showAvailableOnly) {
      result = result.filter(car => car.available === true);
    }
    
    if (filters.carType) {
      result = result.filter(car => car.type === filters.carType);
    }
    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission);
    }
    if (filters.seats) {
      result = result.filter(car => car.seats === parseInt(filters.seats));
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        result = result.filter(car => car.pricePerDay >= min && car.pricePerDay <= max);
      } else {
        result = result.filter(car => car.pricePerDay >= min);
      }
    }
    
    setFilteredRentals(result);
  }, [filters, rentals, showAvailableOnly]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleBrowseAvailable = () => {
    setShowAvailableOnly(true);
    setShowAllCars(false);
    // Scroll to the rentals section
    const rentalsSection = document.getElementById('rentals-section');
    if (rentalsSection) {
      rentalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowAll = () => {
    setShowAvailableOnly(false);
    setShowAllCars(false);
  };

  const handleViewAllCars = () => {
    setShowAllCars(!showAllCars);
    setShowAvailableOnly(false);
    // Scroll to the rentals section
    const rentalsSection = document.getElementById('rentals-section');
    if (rentalsSection) {
      rentalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Features data for hero section
  const heroFeatures = [
    {
      icon: <FaCheckCircle className="text-blue-400 text-lg" />,
      title: 'Free Cancellation',
      description: 'Cancel up to 24 hours before pickup.'
    },
    {
      icon: <FaHeadset className="text-blue-400 text-lg" />,
      title: '24/7 Support',
      description: 'We\'re here anytime you need us.'
    },
    {
      icon: <FaBolt className="text-blue-400 text-lg" />,
      title: 'Instant Booking',
      description: 'Book in minutes and hit the road.'
    },
    {
      icon: <FaShieldAlt className="text-blue-400 text-lg" />,
      title: 'Verified Vehicles',
      description: 'Quality checked for a safe journey.'
    }
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      icon: <FaHeadset className="text-3xl" />,
      title: '24/7 Customer Support',
      description: 'Our support team is always here to help you anytime, anywhere.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. What you see is what you pay.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaCarSide className="text-3xl" />,
      title: 'Wide Vehicle Selection',
      description: 'Choose from a diverse range of vehicles to fit your needs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaMousePointer className="text-3xl" />,
      title: 'Easy Online Booking',
      description: 'Book your perfect car in just a few clicks: fast and hassle-free.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Animated Particles/Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Luxury Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <FaCrown className="text-blue-400 text-sm" />
                <span className="text-white text-sm font-medium">Premium Luxury Rentals</span>
                <FaArrowRight className="text-white/60 text-xs" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Find Your Perfect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                  Luxury Rentals
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl"
              >
                Choose from economy cars, SUVs, luxury vehicles, and long-term rentals 
                that fit your trip, budget, and lifestyle.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-6 sm:gap-8 mt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <FaCar className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">50+</div>
                    <div className="text-gray-300 text-xs">Luxury Cars</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <FaUsers className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">1000+</div>
                    <div className="text-gray-300 text-xs">Happy Customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <FaStar className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">4.9</div>
                    <div className="text-gray-300 text-xs">Average Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Search CTA - Browse Available Cars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button 
                  onClick={handleBrowseAvailable}
                  className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <FaSearch />
                  <span>Browse Available Cars</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                {showAvailableOnly && (
                  <button 
                    onClick={handleShowAll}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaCar />
                    <span>Show All Cars</span>
                  </button>
                )}
              </motion.div>

              {/* Active Filter Indicator */}
              {showAvailableOnly && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2"
                >
                  <FaEye className="text-blue-300 text-sm" />
                  <span className="text-blue-300 text-sm">Showing only available cars</span>
                  <button 
                    onClick={handleShowAll}
                    className="text-blue-300 hover:text-white text-sm ml-2"
                  >
                    <FaTimes />
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 rounded-lg p-2 group-hover:bg-blue-500/30 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rentals List Section */}
      <div id="rentals-section" className="section-padding pt-8 sm:pt-12 md:pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          {/* Section Header with Filter Status and View All Button */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Available Rentals
                {showAvailableOnly && (
                  <span className="ml-3 text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {filteredRentals.length} available
                  </span>
                )}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              {showAvailableOnly && (
                <button
                  onClick={handleShowAll}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FaCar className="text-xs" />
                  Show all cars
                </button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewAllCars}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  showAllCars 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showAllCars ? (
                  <>
                    <FaTh className="text-sm" />
                    <span>Grid View</span>
                  </>
                ) : (
                  <>
                    <FaThList className="text-sm" />
                    <span>View All Cars</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Conditional Rendering: Show MoreRentalCards or Regular View */}
          {showAllCars ? (
            <MoreRentalCards 
              rentals={rentals} 
              onBackToGrid={handleViewAllCars} 
            />
          ) : (
            <>
              <RentalFilters onFilterChange={handleFilterChange} />

              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                </div>
              ) : filteredRentals.length === 0 ? (
                <div className="text-center py-12">
                  <FaCar className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
                  {showAvailableOnly && (
                    <button
                      onClick={handleShowAll}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto"
                    >
                      <FaEye />
                      View all cars instead
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-gray-500 flex items-center gap-2">
                    <FaInfoCircle className="text-blue-400" />
                    Showing {filteredRentals.length} {showAvailableOnly ? 'available' : ''} car{filteredRentals.length !== 1 ? 's' : ''}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                    {filteredRentals.map((rental) => (
                      <RentalCard key={rental.id} rental={rental} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Rental Partner</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              We make car rental simple, transparent, and hassle-free for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 text-center border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button 
              onClick={handleBrowseAvailable}
              className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <FaCar />
              <span>Browse Our Fleet</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;