// App Configuration Constants

export const APP_CONFIG = {
  APP_NAME: 'Instant Motors',
  APP_DESCRIPTION: 'Your trusted partner for car rentals, sales, and roadside assistance',
  APP_VERSION: '1.0.0',
  COMPANY_NAME: 'Instant Motors Inc.',
  COMPANY_EMAIL: 'info@instantmotors.com',
  COMPANY_PHONE: '+1 (555) 123-4567',
  COMPANY_ADDRESS: '123 Main Street, New York, NY 10001',
  SUPPORT_PHONE: '+1-800-555-0199',
  SUPPORT_EMAIL: 'support@instantmotors.com',
  SOCIAL_MEDIA: {
    facebook: 'https://facebook.com/instantmotors',
    twitter: 'https://twitter.com/instantmotors',
    instagram: 'https://instagram.com/instantmotors',
    linkedin: 'https://linkedin.com/company/instantmotors',
    youtube: 'https://youtube.com/instantmotors',
  },
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};

export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
};

export const FILE_UPLOAD = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ACCEPTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
  MAX_IMAGES: 5,
  ACCEPTED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
};

export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  DISPLAY_TIME: 'MMM DD, YYYY HH:mm',
  API: 'YYYY-MM-DD',
  API_TIME: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  INPUT: 'YYYY-MM-DD',
  TIME: 'HH:mm',
};

export const CURRENCY = {
  CODE: 'USD',
  SYMBOL: '$',
  LOCALE: 'en-US',
  MIN_FRACTION_DIGITS: 0,
  MAX_FRACTION_DIGITS: 2,
};

export const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-10000', label: '$0 - $10,000' },
  { value: '10000-20000', label: '$10,000 - $20,000' },
  { value: '20000-30000', label: '$20,000 - $30,000' },
  { value: '30000-50000', label: '$30,000 - $50,000' },
  { value: '50000-100000', label: '$50,000 - $100,000' },
  { value: '100000+', label: '$100,000+' },
];

export const PRICE_PER_DAY_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-25', label: '$0 - $25/day' },
  { value: '25-50', label: '$25 - $50/day' },
  { value: '50-75', label: '$50 - $75/day' },
  { value: '75-100', label: '$75 - $100/day' },
  { value: '100-150', label: '$100 - $150/day' },
  { value: '150+', label: '$150+/day' },
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    period: 'month',
    features: [
      '10% off on rentals',
      'Basic roadside assistance',
      'Email support',
      'Priority booking',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    period: 'month',
    features: [
      '20% off on rentals',
      'Premium roadside assistance',
      'Priority support 24/7',
      'Free cancellation',
      'Free GPS rental',
      'Members-only events',
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 29.99,
    period: 'month',
    features: [
      '30% off on rentals',
      'Premium roadside assistance',
      'Dedicated account manager',
      'Free cancellation',
      'Free GPS and child seat',
      'Free upgrades',
      'Concierge service',
      'Access to luxury fleet',
    ],
    popular: false,
  },
];

export const BOOKING_EXTRAS = [
  { id: 'gps', label: 'GPS Navigation', price: 10, icon: '🗺️' },
  { id: 'insurance', label: 'Full Insurance Coverage', price: 25, icon: '🛡️' },
  { id: 'childSeat', label: 'Child Seat', price: 15, icon: '👶' },
  { id: 'additionalDriver', label: 'Additional Driver', price: 20, icon: '👤' },
  { id: 'winterTires', label: 'Winter Tires', price: 30, icon: '❄️' },
  { id: 'roofRack', label: 'Roof Rack', price: 18, icon: '🎒' },
];

export const SERVICE_AREAS = [
  { city: 'New York', state: 'NY', available: true, coordinates: { lat: 40.7128, lng: -74.0060 } },
  { city: 'Los Angeles', state: 'CA', available: true, coordinates: { lat: 34.0522, lng: -118.2437 } },
  { city: 'Chicago', state: 'IL', available: true, coordinates: { lat: 41.8781, lng: -87.6298 } },
  { city: 'Houston', state: 'TX', available: true, coordinates: { lat: 29.7604, lng: -95.3698 } },
  { city: 'Phoenix', state: 'AZ', available: false, coordinates: { lat: 33.4484, lng: -112.0740 } },
  { city: 'Philadelphia', state: 'PA', available: true, coordinates: { lat: 39.9526, lng: -75.1652 } },
  { city: 'San Antonio', state: 'TX', available: true, coordinates: { lat: 29.4241, lng: -98.4936 } },
  { city: 'San Diego', state: 'CA', available: true, coordinates: { lat: 32.7157, lng: -117.1611 } },
  { city: 'Dallas', state: 'TX', available: true, coordinates: { lat: 32.7767, lng: -96.7970 } },
  { city: 'San Jose', state: 'CA', available: false, coordinates: { lat: 37.3382, lng: -121.8863 } },
];

export const FAQ_DATA = [
  {
    id: 1,
    category: 'General',
    question: 'How do I book a car?',
    answer: 'You can book a car by visiting our "Book Now" page, selecting your preferred car, filling in the booking details, and confirming your reservation. It\'s quick and easy!',
  },
  {
    id: 2,
    category: 'General',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. All payments are processed securely.',
  },
  {
    id: 3,
    category: 'Rentals',
    question: 'What is the minimum age to rent a car?',
    answer: 'The minimum age to rent a car is 21 years. Drivers under 25 may be subject to a young driver surcharge.',
  },
  {
    id: 4,
    category: 'Rentals',
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking up to 24 hours before the pickup time for a full refund. Cancellations within 24 hours may incur a fee.',
  },
  {
    id: 5,
    category: 'Membership',
    question: 'How does the membership work?',
    answer: 'Our membership program offers tiered plans with increasing benefits. Choose a plan that suits your needs and enjoy exclusive perks, discounts, and priority services.',
  },
  {
    id: 6,
    category: 'Membership',
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes, you can cancel your membership at any time. Your benefits will remain active until the end of your current billing cycle.',
  },
  {
    id: 7,
    category: 'Roadside Assistance',
    question: 'What does roadside assistance cover?',
    answer: 'Our roadside assistance covers towing, battery jump starts, tire changes, fuel delivery, and lockout assistance. Coverage may vary by membership level.',
  },
  {
    id: 8,
    category: 'Roadside Assistance',
    question: 'How long does it take for help to arrive?',
    answer: 'Our average response time is 30-45 minutes, depending on your location and traffic conditions. We strive to provide the fastest possible service.',
  },
];

export const VEHICLE_TYPES = {
  TRUCK: 'Truck',
  FLATBED: 'Flatbed',
  REFRIGERATED: 'Refrigerated',
  TANKER: 'Tanker',
  DRY_VAN: 'Dry Van',
  OTHER: 'Other',
};

export const DRIVER_AVAILABILITY = {
  IMMEDIATE: 'Immediate',
  WITHIN_24_HOURS: 'Within 24 hours',
  WITHIN_48_HOURS: 'Within 48 hours',
  FLEXIBLE: 'Flexible',
};

export const ROADSIDE_ISSUES = {
  FLAT_TIRE: 'Flat Tire',
  BATTERY_ISSUE: 'Battery Issue',
  OUT_OF_FUEL: 'Out of Fuel',
  ENGINE_PROBLEMS: 'Engine Problems',
  ACCIDENT: 'Accident',
  LOCKOUT: 'Lockout',
  OTHER: 'Other',
};

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  EXPIRED: 'expired',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  PARTIALLY_REFUNDED: 'partially_refunded',
};

export const USER_ROLES = {
  CUSTOMER: 'customer',
  DRIVER: 'driver',
  ADMIN: 'admin',
  MANAGER: 'manager',
};

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: 'Amazing service! The car was in perfect condition and the booking process was seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'First-time Renter',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: 'I rented a car for my road trip and it was the best decision. Highly recommend Instant Motors!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Johnson',
    role: 'Car Enthusiast',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    text: 'The buying process was straightforward. Found my dream car within days of searching.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: 'Instant Motors makes business travel so much easier. Reliable cars, great service, and fair prices.',
    rating: 4.5,
  },
];

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_MISMATCH: 'Passwords do not match',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  INVALID_DATE: 'Please enter a valid date',
  DATE_IN_PAST: 'Date cannot be in the past',
  DATE_RANGE_INVALID: 'Return date must be after pickup date',
  FILE_TOO_LARGE: 'File size exceeds the limit',
  INVALID_FILE_TYPE: 'File type is not supported',
  MAX_IMAGES_EXCEEDED: 'Maximum 5 images allowed',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Something went wrong. Please try again later.',
};