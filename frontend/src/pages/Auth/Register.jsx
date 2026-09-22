import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
      <h2 className="text-2xl font-bold text-slate-900 text-center">Create Account</h2>
      <p className="text-xs text-slate-500 text-center mt-1">Start your journey with TravelEase</p>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-3 text-sm" />
        <input type="email" placeholder="Email Address" className="w-full border rounded-xl p-3 text-sm" />
        <input type="password" placeholder="Password" className="w-full border rounded-xl p-3 text-sm" />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl text-sm hover:bg-blue-700">
          Create Account
        </button>
      </form>
    </div>
  );
}
