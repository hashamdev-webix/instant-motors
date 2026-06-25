import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Loader from '../components/common/Loader';
import CarDetails from '../components/pages/BuyCars/CarDetails';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import ForgotPassword from '../components/Auth/ForgotPassword';

// Lazy load pages for better performance
const Home = lazy(() => import('../components/pages/Home/Home.jsx'));
const Rentals = lazy(() => import('../components/pages/Rentals/Rentals.jsx'));
const BuyCars = lazy(() => import('../components/pages/BuyCars/BuyCars.jsx'));
const SellCar = lazy(() => import('../components/pages/SellCar/SellCar.jsx'));
const RoadsideAssistance = lazy(() => import('../components/pages/RoadsideAssistance/RoadsideAssistance.jsx'));
const Membership = lazy(() => import('../components/pages/Membership/Membership.jsx'));
const Contact = lazy(() => import('../components/pages/Contact/Contact.jsx'));
const BookNow = lazy(() => import('../components/pages/BookNow/BookNow.jsx'));
const TruckDriver = lazy(() => import('../components/pages/TruckDriver/TruckDriver.jsx'));

// Towing Services Pages
const TowingServices = lazy(() => import('../components/pages/RoadsideAssistance/RoadsideAssistance'));
const EmergencyTowing = lazy(() => import('../components/pages/RoadsideAssistance/EmergencyCard'));
const HeavyDutyTowing = lazy(() => import('../components/pages/RoadsideAssistance/HeavyDutyTowing'));
const LightMediumTowing = lazy(() => import('../components/pages/RoadsideAssistance/LightMediumTowing'));
const FlatbedTowing = lazy(() => import('../components/pages/RoadsideAssistance/FlatbedTowing'));
const LongDistanceTowing = lazy(() => import('../components/pages/RoadsideAssistance/LondDistanceTowing'));
const MotorcycleTowing = lazy(() => import('../components/pages/RoadsideAssistance/MotorcycleTowing'));
const VehicleStorage = lazy(() => import('../components/pages/RoadsideAssistance/VehicleStorege'));
const ImpoundTowing = lazy(() => import('../components/pages/RoadsideAssistance/ImpoundTowing'));
const ServiceAreas = lazy(() => import('../components/pages/RoadsideAssistance/ServiceAreas'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        {/* ===== AUTH ROUTES - Outside MainLayout (No Navbar/Footer) ===== */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/forgotPassword" element={<ForgotPassword />} />

        {/* ===== MAIN ROUTES - Inside MainLayout (With Navbar/Footer) ===== */}
        <Route path="/" element={<MainLayout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="buyCars" element={<BuyCars />} />
          <Route path="buyCars/:id" element={<CarDetails />} />
          <Route path="sell-car" element={<SellCar />} />
          <Route path="roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-now" element={<BookNow />} />
          <Route path="truck-driver" element={<TruckDriver />} />

          {/* Towing Services Routes */}
          <Route path="towing" element={<TowingServices />} />
          <Route path="towing/emergency" element={<EmergencyTowing />} />
          <Route path="towing/heavy-duty" element={<HeavyDutyTowing />} />
          <Route path="towing/light-medium" element={<LightMediumTowing />} />
          <Route path="towing/flatbed" element={<FlatbedTowing />} />
          <Route path="towing/long-distance" element={<LongDistanceTowing />} />
          <Route path="towing/motorcycle" element={<MotorcycleTowing />} />
          <Route path="towing/storage" element={<VehicleStorage />} />
          <Route path="towing/impound" element={<ImpoundTowing />} />
          <Route path="towing/service-areas" element={<ServiceAreas />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;