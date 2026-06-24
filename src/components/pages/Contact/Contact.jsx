import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact <span className="text-primary-600">Us</span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;