"use client"
import React, { useEffect, useState } from 'react'
import BookmarkCard from './bookmark-card'
import { daoContract, daoWalletContract, walletContract, web3 } from '@/app/backend/init'
async function fetch(id: number) {
    const result = await daoContract.methods.getGoalVote(id).call()
    return result;
}
async function approve(id: number) {
    const result = await daoWalletContract.methods.approveGoal(id).send({})
}
async function reject(id: number) {
    const result = await daoWalletContract.methods.approveGoal(id).send({})
}
async function contribute(id: number) {
    await walletContract.methods.contribute(id).send({})
    .then((res: Response) => {
        console.log(res)
    }).catch((err: Error) => {
        console.log(err)
    })
}
const InsightCard = ({ props }: { props: { aim: string, owner: string, location: any, balance: number, approved: boolean, createdAt: number, goal: string, email: string, id: number, partners:  Array<any>} }) => {
    const [vote, setVote] = useState<any>(null);
    const truncate = props.owner.slice(0,4) + "..." + props.owner.slice(-3);
    const createdAt = web3.utils.toNumber(props.createdAt);
    const date = new Date(createdAt as number * 1000);
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(props.id);
            setVote(result)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className=" bg-gray-300 rounded-xl overflow-hidden flex flex-col justify-end max-sm:w-full shadow-lg cursor-pointer mr-2 my-2">
            <div className="w-full h-[5rem]"></div>
            <div className="w-full bg-gray-400 rounded-xl overflow-hidden">
                <div className="w-full flex ">

                    <div className="p-4 bg-gray-400 px-4 w-full">
                        <h3 className="text-md line-clamp-3 overflow-hidden text-ellipsis font-medium">{props.aim}</h3>
                        <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{truncate}</p>
                            <p className="px-2 text-[12px]">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                        </div>
                        <div className="text-[12px] m-1 ml-0 text-gray-800">
                            <p>{props.email}</p>
                            <p>{props.location.city},{props.location.country} </p>
                            {/* <p className="px-2 text-[12px]">{props.goal}</p> */}
                        </div>
                        <h3 className="text-sm line-clamp-3 overflow-hidden text-ellipsis">{props.goal}</h3>
                        <div className="flex flex-auto flex-wrap">
                            {props.partners.map((partner, key) => (
                                <div key={key} className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">{partner.name}</div>
                            ))}
                        </div>
                    </div>

                    <div className="p-2 bg-gray-400 px-4 flex flex-col items-start pr-5 overflow-hidden">
                        <div className="w-[min-content] self-end bg-gray-00 p-1 flex justify-end">
                            <BookmarkCard />
                        </div>
                        <h3 className="text-lg ml-0 font-medium w-full">${web3.utils.toNumber(props.balance)}</h3>
                        <div className="flex flex-wrap bg-red-00 text-gray-800 w-full">
                            {/* <h3 className="text-[12px] mr-1 ">404 contributors</h3>
                            <h3 className="text-[12px] mr-1">404 evidence </h3> */}
                        </div>
                        <div className="text-sm flex mr-5">&nbsp;</div>
                    </div>
                </div>
                {props.approved ? (
                    <button className='w-[stretch] shrink m-2 py-1 px-5 bg-blue-400 shadow-md rounded-md flex justify-center items-center my-2'>Contribute</button>
                ) : (
                    <div className='flex'>
                        <button className='w-full shrink m-2 py-1 px-5 bg-green-400 shadow-md rounded-md flex justify-center items-center my-2'>Approve {vote && (web3.utils.toNumber(vote.approve))}</button>
                        <button className='w-full shrink m-2 py-1 px-5 bg-red-300 shadow-md rounded-md flex justify-center items-center my-2'>Reject {vote && (web3.utils.toNumber(vote.reject))}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InsightCard