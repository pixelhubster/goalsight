import Ledger from '@/components/board/ledger'
import OverviewBoard from '@/components/board/overview-board'
import Statistics from '@/components/board/statistics'
import PartnerOverview from '@/components/card/partner-overview'
import PostCard from '@/components/card/post-card'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full h-[10rem] bg-green-300'></div>
      <div className='w-full h-full bg-gray-50 p-2 flex xl:px-10'>

        <div className='w-[30rem] max-md:w-[20rem] bg-green-00 max-sm:hidden mr-2'>
          <PartnerOverview />
          <PartnerOverview />
          <PartnerOverview />
        </div>

        <div className='w-full'>
          <OverviewBoard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        
        
        <div className='w-[40rem] bg-green-00 max-lg:hidden ml-2'>
          <Statistics />
          <Ledger />

        </div>

      </div>
    </>
  )
}

export default page