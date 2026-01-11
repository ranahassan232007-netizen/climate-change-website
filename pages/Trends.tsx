
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from 'recharts';
import { CLIMATE_DATA } from '../constants';

const Trends: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Recent Trends (2000-2025)</h1>
        <p className="text-slate-600">Explore the critical indicators showing how our planet's atmosphere and oceans have changed over the last 25 years.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Temperature Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Global Temperature Anomaly (°C)</h3>
            <span className="text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-xs font-bold">Rising</span>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CLIMATE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" unit="°" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#1e293b' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  name="Temp Anomaly" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#f97316' }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic text-center">
            *Baseline is the 1951-1980 average. Positive values indicate warming.
          </p>
        </div>

        {/* CO2 Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Atmospheric CO2 Levels (ppm)</h3>
            <span className="text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">Accelerating</span>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CLIMATE_DATA}>
                <defs>
                  <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis domain={[350, 440]} stroke="#64748b" unit="p" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="co2" 
                  name="CO2 Concentration" 
                  stroke="#10b981" 
                  fillOpacity={1} 
                  fill="url(#colorCo2)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic text-center">
            *PPM = Parts Per Million. Current levels are highest in 2 million years.
          </p>
        </div>
      </div>

      {/* Sea Level Rise */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Sea Level Rise</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            As glaciers and ice sheets melt and the ocean warms up (expanding in volume), sea levels rise. Since 2000, we've observed a global average rise of over 60mm. This threatens coastal cities and islands worldwide.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-sky-50 p-4 rounded-xl">
              <span className="font-semibold text-sky-900">Year 2000</span>
              <span className="text-sky-700">48.7 mm (avg)</span>
            </div>
            <div className="flex justify-between items-center bg-sky-100 p-4 rounded-xl border border-sky-200">
              <span className="font-semibold text-sky-900">Year 2025</span>
              <span className="text-sky-700 font-bold">112.5 mm (avg)</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CLIMATE_DATA}>
              <XAxis dataKey="year" />
              <YAxis domain={[40, 120]} />
              <Tooltip />
              <Line type="stepAfter" dataKey="seaLevel" stroke="#0ea5e9" strokeWidth={4} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Trends;
