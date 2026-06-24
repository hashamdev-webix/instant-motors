import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MOCK_CARS } from '../../../constants/carData';

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setCars(MOCK_CARS.slice(0, 8));
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 320;
      const newPosition = scrollPosition + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Browse Cars</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-primary-600">Top Picks</span>
            </h2>
          </div>
          <Link to="/buy-cars" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2">
            View All <FaArrowRight />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent" />
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <FaChevronRight className="text-gray-600" />
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="min-w-[280px] md:min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex-shrink-0 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleWishlist(car.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
                    >
                      <FaHeart className={wishlist[car.id] ? 'text-red-500' : 'text-gray-400'} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white font-bold text-lg">${car.price}</span>
                      <span className="text-white/80 text-sm">/day</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{car.name}</h3>
                      <div className="flex items-center gap-1 bg-primary-50 px-2 py-1 rounded-full">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm font-medium">{car.rating || 4.5}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{car.type} • {car.year}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{car.mileage.toLocaleString()} km</span>
                      <Link
                        to={`/buy-cars/${car.id}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1"
                      >
                        View Details <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default FeaturedCars;