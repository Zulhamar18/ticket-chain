// components/Header.js
'use client';

import { useAccount } from 'wagmi';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Tambahkan ini
import { RainbowKitButton } from './RainbowKitButton'; // ✅ Import komponen tombol wallet connection

export default function Header() {
  const { address, isConnected } = useAccount();

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center max-w-6xl mx-auto rounded-lg border">
      <div className="flex items-center space-x-2">
        {/* ✅ Pastikan kamu punya logo di public/ticket-chain-logo.png */}
        <Image src="/ticket-chain-logo.png" alt="Ticket Chain Logo" width={32} height={32} />
        <h1 className="text-xl font-semibold">Ticket Chain</h1>
      </div>

      <nav className="space-x-6">
        <Link href="/" className="font-semibold hover:text-blue-600">Home</Link>
        <Link href="/flights" className="font-semibold hover:text-blue-600">Flights</Link>
        <Link href="/events" className="font-semibold hover:text-blue-600">Events</Link>
      </nav>

      <div>
        {isConnected ? (
          <span className="text-sm text-gray-600">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
        ) : (
          <RainbowKitButton />
        )}
      </div>
    </header>
  );
}