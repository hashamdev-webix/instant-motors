import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MembershipPlans from './MembershipPlans';
import MembershipBenefits from './MembershipBenefits';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Handle plan selection (e.g., open payment modal)
    console.log('Selected plan:', plan);
  };

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            <span className="text-primary-600">Membership</span> Plans
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Join our membership program and unlock exclusive benefits, discounts, and premium services
          </p>
        </div>

        <MembershipBenefits />
        
        <div className="mt-12">
          <MembershipPlans onSelectPlan={handlePlanSelect} selectedPlan={selectedPlan} />
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: 'How does the membership work?',
                a: 'Our membership program offers tiered plans with increasing benefits. Choose a plan that suits your needs and enjoy exclusive perks, discounts, and priority services.',
              },
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Yes, you can cancel your membership at any time. Your benefits will remain active until the end of your current billing cycle.',
              },
              {
                q: 'What payment methods are accepted?',
                a: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our payment gateway.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;