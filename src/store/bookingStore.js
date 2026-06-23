import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { bookingService } from '../services';

const bookingStore = (set, get) => ({
  // State
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  },

  // Actions
  createBooking: async (bookingData) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.createBooking(bookingData);
      if (result.success) {
        set((state) => ({
          bookings: [result.data, ...state.bookings],
          currentBooking: result.data,
          isLoading: false,
        }));
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

  fetchBookings: async (params = {}) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.getAllBookings({
        ...params,
        page: get().pagination.page,
        limit: get().pagination.limit,
      });
      
      if (result.success) {
        set({
          bookings: result.data,
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

  fetchBookingById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.getBookingById(id);
      if (result.success) {
        set({
          currentBooking: result.data,
          isLoading: false,
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

  cancelBooking: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.cancelBooking(id);
      if (result.success) {
        set((state) => ({
          bookings: state.bookings.map(booking =>
            booking.id === id ? { ...booking, status: 'cancelled' } : booking
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

  confirmBooking: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.confirmBooking(id);
      if (result.success) {
        set((state) => ({
          bookings: state.bookings.map(booking =>
            booking.id === id ? { ...booking, status: 'confirmed' } : booking
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

  checkAvailability: async (carId, startDate, endDate) => {
    set({ isLoading: true, error: null });
    try {
      const result = await bookingService.checkAvailability(carId, startDate, endDate);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return { success: false, error: error.message };
    }
  },

  clearCurrentBooking: () => {
    set({ currentBooking: null });
  },

  // Getters
  getBookings: () => get().bookings,
  getCurrentBooking: () => get().currentBooking,
  getPagination: () => get().pagination,
  getError: () => get().error,
  isLoading: () => get().isLoading,
});

export const useBookingStore = create(devtools(bookingStore));