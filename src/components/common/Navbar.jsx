import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo-removebg-preview.png";
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTowingOpen, setIsTowingOpen] = useState(false);
  const [isMobileTowingOpen, setIsMobileTowingOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  let hoverTimeout = useRef(null);

  // Check if user is logged in
  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };

  // Handle Book Now click
  const handleBookNowClick = (e) => {
    if (!isAuthenticated()) {
      e.preventDefault();
      toast.error('Please login to continue');
      navigate('/auth/login');
      return;
    }
    // If logged in, navigate to book-now
    navigate('/book-now');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsTowingOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsTowingOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Buy Cars', path: '/buy-cars' },
    { name: 'Sell Car', path: '/sell-car' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
    { name: 'Truck Driver', path: '/truck-driver' },
  ];

  const towingServices = [
    { name: 'Emergency Towing', path: '/towing/emergency' },
    { name: 'Heavy Duty Towing', path: '/towing/heavy-duty' },
    { name: 'Light & Medium Duty', path: '/towing/light-medium' },
    { name: 'Flatbed Towing', path: '/towing/flatbed' },
    { name: 'Long Distance Towing', path: '/towing/long-distance' },
    { name: 'Motorcycle Towing', path: '/towing/motorcycle' },
    { name: 'Vehicle Storage', path: '/towing/storage' },
    { name: 'Impound Towing', path: '/towing/impound' },
    { name: 'Service Areas', path: '/towing/service-areas' },
  ];

  const isTowingActive = towingServices.some(service => location.pathname === service.path);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Instant Motors" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Towing Dropdown - Hover */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    isTowingActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Towing
                  <svg 
                    className={`w-3 h-3 transition-transform duration-200 ${isTowingOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isTowingOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {towingServices.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`block px-4 py-2.5 text-sm transition-colors duration-200 ${
                              isActive(service.path)
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                            }`}
                          >
                            {service.name}
                            {isActive(service.path) && (
                              <span className="ml-2 text-primary-400">→</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Book Now - Right */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Book Now Button with Login Check */}
              <button
                onClick={handleBookNowClick}
                className={`hidden lg:inline-block px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 ${
                  isActive('/book-now') ? 'ring-2 ring-primary-300 ring-offset-2' : ''
                }`}
              >
                Book Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-2 space-y-0.5 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Mobile Towing Dropdown */}
                  <div className="border-t border-gray-100 pt-1 mt-1">
                    <button
                      onClick={() => setIsMobileTowingOpen(!isMobileTowingOpen)}
                      className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                        isTowingActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>Towing Services</span>
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${isMobileTowingOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isMobileTowingOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 space-y-0.5 border-l-2 border-primary-200 pl-2"
                        >
                          {towingServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileTowingOpen(false);
                              }}
                              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                isActive(service.path)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Book Now with Login Check */}
                  <button
                    onClick={handleBookNowClick}
                    className={`block w-full text-center px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 bg-primary-600 text-white hover:bg-primary-700 ${
                      isActive('/book-now') ? 'ring-2 ring-primary-300 ring-offset-2' : ''
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;