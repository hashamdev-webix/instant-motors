import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { notificationService } from '../services';

const notificationStore = (set, get) => ({
  // State
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
  },

  // Actions
  fetchNotifications: async (params = {}) => {
    set({ isLoading: true, error: null });
    try {
      const result = await notificationService.getNotifications({
        ...params,
        page: get().pagination.page,
        limit: get().pagination.limit,
      });
      
      if (result.success) {
        set({
          notifications: result.data,
          isLoading: false,
          pagination: {
            ...get().pagination,
            total: result.total,
            totalPages: Math.ceil(result.total / get().pagination.limit),
          },
        });
        return { success: true, data: result.data };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  fetchUnreadCount: async () => {
    try {
      const result = await notificationService.getUnreadCount();
      if (result.success) {
        set({ unreadCount: result.count });
        return { success: true, count: result.count };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  markAsRead: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const result = await notificationService.markAsRead(id);
      if (result.success) {
        set((state) => ({
          notifications: state.notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
          ),
          unreadCount: Math.max(0, state.unreadCount - 1),
          isLoading: false,
        }));
        return { success: true };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  markAllRead: async () => {
    set({ isLoading: true, error: null });
    try {
      const result = await notificationService.markAllRead();
      if (result.success) {
        set((state) => ({
          notifications: state.notifications.map(notification => ({
            ...notification,
            read: true,
          })),
          unreadCount: 0,
          isLoading: false,
        }));
        return { success: true };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  deleteNotification: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const result = await notificationService.deleteNotification(id);
      if (result.success) {
        set((state) => ({
          notifications: state.notifications.filter(
            notification => notification.id !== id
          ),
          isLoading: false,
        }));
        return { success: true };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  // Getters
  getNotifications: () => get().notifications,
  getUnreadCount: () => get().unreadCount,
  getPagination: () => get().pagination,
  getError: () => get().error,
  isLoading: () => get().isLoading,
});

export const useNotificationStore = create(devtools(notificationStore));