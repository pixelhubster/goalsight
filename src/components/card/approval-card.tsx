import React from 'react'
import { web3 } from '@/app/backend/init';
import PartnerButton from './partner-button';

const ApprovalCard = (props: { btn?: string, name: string, description: string, goal: string, location: any, email: string, createdAt: string, owner: string, approved: boolean, id: number }) => {
    const truncate = props.owner.slice(0, 4) + "..." + props.owner.slice(-3);
    const createdAt = web3.utils.toNumber(props.createdAt);
    const date = new Date(createdAt as number * 1000);
    return (
        <div className='max-sm:w-full bg-white shadow-lg rounded-md p-4 m-1 ml-0 h-fit pt-6'>
            <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-medium">{props.name}</h3>
            {/* <h3 className="text-md font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3> */}
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{truncate}</p> <p className="px-2 text-[12px]">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p></div>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p></p> </div>

            <div className='px-2 bg-gray-00/30 rounded-md py-1 mb-1'>
                <h3 className='text-[14px] font-mono'>Goal</h3>
                <p className='text-[12px] p-1 overflow-hidden text-ellipsis line-clamp-4'>{props.goal}</p>
            </div>
            <div className='px-2 bg-gray-00/30 rounded-md py-1 mb-1'>
                <h3 className='text-[14px] font-mono'>Description</h3>
                <h3 className='text-[12px] p-1 overflow-hidden text-ellipsis line-clamp-4'>{props.description}</h3>
            </div>
            <div className='px-2 bg-gray-00/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Personal Information</h3>
                <p className='text-[12px] p-1'>{truncate} &nbsp; 
                    {props.email}<br />
                    {props.location.city}, {props.location.state},{props.location.country}<br />
                    {props.location.locationAddress} / {props.location.locationAddress2}
                </p>
            </div>
            <PartnerButton approved={props.approved} id={props.id} />
        </div>
    )
}

export default ApprovalCard