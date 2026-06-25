import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { CartProvider } from './context/CartContext';

// Wrapper component to conditionally hide Navbar & Footer
const AppContent = () => {
  const location = useLocation();
  
  // Pages where Navbar & Footer should NOT be shown
  const authPages = ['/login', '/signup', '/forgot-password'];
  const hideNavFooter = authPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <AppRouter hideNavFooter={hideNavFooter} />
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
  );
};

function App() {
  return (
    <Router>
      <AppProvider>
        <AuthProvider>
          <BookingProvider>
            <CartProvider>
              <AppContent />
            </CartProvider>
          </BookingProvider>
        </AuthProvider>
      </AppProvider>
    </Router>
  );
}

export default App;