import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaTachometerAlt, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaDollarSign,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowLeft,
  FaArrowRight,
  FaChartLine,
  FaSpinner,
  FaInfoCircle,
  FaPercent,
  FaMoneyBillWave,
  FaStar,
  FaClock
} from 'react-icons/fa';

const PriceEstimate = ({ carData, onBack, onEstimate }) => {
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [marketComparison, setMarketComparison] = useState(null);

  useEffect(() => {
    // Simulate API call for price estimation
    const calculateEstimate = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple estimation logic based on car data
      let basePrice = parseInt(carData.price) || 20000;
      
      // Adjust based on condition
      const conditionMultipliers = {
        'Excellent': 1.2,
        'Very Good': 1.0,
        'Good': 0.8,
        'Fair': 0.6,
      };
      const multiplier = conditionMultipliers[carData.condition] || 1.0;
      
      // Adjust based on year
      const currentYear = new Date().getFullYear();
      const yearFactor = 1 - ((currentYear - parseInt(carData.year)) * 0.03);
      
      // Adjust based on mileage
      const mileageFactor = 1 - (parseInt(carData.mileage) / 100000);
      
      const estimated = basePrice * multiplier * Math.max(yearFactor, 0.5) * Math.max(mileageFactor, 0.4);
      
      const finalEstimate = Math.round(estimated / 1000) * 1000;
      setEstimatedPrice(finalEstimate);
      setPriceRange({
        min: Math.round((finalEstimate * 0.85) / 1000) * 1000,
        max: Math.round((finalEstimate * 1.15) / 1000) * 1000,
      });
      
      // Market comparison
      setMarketComparison({
        average: Math.round(finalEstimate * 1.05 / 1000) * 1000,
        high: Math.round(finalEstimate * 1.2 / 1000) * 1000,
        low: Math.round(finalEstimate * 0.8 / 1000) * 1000
      });
      
      setLoading(false);
      
      if (onEstimate) {
        onEstimate(finalEstimate);
      }
    };
    
    calculateEstimate();
  }, [carData, onEstimate]);

  const handleAccept = () => {
    alert(`Price estimate accepted: $${estimatedPrice?.toLocaleString()}`);
    // Handle accept estimate
  };

  const handleDecline = () => {
    onBack();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FaChartLine className="text-blue-500" />
          Price Estimate
        </h2>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          <span className="hidden sm:inline">Back</span>
        </button>
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="text-center">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
                <FaCar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 text-xl" />
              </div>
              <p className="mt-4 text-gray-600 flex items-center justify-center gap-2">
                <FaSpinner className="animate-spin text-blue-500" />
                Calculating your car's value...
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Estimated Price */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-block bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-inner">
                <p className="text-sm text-gray-600 mb-2 flex items-center justify-center gap-2">
                  <FaMoneyBillWave className="text-blue-500" />
                  Estimated Value
                </p>
                <p className="text-4xl sm:text-5xl font-bold text-blue-600">
                  ${estimatedPrice?.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <FaDollarSign className="text-xs" />
                  Range: ${priceRange.min?.toLocaleString()} - ${priceRange.max?.toLocaleString()}
                </p>
              </div>
            </motion.div>

            {/* Market Comparison */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                Market Comparison
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Low</p>
                  <p className="text-sm font-semibold text-gray-700">
                    ${marketComparison?.low?.toLocaleString()}
                  </p>
                </div>
                <div className="text-center border-x border-gray-200 px-2">
                  <p className="text-xs text-gray-500">Average</p>
                  <p className="text-sm font-semibold text-blue-600">
                    ${marketComparison?.average?.toLocaleString()}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">High</p>
                  <p className="text-sm font-semibold text-gray-700">
                    ${marketComparison?.high?.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full" 
                  style={{ width: '65%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-1 text-center">
                Your car is priced competitively
              </p>
            </div>

            {/* Car Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <FaCar className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Brand</p>
                  <p className="font-semibold text-gray-900">{carData.brand || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaCar className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Model</p>
                  <p className="font-semibold text-gray-900">{carData.model || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Year</p>
                  <p className="font-semibold text-gray-900">{carData.year || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaTachometerAlt className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Mileage</p>
                  <p className="font-semibold text-gray-900">
                    {parseInt(carData.mileage || 0).toLocaleString()} km
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Condition</p>
                  <p className="font-semibold text-gray-900">{carData.condition || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-blue-500 text-sm" />
                <div>
                  <p className="text-gray-500 text-xs">Your Asking</p>
                  <p className="font-semibold text-gray-900">
                    ${parseInt(carData.price || 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <FaCheckCircle />
                <span>Accept Estimate</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaTimesCircle />
                <span>Decline & Edit</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <FaInfoCircle className="text-yellow-500 text-sm mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600">
                This estimate is based on market data and similar car listings. 
                Final price may vary after a physical inspection.
              </p>
            </div>

            {/* Confidence Score */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
                <span className="ml-1">4.0/5 Confidence</span>
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-blue-400" />
                <span>Updated just now</span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceEstimate;