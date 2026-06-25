// src/components/pages/BuyCars/BuyCars.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCar, 
  FaSearch, 
  FaArrowRight, 
  FaHeadset, 
  FaCheckCircle,
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaChartLine,
  FaHandshake,
  FaUserFriends,
  FaStar,
  FaPercent,
  FaCalculator,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaExchangeAlt,
  FaCarSide,
  FaThumbsUp,
  FaShieldAlt as FaShield,
  FaRocket,
  FaShoppingCart
} from 'react-icons/fa';
import CarFilters from './CarFilters';
import { CarGrid } from './CarCard';
import { MOCK_CARS } from '../../../constants/carData';
import { useCarFilter } from '../../../hooks/useCarFilter';
import toast from 'react-hot-toast';

const BuyCars = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('browse');
  const [cartItems, setCartItems] = useState([]);
  
  const {
    filters,
    filteredCars,
    updateFilter,
    resetFilters,
    activeFilterCount,
  } = useCarFilter(MOCK_CARS);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('checkoutCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        setCartItems([]);
      }
    }
  }, []);

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const contentSection = document.getElementById('buy-cars-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle View All Cars
  const handleViewAllCars = () => {
    console.log('View all cars clicked - showing all cars');
    resetFilters();
  };

  // Handle Add to Cart / Buy Now
  const handleBuyNow = (car) => {
    // Add to cart
    const updatedCart = [...cartItems, { ...car, quantity: 1 }];
    setCartItems(updatedCart);
    localStorage.setItem('checkoutCart', JSON.stringify(updatedCart));
    toast.success(`${car.name} added to cart!`);
    
    // Navigate to checkout
    navigate('/checkout', { 
      state: { cartItems: updatedCart } 
    });
  };

  // Features data for the hero section
  const features = [
    {
      icon: <FaHeadset className="text-blue-400 text-lg" />,
      title: '24/7 Support',
      description: 'Our team is here to help you anytime, anywhere.'
    },
    {
      icon: <FaShieldAlt className="text-blue-400 text-lg" />,
      title: 'Certified Vehicles',
      description: 'Every car is inspected and certified for quality.'
    },
    {
      icon: <FaMoneyBillWave className="text-blue-400 text-lg" />,
      title: 'Best Price Guarantee',
      description: 'We match the best prices in the market.'
    },
    {
      icon: <FaClock className="text-blue-400 text-lg" />,
      title: 'Fast & Easy Process',
      description: 'Complete your purchase in just a few steps.'
    }
  ];

  // Action buttons data
  const actionButtons = [
    {
      id: 'browse',
      icon: <FaSearch className="text-lg" />,
      label: 'Browse Inventory',
      description: 'Explore our wide selection of certified cars',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'sell',
      icon: <FaHandshake className="text-lg" />,
      label: 'Sell Your Car',
      description: 'Get a fair price for your vehicle today',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'finance',
      icon: <FaChartLine className="text-lg" />,
      label: 'Financing Options',
      description: 'Flexible payment plans tailored for you',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Animated Particles/Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <FaCar className="text-blue-400 text-sm" />
                <span className="text-white text-sm font-medium">Certified Pre-Owned Cars</span>
                <FaArrowRight className="text-white/60 text-xs" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Find Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                  Dream Car.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl"
              >
                Browse certified pre-owned vehicles, compare options, and buy with confidence from Instant Motors.
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
                    <div className="text-white font-bold text-lg">200+</div>
                    <div className="text-gray-300 text-xs">Certified Cars</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <FaUserFriends className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">500+</div>
                    <div className="text-gray-300 text-xs">Happy Customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <FaStar className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">4.8</div>
                    <div className="text-gray-300 text-xs">Average Rating</div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {actionButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => handleTabChange(btn.id)}
                    className={`group relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      activeTab === btn.id
                        ? `bg-gradient-to-r ${btn.color} text-white shadow-lg`
                        : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {btn.icon}
                      <span>{btn.label}</span>
                      <FaArrowRight className={`text-xs transition-transform duration-300 ${
                        activeTab === btn.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
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

      {/* Content Section */}
      <div id="buy-cars-content" className="section-padding pt-8 sm:pt-12 md:pt-16">
        <div className="container-custom">
          {/* Tab Content */}
          {activeTab === 'browse' && (
            <>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Browse Our Inventory
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Find the perfect car from our extensive collection
                  </p>
                </div>
                {cartItems.length > 0 && (
                  <button
                    onClick={() => navigate('/checkout')}
                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaShoppingCart />
                    Cart ({cartItems.length})
                  </button>
                )}
              </div>

              <CarFilters 
                filters={filters}
                onFilterChange={updateFilter}
                onReset={resetFilters}
                activeFilterCount={activeFilterCount}
              />

              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                </div>
              ) : (
                <CarGrid 
                  cars={filteredCars} 
                  onViewAll={handleViewAllCars}
                  title="Our Inventory"
                  showViewAll={true}
                  onBuyNow={handleBuyNow}
                />
              )}
            </>
          )}

          {activeTab === 'sell' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-200/20">
                  <FaHandshake className="text-5xl text-green-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Sell Your Car
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Get a fair market price for your vehicle. Our experts will evaluate your car and give you the best offer.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaClock className="text-green-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Quick Process</h4>
                      <p className="text-xs text-gray-500">Get an offer in minutes</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaMoneyBillWave className="text-green-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Best Price</h4>
                      <p className="text-xs text-gray-500">Competitive market rates</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaShieldAlt className="text-green-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Secure Payment</h4>
                      <p className="text-xs text-gray-500">Safe & instant payment</p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                    <FaHandshake />
                    Get Your Offer Now
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'finance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-200/20">
                  <FaChartLine className="text-5xl text-purple-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Financing Options
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Flexible payment plans designed to fit your budget. Get pre-approved in minutes with our easy financing process.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaCheckCircle className="text-purple-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Low Rates</h4>
                      <p className="text-xs text-gray-500">Competitive interest rates</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaClock className="text-purple-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Flexible Terms</h4>
                      <p className="text-xs text-gray-500">Choose your payment plan</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FaShieldAlt className="text-purple-500 text-xl mb-2" />
                      <h4 className="font-semibold text-sm">Quick Approval</h4>
                      <p className="text-xs text-gray-500">Get approved in minutes</p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                    <FaChartLine />
                    Apply Now
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Financing & Trade In Section */}
      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <FaPercent className="inline mr-2" />
              Financing & Trade In
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Deal Today</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Explore flexible financing options and get the best value for your trade-in vehicle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Need Financing Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaFileInvoiceDollar className="text-2xl" />
                  Need Financing?
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Flexible plans to fit your budget and lifestyle.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Competitive rates from trusted lenders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Quick and easy pre-approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">No impact to your credit score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Terms up to 72 months</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  <FaCalculator />
                  <span>Get Pre-Approved</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Trade In Your Car Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaExchangeAlt className="text-2xl" />
                  Trade In Your Car
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Get more value and save more today.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Instant online estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">No obligation, no hassle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Apply value toward your next car</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">We buy all makes and models</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                  <FaCarSide />
                  <span>Get Instant Estimate</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <FaThumbsUp className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">No Hidden Fees</h4>
                <p className="text-xs text-gray-500">Transparent pricing guaranteed</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <FaShield className="text-green-500 text-xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Warranty Included</h4>
                <p className="text-xs text-gray-500">Peace of mind with every purchase</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <FaRocket className="text-purple-500 text-xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-500">Get your car delivered to your door</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 24/7 Support Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <FaHeadset className="inline mr-2" />
              24/7 Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Help You</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Our dedicated support team is available around the clock to assist you with any questions or concerns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <FaHeadset className="text-3xl" />,
                title: '24/7 Customer Support',
                description: 'Our team is always here to help you anytime, anywhere.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <FaMoneyBillWave className="text-3xl" />,
                title: 'Transparent Pricing',
                description: 'No hidden fees. What you see is what you pay.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: <FaCar className="text-3xl" />,
                title: 'Wide Vehicle Selection',
                description: 'Choose from a diverse range of vehicles to fit your needs.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <FaClock className="text-3xl" />,
                title: 'Easy Online Booking',
                description: 'Book your perfect car in just a few clicks: fast and hassle-free.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 text-center border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2">
              <FaHeadset />
              <span>Contact Support</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuyCars;