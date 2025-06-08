// app/page.tsx
'use client';

import Header from '../components/Header';
import EventCard from '../components/EventCard';
import FlightSearchForm from '../components/FlightSearchForm';

export default function Home() {
  const events = [
    {
      name: 'Bayern vs Hertha',
      location: 'Germany',
      image: '/bayern-hertha.jpg', // ✅ Pastikan gambar ini ada di public/
      price: '1 USDC'
    },
    {
      name: 'John Wick 4',
      location: 'Global',
      image: '/john-wick-4.jpg', // ✅ Pastikan gambar ini ada di public/
      price: '2 USDC'
    },
    {
      name: 'Sonus Festival',
      location: 'Croatia',
      image: '/sonus-festival.jpg', // ✅ Pastikan gambar ini ada di public/
      price: '3 USDC'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-6">

        {/* Form Pencarian Tiket Pesawat */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">✈️ Cari Tiket Pesawat</h2>
          <FlightSearchForm />
        </section>

        {/* Daftar Event */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">🎫 Events & Concerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}