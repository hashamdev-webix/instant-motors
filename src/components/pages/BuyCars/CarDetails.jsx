import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaCar, 
  FaCog, 
  FaTachometerAlt, 
  FaGasPump, 
  FaUsers,
  FaArrowLeft,
  FaHeart,
  FaShare,
  FaPrint,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
import { MOCK_CARS } from '../../../constants/carData';
import toast from 'react-hot-toast';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchCar = () => {
      try {
        const foundCar = MOCK_CARS.find(c => c.id === parseInt(id));
        if (foundCar) {
          setCar(foundCar);
        } else {
          navigate('/buy-cars');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car:', error);
        setLoading(false);
      }
    };
    
    fetchCar();
  }, [id, navigate]);

  // ✅ FIXED: Buy Now with data passing
  const handleBuyNow = () => {
    if (car) {
      // Prepare cart item
      const cartItem = {
        id: car.id,
        name: car.name,
        price: car.price,
        image: car.image,
        type: car.type,
        year: car.year,
        mileage: car.mileage,
        transmission: car.transmission,
        fuelType: car.fuelType,
        seats: car.seats,
        quantity: 1
      };
      
      // Save to localStorage
      const existingCart = JSON.parse(localStorage.getItem('checkoutCart') || '[]');
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem('checkoutCart', JSON.stringify(updatedCart));
      
      toast.success(`${car.name} added to cart!`);
      
      // Navigate to checkout with data
      navigate('/checkout', { 
        state: { cartItems: updatedCart } 
      });
    }
  };

  const handleTestDrive = () => {
    toast.success('Test drive scheduled! We\'ll contact you shortly.');
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast.success(isWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  const handleShare = () => {
    toast.success('Link copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="section-padding pt-24">
        <div className="container-custom">
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="section-padding pt-24">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900">Car not found</h2>
          <Link to="/buy-cars" className="btn-primary mt-4 inline-block">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  const images = car.images || [car.image];

  return (
    <div className="section-padding pt-24 bg-gray-50">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          to="/buy-cars" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
        >
          <FaArrowLeft className="text-sm" />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={images[selectedImage] || car.image || 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600'}
                alt={car.name}
                className="w-full h-80 md:h-96 object-cover"
              />
              {/* Wishlist Button */}
              <button
                onClick={handleWishlist}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isWishlist 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <FaHeart className={isWishlist ? 'fill-current' : ''} />
              </button>
              
              {/* Share & Print */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={handleShare}
                  className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-600"
                >
                  <FaShare className="text-sm" />
                </button>
                <button
                  onClick={handlePrint}
                  className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-600"
                >
                  <FaPrint className="text-sm" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-primary-500 shadow-md' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${car.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title & Price */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{car.name}</h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm text-gray-500">{car.year}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-gray-500">{car.type}</span>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="font-medium text-sm">{car.rating || 4.5}</span>
                    <span className="text-gray-400 text-sm">(24 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">
                  ${car.price?.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">+ taxes & fees</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <FaCog className="text-primary-500 text-lg mx-auto mb-1" />
                <p className="text-xs text-gray-500">Transmission</p>
                <p className="font-semibold text-sm">{car.transmission || 'N/A'}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <FaGasPump className="text-primary-500 text-lg mx-auto mb-1" />
                <p className="text-xs text-gray-500">Fuel</p>
                <p className="font-semibold text-sm">{car.fuelType || 'N/A'}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <FaUsers className="text-primary-500 text-lg mx-auto mb-1" />
                <p className="text-xs text-gray-500">Seats</p>
                <p className="font-semibold text-sm">{car.seats || 'N/A'}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <FaTachometerAlt className="text-primary-500 text-lg mx-auto mb-1" />
                <p className="text-xs text-gray-500">Mileage</p>
                <p className="font-semibold text-sm">{car.mileage?.toLocaleString() || 'N/A'} km</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {car.description || 'No description available.'}
              </p>
            </div>

            {/* Features */}
            {car.features && car.features.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm"
                    >
                      <FaCheckCircle className="text-primary-500 text-xs" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Condition & Availability */}
            <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Condition</p>
                <p className="font-semibold text-sm text-green-600 flex items-center gap-1">
                  <FaShieldAlt className="text-sm" />
                  {car.condition || 'Excellent'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Availability</p>
                <p className={`font-semibold text-sm flex items-center gap-1 ${
                  car.available !== false ? 'text-green-600' : 'text-red-600'
                }`}>
                  <FaClock className="text-sm" />
                  {car.available !== false ? 'Available Now' : 'Out of Stock'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* ✅ FIXED: Buy Now button with proper data */}
              <button 
                onClick={handleBuyNow}
                className="flex-1 min-w-[140px] bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <FaCar />
                Buy Now
              </button>
              <Link 
                to={`/book-now?car=${car.id}`} 
                className="flex-1 min-w-[140px] bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <FaCalendarAlt />
                Rent This Car
              </Link>
              <button 
                onClick={handleTestDrive}
                className="flex-1 min-w-[140px] bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Test Drive
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 p-4 bg-primary-50 rounded-xl flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaEnvelope className="text-primary-500" />
                <span>Have questions? Contact our sales team</span>
              </div>
              <a 
                href="mailto:sales@instantmotors.com"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
              >
                sales@instantmotors.com <FaArrowLeft className="rotate-180 text-xs" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;