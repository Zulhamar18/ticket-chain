// components/Header.tsx
'use client';

import { useAccount } from 'wagmi';
import { RainbowKitButton } from './RainbowKitButton';

export default function Header() {
  const { address, isConnected } = useAccount();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold">🎫 Ticket Chain</h1>
        {isConnected ? (
          <span className="text-sm text-gray-600">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
        ) : (
          <RainbowKitButton />
        )}
      </div>
    </header>
  );
}