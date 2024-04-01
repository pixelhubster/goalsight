import React from 'react'

const PartnerForm = () => {
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Description of Insight</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800'>Partner</label>
                <div className='flex flex-wrap'>
                    <div className='bg-gray-200 shadow-sm w-fit p-1 px-2 rounded-md m-1 overflow-hidden text-ellipsis max-w-[10rem] text-nowrap cursor-pointer'>hospital name is too long and too long</div>
                </div>
            </div>
        </div>
    )
}

export default PartnerForm