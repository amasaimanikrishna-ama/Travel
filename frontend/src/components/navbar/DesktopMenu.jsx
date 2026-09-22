import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Self Drive Cars', path: '/self-drive' },
  { label: 'Tour Packages', path: '/packages' },
  { label: 'Experiences', path: '/experiences' },
];

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            'text-sm font-medium transition-colors ' + (
              isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
