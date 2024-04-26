"use client"
import { daoContract, daoWalletContract, walletContract, web3 } from '@/app/backend/init';
import React, { useEffect, useState } from 'react'
import ContributeCard from './contribute-card';

async function fetch(id: number) {
    const result = await daoContract.methods.getGoalVote(id).call()
    return result;
}
// async function conversion(amount: number) {
//     const result = await contract.methods.getConversion(amount).send()
//     console.log(result)
//     return result;
// }
async function approve(wallet: any, id: number, acc: Array<any>) {
    await wallet.methods.approveGoal(id).send({ from: acc[0] })
        .then((res: Response) => console.log(res))
        .catch((err: Error) => console.log(err))
}
async function reject(wallet: any, id: number, acc: Array<any>) {
    await wallet.methods.rejectGoal(id).send({ from: acc[0] })
        .then((res: Response) => console.log(res))
        .catch((err: Error) => console.log(err))
}
async function refresh(id: number, acc: Array<any>) {
    await walletContract.methods.endGoalVote(id).send({ from: acc[0] })
        .then((res: Response) => console.log(res))
        .catch((err: Error) => console.log(err))
}
const InsightButton = (props: {approved: boolean, id: number}) => {
        const [vote, setVote] = useState<any>(null);
        const [accounts, setAccounts] = useState<Array<string>>([]);
        useEffect(() => {
            async function fetchData() {
                const result = await fetch(props.id);
                const accounts = await window.ethereum.request({ method: 'eth_accounts' })
                setAccounts(accounts)
                setVote(result)
            }
            fetchData()
        },[props.id])
    return (
        <>
            <div onClick={() => refresh(props.id, accounts)}>refresh</div>
            {props.approved ? (
                <ContributeCard id={props.id} path='/contribute'/>
            ) : (
                <div className='flex'>
                    <button className='w-full shrink m-2 py-1 px-5 bg-green-400 shadow-md rounded-md flex justify-center items-center my-2 text-sm'
                        onClick={() => approve(daoWalletContract, props.id, accounts)}>Approve &nbsp; {vote && (web3.utils.toNumber(vote.approve))}</button>
                    <button className='w-full shrink m-2 py-1 px-5 bg-red-300 shadow-md rounded-md flex justify-center items-center my-2  text-sm'
                        onClick={() => reject(daoWalletContract, props.id, accounts)}>Reject &nbsp; {vote && (web3.utils.toNumber(vote.reject))}</button>
                </div>
            )}
        </>
    )
}

export default InsightButton