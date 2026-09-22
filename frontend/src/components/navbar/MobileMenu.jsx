import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Self Drive Cars', path: '/self-drive' },
    { label: 'Tour Packages', path: '/packages' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'My Bookings', path: '/customer/my-bookings' },
    { label: 'Login / Register', path: '/auth/login' },
  ];

  return (
    <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-3 shadow-lg">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClose}
          className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
