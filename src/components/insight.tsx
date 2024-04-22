"use client"
import { walletContract } from '@/app/backend/init'
import Ledger from '@/components/board/ledger'
import OverviewBoard from '@/components/board/overview-board'
import Statistics from '@/components/board/statistics'
import PartnerOverview from '@/components/card/partner-overview'
import React, { useEffect, useState } from 'react'

async function fetch(smartcontract: any, id: number) {
    const result = await smartcontract.methods.getGoal(id).call().then((res: Response)=> {
        console.log(res);
        return result;
    }).catch((err: Error) => {
        console.log(err)
        return null
    });
}
const Insight = ({id}: {id: number | undefined}) => {
    const [goal, setGoal] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            if (typeof id != undefined) {
                const result = await fetch(walletContract, id as number);
                setGoal(result);
            }
        }
        fetchData();
    })
  return (
    <>
      <div className='w-full h-[10rem] bg-green-300'>{id}</div>
      <div className='w-full h-full bg-gray-50 p-2 flex xl:px-10'>

        <div className='w-[30rem] max-md:w-[20rem] bg-green-00 max-sm:hidden mr-2'>
          <PartnerOverview />
          <PartnerOverview />
          <PartnerOverview />
        </div>

        <div className='w-full'>
          <OverviewBoard />
          {/* <PostCard /> */}
        </div>

        <div className='w-[40rem] bg-green-00 max-lg:hidden ml-2'>
          <Statistics />
          <Ledger />

        </div>

      </div>
    </>
  )
}

export default Insight;