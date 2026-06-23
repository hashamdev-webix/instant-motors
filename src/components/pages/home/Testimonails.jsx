import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      text: 'Amazing service! The car was in perfect condition and the booking process was seamless.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'First-time Renter',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      text: 'I rented a car for my road trip and it was the best decision. Highly recommend Instant Motors!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Car Enthusiast',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      text: 'The buying process was straightforward. Found my dream car within days of searching.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-primary-200 text-2xl absolute -top-1 -left-1" />
                <p className="text-gray-600 text-sm pl-6">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;