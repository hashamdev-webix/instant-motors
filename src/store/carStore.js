import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        // State
        items: [],
        totalItems: 0,
        totalPrice: 0,
        isOpen: false,

        // Actions
        addItem: (car) => {
          set((state) => {
            const existingItem = state.items.find(item => item.id === car.id);
            let newItems;
            
            if (existingItem) {
              newItems = state.items.map(item =>
                item.id === car.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              newItems = [...state.items, { ...car, quantity: 1 }];
            }
            
            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            return {
              items: newItems,
              totalItems,
              totalPrice,
            };
          });
        },

        removeItem: (id) => {
          set((state) => {
            const newItems = state.items.filter(item => item.id !== id);
            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            return {
              items: newItems,
              totalItems,
              totalPrice,
            };
          });
        },

        updateQuantity: (id, quantity) => {
          set((state) => {
            if (quantity <= 0) {
              const newItems = state.items.filter(item => item.id !== id);
              const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
              const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
              return { items: newItems, totalItems, totalPrice };
            }
            
            const newItems = state.items.map(item =>
              item.id === id ? { ...item, quantity } : item
            );
            
            const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            return {
              items: newItems,
              totalItems,
              totalPrice,
            };
          });
        },

        clearCart: () => {
          set({ items: [], totalItems: 0, totalPrice: 0 });
        },

        toggleCart: () => {
          set((state) => ({ isOpen: !state.isOpen }));
        },

        openCart: () => {
          set({ isOpen: true });
        },

        closeCart: () => {
          set({ isOpen: false });
        },

        // Getters
        getTotalItems: () => get().totalItems,
        getTotalPrice: () => get().totalPrice,
        getItems: () => get().items,
        isCartOpen: () => get().isOpen,
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);