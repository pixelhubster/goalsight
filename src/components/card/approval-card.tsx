"use client"
import React, { useEffect, useState } from 'react'
import { daoContract, daoWalletContract, web3 } from '@/app/backend/init';
async function fetch(id: number) {
    const result = await daoContract.methods.getPartnerVote(id).call()
    return result;
}
async function approve(id: number) {
    const result = await daoWalletContract.methods.approveGoal(id).send({})
}
async function reject(id: number) {
    const result = await daoWalletContract.methods.approveGoal(id).send({})
}

const ApprovalCard = (props: {btn?: string, name: string, description: string, goal: string, location: any, email: string, date: string , owner: string, approved: boolean, id: number}) => {
    const [partners, setPartners] = useState<any>(null);
    const truncate = props.owner.slice(0,4) + "..." + props.owner.slice(-3);
    const createdAt = web3.utils.toNumber(props.date);
    const date = new Date(createdAt as number * 1000);
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(props.id);
            setPartners(result)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='max-sm:w-full bg-gray-100 rounded-md p-5 m-1 ml-0'>
            <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-medium">{props.name}</h3>
            {/* <h3 className="text-md font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3> */}
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.owner}</p> <p className="px-2 text-[12px]">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p></div>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p></p> </div>

            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Personal Information</h3>
                <p className='text-[12px] p-1'>{props.owner}<br />
                    {props.email}<br />
                    {props.location.city}, {props.location.country}<br />
                    {props.location.state},<br/>
                    {props.location.locationAddress},<br/>
                    {props.location.locationAddress2}
                </p>
            </div>
            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Goal</h3>
                <p className='text-[12px] p-1'>{props.goal}</p>
            </div>
            <div className='px-2 bg-gray-300/30 rounded-md py-3 mb-1'>
                <h3 className='text-[14px] font-mono'>Description</h3>
                <p className='text-[12px] p-1'>{props.description}</p>
            </div>
            {props.approved ? (
                <button className='w-full bg-blue-400 p-2 rounded-md font-medium mt-2'>{props.btn || "Join"}</button>
            ): (
                <div className='flex'>
                    <button className='w-full bg-green-400 p-2 rounded-md font-medium mt-2 ml-2'>approve {partners && (web3.utils.toNumber(partners.approve))}</button>
                    <button className='w-full bg-red-300 p-2 rounded-md font-medium mt-2 ml-2'>reject {partners && (web3.utils.toNumber(partners.reject))}</button>
                </div>
            )}

        </div>
    )
}

export default ApprovalCard