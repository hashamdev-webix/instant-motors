import API from '../api/endpoints';

class PaymentService {
  /**
   * Create a new payment
   * @param {Object} paymentData - Payment details
   * @returns {Promise<Object>} - Created payment
   */
  async createPayment(paymentData) {
    try {
      const response = await API.payment.createPayment(paymentData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Create payment error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to create payment',
      };
    }
  }

  /**
   * Verify payment
   * @param {string} paymentId - Payment ID
   * @returns {Promise<Object>} - Verification result
   */
  async verifyPayment(paymentId) {
    try {
      const response = await API.payment.verifyPayment(paymentId);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Verify payment error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Payment verification failed',
      };
    }
  }

  /**
   * Get payment status
   * @param {string} id - Payment ID
   * @returns {Promise<Object>} - Payment status
   */
  async getPaymentStatus(id) {
    try {
      const response = await API.payment.getPaymentStatus(id);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get payment status error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to get payment status',
        data: null,
      };
    }
  }

  /**
   * Get payment history
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - Payment history
   */
  async getPaymentHistory(params = {}) {
    try {
      const response = await API.payment.getPaymentHistory(params);
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get payment history error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch payment history',
        data: [],
      };
    }
  }

  /**
   * Refund payment
   * @param {string} id - Payment ID
   * @param {string} reason - Refund reason
   * @returns {Promise<Object>} - Refund result
   */
  async refundPayment(id, reason) {
    try {
      const response = await API.payment.refundPayment(id, reason);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Refund payment error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to refund payment',
      };
    }
  }

  /**
   * Get payment methods
   * @returns {Promise<Object>} - Payment methods
   */
  async getPaymentMethods() {
    try {
      const response = await API.payment.getPaymentMethods();
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get payment methods error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to get payment methods',
        data: [],
      };
    }
  }

  /**
   * Add payment method
   * @param {Object} data - Payment method data
   * @returns {Promise<Object>} - Added payment method
   */
  async addPaymentMethod(data) {
    try {
      const response = await API.payment.addPaymentMethod(data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Add payment method error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to add payment method',
      };
    }
  }

  /**
   * Remove payment method
   * @param {string} id - Payment method ID
   * @returns {Promise<Object>} - Result
   */
  async removePaymentMethod(id) {
    try {
      await API.payment.removePaymentMethod(id);
      return { success: true };
    } catch (error) {
      console.error('Remove payment method error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to remove payment method',
      };
    }
  }
}

export default new PaymentService();