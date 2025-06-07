'use client';

import { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import { erc20Abi } from '../utils/erc20Abi';

export default function TicketSearchForm() {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  // Alamat kontrak USDC (Sepolia Testnet)
  const usdcContractAddress = '0x1c7D4B196Cb0C7B01d749E21f51b72A58e95d07F39e02e6b0';

  const { writeContractAsync } = useWriteContract();

  const handleBuyTicket = async () => {
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }

    setLoading(true);

    try {
      const txHash = await writeContractAsync({
        abi: erc20Abi,
        address: usdcContractAddress,
        functionName: 'transfer',
        args: [
          '0xAbcdef1234567890Abcdef1234567890Abcdef12', // Ganti dengan alamat merchant
          BigInt(1_000_000), // 1 USDC (6 desimal)
        ],
      });

      console.log('Transaction Hash:', txHash);
      alert('Payment successful! 🎫 NFT e-ticket will be minted soon!');
    } catch (error) {
      console.error(error);
      alert('Payment failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Your Ticket</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="text"
            placeholder="City or Airport"
            disabled
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            placeholder="City or Airport"
            disabled
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Departure</label>
            <input
              type="date"
              disabled
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Return</label>
            <input
              type="date"
              disabled
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleBuyTicket}
          disabled={loading}
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:bg-green-400"
        >
          {loading ? 'Processing...' : 'Buy Ticket with USDC'}
        </button>
      </div>
    </div>
  );
}