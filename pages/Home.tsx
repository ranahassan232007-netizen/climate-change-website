
import React from 'react';
import { Link } from 'react-router-dom';
import ClimateChat from '../components/ClimateChat';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-3xl overflow-hidden flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/planet/1600/900" 
          alt="Earth view from space" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-emerald-500/30">
            Protecting Our Home: 2000-2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Climate is Changing. <br/><span className="text-emerald-400">So Can We.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover how our world has evolved in the last quarter-century and what we can do to ensure a flourishing planet for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/trends" className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20">
              See the Data
            </Link>
            <Link to="/solutions" className="bg-white/10 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Join the Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
          <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Global Warming?</h2>
          <p className="text-slate-600 leading-relaxed">
            Think of the Earth as wearing a blanket. Greenhouse gases in our atmosphere act like this blanket, trapping heat from the Sun. 
            <strong>Global warming</strong> happens when we add too much "stuff" (like CO2 from fossil fuels) to that blanket, making it thicker and trapping too much heat.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
          <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Climate Change Matters</h2>
          <p className="text-slate-600 leading-relaxed">
            Climate change isn't just about things getting hotter. It's about shifting weather patterns, rising sea levels, and unpredictable storms. 
            Since 2000, we've seen these shifts accelerate, affecting where we live, what food we can grow, and the survival of millions of species.
          </p>
        </div>
      </section>

      {/* AI Assistant */}
      <section>
        <ClimateChat />
      </section>

      {/* Stats Summary */}
      <section className="bg-emerald-900 rounded-3xl p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-emerald-400 mb-2">1.2°C</div>
            <div className="text-slate-300 font-medium">Global Temp Rise since 1880</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-sky-400 mb-2">425 ppm</div>
            <div className="text-slate-300 font-medium">CO2 Levels in 2025</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-400 mb-2">13%</div>
            <div className="text-slate-300 font-medium">Arctic Ice Loss per Decade</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
