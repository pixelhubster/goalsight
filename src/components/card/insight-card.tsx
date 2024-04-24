import React from 'react'
import BookmarkCard from './bookmark-card'
import { contract, web3 } from '@/app/backend/init'
import Link from 'next/link'
import InsightButton from './insight-button'
async function fetchPartner(id: number) {
    const result = await contract.methods.getPartner(id).call();
    return result;
}

const InsightCard = async ({ props }: { props: { aim: string, owner: string, location: any, balance: number, approved: boolean, createdAt: number, goal: string, email: string, id: number, partners: Array<any> } }) => {
    const truncate = props.owner.slice(0, 4) + "..." + props.owner.slice(-3);
    const createdAt = web3.utils.toNumber(props.createdAt);
    const date = new Date(createdAt as number * 1000);
    const partners: any = [];
    for (let i = 0; i < props.partners.length; i++) {
        let res = await fetchPartner(props.partners[i]);
        partners.push(res)
    }
    // return response;
    return (
        <div className=" bg-gray-300 rounded-xl overflow-hidden flex flex-col justify-end max-sm:w-full shadow-lg cursor-pointer mr-2 my-2 h-fit">
            <div className="w-full h-[5rem]"></div>
            <div className="w-full bg-gray-400 rounded-xl overflow-hidden">
                <div className="w-full flex">

                    <div className="p-4 pb-0 bg-gray-400 px-4 w-full">
                        <Link href={`/insight/${props.id}`}>
                            <h3 className="text-md line-clamp-3 overflow-hidden text-ellipsis font-medium">{props.aim}</h3>
                        </Link>
                        <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{truncate}</p>
                            <p className="px-2 text-[12px]">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                        </div>
                        <div className="text-[12px] m-1 ml-0 text-gray-800">
                            <p>{props.email}</p>
                            <p>{props.location.city},{props.location.country} </p>
                        </div>
                        {/* <h3 className="text-sm line-clamp-3 overflow-hidden text-ellipsis bg-red-400">{props.goal}</h3> */}
                        <div className="flex flex-auto flex-wrap">
                            {partners.map((partner: any, key: number) => (
                                <div key={key} className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[5rem]">{partner.name}</div>
                            ))}
                        </div>
                    </div>

                    <div className="w-fit p-2 flex flex-col items-start justify-center mr-4 h-fit">
                        <div className="w-[min-content] self-end bg-gray-00 p-1 flex justify-end">
                            <BookmarkCard />
                        </div>
                        <h3 className="text-lg ml-0 font-medium w-full">${web3.utils.toNumber(props.balance)}</h3>
                        <div className="flex flex-wrap bg-red-00 text-gray-800 w-full">
                        </div>
                        <div className="text-sm flex mr-5">&nbsp;</div>
                    </div>
                </div>
                <h3 className="mx-4 text-sm line-clamp-3 overflow-hidden text-ellipsis bg-red-00">{props.goal}</h3>
                <InsightButton id={props.id} approved={props.approved} />
            </div>
        </div>
    )
}

export default InsightCard