import React from 'react';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Exclusive Discounts',
      description: 'Save up to 30% on car rentals and purchases',
    },
    {
      icon: '🛠️',
      title: '24/7 Roadside Assistance',
      description: 'Round-the-clock support for any roadside issues',
    },
    {
      icon: '🎯',
      title: 'Priority Service',
      description: 'Skip the queue with priority booking and support',
    },
    {
      icon: '🔄',
      title: 'Free Cancellation',
      description: 'Cancel your booking without any penalty fees',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="card p-6 text-center hover:shadow-xl transition-all">
          <div className="text-4xl mb-3">{benefit.icon}</div>
          <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
          <p className="text-sm text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MembershipBenefits;