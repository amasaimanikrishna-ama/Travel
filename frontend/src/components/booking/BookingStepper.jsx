import React from 'react';

export default function BookingStepper({ currentStep = 1 }) {
  const steps = ['Details', 'Payment', 'Confirmation'];
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className={'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ' + (
            currentStep >= idx + 1 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
          )}>
            {idx + 1}
          </div>
          <span className="text-sm font-medium text-slate-700">{step}</span>
          {idx < steps.length - 1 && <div className="w-12 h-0.5 bg-slate-200" />}
        </div>
      ))}
    </div>
  );
}
