import React from 'react'

const ApprovalCard = (props: {btn?: string}) => {
    return (
        <div className='max-sm:w-full bg-gray-100 rounded-md p-5 m-1 ml-0'>
            <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3>
            <h3 className="text-md font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>@hengry</p> <p className="px-2 text-[12px]">24/23/23</p></div>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p></p> </div>

            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Personal Information</h3>
                <p className='text-[12px] p-1'>0x000..........3000<br />
                    email@gmail.com <br />
                    Ghana, Accra. Agbozume <br />
                    23 lov Street apt 23
                </p>
            </div>
            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Goal</h3>
                <p className='text-[12px] p-1'>The goal of this and this is the outline of the goals which we have in place for this project i will like to start something great</p>
            </div>
            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Description</h3>
                <p className='text-[12px] p-1'>The goal of this and this is the outline of the goals which we have in place for this project i will like to start something great</p>
            </div>

            <button className='w-full bg-blue-400 p-2 rounded-md font-medium mt-2'>{props.btn || "Join"}</button>

        </div>
    )
}

export default ApprovalCard