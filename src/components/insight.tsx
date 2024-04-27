import { contract, web3 } from '@/app/backend/init'
import Ledger from '@/components/board/ledger'
import OverviewBoard from '@/components/board/overview-board'
import Statistics from '@/components/board/statistics'
import PartnerOverview from '@/components/card/partner-overview'
import React from 'react'
import Image from 'next/image'
async function fetch(id: number) {
  const goal = await contract.methods.getGoal(id).call();
  return goal;
}
async function fetchPartner(id: number) {
  const result = await contract.methods.getPartner(id).call();
  return result;
}
const Insight = async ({ id }: { id: number | undefined }) => {
  let goal: any;
  let partners: any = [];
  let pending: any = [];
  let accounts = [""];
  async function run() {
    const result = await fetch(id as number).then(async (response) => {
      for (let i = 0; i < (response as any).partners.length; i++) {
        let res = await fetchPartner(response.partners[i]);
        partners.push(res)
      }
      for (let i = 0; i < (response as any).onWait.length; i++) {
        let res = await fetchPartner(response.onWait[i]);
        pending.push(res)
      }
      return response;
    });
    let date: any = goal ? web3.utils.toNumber(goal?.createdAt) : 0;
    date = new Date(date as number * 1000);
    goal = result;
  }
  await run();
  return (
    <>
      <div className='w-full h-[10rem] bg-green-300'>
        <Image src={`/images/${id}.jpg`} alt={''} width={0} height={0} style={{ width: '100%', height: '100%'}}/>
      </div>
      <div className='w-full h-full bg-[#FAF5FF] p-2 flex xl:px-10 justify-center rounded-md'>
        <div className='w-full md:w-[80%] lg:w-[65%] bg-white shadow-md overflow-hidden'>
          <OverviewBoard id={id as number} data={goal} />
          <Statistics balance={goal.balance} partner={goal.partners.length} onWait={goal.onWait.length} id={id as number} hasEnded={goal.hasEnded} />
          <div className='w-full flex flex-col px-5'>
            {partners && (
              <>
                <p className='text-[12px] text-gray-500 p-2'>Approved</p>
                <div className='flex flex-col mr-2 customgrid'>
                  {partners.map((partner: any, key: number) => (
                    <PartnerOverview key={key} {...partner} account={accounts[0]} id={key} />
                  ))}
                </div>
              </>
            )}

            {pending && (
              <>
                <p className='text-[12px] text-gray-500 p-2'>Pending</p>
                <div className='flex flex-col customgrid'>
                  {pending.map((partner: any, key: number) => (
                    <PartnerOverview key={key} {...partner} id={key} account={accounts[0]} pending={true} />
                  ))}
                </div>
              </>
            )}
          </div>
          <Ledger id={id as number}/>

        </div>
      </div>
    </>
  )
}

export default Insight;