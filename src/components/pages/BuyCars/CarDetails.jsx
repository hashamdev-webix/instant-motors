import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_CARS } from '../../../constants/carData';
import { useCart } from '../../../context/CartContext';
import toast from 'react-hot-toast';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    if (car) {
      addToCart({
        id: car.id,
        name: car.name,
        price: car.price,
        image: car.image,
        type: car.type,
      });
      toast.success(`${car.name} added to cart!`);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    toast.success('Redirecting to checkout...');
  };

  const handleTestDrive = () => {
    toast.success('Test drive scheduled!');
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

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <Link to="/buy-cars" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
          ← Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
              <img
                src={car.image || 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600'}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-2xl font-bold text-primary-600">
                ${car.price?.toLocaleString() || 'N/A'}
              </span>
              <span className="text-sm text-gray-500">{car.year}</span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="font-medium">{car.rating || 4.5}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-semibold">{car.type || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transmission</p>
                <p className="font-semibold">{car.transmission || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fuel Type</p>
                <p className="font-semibold">{car.fuelType || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Seats</p>
                <p className="font-semibold">{car.seats || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mileage</p>
                <p className="font-semibold">{car.mileage?.toLocaleString() || 'N/A'} km</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Condition</p>
                <p className="font-semibold">{car.condition || 'Excellent'}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{car.description || 'No description available.'}</p>
            </div>

            {car.features && car.features.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={handleBuyNow}
                className="btn-primary"
              >
                Buy Now
              </button>
              <button 
                onClick={handleAddToCart}
                className="btn-secondary"
              >
                Add to Cart
              </button>
              <button 
                onClick={handleTestDrive}
                className="btn-secondary"
              >
                Test Drive
              </button>
              <Link to={`/book-now?car=${car.id}`} className="btn-accent inline-block py-3 px-6 rounded-lg text-center">
                Rent This Car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;