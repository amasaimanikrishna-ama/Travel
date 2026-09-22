import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';
import CustomerLayout from '../layouts/CustomerLayout';
import AdminLayout from '../layouts/AdminLayout';

import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

import Home from '../pages/Home/Home';
import Destinations from '../pages/Destinations/Destinations';
import DestinationDetails from '../pages/Destinations/DestinationDetails';
import SelfDrive from '../pages/SelfDrive/SelfDrive';
import CarDetails from '../pages/SelfDrive/CarDetails';
import CarBooking from '../pages/SelfDrive/CarBooking';
import Packages from '../pages/Packages/Packages';
import PackageDetails from '../pages/Packages/PackageDetails';
import Experiences from '../pages/Experiences/Experiences';
import ExperienceDetails from '../pages/Experiences/ExperienceDetails';

import Checkout from '../pages/Booking/Checkout';
import Payment from '../pages/Booking/Payment';
import Confirmation from '../pages/Booking/Confirmation';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import VerifyOTP from '../pages/Auth/VerifyOTP';

import CustomerDashboard from '../pages/Customer/Dashboard';
import Profile from '../pages/Customer/Profile';
import MyBookings from '../pages/Customer/MyBookings';
import BookingDetails from '../pages/Customer/BookingDetails';
import SavedCars from '../pages/Customer/SavedCars';
import Wishlist from '../pages/Customer/Wishlist';
import CustomerPayments from '../pages/Customer/Payments';
import Notifications from '../pages/Customer/Notifications';

import AdminDashboard from '../pages/Admin/Dashboard';
import AdminBookings from '../pages/Admin/Bookings';
import AdminCustomers from '../pages/Admin/Customers';
import AdminCars from '../pages/Admin/Cars';
import AdminCarDetails from '../pages/Admin/CarDetails';
import AdminDestinations from '../pages/Admin/Destinations';
import AdminPackages from '../pages/Admin/Packages';
import AdminPayments from '../pages/Admin/Payments';
import AdminReviews from '../pages/Admin/Reviews';
import AdminCoupons from '../pages/Admin/Coupons';
import AdminReports from '../pages/Admin/Reports';
import AdminSettings from '../pages/Admin/Settings';

import NotFound from '../pages/Error/NotFound';
import ServerError from '../pages/Error/ServerError';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:id" element={<DestinationDetails />} />
        <Route path="self-drive" element={<SelfDrive />} />
        <Route path="self-drive/:id" element={<CarDetails />} />
        <Route path="self-drive/:id/book" element={<CarBooking />} />
        <Route path="packages" element={<Packages />} />
        <Route path="packages/:id" element={<PackageDetails />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="experiences/:id" element={<ExperienceDetails />} />
        
        {/* Booking */}
        <Route path="booking/checkout" element={<Checkout />} />
        <Route path="booking/payment" element={<Payment />} />
        <Route path="booking/confirmation" element={<Confirmation />} />

        {/* Auth */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="auth/verify-otp" element={<VerifyOTP />} />
      </Route>

      {/* Customer Protected Pages */}
      <Route path="/customer" element={<ProtectedRoute><CustomerLayout /></ProtectedRoute>}>
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="bookings/:id" element={<BookingDetails />} />
        <Route path="saved-cars" element={<SavedCars />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="payments" element={<CustomerPayments />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* Admin Pages */}
      <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="cars" element={<AdminCars />} />
        <Route path="cars/:id" element={<AdminCarDetails />} />
        <Route path="destinations" element={<AdminDestinations />} />
        <Route path="packages" element={<AdminPackages />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="coupons" element={<AdminCoupons />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Errors */}
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
