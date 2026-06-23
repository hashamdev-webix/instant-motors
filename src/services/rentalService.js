import API from '../api/endpoints';

class RentalService {
  /**
   * Create a new rental
   * @param {Object} rentalData - Rental details
   * @returns {Promise<Object>} - Created rental
   */
  async createRental(rentalData) {
    try {
      const response = await API.rental.createRental(rentalData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Create rental error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to create rental',
      };
    }
  }

  /**
   * Get all rentals with filters
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - Rentals data
   */
  async getAllRentals(params = {}) {
    try {
      const response = await API.rental.getAllRentals(params);
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get rentals error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch rentals',
        data: [],
      };
    }
  }

  /**
   * Get rental by ID
   * @param {number|string} id - Rental ID
   * @returns {Promise<Object>} - Rental data
   */
  async getRentalById(id) {
    try {
      const response = await API.rental.getRentalById(id);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get rental error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Rental not found',
        data: null,
      };
    }
  }

  /**
   * Update rental
   * @param {number|string} id - Rental ID
   * @param {Object} rentalData - Updated rental data
   * @returns {Promise<Object>} - Updated rental
   */
  async updateRental(id, rentalData) {
    try {
      const response = await API.rental.updateRental(id, rentalData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Update rental error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to update rental',
      };
    }
  }

  /**
   * Cancel rental
   * @param {number|string} id - Rental ID
   * @returns {Promise<Object>} - Result
   */
  async cancelRental(id) {
    try {
      await API.rental.cancelRental(id);
      return { success: true };
    } catch (error) {
      console.error('Cancel rental error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to cancel rental',
      };
    }
  }

  /**
   * Extend rental
   * @param {number|string} id - Rental ID
   * @param {number} days - Additional days
   * @returns {Promise<Object>} - Result
   */
  async extendRental(id, days) {
    try {
      await API.rental.extendRental(id, days);
      return { success: true };
    } catch (error) {
      console.error('Extend rental error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to extend rental',
      };
    }
  }

  /**
   * Get user rentals
   * @param {number|string} userId - User ID
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - User rentals
   */
  async getUserRentals(userId, params = {}) {
    try {
      const response = await API.rental.getUserRentals(userId, { params });
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get user rentals error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch user rentals',
        data: [],
      };
    }
  }

  /**
   * Check rental availability
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
}

export default new RentalService();