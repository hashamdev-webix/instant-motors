import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaArrowRight, 
  FaClock, 
  FaSearch, 
  FaHandshake,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaCheckCircle,
  FaFileInvoice,
  FaUserTie,
  FaGavel,
  FaStar
} from 'react-icons/fa';
import SellForm from './SellForm';
import PriceEstimate from './PriceEstimates';
import HowSellingWorks from './HowSellingWorks';

const SellCar = () => {
  const [step, setStep] = useState(1);
  const [activeAction, setActiveAction] = useState('instant');
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    price: '',
    description: '',
    images: [],
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handlePriceEstimate = (estimatedPrice) => {
    console.log('Estimated price:', estimatedPrice);
  };

  const handleBack = () => {
    setStep(1);
  };

  const actionButtons = [
    {
      id: 'instant',
      icon: <FaBolt className="text-lg" />,
      label: 'Get Instant Offer',
      description: 'Quick valuation in minutes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'trade',
      icon: <FaHandshake className="text-lg" />,
      label: 'Trade-in Option',
      description: 'Upgrade to your next car',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'expert',
      icon: <FaUserTie className="text-lg" />,
      label: 'Speak to an Expert',
      description: 'Get personalized advice',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Instant Valuation',
      description: 'Get a quick estimate in minutes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaSearch className="text-2xl" />,
      title: 'Free Inspection',
      description: 'No-obligation quality check.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: 'Same-Day Payment',
      description: 'Secure payout.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <FaCar className="text-blue-400 text-sm" />
              <span className="text-white text-sm font-medium">Sell Your Car the Easy Way</span>
              <FaArrowRight className="text-white/60 text-xs" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Sell Your Car
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                the Easy Way
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto"
            >
              Get a quick valuation, free inspection, and secure payment when you sell 
              your car to Instant Motors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                  <FaClock className="text-blue-400 text-lg" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">5 min</div>
                  <div className="text-gray-300 text-xs">Quick Valuation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                  <FaShieldAlt className="text-blue-400 text-lg" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Free</div>
                  <div className="text-gray-300 text-xs">No-Obligation Check</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                  <FaMoneyBillWave className="text-blue-400 text-lg" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Same-Day</div>
                  <div className="text-gray-300 text-xs">Secure Payment</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {actionButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => {
                    setActiveAction(btn.id);
                    const contentSection = document.getElementById('sell-content');
                    if (contentSection) {
                      contentSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeAction === btn.id
                      ? `bg-gradient-to-r ${btn.color} text-white shadow-lg`
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {btn.icon}
                    <span>{btn.label}</span>
                    <FaArrowRight className={`text-xs transition-transform duration-300 ${
                      activeAction === btn.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>

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

      {/* How Selling Works Section */}
      <HowSellingWorks />

      {/* Features Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="sell-content" className="section-padding pt-8 sm:pt-12 md:pt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" />
                  Steps
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      1
                    </div>
                    <div>
                      <p className="font-medium">Car Details</p>
                      <p className="text-sm text-gray-500">Tell us about your car</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      2
                    </div>
                    <div>
                      <p className="font-medium">Price Estimate</p>
                      <p className="text-sm text-gray-500">Get your car valued</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Active Action</p>
                    <p className="text-sm font-medium text-blue-600">
                      {actionButtons.find(b => b.id === activeAction)?.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {step === 1 ? (
                  <SellForm onSubmit={handleFormSubmit} initialData={formData} />
                ) : (
                  <PriceEstimate 
                    carData={formData} 
                    onBack={handleBack}
                    onEstimate={handlePriceEstimate}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;