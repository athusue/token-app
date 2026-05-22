import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import TokenPanel from './components/TokenPanel'

function App() {
  const { isConnected } = useAccount()

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Token App</h1>
      <ConnectButton />
      {isConnected && <TokenPanel />}
    </div>
  )
}

export default App