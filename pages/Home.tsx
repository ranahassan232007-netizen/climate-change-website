import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const girlsFacilities = [
    '2 Times Mess',
    'Filtered Water',
    'Common Fridge',
    'High-Speed Internet',
    'Kitchen for Self-Cooking',
    'Room Cleaning',
    'Oven',
    'Female Warden',
    'Washing Machine with Dryer',
  ];

  const boysFacilities = [
    '3 Times Mess',
    'Room Cleaning',
    'Bed & Mattress',
    'Cupboards',
    'Filtered Water',
    'High-Speed Internet',
  ];

  const girlsPricing = [
    { type: '1 Seater', price: '25,000 PKR' },
    { type: '2 Seater', price: '22,000 PKR' },
    { type: '3 Seater', price: '16,500 PKR' },
    { type: '4 Seater', price: '16,000 PKR' },
    { type: '5 Seater', price: 'Available' },
  ];

  const boysPricing = [
    { type: '1 Seater', price: '25,000 PKR' },
    { type: '2 Seater', price: '22,000 PKR' },
    { type: '3 Seater', price: '18,000 PKR' },
    { type: '4 Seater', price: '18,000 PKR' },
    { type: '5 Seater', price: '18,000 PKR' },
  ];

  const girlsGallery = [
    {
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
      alt: 'Girls hostel room with bright lighting',
    },
    {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
      alt: 'Study and common sitting area',
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      alt: 'Mess and dining area',
    },
    {
      src: 'https://images.unsplash.com/photo-1556912167-f556f1f39a73?auto=format&fit=crop&w=900&q=80',
      alt: 'Kitchen with clean cooking space',
    },
  ];

  const boysGallery = [
    {
      src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
      alt: 'Boys hostel room with storage',
    },
    {
      src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
      alt: 'Hostel exterior entrance',
    },
    {
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
      alt: 'Common lounge area',
    },
    {
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
      alt: 'Laundry area with washing machine and dryer',
    },
  ];

  const testimonials = [
    {
      quote:
        'The Noor Girls Hostel is a wonderful place to live. The rooms are clean, and the mess food is really good! I feel safe and comfortable here.',
      name: 'Ayesha',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote:
        'Adam Lodges Boys Hostel has been great. The facilities are good, and the management is very helpful. Highly recommend it!',
      name: 'Ali',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote:
        'I love the study environment and reliable internet. The warden team is attentive and always ready to assist.',
      name: 'Noor',
      role: 'Resident',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-emerald-700/60"></div>
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
          alt="Cozy hostel room interior"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-white">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-100">
              Noor Group of Hostels
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Safe • Comfortable • Affordable Student Living
            </h1>
            <p className="text-lg text-emerald-100">
              Thank you for contacting Noor Girls Hostel and Adam Lodges Boys Hostel. We provide a clean, secure, and
              comfortable living environment with complete facilities for students.
            </p>
            <div className="rounded-2xl border border-emerald-200/40 bg-white/10 px-6 py-4 text-emerald-100">
              <p className="text-sm font-semibold">✅ Mess is compulsory</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+923001234567"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-50"
              >
                📞 Contact Us
              </a>
              <a
                href="https://wa.me/923001234567"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                💬 WhatsApp Now
              </a>
              <a
                href="#location"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                📍 View Location
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Secure & Supervised',
            description: 'Experienced wardens and security ensure a safe environment for students.',
          },
          {
            title: 'Student-Friendly Facilities',
            description: 'Mess, filtered water, laundry, and high-speed internet all under one roof.',
          },
          {
            title: 'Prime Locations',
            description: 'Easy access to universities, transport, and daily essentials.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section id="location" className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Find Us – Hostel Location</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Visit Noor Group of Hostels</h2>
          <p className="mt-2 text-slate-600">
            Conveniently located for students, close to key campuses and transport routes.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <iframe
            title="Noor Group of Hostels Location"
            src="https://maps.google.com/maps?q=Noor%20Group%20of%20Hostels&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="girls-hostel" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Noor Girls Hostel</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Comfortable living for female students</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Designed for safety, comfort, and study-friendly living with dedicated female warden supervision.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:bg-emerald-700"
          >
            Book Your Seat Now
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Facilities</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {girlsFacilities.map((facility) => (
                <div key={facility} className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  <span className="text-emerald-500">✓</span>
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Room Rent</h3>
            <div className="mt-4 space-y-3">
              {girlsPricing.map((row) => (
                <div key={row.type} className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm">
                  <span className="font-semibold text-slate-700">{row.type}</span>
                  <span className="font-bold text-emerald-700">{row.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Security Deposit: <span className="font-semibold">5,000 PKR (Refundable)</span>
              <p className="text-xs text-emerald-600">Refundable on 1-month notice.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">Girls Hostel Image Gallery</h3>
          <p className="mt-2 text-sm text-slate-600">Clean, well-lit rooms, dining, and study spaces.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {girlsGallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img src={image.src} alt={image.alt} className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="boys-hostel" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Adam Lodges Boys Hostel</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Affordable, modern living for male students</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Spacious rooms, dependable utilities, and healthy 3-time meals to support student life.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800"
          >
            Book Your Seat Now
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Facilities</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {boysFacilities.map((facility) => (
                <div key={facility} className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  <span className="text-emerald-500">✓</span>
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Seats Rent</h3>
            <div className="mt-4 space-y-3">
              {boysPricing.map((row) => (
                <div key={row.type} className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm">
                  <span className="font-semibold text-slate-700">{row.type}</span>
                  <span className="font-bold text-emerald-700">{row.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Security Deposit: <span className="font-semibold">10,000 PKR per seat (Refundable)</span>
              <p className="text-xs text-emerald-600">Refundable on 1-month notice.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">Boys Hostel Image Gallery</h3>
          <p className="mt-2 text-sm text-slate-600">Rooms, entrance, common areas, and laundry facilities.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {boysGallery.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img src={image.src} alt={image.alt} className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Student Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Real feedback from our residents</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Contact & WhatsApp</h2>
          <p className="mt-2 text-slate-600">
            Ready to book your seat or need more details? Send us a message and we will get back to you quickly.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Phone</label>
              <input
                type="tel"
                placeholder="03xx xxx xxxx"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us which hostel and room type you prefer."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200/50 transition hover:bg-emerald-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-emerald-700">Direct Contact</h3>
            <p className="mt-2 text-sm text-emerald-700">
              Call or WhatsApp us for quick assistance and availability updates.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="tel:+923001234567" className="block font-semibold text-emerald-700">📞 +92 300 1234567</a>
              <a href="https://wa.me/923001234567" className="block font-semibold text-emerald-700">💬 WhatsApp Now</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Book Your Seat Now</h3>
            <p className="mt-2 text-sm text-slate-600">
              Proceed to the booking page to reserve your seat with our team.
            </p>
            <Link
              to="/booking"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:bg-emerald-700"
            >
              Book Your Seat Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
