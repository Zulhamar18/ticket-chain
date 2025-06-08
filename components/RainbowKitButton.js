// components/RainbowKitButton.tsx
'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function RainbowKitButton() {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => (
        <button
          onClick={openConnectModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>
      )}
    </ConnectButton.Custom>
  );
}