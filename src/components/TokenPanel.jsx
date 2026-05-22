import { useState } from 'react'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { parseUnits, formatUnits } from 'viem'
import { CONTRACT_ADDRESS, TOKEN_ABI } from '../contract'

function TokenPanel() {
  const { address } = useAccount()
  const [mintAmount, setMintAmount] = useState('')
  const [burnAmount, setBurnAmount] = useState('')

  const { data: balance, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
  })

  const { writeContract } = useWriteContract()

  const handleMint = () => {
    console.log('mint clicked', mintAmount)
    writeContract({
        address: CONTRACT_ADDRESS,
        abi: TOKEN_ABI,
        functionName: 'mint',
        args: [address, parseUnits(mintAmount, 18)],
    }, { 
        onSuccess: () => refetch(),
        onError: (err) => console.log('error', err)
    })
  }

  const handleBurn = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: TOKEN_ABI,
      functionName: 'burn',
      args: [parseUnits(burnAmount, 18)],
    }, { onSuccess: () => refetch() })
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <p>Balance: {balance ? formatUnits(balance, 18) : '0'} STT</p>

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          placeholder="Amount to mint"
          value={mintAmount}
          onChange={e => setMintAmount(e.target.value)}
        />
        <button onClick={handleMint}>Mint</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          placeholder="Amount to burn"
          value={burnAmount}
          onChange={e => setBurnAmount(e.target.value)}
        />
        <button onClick={handleBurn}>Burn</button>
      </div>
    </div>
  )
}

export default TokenPanel