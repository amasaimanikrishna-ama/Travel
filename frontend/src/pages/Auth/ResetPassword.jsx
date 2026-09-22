import React from 'react';

export default function ResetPassword() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
      <h2 className="text-2xl font-bold text-slate-900 text-center">New Password</h2>
      <form className="mt-6 space-y-4">
        <input type="password" placeholder="New Password" className="w-full border rounded-xl p-3 text-sm" />
        <input type="password" placeholder="Confirm Password" className="w-full border rounded-xl p-3 text-sm" />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl text-sm">
          Update Password
        </button>
      </form>
    </div>
  );
}
