"use client"
import React, { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { walletContract, web3 } from '../app/backend/init';

async function fetch(smartcontract: any) {
  const accounts = await window.ethereum.request({ method: 'eth_accounts'});
  const reputation = await smartcontract.methods.getReputation().call({ from: accounts[0]});
  return reputation;
}
const Navbar = () => {
  const [reputation, setReputation] = useState<any>(null);
  async function ft() {
    const result = await fetch(walletContract);
    const r = web3.utils.toNumber(result);
    setReputation(r);
  }
  useEffect(() => {
    ft();
  }, [])
  return (
    <div className="w-full h-[5rem] bg-white/40 backdrop-blur-md px-10 max-md:px-5 flex justify-between items-center fixed z-1 shadow-sm">
      <div className='font-semibold text-md'>GoalSight</div>
      <div className="bg-red-00 w-fit px-2 flex">
        <ConnectButton />
        <div className='h-full p-2 mx-2 rounded-md bg-white flex shadow-md'>{reputation}&nbsp;<b>R</b></div>
      </div>
    </div>
    /*  */
  )
}

export default Navbar