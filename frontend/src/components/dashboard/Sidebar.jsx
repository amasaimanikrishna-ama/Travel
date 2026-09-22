import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ links = [] }) {
  return (
    <aside className="w-64 bg-white border-r border-slate-100 min-h-screen p-6 space-y-2">
      <div className="text-xl font-bold text-blue-600 mb-8">TravelEase</div>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ' + (
              isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
            )
          }
        >
          {link.icon && <span>{link.icon}</span>}
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
