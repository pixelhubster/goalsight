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

// async function fetch(smartcontract: any, id: number) {
//     const result = await smartcontract.methods.getGoal(id).call().then((res: Response)=> {
//         console.log(res);
//         return result;
//     }).catch((err: Error) => {
//         console.log(err)
//         return null
//     });
// }
const Insight = ({ id }: { id: number | undefined }) => {
  // const [partner, setGoal] = useState<any>(null);
  // useEffect(() => {
  //     const fetchData = async () => {
  //         if (typeof id != undefined) {
  //             const result = await fetch(walletContract, id as number);
  //             setGoal(result);
  //         }
  //     }
  //     fetchData();
  // })
  const [goal, setGoal] = useState<any>(null);
  const [partners, setPartners] = useState<Array<any>>([]);
  let date: any = goal ? web3.utils.toNumber(goal?.createdAt) : 0;
  date = new Date(date as number * 1000);
  async function ft() {
    const result = await fetch(id as number).then(async (response) => {
      for (let i = 0; i < (response as any).partners.length; i++) {
        let res = await fetchPartner(goal.partner[i]);
        setPartners([...partners, res])
        console.log("partnerfetch", partners);
      }
      return response;
    });
    setGoal(result);
  }
  useEffect(() => {
    ft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className='w-full h-[10rem] bg-green-300'>{id}</div>
      <div className='w-full h-full bg-gray-50 p-2 flex xl:px-10'>

        <div className='w-[30rem] max-md:w-[20rem] bg-green-00 max-sm:hidden mr-2'>
          {partners.map((partner, key) => (
          <PartnerOverview key={key} {...partner}/>
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