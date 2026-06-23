import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaTruck, FaHeadset, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MdCarRental, MdSell } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden">
      {/* Background Car Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>🚗 500+ Vehicles Available</span>
            <span className="w-px h-4 bg-white/20" />
            <span>⭐ 4.8/5 Rating</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Rent. Buy. Sell.
            <span className="block text-primary-400 text-3xl md:text-4xl lg:text-5xl mt-2">
              Get Help Instantly.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
            Instant Motors is your all-in-one mobility platform for car rentals, used-car sales, 
            truck driver services, and 24/7 roadside assistance—anytime, anywhere.
          </p>
          
          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500/30 rounded-full flex items-center justify-center">
                  <MdCarRental className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Car Rentals</h4>
                  <p className="text-white/70 text-sm">Wide range of well-maintained cars</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/30 rounded-full flex items-center justify-center">
                  <MdSell className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Used Cars</h4>
                  <p className="text-white/70 text-sm">Certified pre-owned vehicles</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center">
                  <FaHeadset className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">24/7 Support</h4>
                  <p className="text-white/70 text-sm">Emergency help anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              to="/rentals" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-600/30 flex items-center gap-2"
            >
              <FaCar /> Rent a Car
            </Link>
            <Link 
              to="/roadside-assistance" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <FaHeadset /> Roadside Help
            </Link>
            <Link 
              to="/truck-driver" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
            >
              <FaTruck /> Truck Driver Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <FaClock className="text-primary-400 text-xl" />
              <div>
                <p className="text-white font-bold">24/7</p>
                <p className="text-white/60 text-xs">Always here for you</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-primary-400 text-xl" />
              <div>
                <p className="text-white font-bold">Certified</p>
                <p className="text-white/60 text-xs">Quality you can trust</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaHeadset className="text-primary-400 text-xl" />
              <div>
                <p className="text-white font-bold">Fast Response</p>
                <p className="text-white/60 text-xs">We reach you faster</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-primary-400 text-xl" />
              <div>
                <p className="text-white font-bold">10K+</p>
                <p className="text-white/60 text-xs">Happy Drivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;