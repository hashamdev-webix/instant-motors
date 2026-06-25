import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaUserSecret,
  FaDatabase,
  FaCookie,
  FaUserShield,
  FaLock,
  FaEye,
  FaUserCog,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaFileContract
} from 'react-icons/fa';
import { MdSecurity, MdPrivacyTip, MdDataUsage } from 'react-icons/md';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FaUserSecret className="text-primary-500" />,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, such as your name, email, phone number, and payment information. We also automatically collect usage data and device information.'
    },
    {
      icon: <FaDatabase className="text-primary-500" />,
      title: 'How We Use Your Information',
      content: 'We use your information to provide, maintain, and improve our services, process transactions, send updates, and personalize your experience.'
    },
    {
      icon: <FaCookie className="text-primary-500" />,
      title: 'Cookies and Tracking',
      content: 'We use cookies to enhance your experience, analyze usage, and deliver relevant content. You can manage cookie preferences in your browser settings.'
    },
    {
      icon: <FaUserShield className="text-primary-500" />,
      title: 'Data Security',
      content: 'We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure.'
    },
    {
      icon: <FaEye className="text-primary-500" />,
      title: 'Data Sharing',
      content: 'We do not sell your personal data. We may share data with service providers to operate our services, or as required by law.'
    },
    {
      icon: <FaUserCog className="text-primary-500" />,
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your data. Contact us to exercise these rights.'
    },
    {
      icon: <FaGlobe className="text-primary-500" />,
      title: 'International Transfers',
      content: 'Your data may be transferred to and processed in countries outside your jurisdiction.'
    },
    {
      icon: <FaFileContract className="text-primary-500" />,
      title: 'Policy Updates',
      content: 'We may update this policy periodically. We will notify you of significant changes.'
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
            <MdPrivacyTip className="text-sm" />
            Privacy
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy <span className="text-primary-600">Policy</span>
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
                <MdPrivacyTip className="text-primary-500" />
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
                  to="/terms"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  View Terms of Service <FaArrowRight />
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
                      We take your privacy seriously. Read our full policy to understand how we protect your data.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      If you have any questions, please contact our privacy team.
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
                <MdPrivacyTip className="text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Your Privacy Matters</h3>
            <p className="text-white/80 mt-2 text-sm">
              We're committed to protecting your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="mailto:privacy@instantmotors.com"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaEnvelope /> Privacy Team
              </a>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaPhoneAlt /> Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
