// components/FlightSearchForm.js
'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { RainbowKitButton } from './RainbowKitButton';

export default function FlightSearchForm() {
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuyTicket = () => {
    if (!isConnected) {
      alert('Connect wallet dulu untuk membeli tiket');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert('Pembayaran sukses! Tiket pesawat akan dikirim ke wallet Anda.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="text"
            name="from"
            placeholder="Asal Kota / Bandara"
            value={formData.from}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            name="to"
            placeholder="Tujuan Kota / Bandara"
            value={formData.to}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Departure</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Return</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleBuyTicket}
          disabled={!isConnected || loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition disabled:bg-green-400"
        >
          {loading ? 'Processing...' : 'Cari & Bayar Tiket'}
        </button>
      </form>
    </div>
  );
}