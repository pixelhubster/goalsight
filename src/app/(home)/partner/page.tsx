import ApprovalCard from '@/components/card/approval-card'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='customgridApprovalCard w-full'>
        <ApprovalCard />
        <ApprovalCard btn='Join as Partner'/>
        <ApprovalCard />
    </div>
    </>
  )
}

export default page