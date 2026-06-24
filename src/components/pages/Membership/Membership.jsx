import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeadset, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';
import MembershipPlans from './MemberShipPlans';
import MembershipBenefits from './MemberShipBenefits';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    console.log('Selected plan:', plan);
  };

  const faqs = [
    {
      q: 'How does the membership work?',
      a: 'Our membership program offers tiered plans with increasing benefits. Choose a plan that suits your needs and enjoy exclusive perks, discounts, and priority services.'
    },
    {
      q: 'Can I cancel my membership anytime?',
      a: 'Yes, you can cancel your membership at any time. Your benefits will remain active until the end of your current billing cycle.'
    },
    {
      q: 'What payment methods are accepted?',
      a: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our payment gateway.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <FaRocket className="text-sm md:text-base" />
            Membership Plans
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Choose Your <span className="text-primary-600">Plan</span>
          </h1>
          <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Join our membership program and unlock exclusive benefits, discounts, and premium services
          </p>
        </motion.div>

        {/* Benefits */}
        <MembershipBenefits />

        {/* Plans */}
        <div className="mt-10 md:mt-12 lg:mt-16">
          <MembershipPlans 
            onSelectPlan={handlePlanSelect} 
            selectedPlan={selectedPlan} 
          />
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20 bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            <FaQuestionCircle className="text-primary-500 text-xl md:text-2xl" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 md:p-5 hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-sm md:text-base mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 md:mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 md:mt-12 lg:mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaRocket className="text-2xl md:text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">
              Join thousands of satisfied customers and start saving on your car rentals today.
            </p>
            <button 
              onClick={() => handlePlanSelect('premium')}
              className="mt-4 md:mt-6 bg-white text-primary-600 hover:bg-gray-100 font-bold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <FaRocket className="text-sm sm:text-base" />
              Start Your Free Trial
            </button>
            <p className="text-white/60 text-xs sm:text-sm mt-3">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;