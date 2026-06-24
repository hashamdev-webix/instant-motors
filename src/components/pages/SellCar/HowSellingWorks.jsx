import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaArrowRight, 
  FaClock, 
  FaSearch, 
  FaHandshake,
  FaMoneyBillWave
} from 'react-icons/fa';

const HowSellingWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us About Your Car',
      description: 'Share your car details including make, model, year, mileage, and condition for an accurate valuation.',
      icon: <FaCar className="text-xl" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      title: 'Get Your Instant Estimate',
      description: 'Receive a free, no-obligation price estimate based on market data and current demand for your vehicle.',
      icon: <FaMoneyBillWave className="text-xl" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '03',
      title: 'Schedule Inspection',
      description: 'We\'ll arrange a free, thorough inspection of your car at your convenience by our certified experts.',
      icon: <FaSearch className="text-xl" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '04',
      title: 'Get Paid Instantly',
      description: 'Receive same-day payment after completing the sale with our secure, hassle-free process.',
      icon: <FaHandshake className="text-xl" />,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <FaClock className="inline mr-2" />
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Sell Your Car in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">4 Simple Steps</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            We make selling your car quick, easy, and transparent. Follow these simple steps to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </span>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center`}>
                  {step.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaArrowRight className="text-blue-500 text-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowSellingWorks;