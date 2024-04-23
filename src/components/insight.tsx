"use client"
import { contract, walletContract, web3 } from '@/app/backend/init'
import Ledger from '@/components/board/ledger'
import OverviewBoard from '@/components/board/overview-board'
import Statistics from '@/components/board/statistics'
import PartnerOverview from '@/components/card/partner-overview'
import React, { useEffect, useState } from 'react'

async function fetch(id: number) {
  const goal = await contract.methods.getGoal(id).call();
  return goal;
}
async function fetchPartner(id: number) {
  const result = await contract.methods.getPartner(id).call();
  return result;
}
const Insight = ({ id }: { id: number | undefined }) => {
  const [goal, setGoal] = useState<any>(null);
  const [partners, setPartners] = useState<Array<any>>([]);
  const [pending, setPending] = useState<Array<any>>([]);
  const [accounts, setAccounts] = useState<Array<string>>([]);
  let date: any = goal ? web3.utils.toNumber(goal?.createdAt) : 0;
  date = new Date(date as number * 1000);
  async function ft() {
    const result = await fetch(id as number).then(async (response) => {
      console.log(response)
      for (let i = 0; i < (response as any).partners.length; i++) {
        let res = await fetchPartner(response.partners[i]);
        setPartners([...partners, res])
        console.log("partnerfetch", partners);
      }
      for (let i = 0; i < (response as any).onWait.length; i++) {
        console.log(response.onWait.length)
        let res = await fetchPartner(response.onWait[i]);
        console.log(res)
        setPending([...pending, res])
        console.log("pendingfetch", pending);
      }
      return response;
    });
    const acc = await window.ethereum.request({ method: "eth_requestAccounts"})
    setAccounts(acc);
    setGoal(result);
  }
  useEffect(() => {
    ft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className='w-full h-[10rem] bg-green-300'></div>
      <div className='w-full h-full bg-gray-50 p-2 flex xl:px-10'>

        <div className='w-[30rem] max-md:w-[20rem] bg-green-00 max-sm:hidden mr-2'>
          Approved<br/>
          {partners.map((partner, key) => (
            <PartnerOverview key={key} {...partner} account={accounts[0]}/>
          ))}
          Pending
          {pending.map((partner, key) => (
            <PartnerOverview key={key} {...partner} account={accounts[0]} pending={true}/>
          ))}

        </div>

        <div className='w-full'>
          <OverviewBoard id={id as number} data={goal} />
          {/* <PostCard /> */}
        </div>

        <div className='w-[40rem] bg-green-00 max-lg:hidden ml-2'>
          <Statistics balance={goal?.balance} partner={goal?.partners.length} />
          <Ledger />
        </div>

      </div>
    </>
  )
}

export default Insight;