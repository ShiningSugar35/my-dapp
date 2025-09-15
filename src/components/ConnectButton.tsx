import { useAccount, useConnect, useBalance } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect } from 'react';
import { formatEther } from 'viem';
import { publicClient } from '../wagmiConfig';

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, error, isPending } = useConnect();
  // v-- 1. 从 useBalance 中解构出 isError 状态
  const { data: balance, isError: isBalanceError } = useBalance({ address });

  useEffect(() => {
    if (address) {
      console.log(`检测到地址变化: ${address}`);
      const getBalanceFromViem = async () => {
        console.log('正在用 viem 直接查询余额...');
        const wei = await publicClient.getBalance({ address });
        const eth = formatEther(wei);
        console.log(`查询成功！余额是: ${eth} ETH`);
      };
      getBalanceFromViem();
    }
  }, [address]);

  return (
    <div>
      {isConnected ? (
        <div>
          <p>已连接: {address}</p>
          {balance && (
            <p>
              余额: {balance.formatted} {balance.symbol}
            </p>
          )}
          {/* v-- 2. 新增：当余额加载失败时显示提示 */}
          {isBalanceError && <p>余额加载失败，请刷新重试</p>}
        </div>
      ) : (
        <button
          onClick={() => connect({ connector: injected() })}
          disabled={isPending} // 当正在连接时，禁用按钮防止重复点击
        >
          {isPending ? '连接中…' : 'Connect Wallet'}
        </button>
      )}

      {/* v-- 3. 优化：连接失败时，显示更友好的通用提示 */}
      {error && <p>连接失败: 用户取消或发生未知错误。</p>}
    </div>
  );
}