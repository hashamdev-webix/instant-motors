import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useUIStore = create(
  devtools(
    (set, get) => ({
      // State
      theme: 'light',
      sidebarOpen: false,
      mobileMenuOpen: false,
      isLoading: false,
      modalOpen: false,
      modalContent: null,
      toast: null,
      isOnline: navigator.onLine,

      // Theme
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }));
        const newTheme = get().theme;
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
      },

      setTheme: (theme) => {
        set({ theme });
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      },

      // Sidebar
      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }));
      },

      openSidebar: () => {
        set({ sidebarOpen: true });
      },

      closeSidebar: () => {
        set({ sidebarOpen: false });
      },

      // Mobile Menu
      toggleMobileMenu: () => {
        set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen }));
      },

      openMobileMenu: () => {
        set({ mobileMenuOpen: true });
      },

      closeMobileMenu: () => {
        set({ mobileMenuOpen: false });
      },

      // Loading
      setLoading: (status) => {
        set({ isLoading: status });
      },

      startLoading: () => {
        set({ isLoading: true });
      },

      stopLoading: () => {
        set({ isLoading: false });
      },

      // Modal
      openModal: (content) => {
        set({ modalOpen: true, modalContent: content });
      },

      closeModal: () => {
        set({ modalOpen: false, modalContent: null });
      },

      // Toast
      showToast: (message, type = 'info', duration = 3000) => {
        set({ toast: { message, type, duration } });
        setTimeout(() => {
          set({ toast: null });
        }, duration);
      },

      hideToast: () => {
        set({ toast: null });
      },

      // Online Status
      setOnlineStatus: (status) => {
        set({ isOnline: status });
      },

      // Getters
      getTheme: () => get().theme,
      isDark: () => get().theme === 'dark',
      isLight: () => get().theme === 'light',
      getToast: () => get().toast,
      isOnline: () => get().isOnline,
    })
  )
);