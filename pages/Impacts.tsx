
import React from 'react';
import { IMPACTS } from '../constants';

const Impacts: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Recent Impacts</h1>
        <p className="text-slate-600">The consequences of global warming are no longer future predictions—they are happening now, affecting every corner of our world.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {IMPACTS.map((impact) => (
          <div key={impact.id} className="relative group overflow-hidden rounded-3xl h-[450px]">
            <img 
              src={impact.image} 
              alt={impact.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-4">
                {impact.category}
              </span>
              <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {impact.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Beyond Temperature: The Chain Reaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-3xl mb-4">🌊</div>
            <h4 className="font-bold text-blue-900 mb-2">Ocean Acidification</h4>
            <p className="text-sm text-blue-800">Seawater absorbs CO2, making it acidic and dissolving the shells of sea creatures.</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="text-3xl mb-4">🌪️</div>
            <h4 className="font-bold text-orange-900 mb-2">Extreme Weather</h4>
            <p className="text-sm text-orange-800">Warmer air holds more moisture, leading to intense storms and flooding.</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="text-3xl mb-4">🧬</div>
            <h4 className="font-bold text-emerald-900 mb-2">Biodiversity Loss</h4>
            <p className="text-sm text-emerald-800">Species cannot adapt fast enough to shifting habitats, leading to extinction risks.</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="text-3xl mb-4">🌾</div>
            <h4 className="font-bold text-amber-900 mb-2">Food Insecurity</h4>
            <p className="text-sm text-amber-800">Droughts and floods disrupt crop cycles, making food more expensive and scarce.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacts;
