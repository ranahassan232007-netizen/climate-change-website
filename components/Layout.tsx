
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
    { name: 'Girls Hostel', href: '/#girls-hostel' },
    { name: 'Boys Hostel', href: '/#boys-hostel' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5L12 4l9 6.5M5 9.5V20h14V9.5M9 20v-6h6v6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Noor Group of Hostels</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors hover:text-emerald-600 ${
                  location.pathname === '/' ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-slate-700'
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/booking"
                className={`text-sm font-semibold transition-colors hover:text-emerald-600 ${
                  location.pathname === '/booking' ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-slate-700'
                }`}
              >
                Book Now
              </Link>
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
          <div className="md:hidden bg-white border-b border-emerald-100 py-4 shadow-inner animate-in slide-in-from-top duration-300">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-2 text-base font-semibold transition-colors ${
                location.pathname === '/' ? 'bg-emerald-50 text-emerald-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-2 text-base font-semibold transition-colors ${
                location.pathname === '/booking' ? 'bg-emerald-50 text-emerald-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Noor Group of Hostels</h3>
              <p className="text-sm leading-relaxed">
                Safe, comfortable, and affordable student living for Noor Girls Hostel and Adam Lodges Boys Hostel.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><a href="/#girls-hostel" className="hover:text-emerald-400 transition-colors">Noor Girls Hostel</a></li>
                <li><a href="/#boys-hostel" className="hover:text-emerald-400 transition-colors">Adam Lodges Boys Hostel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+923001234567" className="hover:text-emerald-400 transition-colors">Call: +92 300 1234567</a></li>
                <li><a href="https://wa.me/923001234567" className="hover:text-emerald-400 transition-colors">WhatsApp: +92 300 1234567</a></li>
                <li><a href="/#contact" className="hover:text-emerald-400 transition-colors">Contact Form</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Noor Group of Hostels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/923001234567"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:bg-emerald-700"
        aria-label="WhatsApp Now"
      >
        👉 WhatsApp Now
      </a>
    </div>
  );
};

export default Layout;
