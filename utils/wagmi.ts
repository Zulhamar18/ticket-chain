// utils/wagmi.ts
import { createConfig } from 'wagmi';
import { http } from 'viem';
import {
  mainnet,
  sepolia,
  polygonMumbai,
  arbitrumSepolia,
} from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, polygonMumbai, arbitrumSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
});