import Ledger from '@/components/board/ledger'
import OverviewBoard from '@/components/board/overview-board'
import Statistics from '@/components/board/statistics'
import PartnerCard from '@/components/card/partner-card'
import PartnerOverview from '@/components/card/partner-overview'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full h-[10rem] bg-white'></div>
      <div className='w-full h-full bg-red-300 p-2 flex xl:px-10'>

        <div className='w-[30rem] max-md:w-[20rem] bg-green-400 max-sm:hidden mr-2'>
          <PartnerOverview />
          <PartnerOverview />
          <PartnerOverview />
        </div>

        <div className='w-full'>
          <OverviewBoard />
          <div className='w-full bg-green-00 mt-2'>
            <div className='w-full h-[20rem] bg-gray-50 flex justify-center items-center'>img</div>
            <div className='p-2 bg-gray-500/40 rounded-b-md'>
            <div className='px-2 text-sm font-medium flex justify-start items-center'><div className='w-[5px] h-[5px] bg-green-500 animate-ping rounded-full mr-1'></div> Owner</div>
            <p className='px-4 text-sm font-medium text-gray-800'>Defining the problem and suggesting a way forward for people</p>
            </div>
          </div>

        </div>

        
        
{/*  
        max-lg :hidden 
*/}
        <div className='w-[40rem] bg-green-400 
        ml-2'>
          <Statistics />
          <Ledger />

        </div>

      </div>
    </>
  )
}

export default page