import React, { useState } from 'react';
import DriverCard from './DriverCard';
import Button from '../../common/Button';
import toast from 'react-hot-toast';

const DriverSearch = ({ onFindDriver }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [drivers] = useState([
    {
      id: 1,
      name: 'John Smith',
      rating: 4.8,
      experience: '5 years',
      location: 'New York',
      vehicle: 'Freightliner Cascadia',
      availability: 'Available',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@example.com',
      description: 'Experienced long-haul driver with 5 years of experience.',
    },
    {
      id: 2,
      name: 'Michael Johnson',
      rating: 4.9,
      experience: '8 years',
      location: 'Los Angeles',
      vehicle: 'Kenworth T680',
      availability: 'Booked',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      phone: '+1 (555) 234-5678',
      email: 'michael.j@example.com',
      description: 'Professional driver with 8 years of experience.',
    },
    {
      id: 3,
      name: 'Robert Wilson',
      rating: 4.7,
      experience: '3 years',
      location: 'Chicago',
      vehicle: 'Volvo VNL',
      availability: 'Available',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      phone: '+1 (555) 345-6789',
      email: 'robert.w@example.com',
      description: 'Reliable driver with 3 years of experience.',
    },
  ]);

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          driver.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = driver.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const handleContact = (driver) => {
    toast.success(`Contacting ${driver.name}...`);
  };

  const handleBook = (driver) => {
    toast.success(`Booking ${driver.name}...`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Drivers
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Name or vehicle type"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or state"
              className="input-field"
            />
          </div>

          <div className="flex items-end">
            <Button onClick={onFindDriver} className="w-full">
              Find Driver →
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDrivers.length === 0 ? (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500 text-lg">No drivers found matching your criteria</p>
          </div>
        ) : (
          filteredDrivers.map((driver) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              onContact={handleContact}
              onBook={handleBook}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DriverSearch;