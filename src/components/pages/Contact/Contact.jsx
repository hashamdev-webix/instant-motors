import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
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
            <FaHeadset className="text-sm md:text-base" />
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-primary-600">Us</span>
          </h1>
          <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Have questions or need assistance? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <ContactInfo />
          </motion.div>
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 md:mt-12 lg:mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaHeadset className="text-2xl md:text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Need Immediate Assistance?
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">
              Our team is available 24/7 to help you with any emergency.
            </p>
            <a 
              href="tel:+18005550199"
              className="inline-flex items-center gap-2 mt-4 md:mt-6 bg-white text-red-600 hover:bg-gray-100 font-bold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <FaPhoneAlt className="text-sm sm:text-base" />
              Call Now: +1-800-555-0199
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;