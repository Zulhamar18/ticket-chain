// components/Header.js
'use client';

import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function Header() {
  const { address, isConnected } = useAccount();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
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
      </div>
    </header>
  );
}