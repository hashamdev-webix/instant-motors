import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMoneyBillWave, 
  FaCheckCircle, 
  FaTimes, 
  FaSpinner,
  FaArrowLeft,
  FaFileInvoice,
  FaHandshake,
  FaCar,
  FaShieldAlt,
  FaCreditCard,
  FaPercent,
  FaClock,
  FaThumbsUp,
  FaHeadset,
  FaRocket,
  FaExchangeAlt,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaStar,
  FaUsers,
  FaPhoneAlt
} from 'react-icons/fa';
import { MdSecurity, MdSupportAgent, MdDiscount } from 'react-icons/md';
import toast from 'react-hot-toast';

const PriceEstimate = ({ carData, onBack, onEstimate }) => {
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [activeTab, setActiveTab] = useState('financing');

  useEffect(() => {
    const calculateEstimate = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let basePrice = parseInt(carData.price) || 20000;
      
      const conditionMultipliers = {
        'Excellent': 1.2,
        'Very Good': 1.0,
        'Good': 0.8,
        'Fair': 0.6,
      };
      const multiplier = conditionMultipliers[carData.condition] || 1.0;
      
      const currentYear = new Date().getFullYear();
      const yearFactor = 1 - ((currentYear - parseInt(carData.year)) * 0.03);
      const mileageFactor = 1 - (parseInt(carData.mileage) / 100000);
      
      const estimated = basePrice * multiplier * Math.max(yearFactor, 0.5) * Math.max(mileageFactor, 0.4);
      const finalEstimate = Math.round(estimated / 1000) * 1000;
      
      setEstimatedPrice(finalEstimate);
      setPriceRange({
        min: Math.round((finalEstimate * 0.85) / 1000) * 1000,
        max: Math.round((finalEstimate * 1.15) / 1000) * 1000,
      });
      setLoading(false);
      
      if (onEstimate) {
        onEstimate(finalEstimate);
      }
    };
    
    calculateEstimate();
  }, [carData, onEstimate]);

  const handleAccept = () => {
    setAccepted(true);
    toast.success(`Price estimate accepted: $${estimatedPrice?.toLocaleString()}`);
    setTimeout(() => {
      toast.success('We\'ll contact you shortly to finalize the sale!');
    }, 500);
  };

  const handleDecline = () => {
    toast.info('You can update your car details and try again.');
    onBack();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center py-12">
          <div className="text-center">
            <FaSpinner className="animate-spin text-4xl text-blue-500 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Calculating your car's value...</p>
            <p className="text-sm text-gray-400 mt-2">This may take a few seconds</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-4 text-sm"
      >
        <FaArrowLeft /> Back to Edit
      </button>

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FaMoneyBillWave className="text-green-500 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900">Price Estimate</h2>
      </div>

      {/* Estimated Price */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-6"
      >
        <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-100 w-full">
          <p className="text-sm text-gray-500 mb-2">Estimated Value</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            ${estimatedPrice?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Range: ${priceRange.min?.toLocaleString()} - ${priceRange.max?.toLocaleString()}
          </p>
        </div>
      </motion.div>

      {/* Car Details Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl mb-6">
        <div>
          <p className="text-xs text-gray-500">Brand</p>
          <p className="font-semibold text-sm">{carData.brand}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Model</p>
          <p className="font-semibold text-sm">{carData.model}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Year</p>
          <p className="font-semibold text-sm">{carData.year}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Mileage</p>
          <p className="font-semibold text-sm">{parseInt(carData.mileage).toLocaleString()} km</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Condition</p>
          <p className="font-semibold text-sm">{carData.condition}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Your Asking Price</p>
          <p className="font-semibold text-sm">${parseInt(carData.price).toLocaleString()}</p>
        </div>
      </div>

      {/* Action Buttons */}
      {accepted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-6"
        >
          <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-2" />
          <h4 className="font-bold text-green-800 text-lg">Estimate Accepted!</h4>
          <p className="text-green-700 text-sm">We'll contact you shortly to finalize the sale.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 text-sm text-green-700 hover:text-green-800 font-medium underline"
          >
            Start New Valuation
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={handleAccept}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <FaCheckCircle />
            Accept Estimate
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <FaTimes />
            Decline & Edit
          </button>
        </div>
      )}

      {/* Financing & Trade In Section */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaFileInvoice className="text-blue-500" />
          Financing & Trade In
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTab('financing')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === 'financing'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaCreditCard className="inline mr-2" />
            Need Financing?
          </button>
          <button
            onClick={() => setActiveTab('trade')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === 'trade'
                ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaExchangeAlt className="inline mr-2" />
            Trade In Your Car
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === 'benefits'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaStar className="inline mr-2" />
            Benefits
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-xl p-4 md:p-6">
          {activeTab === 'financing' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaCreditCard className="text-blue-600 text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Need Financing?</h4>
              </div>
              <p className="text-gray-600 text-sm">Flexible plans to fit your budget and lifestyle.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  Competitive rates from trusted lenders
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  Quick and easy pre-approval
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  No impact to your credit score
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  Terms up to 72 months
                </li>
              </ul>
              <button className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm">
                <FaCreditCard />
                Get Pre-Approved
                <FaArrowRight className="text-xs" />
              </button>
            </motion.div>
          )}

          {activeTab === 'trade' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaExchangeAlt className="text-green-600 text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Trade In Your Car</h4>
              </div>
              <p className="text-gray-600 text-sm">Get more value and save more today.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  Instant online estimate
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  No obligation, no hassle
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  Apply value toward your next car
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  We buy all makes and models
                </li>
              </ul>
              <button className="mt-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm">
                <FaCar />
                Get Instant Estimate
                <FaArrowRight className="text-xs" />
              </button>
            </motion.div>
          )}

          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaStar className="text-purple-600 text-xl" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Why Sell with Us</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <FaShieldAlt className="text-blue-500 text-xl mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm">Certified Quality</h5>
                  <p className="text-xs text-gray-500">Multi-point inspections</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <FaPercent className="text-green-500 text-xl mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm">Transparent Pricing</h5>
                  <p className="text-xs text-gray-500">No hidden fees, ever</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <FaThumbsUp className="text-purple-500 text-xl mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm">7-Day Returns Promise</h5>
                  <p className="text-xs text-gray-500">Love it or return it</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <FaHeadset className="text-orange-500 text-xl mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm">Dedicated Support</h5>
                  <p className="text-xs text-gray-500">We're here for you</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center mt-6">
        This estimate is based on market data and similar car listings. Final price may vary.
      </p>
    </div>
  );
};

export default PriceEstimate;