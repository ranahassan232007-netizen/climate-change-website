
import React from 'react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">What We Can Do</h1>
        <p className="text-slate-600">The challenge is big, but the tools we need to fix it already exist. From daily habits to global policies, every action counts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            Personal Actions
          </h2>
          {SOLUTIONS.filter(s => s.category === 'Personal').map(solution => (
            <div key={solution.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="text-3xl">{solution.icon}</div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">{solution.title}</h3>
                <p className="text-sm text-emerald-600 font-medium mb-2">{solution.action}</p>
                <p className="text-slate-500 text-sm">{solution.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="p-2 bg-sky-100 rounded-lg text-sky-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            Systemic Solutions
          </h2>
          {SOLUTIONS.filter(s => s.category === 'Systemic').map(solution => (
            <div key={solution.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="text-3xl">{solution.icon}</div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">{solution.title}</h3>
                <p className="text-sm text-sky-600 font-medium mb-2">{solution.action}</p>
                <p className="text-slate-500 text-sm">{solution.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-sky-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Take the First Step Today</h2>
        <p className="text-emerald-50 mb-10 max-w-xl mx-auto">
          Start by calculating your carbon footprint or joining a local environmental club. 
          The most important thing is to stay informed and share what you learn with others.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
            Calculate My Footprint
          </button>
          <button className="bg-emerald-500/30 backdrop-blur-md border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
            Find Local Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
