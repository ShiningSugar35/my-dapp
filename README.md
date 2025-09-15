# Web3 DApp: Wallet Portal & Smart Contract Interface

This project is a foundational Web3 decentralized application built from scratch to demonstrate core blockchain interaction concepts. It serves as the front-end gateway for users to connect their wallets and interact with on-chain data and smart contracts.

---

## Live Demo

**[Click here to visit the live application deployed on Vercel](https://my-dapp-1nn4mv0rd-shiningsugars-projects.vercel.app)**

---

## Features

This single application showcases two core portfolio pieces:

### 1. Portfolio Piece #1: Web3 Identity & Asset Portal
- **Wallet Connection:** Connects to user's MetaMask wallet via `wagmi`.
- **Account Display:** Fetches and displays the user's connected wallet address and real-time ETH balance from the Sepolia testnet.
- **Robust UX:** Includes user-friendly error handling for scenarios like rejected connection requests.

### 2. Portfolio Piece #2: On-Chain State Read/Write Controller
- **Smart Contract Interaction:** Integrates with a custom `SimpleStorage` smart contract deployed on the Sepolia testnet.
- **Write Operations:** Allows users to input a number and send a transaction via `useWriteContract` to update the state variable on the blockchain.
- **Read Operations & State Sync:** Uses `useReadContract` to read the current state from the contract. The UI automatically refreshes with the new value after a successful write transaction, demonstrating a full read/write loop.

---

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Web3 Libraries:** wagmi, viem
- **Deployment:** Vercel

---

## Getting Started

1.  **Clone the repo:**
    ```bash
    git clone [Your Repository URL]
    ```
2.  **Navigate to the directory:**
    ```bash
    cd my-dapp
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the dev server:**
    ```bash
    npm run dev
    ```