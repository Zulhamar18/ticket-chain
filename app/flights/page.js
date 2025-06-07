// app/flights/page.js
import Header from '../../components/Header';
import FlightSearchForm from '../../components/FlightSearchForm';

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">✈️ Cari Tiket Pesawat</h1>
        <FlightSearchForm />
      </div>
    </main>
  );
}