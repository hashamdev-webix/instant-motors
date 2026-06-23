import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { authService } from '../services';

const authStore = (set, get) => ({
  // State
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,

  // Actions
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.login(email, password);
      if (result.success) {
        set({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
          token: result.token,
        });
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

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.register(userData);
      if (result.success) {
        set({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
          token: result.token,
        });
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

  logout: async () => {
    set({ isLoading: true });
    try {
      await authService.logout();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        error: null,
      });
      return { success: true };
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  getProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.getProfile();
      if (result.success) {
        set({
          user: result.user,
          isAuthenticated: true,
          isLoading: false,
        });
        return { success: true, user: result.user };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.updateProfile(data);
      if (result.success) {
        set({
          user: result.user,
          isLoading: false,
        });
        return { success: true, user: result.user };
      } else {
        set({ isLoading: false, error: result.error });
        return { success: false, error: result.error };
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  changePassword: async (oldPassword, newPassword) => {
    set({ isLoading: true, error: null });
    try {
      const result = await authService.changePassword(oldPassword, newPassword);
      if (result.success) {
        set({ isLoading: false });
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
  getUser: () => get().user,
  isAuthenticated: () => get().isAuthenticated,
  getToken: () => get().token,
  getError: () => get().error,
  isLoading: () => get().isLoading,

  // Reset
  reset: () => {
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      token: null,
    });
  },
});

// Create store with devtools and persist
export const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
      }),
    })
  )
);