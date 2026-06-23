import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <AppProvider>
        <AuthProvider>
          <BookingProvider>
            <CartProvider>
              <div className="min-h-screen bg-gray-50">
                <AppRouter />
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                  }}
                />
              </div>
            </CartProvider>
          </BookingProvider>
        </AuthProvider>
      </AppProvider>
    </Router>
  );
}

export default App;