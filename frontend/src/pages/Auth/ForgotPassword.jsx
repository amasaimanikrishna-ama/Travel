import React from 'react';

export default function ForgotPassword() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl text-center">
      <h2 className="text-2xl font-bold text-slate-900">Reset Password</h2>
      <p className="text-xs text-slate-500 mt-1">Enter your email and we will send recovery instructions.</p>
      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Email Address" className="w-full border rounded-xl p-3 text-sm" />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl text-sm">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
