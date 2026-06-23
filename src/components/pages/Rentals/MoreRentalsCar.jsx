import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCar, 
  FaFilter, 
  FaTimes, 
  FaSlidersH,
  FaSearch,
  FaCog,
  FaUser,
  FaGasPump,
  FaDollarSign,
  FaSort,
  FaSortAmountDown,
  FaSortAmountUp,
  FaStar,
  FaCrown,
  FaGem,
  FaCompass,
  FaFire,
  FaBriefcase,
  FaCheckCircle,
  FaEye,
  FaThList,
  FaTh,
  FaArrowLeft
} from 'react-icons/fa';

const MoreRentalCards = ({ rentals = [], onBackToGrid }) => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    priceRange: 'all',
    transmission: 'all',
    fuelType: 'all',
    seats: 'all',
    sortBy: 'recommended'
  });

  // Extract unique values for filters
  const types = ['all', ...new Set(rentals.map(r => r.type))];
  const transmissions = ['all', ...new Set(rentals.map(r => r.transmission))];
  const fuelTypes = ['all', ...new Set(rentals.map(r => r.fuelType))];
  const seatOptions = ['all', '2', '4', '5', '7', '8'];

  useEffect(() => {
    setLoading(true);
    // Simulate loading
    const timer = setTimeout(() => {
      applyFilters();
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filters, rentals]);

  const applyFilters = () => {
    let result = [...rentals];

    // Search filter
    if (filters.search) {
      result = result.filter(car => 
        car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.type.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      result = result.filter(car => car.type === filters.type);
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        result = result.filter(car => car.pricePerDay >= min && car.pricePerDay <= max);
      } else {
        result = result.filter(car => car.pricePerDay >= min);
      }
    }

    // Transmission filter
    if (filters.transmission !== 'all') {
      result = result.filter(car => car.transmission === filters.transmission);
    }

    // Fuel type filter
    if (filters.fuelType !== 'all') {
      result = result.filter(car => car.fuelType === filters.fuelType);
    }

    // Seats filter
    if (filters.seats !== 'all') {
      result = result.filter(car => car.seats === parseInt(filters.seats));
    }

    // Sorting
    switch(filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-high':
        result.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // recommended
        // Keep original order or sort by premium/luxury first
        result.sort((a, b) => {
          if (a.isLuxury && !b.isLuxury) return -1;
          if (!a.isLuxury && b.isLuxury) return 1;
          if (a.isPremium && !b.isPremium) return -1;
          if (!a.isPremium && b.isPremium) return 1;
          return 0;
        });
    }

    setFilteredRentals(result);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      type: 'all',
      priceRange: 'all',
      transmission: 'all',
      fuelType: 'all',
      seats: 'all',
      sortBy: 'recommended'
    });
  };

  const getTagDetails = (tag) => {
    switch(tag) {
      case 'Premium':
        return { color: 'bg-gradient-to-r from-blue-400 to-blue-600', icon: <FaStar className="text-white text-xs" /> };
      case 'Luxury':
        return { color: 'bg-gradient-to-r from-purple-500 to-purple-700', icon: <FaCrown className="text-white text-xs" /> };
      case 'Adventure':
        return { color: 'bg-gradient-to-r from-green-500 to-emerald-600', icon: <FaCompass className="text-white text-xs" /> };
      case 'Sports':
        return { color: 'bg-gradient-to-r from-red-500 to-red-600', icon: <FaFire className="text-white text-xs" /> };
      default:
        return { color: 'bg-gradient-to-r from-gray-400 to-gray-600', icon: null };
    }
  };

  const getFuelIcon = (fuel) => {
    switch(fuel?.toLowerCase()) {
      case 'electric': return <FaGem className="text-cyan-500" />;
      case 'diesel': return <FaGasPump className="text-blue-600" />;
      default: return <FaGasPump className="text-orange-500" />;
    }
  };

  return (
    <div className="w-full">
      {/* Header with Back Button and Results Count */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-between mb-6 gap-4"
      >
        <div className="flex items-center gap-3">
          {/* Back to Grid Button */}
          {onBackToGrid && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToGrid}
              className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              <span className="hidden sm:inline">Back</span>
            </motion.button>
          )}
          
          <div className="flex items-center gap-3">
            <FaCar className="text-blue-600 text-2xl" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              All Rentals
            </h2>
            <motion.span 
              key={filteredRentals.length}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {filteredRentals.length} results
            </motion.span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Toggle Filters Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
          >
            <FaSlidersH />
            <span className="hidden sm:inline">Filters</span>
            <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">
              {Object.values(filters).filter(v => v !== 'all' && v !== '' && v !== 'recommended').length}
            </span>
          </motion.button>

          {/* Grid View Button */}
          {onBackToGrid && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToGrid}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FaTh className="text-sm" />
              <span className="hidden sm:inline">Grid View</span>
            </motion.button>
          )}
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg p-5 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <FaFilter className="text-blue-600" />
                    Filters
                  </h3>
                  <button
                    onClick={handleResetFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <FaTimes className="text-xs" />
                    Reset
                  </button>
                </div>

                {/* Search */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaSearch className="inline mr-1 text-blue-500" /> Search
                  </label>
                  <input
                    type="text"
                    name="search"
                    value={filters.search}
                    onChange={handleFilterChange}
                    placeholder="Search cars..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Car Type */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaCar className="inline mr-1 text-blue-500" /> Car Type
                  </label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaDollarSign className="inline mr-1 text-blue-500" /> Price Range
                  </label>
                  <select
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-150">$100 - $150</option>
                    <option value="150-200">$150 - $200</option>
                    <option value="200-999">$200+</option>
                  </select>
                </div>

                {/* Transmission */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaCog className="inline mr-1 text-blue-500" /> Transmission
                  </label>
                  <select
                    name="transmission"
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {transmissions.map(trans => (
                      <option key={trans} value={trans}>
                        {trans === 'all' ? 'All Transmissions' : trans}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fuel Type */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaGasPump className="inline mr-1 text-blue-500" /> Fuel Type
                  </label>
                  <select
                    name="fuelType"
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {fuelTypes.map(fuel => (
                      <option key={fuel} value={fuel}>
                        {fuel === 'all' ? 'All Fuel Types' : fuel}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Seats */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaUser className="inline mr-1 text-blue-500" /> Seats
                  </label>
                  <select
                    name="seats"
                    value={filters.seats}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {seatOptions.map(seat => (
                      <option key={seat} value={seat}>
                        {seat === 'all' ? 'Any Seats' : `${seat} Seats`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    <FaSort className="inline mr-1 text-blue-500" /> Sort By
                  </label>
                  <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>

                {/* Active Filters Summary */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <FaCheckCircle className="inline mr-1 text-blue-500" />
                    {filteredRentals.length} cars found
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FaCar className="text-4xl text-blue-600" />
              </motion.div>
              <span className="ml-3 text-gray-600">Loading cars...</span>
            </div>
          ) : filteredRentals.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-xl shadow-lg"
            >
              <FaCar className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
              <AnimatePresence>
                {filteredRentals.map((rental, index) => (
                  <motion.div
                    key={rental.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={rental.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                        alt={rental.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {!rental.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            Unavailable
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 flex flex-col gap-1">
                        {rental.isLuxury && (
                          <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-lg">
                            <FaCrown className="text-xs" /> Luxury
                          </span>
                        )}
                        {rental.isPremium && !rental.isLuxury && (
                          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-lg">
                            <FaStar className="text-xs" /> Premium
                          </span>
                        )}
                        {rental.isAdventure && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-lg">
                            <FaCompass className="text-xs" /> Adventure
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                        ${rental.pricePerDay}/day
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{rental.name}</h3>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-sm" />
                          <span className="text-sm font-medium">{rental.rating}</span>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500 mb-3">{rental.year} • {rental.type}</div>

                      <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1 text-gray-600">
                          <FaCog className="text-gray-400" />
                          <span className="truncate">{rental.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <FaUser className="text-gray-400" />
                          <span>{rental.seats} seats</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <FaBriefcase className="text-gray-400" />
                          <span>{rental.bags} bags</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1 text-gray-600">
                          {getFuelIcon(rental.fuelType)}
                          <span>{rental.fuelType}</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          rental.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {rental.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>

                      {rental.tags && rental.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {rental.tags.slice(0, 3).map((tag, i) => {
                            const details = getTagDetails(tag);
                            return (
                              <span key={i} className={`${details.color} text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-0.5`}>
                                {details.icon}
                                {tag}
                              </span>
                            );
                          })}
                          {rental.tags.length > 3 && (
                            <span className="bg-gray-200 text-gray-700 text-[10px] px-2 py-0.5 rounded-full">
                              +{rental.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreRentalCards;