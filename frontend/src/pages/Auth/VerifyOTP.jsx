import React from 'react';

export default function VerifyOTP() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl text-center">
      <h2 className="text-2xl font-bold text-slate-900">Verify Code</h2>
      <p className="text-xs text-slate-500 mt-1">Enter the 6-digit OTP sent to your email.</p>
      <form className="mt-6 space-y-4">
        <input type="text" maxLength={6} placeholder="123456" className="w-full border text-center tracking-widest text-lg font-bold rounded-xl p-3" />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl text-sm">
          Verify & Continue
        </button>
      </form>
    </div>
  );
}
