import ApprovalCard from '@/components/card/approval-card'
import React from 'react'

const page = () => {
    return (
        <>
    
            <div className='m-1'>Goals</div>
            <div className='customgridApprovalCard w-full'>
                {/* <ApprovalCard btn='Approve' /> */}
            </div>
            <div className='m-1'>Partners</div>
            <div className='customgridApprovalCard w-full'>
                {/* <ApprovalCard btn='Approve' /> */}
            </div>
        </>
    )
}

export default page