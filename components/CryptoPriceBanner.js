// components/CryptoPriceBanner.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface Prices {
  eth: string;
  matic: string;
  usdc: string;
}

export default function CryptoPriceBanner() {
  const [prices, setPrices] = useState<Prices>({
    eth: '--',
    matic: '--',
    usdc: '--'
  });

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cmatic-network%2Cusd-coin&vs_currencies=usd'
        );

        if (!res.ok) throw new Error('Gagal ambil data harga');

        const data = await res.json();

        setPrices({
          eth: data.ethereum.usd.toLocaleString(),
          matic: data['matic-network'].usd.toFixed(2),
          usdc: data['usd-coin'].usd.toFixed(2)
        });
      } catch (error) {
        console.error('Gagal fetch harga crypto:', error);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update setiap 1 menit

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 text-center py-2 text-sm font-medium text-blue-800 border-b border-gray-200">
      💱 Harga Terkini: ETH: ${prices.eth} | MATIC: ${prices.matic} | USDC: ${prices.usdc}
    </div>
  );
}