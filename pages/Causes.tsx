
import React from 'react';
import { CAUSES } from '../constants';

const Causes: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">The Root Causes</h1>
        <p className="text-slate-600">Understanding why our planet is warming is the first step toward fixing it. Human activity is the primary driver of current climate shifts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CAUSES.map((cause) => (
          <div key={cause.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-56 overflow-hidden">
              <img 
                src={cause.image} 
                alt={cause.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-grow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">{cause.title}</h3>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                  cause.impactLevel === 'Critical' ? 'bg-red-50 text-red-600' :
                  cause.impactLevel === 'High' ? 'bg-orange-50 text-orange-600' : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {cause.impactLevel} Impact
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {cause.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">The "Greenhouse" Effect</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <p className="text-emerald-800">Sunlight passes through the atmosphere and warms the Earth's surface.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <p className="text-emerald-800">The Earth radiates this heat back toward space as infrared light.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <p className="text-emerald-800 font-semibold">Greenhouse gases trap some of this heat, keeping the planet warm enough for life.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">!</div>
              <p className="text-red-800">Excess CO2 acts like an extra thick blanket, causing the planet to overheat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
           <div className="aspect-video bg-emerald-200 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
             {/* Simple graphic placeholder using Tailwind */}
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
             <div className="text-center">
               <div className="text-6xl mb-4">🌍</div>
               <div className="w-full h-1 bg-white/50 rounded-full mb-4"></div>
               <div className="flex justify-center space-x-2">
                 <div className="animate-bounce text-2xl">🔥</div>
                 <div className="animate-bounce delay-100 text-2xl">🔥</div>
                 <div className="animate-bounce delay-200 text-2xl">🔥</div>
               </div>
               <p className="text-emerald-900 font-bold mt-4">Atmosphere Trapping Heat</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
