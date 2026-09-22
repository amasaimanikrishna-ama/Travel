import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <WishlistProvider>
          <AppRoutes />
        </WishlistProvider>
      </BookingProvider>
    </AuthProvider>
  );
}
