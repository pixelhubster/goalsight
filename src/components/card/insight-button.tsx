"use client"
import { daoContract, daoWalletContract, walletContract, web3 } from '@/app/backend/init';
import React, { useEffect, useState } from 'react'
import ContributeCard from './contribute-card';
import { MdRefresh } from "react-icons/md";
import { useNotification } from '../context/notificationContext';

async function fetch(id: number) {
    const result = await daoContract.methods.getGoalVote(id).call()
    return result;
}

const InsightButton = (props: { approved: boolean, id: number }) => {
    const [vote, setVote] = useState<any>(null);
    const [accounts, setAccounts] = useState<Array<string>>([]);
    const setNotification = useNotification()
    async function refresh(id: number, acc: Array<any>) {
        await walletContract.methods.endGoalVote(id).call().then(async (res: Response) => {
            await walletContract.methods.endGoalVote(id).send({ from: acc[0] })
            .then((res: Response) => {
                setNotification({
                    active: true,
                    ok: true,
                    message: `Successfully refreshed the DAO`
                })
            })
            .catch((err: Error) => {
                setNotification({
                    active: true,
                    ok: false,
                    message: err.message
                })
            })
        }).catch((err: Error) => {
            setNotification({
                active: true,
                ok: false,
                message: err.message
            })
    
        })
    }
    async function approve(wallet: any, id: number, acc: Array<any>) {
        await wallet.methods.approveGoal(id).call()
            .then(async (res: Response) => {
                await wallet.methods.approveGoal(id).send({ from: acc[0] })
                    .then((res: Response) => {
                        setNotification({
                            active: true,
                            ok: true,
                            message: `You have casted a vote to approve`
                        })
                    })
                    .catch((err: Error) => {
                        setNotification({
                            active: true,
                            ok: false,
                            message: err.message
                        })
                    })
            })
            .catch((err: Error) => {
                setNotification({
                    active: true,
                    ok: false,
                    message: err.message
                })
            })
    }
    async function reject(wallet: any, id: number, acc: Array<any>) {
        await wallet.methods.rejectGoal(id).call()
            .then(async (res: Response) => {
                await wallet.methods.rejectGoal(id).send({ from: acc[0] })
                    .then((res: Response) => {
                        setNotification({
                            active: true,
                            ok: true,
                            message: `You have casted a vote to reject`
                        })
                    })
                    .catch((err: Error) => {
                        setNotification({
                            active: true,
                            ok: false,
                            message: err.message
                        })
                    })
            })
            .catch((err: Error) => {
                setNotification({
                    active: true,
                    ok: false,
                    message: err.message
                })
            })
    }
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(props.id);
            const accounts = await window.ethereum.request({ method: 'eth_accounts' })
            setAccounts(accounts)
            setVote(result)
        }
        fetchData()
    }, [props.id])
    return (
        <>
            {props.approved ? (
                <ContributeCard id={props.id} path='/contribute' />
            ) : (
                <>
                    <div onClick={() => refresh(props.id, accounts)} className='w-full flex justify-end px-5 cursor-pointer'>
                        <MdRefresh />
                    </div>
                    <div className='flex'>
                        <button className='w-full shrink m-2 py-1 px-5 bg-green-400 shadow-md rounded-md flex justify-center items-center my-2 text-sm'
                            onClick={() => approve(daoWalletContract, props.id, accounts)}>Approve &nbsp; {vote && (web3.utils.toNumber(vote.approve))}</button>
                        <button className='w-full shrink m-2 py-1 px-5 bg-red-300 shadow-md rounded-md flex justify-center items-center my-2  text-sm'
                            onClick={() => reject(daoWalletContract, props.id, accounts)}>Reject &nbsp; {vote && (web3.utils.toNumber(vote.reject))}</button>
                    </div>

                </>
            )}
        </>
    )
}

export default InsightButton