import { createConfig, http } from 'wagmi';
// v-- 从 'viem' 导入 createPublicClient，而不是 'wagmi'
import { createPublicClient } from 'viem'; 
import { sepolia } from 'wagmi/chains';

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});