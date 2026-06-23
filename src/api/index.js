// Export all API modules
export { default as api, setAuthToken, setRefreshToken, clearTokens } from './axios';
export { default as API } from './endpoints';
export * from './endpoints';

// Export as named exports for convenience
export { 
  authAPI,
  carAPI,
  rentalAPI,
  bookingAPI,
  membershipAPI,
  roadsideAPI,
  truckDriverAPI,
  contactAPI,
  paymentAPI,
  notificationAPI,
  userAPI,
  reviewAPI,
  favoriteAPI,
  analyticsAPI,
} from './endpoints';