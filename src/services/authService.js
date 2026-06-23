import API from '../api/endpoints';
import { setAuthToken, setRefreshToken, clearTokens } from '../api/axios';

class AuthService {
  constructor() {
    this.user = null;
    this.isAuthenticated = false;
  }

  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} - User data and tokens
   */
  async login(email, password) {
    try {
      const response = await API.auth.login(email, password);
      const { token, refreshToken, user } = response.data;
      
      // Store tokens
      setAuthToken(token);
      setRefreshToken(refreshToken);
      
      this.user = user;
      this.isAuthenticated = true;
      
      return { success: true, user };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    }
  }

  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} - User data and tokens
   */
  async register(userData) {
    try {
      const response = await API.auth.register(userData);
      const { token, refreshToken, user } = response.data;
      
      // Store tokens
      setAuthToken(token);
      setRefreshToken(refreshToken);
      
      this.user = user;
      this.isAuthenticated = true;
      
      return { success: true, user };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed',
      };
    }
  }

  /**
   * Logout user
   * @returns {Promise<Object>} - Logout result
   */
  async logout() {
    try {
      await API.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear tokens regardless of API response
      clearTokens();
      this.user = null;
      this.isAuthenticated = false;
    }
    
    return { success: true };
  }

  /**
   * Get current user profile
   * @returns {Promise<Object>} - User profile data
   */
  async getProfile() {
    try {
      const response = await API.auth.getProfile();
      this.user = response.data;
      this.isAuthenticated = true;
      return { success: true, user: this.user };
    } catch (error) {
      console.error('Get profile error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to get profile',
      };
    }
  }

  /**
   * Update user profile
   * @param {Object} data - Profile update data
   * @returns {Promise<Object>} - Updated user data
   */
  async updateProfile(data) {
    try {
      const response = await API.auth.updateProfile(data);
      this.user = response.data;
      return { success: true, user: this.user };
    } catch (error) {
      console.error('Update profile error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to update profile',
      };
    }
  }

  /**
   * Change user password
   * @param {string} oldPassword - Current password
   * @param {string} newPassword - New password
   * @returns {Promise<Object>} - Result
   */
  async changePassword(oldPassword, newPassword) {
    try {
      await API.auth.changePassword(oldPassword, newPassword);
      return { success: true };
    } catch (error) {
      console.error('Change password error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to change password',
      };
    }
  }

  /**
   * Forgot password - send reset email
   * @param {string} email - User email
   * @returns {Promise<Object>} - Result
   */
  async forgotPassword(email) {
    try {
      await API.auth.forgotPassword(email);
      return { success: true };
    } catch (error) {
      console.error('Forgot password error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send reset email',
      };
    }
  }

  /**
   * Reset password with token
   * @param {string} token - Reset token
   * @param {string} newPassword - New password
   * @returns {Promise<Object>} - Result
   */
  async resetPassword(token, newPassword) {
    try {
      await API.auth.resetPassword(token, newPassword);
      return { success: true };
    } catch (error) {
      console.error('Reset password error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to reset password',
      };
    }
  }

  /**
   * Verify email with token
   * @param {string} token - Verification token
   * @returns {Promise<Object>} - Result
   */
  async verifyEmail(token) {
    try {
      await API.auth.verifyEmail(token);
      return { success: true };
    } catch (error) {
      console.error('Verify email error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to verify email',
      };
    }
  }

  /**
   * Check if user is authenticated
   * @returns {boolean} - Authentication status
   */
  isAuthenticated() {
    return this.isAuthenticated && !!localStorage.getItem('authToken');
  }

  /**
   * Get current user
   * @returns {Object|null} - User data
   */
  getCurrentUser() {
    return this.user;
  }

  /**
   * Get auth token
   * @returns {string|null} - Auth token
   */
  getToken() {
    return localStorage.getItem('authToken');
  }
}

// Export singleton instance
const authService = new AuthService();
export default authService;