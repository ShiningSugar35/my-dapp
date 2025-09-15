import { useState, useEffect } from 'react';
import { useWriteContract, useReadContract } from 'wagmi';

const contractAddress = '0x4BCa6033a73fA3ED20Ac90Abf20DA5DAdB40F457';
const contractABI = [{"inputs":[{"name":"value","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

export function SmartContractInteraction() {
  const [inputValue, setInputValue] = useState('');
  const { data: hash, isPending, isSuccess, error, writeContract } = useWriteContract();
  const { data: storedValue, refetch } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: 'get',
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('写入成功，正在重新获取最新值...');
      refetch();
    }
  }, [isSuccess, refetch]);

  async function handleWrite() {
    if (!inputValue) {
      alert('请输入一个数字！');
      return;
    }
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: 'set',
      args: [BigInt(inputValue)],
    });
  }

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid grey' }}>
      <h3>与智能合约交互</h3>
      {/* v-- 这里是唯一的修改！
        我们增加了一个更严格的检查：不仅要判断 storedValue 不是 undefined，还要判断它不是 null。
        `storedValue != null` 这个写法可以同时判断 undefined 和 null 两种情况。
      */}
      <p>当前存储的值: {storedValue != null ? storedValue.toString() : '加载中...'}</p>
      
      <div>
        <input
          type="number"
          placeholder="输入一个数字"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleWrite} disabled={isPending}>
          {isPending ? '交易发送中...' : '写入新值'}
        </button>
      </div>

      {hash && <p>交易 Hash: {hash}</p>}
      {isSuccess && <p>交易成功！</p>}
      {error && <p>错误: {error.message}</p>}
    </div>
  );
}