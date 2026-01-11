
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Automatically scroll to top when user navigates to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trends', path: '/trends' },
    { name: 'Causes', path: '/causes' },
    { name: 'Impacts', path: '/impacts' },
    { name: 'Solutions', path: '/solutions' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">ClimatePulse</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-emerald-600 focus:outline-none p-2 rounded-md"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-green-100 py-4 shadow-inner animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">ClimatePulse</h3>
              <p className="text-sm leading-relaxed">
                Dedicated to educating the world about our changing climate with data-driven insights and actionable solutions for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/trends" className="hover:text-emerald-400 transition-colors">Latest Trends</Link></li>
                <li><Link to="/solutions" className="hover:text-emerald-400 transition-colors">What We Can Do</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Educational Resources</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">NASA: Climate Kids</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">IPCC Reports</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">National Geographic</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} ClimatePulse Educational Initiative. Built for scientific literacy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
