import React from 'react';
import StatsCard from '../../components/dashboard/StatsCard';

export default function CustomerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Customer Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatsCard title="Active Bookings" value="2" icon="📅" />
        <StatsCard title="Saved Vehicles" value="5" icon="🚗" />
        <StatsCard title="Wishlist Items" value="8" icon="❤️" />
      </div>
    </div>
  );
}
