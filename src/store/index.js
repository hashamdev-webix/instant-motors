import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Export all stores
export { useAuthStore } from './authStore';
export { useCarStore } from './carStore';
export { useBookingStore } from './bookingStore';
export { useUIStore } from './uiStore';
export { useNotificationStore } from './notificationStore';
export { useCartStore } from './cartStore';

// Root store (global app state)
export const useAppStore = create(
  devtools(
    persist(
      (set, get) => ({
        appName: 'Instant Motors',
        version: '1.0.0',
        isInitialized: false,
        isOffline: false,
        lastSync: null,

        setInitialized: (status) => set({ isInitialized: status }),
        setOffline: (status) => set({ isOffline: status }),
        setLastSync: (time) => set({ lastSync: time }),

        resetApp: () => {
          set({
            isInitialized: false,
            isOffline: false,
            lastSync: null,
          });
          localStorage.removeItem('auth-storage');
          localStorage.removeItem('app-storage');
          localStorage.removeItem('cart-storage');
        },
      }),
      {
        name: 'app-storage',
        partialize: (state) => ({
          appName: state.appName,
          version: state.version,
          isInitialized: state.isInitialized,
        }),
      }
    )
  )
);