import api from './axios';
import { 
  AUTH_ENDPOINTS,
  CAR_ENDPOINTS,
  RENTAL_ENDPOINTS,
  BOOKING_ENDPOINTS,
  MEMBERSHIP_ENDPOINTS,
  ROADSIDE_ENDPOINTS,
  TRUCK_DRIVER_ENDPOINTS,
  CONTACT_ENDPOINTS,
  PAYMENT_ENDPOINTS,
  NOTIFICATION_ENDPOINTS,
} from '../constants/apiEndpoints';

// ==================== AUTH ENDPOINTS ====================
export const authAPI = {
  login: (email, password) => 
    api.post(AUTH_ENDPOINTS.LOGIN, { email, password }),
  
  register: (userData) => 
    api.post(AUTH_ENDPOINTS.REGISTER, userData),
  
  logout: () => 
    api.post(AUTH_ENDPOINTS.LOGOUT),
  
  refreshToken: (refreshToken) => 
    api.post(AUTH_ENDPOINTS.REFRESH_TOKEN, { refreshToken }),
  
  forgotPassword: (email) => 
    api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email }),
  
  resetPassword: (token, newPassword) => 
    api.post(AUTH_ENDPOINTS.RESET_PASSWORD, { token, newPassword }),
  
  verifyEmail: (token) => 
    api.post(AUTH_ENDPOINTS.VERIFY_EMAIL, { token }),
  
  getProfile: () => 
    api.get(AUTH_ENDPOINTS.PROFILE),
  
  updateProfile: (data) => 
    api.put(AUTH_ENDPOINTS.PROFILE, data),
  
  changePassword: (oldPassword, newPassword) => 
    api.put(`${AUTH_ENDPOINTS.PROFILE}/password`, { oldPassword, newPassword }),
};

// ==================== CAR ENDPOINTS ====================
export const carAPI = {
  getAllCars: (params) => 
    api.get(CAR_ENDPOINTS.GET_ALL_CARS, { params }),
  
  getCarById: (id) => 
    api.get(CAR_ENDPOINTS.GET_CAR_BY_ID.replace(':id', id)),
  
  createCar: (data) => 
    api.post(CAR_ENDPOINTS.CREATE_CAR, data),
  
  updateCar: (id, data) => 
    api.put(CAR_ENDPOINTS.UPDATE_CAR.replace(':id', id), data),
  
  deleteCar: (id) => 
    api.delete(CAR_ENDPOINTS.DELETE_CAR.replace(':id', id)),
  
  searchCars: (query) => 
    api.get(CAR_ENDPOINTS.SEARCH_CARS, { params: { q: query } }),
  
  filterCars: (filters) => 
    api.get(CAR_ENDPOINTS.FILTER_CARS, { params: filters }),
  
  getFeaturedCars: () => 
    api.get(CAR_ENDPOINTS.GET_FEATURED_CARS),
  
  getAvailableCars: () => 
    api.get(CAR_ENDPOINTS.GET_AVAILABLE_CARS),
  
  getCarPriceEstimate: (carId, days) => 
    api.get(`/cars/${carId}/price-estimate`, { params: { days } }),
};

// ==================== RENTAL ENDPOINTS ====================
export const rentalAPI = {
  getAllRentals: (params) => 
    api.get(RENTAL_ENDPOINTS.GET_ALL_RENTALS, { params }),
  
  getRentalById: (id) => 
    api.get(RENTAL_ENDPOINTS.GET_RENTAL_BY_ID.replace(':id', id)),
  
  createRental: (data) => 
    api.post(RENTAL_ENDPOINTS.CREATE_RENTAL, data),
  
  updateRental: (id, data) => 
    api.put(RENTAL_ENDPOINTS.UPDATE_RENTAL.replace(':id', id), data),
  
  cancelRental: (id) => 
    api.post(RENTAL_ENDPOINTS.CANCEL_RENTAL.replace(':id', id)),
  
  extendRental: (id, days) => 
    api.post(RENTAL_ENDPOINTS.EXTEND_RENTAL.replace(':id', id), { days }),
  
  getUserRentals: (userId) => 
    api.get(RENTAL_ENDPOINTS.GET_USER_RENTALS.replace(':userId', userId)),
  
  checkAvailability: (carId, startDate, endDate) => 
    api.get(RENTAL_ENDPOINTS.CHECK_AVAILABILITY, { 
      params: { carId, startDate, endDate } 
    }),
};

// ==================== BOOKING ENDPOINTS ====================
export const bookingAPI = {
  getAllBookings: (params) => 
    api.get(BOOKING_ENDPOINTS.GET_ALL_BOOKINGS, { params }),
  
  getBookingById: (id) => 
    api.get(BOOKING_ENDPOINTS.GET_BOOKING_BY_ID.replace(':id', id)),
  
  createBooking: (data) => 
    api.post(BOOKING_ENDPOINTS.CREATE_BOOKING, data),
  
  updateBooking: (id, data) => 
    api.put(BOOKING_ENDPOINTS.UPDATE_BOOKING.replace(':id', id), data),
  
  cancelBooking: (id) => 
    api.post(BOOKING_ENDPOINTS.CANCEL_BOOKING.replace(':id', id)),
  
  confirmBooking: (id) => 
    api.post(BOOKING_ENDPOINTS.CONFIRM_BOOKING.replace(':id', id)),
  
  getUserBookings: (userId) => 
    api.get(BOOKING_ENDPOINTS.GET_USER_BOOKINGS.replace(':userId', userId)),
};

// ==================== MEMBERSHIP ENDPOINTS ====================
export const membershipAPI = {
  getPlans: () => 
    api.get(MEMBERSHIP_ENDPOINTS.GET_PLANS),
  
  getMyMembership: () => 
    api.get(MEMBERSHIP_ENDPOINTS.GET_MY_MEMBERSHIP),
  
  purchaseMembership: (planId, paymentData) => 
    api.post(MEMBERSHIP_ENDPOINTS.PURCHASE_MEMBERSHIP, { planId, ...paymentData }),
  
  cancelMembership: () => 
    api.post(MEMBERSHIP_ENDPOINTS.CANCEL_MEMBERSHIP),
  
  getMembershipBenefits: () => 
    api.get(MEMBERSHIP_ENDPOINTS.GET_MEMBERSHIP_BENEFITS),
  
  getMembershipHistory: () => 
    api.get('/membership/history'),
};

// ==================== ROADSIDE ASSISTANCE ENDPOINTS ====================
export const roadsideAPI = {
  createRequest: (data) => 
    api.post(ROADSIDE_ENDPOINTS.CREATE_REQUEST, data),
  
  getRequests: (params) => 
    api.get(ROADSIDE_ENDPOINTS.GET_REQUESTS, { params }),
  
  getRequestById: (id) => 
    api.get(ROADSIDE_ENDPOINTS.GET_REQUEST_BY_ID.replace(':id', id)),
  
  updateRequestStatus: (id, status) => 
    api.put(ROADSIDE_ENDPOINTS.UPDATE_REQUEST_STATUS.replace(':id', id), { status }),
  
  getServiceAreas: () => 
    api.get(ROADSIDE_ENDPOINTS.GET_SERVICE_AREAS),
  
  getEmergencyContact: () => 
    api.get('/roadside/emergency-contact'),
};

// ==================== TRUCK DRIVER ENDPOINTS ====================
export const truckDriverAPI = {
  getDrivers: (params) => 
    api.get(TRUCK_DRIVER_ENDPOINTS.GET_DRIVERS, { params }),
  
  getDriverById: (id) => 
    api.get(TRUCK_DRIVER_ENDPOINTS.GET_DRIVER_BY_ID.replace(':id', id)),
  
  searchDrivers: (query) => 
    api.get(TRUCK_DRIVER_ENDPOINTS.SEARCH_DRIVERS, { params: { q: query } }),
  
  shareAvailability: (data) => 
    api.post(TRUCK_DRIVER_ENDPOINTS.SHARE_AVAILABILITY, data),
  
  getAvailability: (id) => 
    api.get(TRUCK_DRIVER_ENDPOINTS.GET_AVAILABILITY.replace(':id', id)),
  
  bookDriver: (data) => 
    api.post(TRUCK_DRIVER_ENDPOINTS.BOOK_DRIVER, data),
  
  getAvailableDrivers: (location, date, vehicleType) => 
    api.get('/truck-drivers/available', { 
      params: { location, date, vehicleType } 
    }),
};

// ==================== CONTACT ENDPOINTS ====================
export const contactAPI = {
  sendMessage: (data) => 
    api.post(CONTACT_ENDPOINTS.SEND_MESSAGE, data),
  
  getMessages: (params) => 
    api.get(CONTACT_ENDPOINTS.GET_MESSAGES, { params }),
  
  getMessageById: (id) => 
    api.get(CONTACT_ENDPOINTS.GET_MESSAGE_BY_ID.replace(':id', id)),
  
  replyToMessage: (id, reply) => 
    api.post(CONTACT_ENDPOINTS.REPLY_TO_MESSAGE.replace(':id', id), { reply }),
  
  markAsRead: (id) => 
    api.put(`/contact/messages/${id}/read`),
};

// ==================== PAYMENT ENDPOINTS ====================
export const paymentAPI = {
  createPayment: (data) => 
    api.post(PAYMENT_ENDPOINTS.CREATE_PAYMENT, data),
  
  verifyPayment: (paymentId) => 
    api.post(PAYMENT_ENDPOINTS.VERIFY_PAYMENT, { paymentId }),
  
  getPaymentStatus: (id) => 
    api.get(PAYMENT_ENDPOINTS.GET_PAYMENT_STATUS.replace(':id', id)),
  
  getPaymentHistory: (params) => 
    api.get(PAYMENT_ENDPOINTS.GET_PAYMENT_HISTORY, { params }),
  
  refundPayment: (id, reason) => 
    api.post(PAYMENT_ENDPOINTS.REFUND_PAYMENT.replace(':id', id), { reason }),
  
  getPaymentMethods: () => 
    api.get('/payments/methods'),
  
  addPaymentMethod: (data) => 
    api.post('/payments/methods', data),
  
  removePaymentMethod: (id) => 
    api.delete(`/payments/methods/${id}`),
};

// ==================== NOTIFICATION ENDPOINTS ====================
export const notificationAPI = {
  getNotifications: (params) => 
    api.get(NOTIFICATION_ENDPOINTS.GET_NOTIFICATIONS, { params }),
  
  getNotificationById: (id) => 
    api.get(NOTIFICATION_ENDPOINTS.GET_NOTIFICATION_BY_ID.replace(':id', id)),
  
  markAsRead: (id) => 
    api.put(NOTIFICATION_ENDPOINTS.MARK_AS_READ.replace(':id', id)),
  
  markAllRead: () => 
    api.put(NOTIFICATION_ENDPOINTS.MARK_ALL_READ),
  
  deleteNotification: (id) => 
    api.delete(NOTIFICATION_ENDPOINTS.DELETE_NOTIFICATION.replace(':id', id)),
  
  getUnreadCount: () => 
    api.get('/notifications/unread-count'),
  
  subscribeToPush: (subscription) => 
    api.post('/notifications/subscribe', subscription),
  
  unsubscribeFromPush: (subscription) => 
    api.delete('/notifications/unsubscribe', { data: subscription }),
};

// ==================== USER ENDPOINTS ====================
export const userAPI = {
  getUserById: (id) => 
    api.get(`/users/${id}`),
  
  updateUser: (id, data) => 
    api.put(`/users/${id}`, data),
  
  deleteUser: (id) => 
    api.delete(`/users/${id}`),
  
  getAllUsers: (params) => 
    api.get('/users', { params }),
  
  getUserPreferences: () => 
    api.get('/users/preferences'),
  
  updateUserPreferences: (data) => 
    api.put('/users/preferences', data),
  
  uploadAvatar: (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return api.post('/users/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  deleteAvatar: () => 
    api.delete('/users/avatar'),
  
  getUserActivity: (params) => 
    api.get('/users/activity', { params }),
};

// ==================== REVIEW ENDPOINTS ====================
export const reviewAPI = {
  getReviews: (params) => 
    api.get('/reviews', { params }),
  
  getReviewById: (id) => 
    api.get(`/reviews/${id}`),
  
  createReview: (data) => 
    api.post('/reviews', data),
  
  updateReview: (id, data) => 
    api.put(`/reviews/${id}`, data),
  
  deleteReview: (id) => 
    api.delete(`/reviews/${id}`),
  
  getCarReviews: (carId) => 
    api.get(`/reviews/car/${carId}`),
  
  getDriverReviews: (driverId) => 
    api.get(`/reviews/driver/${driverId}`),
  
  getRatingSummary: (targetId, targetType) => 
    api.get('/reviews/rating-summary', { params: { targetId, targetType } }),
};

// ==================== FAVORITE ENDPOINTS ====================
export const favoriteAPI = {
  getFavorites: () => 
    api.get('/favorites'),
  
  addFavorite: (carId) => 
    api.post('/favorites', { carId }),
  
  removeFavorite: (carId) => 
    api.delete(`/favorites/${carId}`),
  
  checkFavorite: (carId) => 
    api.get(`/favorites/check/${carId}`),
};

// ==================== ANALYTICS ENDPOINTS ====================
export const analyticsAPI = {
  trackEvent: (event, data) => 
    api.post('/analytics/track', { event, data }),
  
  getDashboardStats: () => 
    api.get('/analytics/dashboard'),
  
  getUserStats: (userId) => 
    api.get(`/analytics/users/${userId}`),
  
  getCarViews: (carId) => 
    api.get(`/analytics/cars/${carId}/views`),
  
  getSearchAnalytics: (params) => 
    api.get('/analytics/search', { params }),
};

// ==================== EXPORT ALL ====================
export const API = {
  auth: authAPI,
  car: carAPI,
  rental: rentalAPI,
  booking: bookingAPI,
  membership: membershipAPI,
  roadside: roadsideAPI,
  truckDriver: truckDriverAPI,
  contact: contactAPI,
  payment: paymentAPI,
  notification: notificationAPI,
  user: userAPI,
  review: reviewAPI,
  favorite: favoriteAPI,
  analytics: analyticsAPI,
};

export default API;