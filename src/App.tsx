import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmiConfig';
import { ConnectButton } from './components/ConnectButton';
// v-- 1. 导入新组件
import { SmartContractInteraction } from './components/SmartContractInteraction';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <h1>我的第一个 dApp</h1>
        <ConnectButton />
        {/* v-- 2. 在这里显示它 */}
        <SmartContractInteraction />
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export default App;