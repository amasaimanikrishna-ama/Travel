import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMenu() {
  const isLoggedIn = false;

  return (
    <div className="flex items-center gap-3">
      {isLoggedIn ? (
        <Link to="/customer/dashboard" className="text-sm font-semibold text-slate-700">
          Account
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          <Link to="/auth/login" className="text-sm font-medium text-slate-700 hover:text-blue-600 px-3 py-2">
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 shadow-sm transition"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
