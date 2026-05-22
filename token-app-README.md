# Token App

A minimal Web3 frontend for interacting with an ERC20 token smart contract. Connect your wallet, check your balance, mint and burn tokens.

**Stack:** React, Vite, wagmi, RainbowKit, viem

---

## What it does

- Connect wallet via MetaMask or any supported wallet
- View your token balance in real time
- Mint tokens to your address
- Burn tokens from your address

---

## Setup

### 1. Deploy an ERC20 token

Deploy an OpenZeppelin ERC20 token to a testnet (e.g. Sepolia). The contract should have `mint`, `burn`, and `balanceOf` functions.

Copy the deployed contract address.

### 2. Configure the app

**Set your contract address** in `src/contract.js`:

```js
export const CONTRACT_ADDRESS = 'your_deployed_contract_address'
```

**Set your WalletConnect project ID** in `src/main.jsx`:

```js
projectId: 'your_walletconnect_project_id'
```

Get a free project ID at [cloud.walletconnect.com](https://cloud.walletconnect.com).

### 3. Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:5173`, connect your wallet (switch to Sepolia), and interact with the contract.

---

## Notes

- Make sure your wallet is on the same network as the deployed contract
- Only the contract owner can mint tokens
- Any address can burn their own tokens
