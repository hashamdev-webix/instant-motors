import API from '../api/endpoints';

class NotificationService {
  /**
   * Get all notifications
   * @param {Object} params - Filter parameters
   * @returns {Promise<Object>} - Notifications
   */
  async getNotifications(params = {}) {
    try {
      const response = await API.notification.getNotifications(params);
      return {
        success: true,
        data: response.data,
        total: response.data.total || response.data.length,
      };
    } catch (error) {
      console.error('Get notifications error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch notifications',
        data: [],
      };
    }
  }

  /**
   * Get notification by ID
   * @param {string} id - Notification ID
   * @returns {Promise<Object>} - Notification data
   */
  async getNotificationById(id) {
    try {
      const response = await API.notification.getNotificationById(id);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Get notification error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Notification not found',
        data: null,
      };
    }
  }

  /**
   * Mark notification as read
   * @param {string} id - Notification ID
   * @returns {Promise<Object>} - Result
   */
  async markAsRead(id) {
    try {
      await API.notification.markAsRead(id);
      return { success: true };
    } catch (error) {
      console.error('Mark as read error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to mark as read',
      };
    }
  }

  /**
   * Mark all notifications as read
   * @returns {Promise<Object>} - Result
   */
  async markAllRead() {
    try {
      await API.notification.markAllRead();
      return { success: true };
    } catch (error) {
      console.error('Mark all read error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to mark all as read',
      };
    }
  }

  /**
   * Delete notification
   * @param {string} id - Notification ID
   * @returns {Promise<Object>} - Result
   */
  async deleteNotification(id) {
    try {
      await API.notification.deleteNotification(id);
      return { success: true };
    } catch (error) {
      console.error('Delete notification error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to delete notification',
      };
    }
  }

  /**
   * Get unread notification count
   * @returns {Promise<Object>} - Unread count
   */
  async getUnreadCount() {
    try {
      const response = await API.notification.getUnreadCount();
      return {
        success: true,
        count: response.data.count || 0,
      };
    } catch (error) {
      console.error('Get unread count error:', error);
      return {
        success: false,
        count: 0,
        error: error.response?.data?.message || 'Failed to get unread count',
      };
    }
  }

  /**
   * Subscribe to push notifications
   * @param {Object} subscription - Push subscription data
   * @returns {Promise<Object>} - Result
   */
  async subscribeToPush(subscription) {
    try {
      await API.notification.subscribeToPush(subscription);
      return { success: true };
    } catch (error) {
      console.error('Subscribe to push error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to subscribe to push',
      };
    }
  }

  /**
   * Unsubscribe from push notifications
   * @param {Object} subscription - Push subscription data
   * @returns {Promise<Object>} - Result
   */
  async unsubscribeFromPush(subscription) {
    try {
      await API.notification.unsubscribeFromPush(subscription);
      return { success: true };
    } catch (error) {
      console.error('Unsubscribe from push error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to unsubscribe from push',
      };
    }
  }

  /**
   * Send notification (admin only)
   * @param {Object} data - Notification data
   * @returns {Promise<Object>} - Result
   */
  async sendNotification(data) {
    try {
      const response = await API.notification.sendNotification(data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Send notification error:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to send notification',
      };
    }
  }
}

export default new NotificationService();