// components/EventCard.js
'use client';

import { useAccount, useWriteContract } from 'wagmi';
import { erc20Abi } from '../utils/erc20Abi';

export default function EventCard({ event }) {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // Ganti dengan alamat kontrak USDC di jaringan testnet
  const usdcContractAddress = '0x1c7D4B196Cb0C7B01d749E21f51b72A58e95d07F39e02e6b0'; // USDC Sepolia
  const ticketPriceInUSDC = BigInt(1_000_000); // 1 USDC (6 desimal)

  const handleBuyTicket = async () => {
    if (!address) {
      alert('Silakan connect wallet Anda dulu.');
      return;
    }

    try {
      const txHash = await writeContractAsync({
        abi: erc20Abi,
        address: usdcContractAddress,
        functionName: 'transfer',
        args: [
          '0xAbcdef1234567890Abcdef1234567890Abcdef12', // Ganti dengan alamat merchant/tujuan
          ticketPriceInUSDC
        ],
      });

      alert('Pembayaran berhasil! 🎫 Tiket NFT akan dikirim ke wallet Anda.');

      console.log('Transaction Hash:', txHash);
    } catch (error) {
      console.error(error);
      alert('Transaksi dibatalkan atau gagal. Cek konsol untuk detailnya.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <p className="text-gray-600 mt-1">{event.location}</p>
        <button
          onClick={handleBuyTicket}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Buy Ticket with USDC
        </button>
      </div>
    </div>
  );
}