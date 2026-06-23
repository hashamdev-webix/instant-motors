import React from 'react';

const ServiceAreas = () => {
  const areas = [
    { city: 'New York', state: 'NY', available: true },
    { city: 'Los Angeles', state: 'CA', available: true },
    { city: 'Chicago', state: 'IL', available: true },
    { city: 'Houston', state: 'TX', available: true },
    { city: 'Phoenix', state: 'AZ', available: false },
    { city: 'Philadelphia', state: 'PA', available: true },
    { city: 'San Antonio', state: 'TX', available: true },
    { city: 'San Diego', state: 'CA', available: true },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Service Areas
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <p className="font-medium text-gray-900">{area.city}</p>
              <p className="text-sm text-gray-500">{area.state}</p>
            </div>
            <span className={`text-sm font-semibold ${
              area.available ? 'text-green-600' : 'text-red-600'
            }`}>
              {area.available ? 'Available' : 'Unavailable'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;