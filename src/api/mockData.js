// Mock data for development when API is not available
import { MOCK_CARS } from '../constants/carData';

export const mockAPI = {
  // Mock login
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password123') {
          resolve({
            data: {
              token: 'mock-token-12345',
              user: {
                id: 1,
                name: 'Test User',
                email: 'test@example.com',
                role: 'customer',
              },
            },
          });
        } else {
          reject({
            response: {
              status: 401,
              data: {
                message: 'Invalid credentials',
              },
            },
          });
        }
      }, 1000);
    });
  },

  // Mock get cars
  getCars: (params) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let cars = [...MOCK_CARS];
        
        // Apply filters
        if (params?.type) {
          cars = cars.filter(c => c.type === params.type);
        }
        if (params?.minPrice) {
          cars = cars.filter(c => c.price >= params.minPrice);
        }
        if (params?.maxPrice) {
          cars = cars.filter(c => c.price <= params.maxPrice);
        }
        
        resolve({
          data: cars,
          total: cars.length,
          page: 1,
          totalPages: 1,
        });
      }, 500);
    });
  },

  // Mock get car by id
  getCarById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const car = MOCK_CARS.find(c => c.id === parseInt(id));
        if (car) {
          resolve({ data: car });
        } else {
          reject({
            response: {
              status: 404,
              data: { message: 'Car not found' },
            },
          });
        }
      }, 300);
    });
  },

  // Mock create booking
  createBooking: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Date.now(),
            ...data,
            status: 'confirmed',
            createdAt: new Date().toISOString(),
          },
        });
      }, 800);
    });
  },

  // Mock get featured cars
  getFeaturedCars: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: MOCK_CARS.slice(0, 3),
        });
      }, 300);
    });
  },

  // Mock roadside assistance request
  createRoadsideRequest: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Date.now(),
            ...data,
            status: 'pending',
            eta: '30-45 minutes',
            createdAt: new Date().toISOString(),
          },
        });
      }, 1000);
    });
  },

  // Mock truck driver search
  searchDrivers: (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const drivers = [
          {
            id: 1,
            name: 'John Smith',
            rating: 4.8,
            experience: '5 years',
            location: 'New York',
            vehicle: 'Freightliner Cascadia',
            availability: 'Available',
            price: '$800/day',
          },
          {
            id: 2,
            name: 'Michael Johnson',
            rating: 4.9,
            experience: '8 years',
            location: 'Los Angeles',
            vehicle: 'Kenworth T680',
            availability: 'Booked',
            price: '$950/day',
          },
        ];
        
        const filtered = drivers.filter(d => 
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.location.toLowerCase().includes(query.toLowerCase())
        );
        
        resolve({
          data: filtered,
        });
      }, 500);
    });
  },

  // Mock share driver availability
  shareAvailability: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Date.now(),
            ...data,
            status: 'active',
            createdAt: new Date().toISOString(),
          },
        });
      }, 800);
    });
  },

  // Mock contact form submission
  sendContactMessage: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Date.now(),
            ...data,
            status: 'sent',
            createdAt: new Date().toISOString(),
          },
        });
      }, 600);
    });
  },

  // Mock membership purchase
  purchaseMembership: (planId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: Date.now(),
            planId,
            status: 'active',
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          },
        });
      }, 1000);
    });
  },
};

export default mockAPI;