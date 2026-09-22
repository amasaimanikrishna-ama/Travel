import React, { useState } from 'react';

export default function SearchBox() {
  const [tab, setTab] = useState('cars');

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 md:p-6 max-w-4xl mx-auto text-left">
      <div className="flex gap-4 border-b border-slate-100 pb-4 mb-4">
        <button
          onClick={() => setTab('cars')}
          className={'pb-2 text-sm font-semibold ' + (tab === 'cars' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500')}
        >
          🚗 Self Drive Cars
        </button>
        <button
          onClick={() => setTab('packages')}
          className={'pb-2 text-sm font-semibold ' + (tab === 'packages' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500')}
        >
          🌴 Tour Packages
        </button>
        <button
          onClick={() => setTab('experiences')}
          className={'pb-2 text-sm font-semibold ' + (tab === 'experiences' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500')}
        >
          🎟 Experiences
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase">Location</label>
          <input type="text" placeholder="Where to?" className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase">Start Date</label>
          <input type="date" className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600 uppercase">End Date</label>
          <input type="date" className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-sm" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-sm transition">
          Search Now
        </button>
      </div>
    </div>
  );
}
