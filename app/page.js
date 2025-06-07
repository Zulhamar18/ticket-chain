import Header from '../components/Header';
import TicketSearchForm from '../components/TicketSearchForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Ticket Chain</h1>
        <TicketSearchForm />
      </div>
    </main>
  );
}