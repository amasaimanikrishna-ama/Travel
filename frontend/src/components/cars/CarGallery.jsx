import React from 'react';

export default function CarGallery() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-3 h-80 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">Main Photo</div>
      <div className="h-24 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 1</div>
      <div className="h-24 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 2</div>
      <div className="h-24 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 3</div>
    </div>
  );
}
