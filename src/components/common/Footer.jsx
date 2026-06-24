import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa';
import logo from '../../assets/logo.jpeg'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="" sizes="" srcset=""  className='rounded-2xl'/>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for car rentals, sales, and roadside assistance.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-500" />
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Rentals', path: '/rentals' },
                { name: 'Buy Cars', path: '/buy-cars' },
                { name: 'Sell Your Car', path: '/sell-car' },
                { name: 'Membership', path: '/membership' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 text-sm group"
                  >
                    <FaArrowRight className="text-primary-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-500" />
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Roadside Assistance', path: '/roadside-assistance' },
                { name: 'Truck Driver Services', path: '/truck-driver' },
                { name: 'Book Now', path: '/book-now' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 text-sm group"
                  >
                    <FaArrowRight className="text-primary-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary-500" />
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3 text-sm group">
                <FaMapMarkerAlt className="text-primary-400 mt-1 text-sm group-hover:scale-110 transition-transform" />
                <span>123 Main Street, City</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <FaPhoneAlt className="text-primary-400 text-sm group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <FaEnvelope className="text-primary-400 text-sm group-hover:scale-110 transition-transform" />
                <span>info@instantmotors.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <FaClock className="text-primary-400 text-sm group-hover:scale-110 transition-transform" />
                <span>Mon-Sat: 9AM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Instant Motors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;