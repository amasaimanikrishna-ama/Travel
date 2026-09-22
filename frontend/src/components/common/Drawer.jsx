import React from 'react';

export default function Drawer({ isOpen, onClose, title, children, position = 'right' }) {
  if (!isOpen) return null;

  const positions = {
    right: 'top-0 right-0 h-full w-80 md:w-96',
    left: 'top-0 left-0 h-full w-80 md:w-96',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />
      <div className={'fixed ' + positions[position] + ' bg-white shadow-2xl flex flex-col z-10'}>
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
