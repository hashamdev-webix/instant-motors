import React from 'react';
import { motion } from 'framer-motion';

const MembershipPlans = ({ onSelectPlan, selectedPlan }) => {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      period: 'month',
      features: [
        '10% off on rentals',
        'Basic roadside assistance',
        'Email support',
        'Priority booking',
      ],
      popular: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 19.99,
      period: 'month',
      features: [
        '20% off on rentals',
        'Premium roadside assistance',
        'Priority support 24/7',
        'Free cancellation',
        'Free GPS rental',
        'Members-only events',
      ],
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 29.99,
      period: 'month',
      features: [
        '30% off on rentals',
        'Premium roadside assistance',
        'Dedicated account manager',
        'Free cancellation',
        'Free GPS and child seat',
        'Free upgrades',
        'Concierge service',
        'Access to luxury fleet',
      ],
      popular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`
            relative bg-white rounded-2xl shadow-lg overflow-hidden
            ${plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''}
            hover:shadow-2xl transition-all duration-300
          `}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Popular
            </div>
          )}
          
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-primary-600">${plan.price}</span>
              <span className="text-gray-500 text-sm">/{plan.period}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 pt-0">
            <button
              onClick={() => onSelectPlan(plan)}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedPlan?.id === plan.id
                  ? 'bg-primary-600 text-white'
                  : plan.popular
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {selectedPlan?.id === plan.id ? 'Selected' : 'Choose Plan'}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MembershipPlans;