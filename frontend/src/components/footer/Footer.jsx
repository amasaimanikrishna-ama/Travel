import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white text-lg font-bold">TravelEase</h3>
          <p className="mt-3 text-sm text-slate-400">
            Your all-in-one platform for unforgettable travel experiences, premium self-drive rentals, and tour packages.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
            <li><Link to="/self-drive" className="hover:text-white">Self-Drive Rentals</Link></li>
            <li><Link to="/packages" className="hover:text-white">Holiday Packages</Link></li>
            <li><Link to="/experiences" className="hover:text-white">Curated Experiences</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm text-slate-400">support@travelease.com</p>
          <p className="text-sm text-slate-400 mt-1">+1 (800) 123-4567</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TravelEase Inc. All rights reserved.
      </div>
    </footer>
  );
}
