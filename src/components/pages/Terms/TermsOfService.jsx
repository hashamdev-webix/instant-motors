import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaFileContract, 
  FaGavel,
  FaUserShield,
  FaLock,
  FaCreditCard,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight,
  FaCar,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { MdSecurity, MdVerified, MdPayment } from 'react-icons/md';

const TermsOfService = () => {
  const sections = [
    {
      icon: <FaFileContract className="text-primary-500" />,
      title: 'Acceptance of Terms',
      content: 'By using Instant Motors services, you agree to these terms. If you do not agree, please do not use our services.'
    },
    {
      icon: <FaUserShield className="text-primary-500" />,
      title: 'User Accounts',
      content: 'You must create an account to use our services. You are responsible for maintaining the security of your account and password.'
    },
    {
      icon: <FaCar className="text-primary-500" />,
      title: 'Services',
      content: 'Instant Motors provides car rental, car sales, roadside assistance, and truck driver services. All services are subject to availability.'
    },
    {
      icon: <FaCreditCard className="text-primary-500" />,
      title: 'Payments',
      content: 'All payments are processed securely. Prices are subject to change. Cancellations may be subject to fees.'
    },
    {
      icon: <FaHandshake className="text-primary-500" />,
      title: 'User Responsibilities',
      content: 'Users must provide accurate information. Users are responsible for their actions while using our services.'
    },
    {
      icon: <FaLock className="text-primary-500" />,
      title: 'Privacy',
      content: 'Your privacy is important to us. Please review our Privacy Policy for information on how we handle your data.'
    },
    {
      icon: <FaGavel className="text-primary-500" />,
      title: 'Governing Law',
      content: 'These terms are governed by the laws of the jurisdiction where Instant Motors operates.'
    },
    {
      icon: <FaShieldAlt className="text-primary-500" />,
      title: 'Contact Us',
      content: 'If you have questions, please contact us at info@instantmotors.com'
    }
  ];

  return (
    <div className="section-padding pt-24 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <FaFileContract className="text-sm" />
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms of <span className="text-primary-600">Service</span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm">
            Last Updated: June 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-primary-500" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-primary-50"
                    >
                      <span className="text-primary-500">{section.icon}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to="/privacy"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  View Privacy Policy <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="prose prose-blue max-w-none">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    id={`section-${index}`}
                    className="mb-8 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed ml-14">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Acceptance Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                  <FaCheckCircle className="text-primary-500 text-xl mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 font-medium">
                      By using Instant Motors, you agree to these Terms of Service.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      If you have any questions, please contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 md:p-8 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Have Questions?</h3>
            <p className="text-white/80 mt-2 text-sm">
              Our team is here to help you understand our terms and policies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="tel:+18005550199"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaPhoneAlt /> Call Us
              </a>
              <a
                href="mailto:info@instantmotors.com"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaEnvelope /> Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;