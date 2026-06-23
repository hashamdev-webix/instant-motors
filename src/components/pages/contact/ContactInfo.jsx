import React from 'react';

const ContactInfo = () => {
  const infoItems = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['123 Main Street', 'New York, NY 10001', 'United States'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Sat: 9AM - 9PM'],
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@instantmotors.com', 'support@instantmotors.com'],
    },
  ];

  return (
    <div className="space-y-6">
      {infoItems.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          </div>
          <div className="space-y-1 text-gray-600">
            {item.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
        <h4 className="font-bold text-primary-900 mb-2">Emergency Support</h4>
        <p className="text-sm text-primary-700">
          For emergencies, call our 24/7 hotline:
        </p>
        <p className="text-2xl font-bold text-primary-600 mt-2">
          +1-800-555-0199
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;