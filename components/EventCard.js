// components/EventCard.js
'use client';

import Image from 'next/image'; // ✅ Ganti <img> dengan <Image />
import { useAccount, useWriteContract } from 'wagmi';
import { erc20Abi } from '../utils/erc20Abi';

export default function EventCard({ event }) {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // ✅ Alamat kontrak USDC Sepolia (cek validitasnya)
  const usdcContractAddress = '0x1c7D4B196Cb0C7B01d749E21f51b72A58e95d07F39e02e6b0';

  // 1 USDC = 1_000_000 (karena USDC punya 6 desimal)
  const ticketPriceInUSDC = BigInt(1_000_000); 

  const handleBuyTicket = async () => {
    if (!isConnected) {
      alert('Connect wallet dulu untuk membeli tiket');
      return;
    }

    try {
      const txHash = await writeContractAsync({
        abi: erc20Abi,
        address: usdcContractAddress,
        functionName: 'transfer',
        args: [
          '0xMerchantAddressHere', // Ganti dengan alamat merchant
          ticketPriceInUSDC
        ],
      });

      alert('Pembayaran berhasil! Tiket NFT akan dikirim ke wallet Anda.');
      console.log('Transaction Hash:', txHash);
    } catch (error) {
      console.error(error);
      alert('Transaksi dibatalkan atau gagal. Cek konsol untuk detailnya.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* ✅ Gunakan <Image /> untuk gambar lebih cepat */}
      <Image
        src={event.image}
        alt={event.name}
        width={800}
        height={450}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <p className="text-gray-600 mt-1">{event.location}</p>
        <button
          onClick={handleBuyTicket}
          disabled={!isConnected}
          className={`mt-4 w-full py-2 px-4 rounded ${
            !isConnected ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition`}
        >
          {isConnected ? 'Buy Ticket with USDC' : 'Connect Wallet First'}
        </button>
      </div>
    </div>
  );
}