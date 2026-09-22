import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
      <h2 className="text-2xl font-bold text-slate-900 text-center">Welcome Back</h2>
      <p className="text-xs text-slate-500 text-center mt-1">Sign in to your TravelEase account</p>
      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Email Address" className="w-full border rounded-xl p-3 text-sm" />
        <input type="password" placeholder="Password" className="w-full border rounded-xl p-3 text-sm" />
        <div className="flex justify-between items-center text-xs">
          <label className="flex items-center gap-1.5 text-slate-600"><input type="checkbox" /> Remember me</label>
          <Link to="/auth/forgot-password" className="text-blue-600 font-semibold">Forgot Password?</Link>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl text-sm hover:bg-blue-700">
          Sign In
        </button>
      </form>
    </div>
  );
}
