import React from 'react';
import { 
  FaShieldAlt, FaHeadset, FaClock, FaUsers,
  FaCar, FaTruck, FaPhoneAlt, FaMapMarkerAlt
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { 
      icon: FaHeadset, 
      title: '24/7 Support', 
      desc: 'Always here for you',
      bg: 'bg-blue-50',
      color: 'text-blue-600'
    },
    { 
      icon: FaShieldAlt, 
      title: 'Certified Vehicles', 
      desc: 'Quality you can trust',
      bg: 'bg-green-50',
      color: 'text-green-600'
    },
    { 
      icon: FaClock, 
      title: 'Fast Response', 
      desc: 'We reach you faster',
      bg: 'bg-orange-50',
      color: 'text-orange-600'
    },
    { 
      icon: FaUsers, 
      title: '10K+ Happy Drivers', 
      desc: 'Growing every day',
      bg: 'bg-purple-50',
      color: 'text-purple-600'
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your <span className="text-primary-600">Trusted Mobility</span> Partner
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide top-notch car services with the best prices and excellent customer support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
              <div className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`text-2xl ${feature.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;