import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Instant</span>
              <span className="text-white">Motors</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for car rentals, sales, and roadside assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/rentals" className="text-gray-400 hover:text-white transition-colors">Rentals</Link></li>
              <li><Link to="/buy-cars" className="text-gray-400 hover:text-white transition-colors">Buy Cars</Link></li>
              <li><Link to="/sell-car" className="text-gray-400 hover:text-white transition-colors">Sell Your Car</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/roadside-assistance" className="text-gray-400 hover:text-white transition-colors">Roadside Assistance</Link></li>
              <li><Link to="/truck-driver" className="text-gray-400 hover:text-white transition-colors">Truck Driver Services</Link></li>
              <li><Link to="/book-now" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Main Street, City</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@instantmotors.com</li>
              <li>🕐 Mon-Sat: 9AM - 9PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Instant Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;