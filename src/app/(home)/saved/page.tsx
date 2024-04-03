import InsightCard from '@/components/card/insight-card'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='customgrid w-full'>
      <InsightCard />
      <InsightCard />
      <InsightCard />
    </div>
    </>
  )
}

export default page