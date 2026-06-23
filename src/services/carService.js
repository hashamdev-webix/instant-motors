import API from '../api/endpoints';

class CarService {
  /**
   * Get all cars with filters
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - Cars data
   */
  async getAllCars(params = {}) {
    try {
      const response = await API.car.getAllCars(params);
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get cars error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch cars',
        data: [],
      };
    }
  }

  /**
   * Get car by ID
   * @param {number|string} id - Car ID
   * @returns {Promise<Object>} - Car data
   */
  async getCarById(id) {
    try {
      const response = await API.car.getCarById(id);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get car error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Car not found',
        data: null,
      };
    }
  }

  /**
   * Create new car (admin only)
   * @param {Object} carData - Car data
   * @returns {Promise<Object>} - Created car
   */
  async createCar(carData) {
    try {
      const response = await API.car.createCar(carData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Create car error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to create car',
      };
    }
  }

  /**
   * Update car (admin only)
   * @param {number|string} id - Car ID
   * @param {Object} carData - Updated car data
   * @returns {Promise<Object>} - Updated car
   */
  async updateCar(id, carData) {
    try {
      const response = await API.car.updateCar(id, carData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Update car error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to update car',
      };
    }
  }

  /**
   * Delete car (admin only)
   * @param {number|string} id - Car ID
   * @returns {Promise<Object>} - Result
   */
  async deleteCar(id) {
    try {
      await API.car.deleteCar(id);
      return { success: true };
    } catch (error) {
      console.error('Delete car error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to delete car',
      };
    }
  }

  /**
   * Search cars by query
   * @param {string} query - Search query
   * @returns {Promise<Object>} - Search results
   */
  async searchCars(query) {
    try {
      const response = await API.car.searchCars(query);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Search cars error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Search failed',
        data: [],
      };
    }
  }

  /**
   * Filter cars with multiple criteria
   * @param {Object} filters - Filter criteria
   * @returns {Promise<Object>} - Filtered cars
   */
  async filterCars(filters) {
    try {
      const response = await API.car.filterCars(filters);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Filter cars error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Filter failed',
        data: [],
      };
    }
  }

  /**
   * Get featured cars
   * @param {number} limit - Number of cars to fetch
   * @returns {Promise<Object>} - Featured cars
   */
  async getFeaturedCars(limit = 6) {
    try {
      const response = await API.car.getFeaturedCars();
      const cars = response.data.slice(0, limit);
      return {
        success: true,
        data: cars,
      };
    } catch (error) {
      console.error('Get featured cars error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch featured cars',
        data: [],
      };
    }
  }

  /**
   * Get available cars for rent
   * @param {Object} params - Search parameters
   * @returns {Promise<Object>} - Available cars
   */
  async getAvailableCars(params = {}) {
    try {
      const response = await API.car.getAvailableCars(params);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get available cars error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch available cars',
        data: [],
      };
    }
  }

  /**
   * Get car price estimate
   * @param {number|string} carId - Car ID
   * @param {number} days - Number of days
   * @returns {Promise<Object>} - Price estimate
   */
  async getCarPriceEstimate(carId, days) {
    try {
      const response = await API.car.getCarPriceEstimate(carId, days);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get price estimate error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to get price estimate',
        data: null,
      };
    }
  }
}

export default new CarService();