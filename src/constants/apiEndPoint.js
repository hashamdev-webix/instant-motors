// src/constants/apiEndpoints.js

// API Base URLs - Using Vite's import.meta.env
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1';
export const API_URL = `${API_BASE_URL}/${API_VERSION}`;

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh-token',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
  PROFILE: '/auth/profile',
};

// Car Endpoints
export const CAR_ENDPOINTS = {
  GET_ALL_CARS: '/cars',
  GET_CAR_BY_ID: '/cars/:id',
  CREATE_CAR: '/cars',
  UPDATE_CAR: '/cars/:id',
  DELETE_CAR: '/cars/:id',
  SEARCH_CARS: '/cars/search',
  FILTER_CARS: '/cars/filter',
  GET_FEATURED_CARS: '/cars/featured',
  GET_AVAILABLE_CARS: '/cars/available',
};

// Rental Endpoints
export const RENTAL_ENDPOINTS = {
  GET_ALL_RENTALS: '/rentals',
  GET_RENTAL_BY_ID: '/rentals/:id',
  CREATE_RENTAL: '/rentals',
  UPDATE_RENTAL: '/rentals/:id',
  CANCEL_RENTAL: '/rentals/:id/cancel',
  EXTEND_RENTAL: '/rentals/:id/extend',
  GET_USER_RENTALS: '/rentals/user/:userId',
  CHECK_AVAILABILITY: '/rentals/availability',
};

// Booking Endpoints
export const BOOKING_ENDPOINTS = {
  GET_ALL_BOOKINGS: '/bookings',
  GET_BOOKING_BY_ID: '/bookings/:id',
  CREATE_BOOKING: '/bookings',
  UPDATE_BOOKING: '/bookings/:id',
  CANCEL_BOOKING: '/bookings/:id/cancel',
  CONFIRM_BOOKING: '/bookings/:id/confirm',
  GET_USER_BOOKINGS: '/bookings/user/:userId',
};

// Membership Endpoints
export const MEMBERSHIP_ENDPOINTS = {
  GET_PLANS: '/membership/plans',
  GET_MY_MEMBERSHIP: '/membership/my',
  PURCHASE_MEMBERSHIP: '/membership/purchase',
  CANCEL_MEMBERSHIP: '/membership/cancel',
  GET_MEMBERSHIP_BENEFITS: '/membership/benefits',
};

// Roadside Assistance Endpoints
export const ROADSIDE_ENDPOINTS = {
  CREATE_REQUEST: '/roadside/request',
  GET_REQUESTS: '/roadside/requests',
  GET_REQUEST_BY_ID: '/roadside/requests/:id',
  UPDATE_REQUEST_STATUS: '/roadside/requests/:id/status',
  GET_SERVICE_AREAS: '/roadside/service-areas',
};

// Truck Driver Endpoints
export const TRUCK_DRIVER_ENDPOINTS = {
  GET_DRIVERS: '/truck-drivers',
  GET_DRIVER_BY_ID: '/truck-drivers/:id',
  SEARCH_DRIVERS: '/truck-drivers/search',
  SHARE_AVAILABILITY: '/truck-drivers/availability',
  GET_AVAILABILITY: '/truck-drivers/availability/:id',
  BOOK_DRIVER: '/truck-drivers/book',
};

// Contact Endpoints
export const CONTACT_ENDPOINTS = {
  SEND_MESSAGE: '/contact/send',
  GET_MESSAGES: '/contact/messages',
  GET_MESSAGE_BY_ID: '/contact/messages/:id',
  REPLY_TO_MESSAGE: '/contact/messages/:id/reply',
};

// Payment Endpoints
export const PAYMENT_ENDPOINTS = {
  CREATE_PAYMENT: '/payments/create',
  VERIFY_PAYMENT: '/payments/verify',
  GET_PAYMENT_STATUS: '/payments/:id/status',
  GET_PAYMENT_HISTORY: '/payments/history',
  REFUND_PAYMENT: '/payments/:id/refund',
};

// Notification Endpoints
export const NOTIFICATION_ENDPOINTS = {
  GET_NOTIFICATIONS: '/notifications',
  GET_NOTIFICATION_BY_ID: '/notifications/:id',
  MARK_AS_READ: '/notifications/:id/read',
  MARK_ALL_READ: '/notifications/read-all',
  DELETE_NOTIFICATION: '/notifications/:id',
};