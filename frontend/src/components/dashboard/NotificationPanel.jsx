import React from 'react';

export default function NotificationPanel() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-3">
      <h4 className="font-semibold text-slate-800 text-sm">Recent Alerts</h4>
      <p className="text-xs text-slate-500">No new notifications</p>
    </div>
  );
}
