'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig } from 'wagmi';
import { mainnet, polygon, arbitrum } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { http } from 'viem';

const config = createConfig({
  chains: [mainnet, polygon, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[mainnet, polygon, arbitrum]}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}