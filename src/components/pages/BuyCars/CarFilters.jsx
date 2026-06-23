import React from 'react';
import { 
  CAR_TYPES_OPTIONS, 
  TRANSMISSION_OPTIONS, 
  FUEL_OPTIONS,
  SEATS_OPTIONS,
  BODY_TYPE_OPTIONS
} from '../../../constants/carData';
import { 
  FaSearch, 
  FaCar, 
  FaCog, 
  FaGasPump, 
  FaUser, 
  FaDollarSign, 
  FaCalendarAlt, 
  FaTachometerAlt,
  FaSort,
  FaTimes,
  FaFilter
} from 'react-icons/fa';

const CarFilters = ({ filters, onFilterChange, onReset, activeFilterCount }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  // Generate year options (from 2000 to current year)
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let year = currentYear; year >= 2000; year--) {
    yearOptions.push(year);
  }

  // Mileage options
  const mileageOptions = [
    { value: '', label: 'Any Mileage' },
    { value: '0-10000', label: '0 - 10,000 km' },
    { value: '10000-20000', label: '10,000 - 20,000 km' },
    { value: '20000-30000', label: '20,000 - 30,000 km' },
    { value: '30000-50000', label: '30,000 - 50,000 km' },
    { value: '50000-100000', label: '50,000 - 100,000 km' },
    { value: '100000+', label: '100,000+ km' }
  ];

  // Budget options
  const budgetOptions = [
    { value: '', label: 'Any Budget' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-150', label: '$100 - $150' },
    { value: '150-200', label: '$150 - $200' },
    { value: '200-300', label: '$200 - $300' },
    { value: '300-500', label: '$300 - $500' },
    { value: '500+', label: '$500+' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <FaFilter className="text-blue-600" />
          Filter Cars
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
          >
            <FaTimes className="text-xs" />
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Search - Make or Model */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaSearch className="inline mr-1.5 text-blue-500" /> Make or Model
          </label>
          <input
            type="text"
            name="search"
            value={filters.search || ''}
            onChange={handleChange}
            placeholder="Search by make or model..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaDollarSign className="inline mr-1.5 text-blue-500" /> Budget
          </label>
          <select
            name="budget"
            value={filters.budget || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {budgetOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Body Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaCar className="inline mr-1.5 text-blue-500" /> Body Type
          </label>
          <select
            name="bodyType"
            value={filters.bodyType || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {BODY_TYPE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Year Range - From */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaCalendarAlt className="inline mr-1.5 text-blue-500" /> Year From
          </label>
          <select
            name="yearFrom"
            value={filters.yearFrom || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            <option value="">Any Year</option>
            {yearOptions.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Year Range - To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaCalendarAlt className="inline mr-1.5 text-blue-500" /> Year To
          </label>
          <select
            name="yearTo"
            value={filters.yearTo || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            <option value="">Any Year</option>
            {yearOptions.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Mileage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaTachometerAlt className="inline mr-1.5 text-blue-500" /> Mileage
          </label>
          <select
            name="mileage"
            value={filters.mileage || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {mileageOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaCog className="inline mr-1.5 text-blue-500" /> Transmission
          </label>
          <select
            name="transmission"
            value={filters.transmission || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {TRANSMISSION_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaGasPump className="inline mr-1.5 text-blue-500" /> Fuel Type
          </label>
          <select
            name="fuelType"
            value={filters.fuelType || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {FUEL_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Seats */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaUser className="inline mr-1.5 text-blue-500" /> Seats
          </label>
          <select
            name="seats"
            value={filters.seats || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            {SEATS_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            <FaSort className="inline mr-1.5 text-blue-500" /> Sort By
          </label>
          <select
            name="sortBy"
            value={filters.sortBy || 'price-asc'}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest</option>
            <option value="year-asc">Year: Oldest</option>
            <option value="rating-desc">Rating: Highest</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="mileage-asc">Mileage: Low to High</option>
            <option value="mileage-desc">Mileage: High to Low</option>
          </select>
        </div>
      </div>

      {/* Active Filters Summary */}
      <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            {activeFilterCount > 0 ? (
              <span className="flex items-center gap-1">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  {activeFilterCount}
                </span>
                active filter{activeFilterCount !== 1 ? 's' : ''} applied
              </span>
            ) : (
              'No filters applied'
            )}
          </span>
          {activeFilterCount > 0 && (
            <button
              onClick={onReset}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              <FaTimes className="text-xs" />
              Reset All
            </button>
          )}
        </div>
        
        {/* Active Filter Tags */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2 sm:mt-0">
            {filters.search && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                {filters.search}
                <button
                  onClick={() => onFilterChange('search', '')}
                  className="hover:text-red-500"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              </span>
            )}
            {filters.budget && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                Budget: {budgetOptions.find(o => o.value === filters.budget)?.label}
                <button
                  onClick={() => onFilterChange('budget', '')}
                  className="hover:text-red-500"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              </span>
            )}
            {filters.bodyType && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                {BODY_TYPE_OPTIONS.find(o => o.value === filters.bodyType)?.label}
                <button
                  onClick={() => onFilterChange('bodyType', '')}
                  className="hover:text-red-500"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              </span>
            )}
            {filters.yearFrom && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                From: {filters.yearFrom}
                <button
                  onClick={() => onFilterChange('yearFrom', '')}
                  className="hover:text-red-500"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              </span>
            )}
            {filters.yearTo && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                To: {filters.yearTo}
                <button
                  onClick={() => onFilterChange('yearTo', '')}
                  className="hover:text-red-500"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarFilters;