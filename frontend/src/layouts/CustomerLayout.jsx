import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const links = [
  { label: 'Dashboard', path: '/customer/dashboard', icon: '📊' },
  { label: 'My Bookings', path: '/customer/my-bookings', icon: '🎫' },
  { label: 'Saved Cars', path: '/customer/saved-cars', icon: '🚗' },
  { label: 'Wishlist', path: '/customer/wishlist', icon: '❤️' },
  { label: 'Payments', path: '/customer/payments', icon: '💳' },
  { label: 'Profile', path: '/customer/profile', icon: '👤' },
];

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar links={links} />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
