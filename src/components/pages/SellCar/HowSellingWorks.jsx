// src/components/SellCar/HowSellingWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaChartLine, 
  FaCalendarCheck, 
  FaMoneyBillWave,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHandshake
} from 'react-icons/fa';

const HowSellingWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FaCar className="text-2xl" />,
      title: 'Tell Us About Your Car',
      description: 'Enter your vehicle details in just a few minutes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: <FaChartLine className="text-2xl" />,
      title: 'Get an Instant Estimate',
      description: 'Receive a fair, market-based offer in seconds.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      icon: <FaCalendarCheck className="text-2xl" />,
      title: 'Book Inspection or Pickup',
      description: 'Schedule a convenient time that works for you.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '04',
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: 'Get Paid or Trade In',
      description: 'Get secure payment or use your value toward your next car.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Additional benefits
  const benefits = [
    {
      icon: <FaCheckCircle className="text-sm" />,
      text: 'No hidden fees'
    },
    {
      icon: <FaClock className="text-sm" />,
      text: 'Fast process'
    },
    {
      icon: <FaShieldAlt className="text-sm" />,
      text: 'Secure transaction'
    },
    {
      icon: <FaHandshake className="text-sm" />,
      text: 'Trusted service'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <FaCar className="inline mr-2" />
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Selling Works</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            A simple process from valuation to payment.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-transparent overflow-hidden h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <div className="text-5xl font-bold text-gray-200 group-hover:text-white/20 transition-colors duration-300 mb-2">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step number indicator */}
                  <div className="mt-4 flex justify-center gap-1">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === index 
                            ? 'w-8 bg-blue-500' 
                            : 'w-2 bg-gray-300 group-hover:bg-white/30'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <FaArrowRight className="text-gray-300 text-xl group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm text-gray-700">
                <span className="text-green-500">{benefit.icon}</span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm mb-4">
            Ready to sell your car? Get started with a free valuation.
          </p>
          <button className="group bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/30">
            <FaCar />
            <span>Sell Your Car Now</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowSellingWorks;