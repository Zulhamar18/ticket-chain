## Pembayaran Tiket dengan USDC

Proyek ini menggunakan **USDC testnet** untuk pembayaran tiket melalui **MetaMask Card**.

### Kontrak Pintar
- USDC Transfer: `transfer(address,uint256)`
- NFT Tiket: `mintTicket(address)` → setelah pembayaran sukses

### Teknologi
- Wagmi / RainbowKit → wallet integration
- LI.FI SDK → cross-chain payments (Track 4)
- Next.js App Router + Tailwind CSS