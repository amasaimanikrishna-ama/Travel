import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
}
