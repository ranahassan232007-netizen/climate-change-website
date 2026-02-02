import React from 'react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-emerald-50 p-10 md:p-14 border border-emerald-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Book Your Seat</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
          Reserve Your Space at Noor Group of Hostels
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Share your preferred hostel, room type, and move-in date. Our team will confirm availability and guide you through
          the next steps.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/923001234567"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200/60 transition hover:bg-emerald-700"
          >
            WhatsApp Now
          </a>
          <a
            href="tel:+923001234567"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-emerald-700 font-semibold transition hover:border-emerald-400 hover:text-emerald-800"
          >
            Call Us
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-slate-600 font-semibold transition hover:border-slate-300 hover:text-slate-800"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800">Booking Details</h2>
          <p className="mt-2 text-slate-600">
            Provide your requirements below so we can reserve the best option for you.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. 0300 1234567"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Preferred Hostel</label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
                <option>Noor Girls Hostel</option>
                <option>Adam Lodges Boys Hostel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Room Type</label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
                <option>1 Seater</option>
                <option>2 Seater</option>
                <option>3 Seater</option>
                <option>4 Seater</option>
                <option>5 Seater</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Move-in Date</label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200/50 transition hover:bg-emerald-700"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800">What Happens Next</h2>
          <ul className="mt-4 space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                1
              </span>
              <p>We review your request and confirm availability for the selected hostel and room type.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                2
              </span>
              <p>Our team contacts you on phone or WhatsApp to share rent, deposit, and move-in details.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                3
              </span>
              <p>Reserve your seat with the security deposit and complete admission documentation.</p>
            </li>
          </ul>
          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-emerald-700">Need help quickly?</h3>
            <p className="mt-2 text-sm text-emerald-700">
              Chat with our warden team anytime for guidance on availability, facilities, and pricing.
            </p>
            <a
              href="https://wa.me/923001234567"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-white text-sm font-semibold shadow hover:bg-emerald-700"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
