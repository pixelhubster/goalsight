import React from 'react'

const PartnerOverview = (props: {goal: string, name: string, location: {country: string, city: string}}) => {
    return (
        <div className='w-full bg-white rounded-md p-2 mb-2'>

            <div className="w-full h-[3rem] bg-red-00 p-2 flex items-start justify-center outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-2 cursor-pointer">
                <div className='w-[2.5rem] h-full bg-green-500 p-2 rounded-full flex justify-center items-center mr-1'>a</div>
                <div className='w-full h-full bg-green-00'>
                    <div className='bg-gray-00 h-full flex font-medium items-center shadow-sm w-full p-1 overflow-hidden text-ellipsis text-nowrap'>{props.name}</div>
                </div>
            </div>

            <div className='px-2'>
                <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.location.city}, {props.location.country}</p> 
                {/* <p className="px-2 text-[12px]">24 views</p>  */}
                </div>
            </div>
            <div className='px-2 bg-gray-300/30 rounded-md py-3'>
                <h3 className='text-[14px] font-mono'>Goal</h3>
                <p className='text-[12px] p-1'>{props.goal}</p>
            </div>


        </div>
    )
}

export default PartnerOverview