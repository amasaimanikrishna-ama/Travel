import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const adminLinks = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: '📈' },
  { label: 'Bookings', path: '/admin/bookings', icon: '📑' },
  { label: 'Cars', path: '/admin/cars', icon: '🚗' },
  { label: 'Packages', path: '/admin/packages', icon: '📦' },
  { label: 'Destinations', path: '/admin/destinations', icon: '📍' },
  { label: 'Customers', path: '/admin/customers', icon: '👥' },
  { label: 'Reviews', path: '/admin/reviews', icon: '⭐' },
  { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar links={adminLinks} />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
