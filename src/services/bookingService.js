import API from '../api/endpoints';

class BookingService {
  /**
   * Create a new booking
   * @param {Object} bookingData - Booking details
   * @returns {Promise<Object>} - Created booking
   */
  async createBooking(bookingData) {
    try {
      const response = await API.booking.createBooking(bookingData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Create booking error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to create booking',
      };
    }
  }

  /**
   * Get all bookings with filters
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - Bookings data
   */
  async getAllBookings(params = {}) {
    try {
      const response = await API.booking.getAllBookings(params);
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get bookings error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch bookings',
        data: [],
      };
    }
  }

  /**
   * Get booking by ID
   * @param {number|string} id - Booking ID
   * @returns {Promise<Object>} - Booking data
   */
  async getBookingById(id) {
    try {
      const response = await API.booking.getBookingById(id);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get booking error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Booking not found',
        data: null,
      };
    }
  }

  /**
   * Update booking
   * @param {number|string} id - Booking ID
   * @param {Object} bookingData - Updated booking data
   * @returns {Promise<Object>} - Updated booking
   */
  async updateBooking(id, bookingData) {
    try {
      const response = await API.booking.updateBooking(id, bookingData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Update booking error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to update booking',
      };
    }
  }

  /**
   * Cancel booking
   * @param {number|string} id - Booking ID
   * @returns {Promise<Object>} - Result
   */
  async cancelBooking(id) {
    try {
      await API.booking.cancelBooking(id);
      return { success: true };
    } catch (error) {
      console.error('Cancel booking error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to cancel booking',
      };
    }
  }

  /**
   * Confirm booking
   * @param {number|string} id - Booking ID
   * @returns {Promise<Object>} - Result
   */
  async confirmBooking(id) {
    try {
      await API.booking.confirmBooking(id);
      return { success: true };
    } catch (error) {
      console.error('Confirm booking error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to confirm booking',
      };
    }
  }

  /**
   * Get user bookings
   * @param {number|string} userId - User ID
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - User bookings
   */
  async getUserBookings(userId, params = {}) {
    try {
      const response = await API.booking.getUserBookings(userId, { params });
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get user bookings error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch user bookings',
        data: [],
      };
    }
  }

  /**
   * Check car availability
   * @param {number|string} carId - Car ID
   * @param {string} startDate - Start date
   * @param {string} endDate - End date
   * @returns {Promise<Object>} - Availability status
   */
  async checkAvailability(carId, startDate, endDate) {
    try {
      const response = await API.rental.checkAvailability(carId, startDate, endDate);
      return {
        success: true,
        available: response.data.available,
        data: response.data,
      };
    } catch (error) {
      console.error('Check availability error:', error);
      return {
        success: false,
        available: false,
        error: error.response?.data?.message || 'Failed to check availability',
      };
    }
  }

  /**
   * Calculate booking total
   * @param {Object} bookingData - Booking details
   * @returns {Promise<Object>} - Total calculation
   */
  async calculateTotal(bookingData) {
    try {
      const response = await API.booking.calculateTotal(bookingData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Calculate total error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to calculate total',
        data: null,
      };
    }
  }
}

export default new BookingService();