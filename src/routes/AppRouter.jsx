import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Loader from '../components/common/Loader';
import CarDetails from '../components/pages/BuyCars/CarDetails';

// Lazy load pages for better performance
const Home = lazy(() => import('../components/pages/Home/Home.jsx'));
const Rentals = lazy(() => import('../components/pages/Rentals/Rentals.jsx'));
const BuyCars = lazy(() => import('../components/pages/BuyCars/BuyCars.jsx'));
const SellCar = lazy(() => import('../components/pages/SellCar/SellCar.jsx'));
const RoadsideAssistance = lazy(() => import('../components/pages/RoadsideAssistance/RoadsideAssistance.jsx')); // ✅ Fixed
const Membership = lazy(() => import('../components/pages/Membership/Membership.jsx')); // ✅ Fixed
const Contact = lazy(() => import('../components/pages/Contact/Contact.jsx'));
const BookNow = lazy(() => import('../components/pages/BookNow/BookNow.jsx'));
const TruckDriver = lazy(() => import('../components/pages/TruckDriver/TruckDriver.jsx'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="buy-cars" element={<BuyCars />} />
          <Route path="buy-cars/:id" element={<CarDetails />} />
          <Route path="sell-car" element={<SellCar />} />
          <Route path="roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-now" element={<BookNow />} />
          <Route path="truck-driver" element={<TruckDriver />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;