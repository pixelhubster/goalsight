import React from 'react'

const PostCard = () => {
    return (
        <div className='w-full bg-green-00 mt-2'>
            <div className='w-full h-[20rem] bg-gray-50 flex justify-center items-center'>img</div>
            <div className='p-2 bg-gray-500/40 rounded-b-md'>
                <div className='px-2 text-sm font-medium flex justify-start items-center'><div className='w-[5px] h-[5px] bg-green-500 animate-ping rounded-full mr-1'></div> Owner</div>
                <p className='px-4 text-sm font-medium text-gray-800'>Defining the problem and suggesting a way forward for people</p>
            </div>
        </div>
    )
}

export default PostCard