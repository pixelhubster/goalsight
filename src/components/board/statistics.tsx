import React from 'react'

const Statistics = () => {
    return (
        <div className='w-full bg-white rounded-md p-2 mb-2'>

            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-2'>
                <h3 className='text-[14px] font-mono'>Raised</h3>
                <h4 className='text-3xl'>$231</h4>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-2 w-full mr-2'>
                    <h4 className='text-xl'>231</h4>
                    <h3 className='text-[12px] font-mono'>Partners</h3>
                </div>
                <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-2 w-full mr-2'>
                    <h4 className='text-xl'>231</h4>
                    <h3 className='text-[12px] font-mono'>Contributors</h3>
                </div>
                <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-2 w-full'>
                    <h4 className='text-xl'>231</h4>
                    <h3 className='text-[12px] font-mono'>Partners</h3>
                </div>
            </div>

            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-2'>
                <h3 className='text-[14px] font-mono text-gray-800'>Gratitude</h3>
                <h4 className='text-[14px]'>
                    The insight community views your donation as
                    a life saver this project helps resolve so many isssues and provide life,
                    food and hope to people all over the world. The world is gratiful to have you.
                </h4>
            </div>


            <button className='w-full bg-blue-400 p-2 rounded-md font-medium'>Contribute</button>
        </div>
    )
}

export default Statistics