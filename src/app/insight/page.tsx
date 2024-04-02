import OverviewBoard from '@/components/board/overview-board'
import PartnerCard from '@/components/card/partner-card'
import PartnerOverview from '@/components/card/partner-overview'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full h-[10rem] bg-white'></div>
      <div className='w-full h-full bg-red-300 p-2 flex '>
        <div className='w-[30rem] bg-green-400'>
          <PartnerOverview />
          <PartnerOverview />
          <PartnerOverview />
        </div>
        <OverviewBoard />
        <div className='w-[40rem] bg-green-400'>
          <div className='w-full h-[20rem] bg-white rounded-md p-2 mb-2'>
          </div>
        </div>
      </div>
    </>
  )
}

export default page