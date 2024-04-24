"use client"
import { daoContract, daoWalletContract, walletContract, web3 } from '@/app/backend/init'
import React, { useEffect, useState } from 'react'

async function refresh(id: number, acc: Array<any>) {
    await walletContract.methods.endGoalVote(id).send({ from: acc[0] })
        .then((res: Response) => console.log(res))
        .catch((err: Error) => console.log(err))
}

async function fetch(id: number) {
    const result = await daoContract.methods.getPartnerVote(id).call()
    return result;
}

const PartnerButton = (props: { approved: boolean, id: number }) => {
    const [partners, setPartners] = useState<any>(null);
    const [accounts, setAccounts] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    async function approve(wallet: any, id: number, acc: Array<any>) {
        setLoading(true);
        await wallet.methods.approvePartner(id).call().then(async (res: Response) => {
            console.log(res)
            await wallet.methods.approvePartner(id).send({ from: acc[0] })
                .then((res: Response) => console.log(res))
                .catch((err: Error) => console.log(err))
        }).catch((err: Error) => {
            console.log(err.message)
        })
        setLoading(false);
    }
    async function reject(wallet: any, id: number, acc: Array<any>) {
        setLoading(true)
        await wallet.methods.rejectPartner(id).send({ from: acc[0] })
            .then((res: Response) => console.log(res))
            .catch((err: Error) => console.log(err))
        setLoading(false)
    }
    useEffect(() => {
        async function fetchData() {
            const result = await fetch(props.id);
            const accounts = await window.ethereum.request({ method: 'eth_accounts' })
            setAccounts(accounts)
            setPartners(result)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {/* <button className='w-full bg-blue-400 p-2 rounded-md font-medium mt-2'>{props.btn || "Join"}</button> */}
            {!props.approved && (
                <div className='flex'>
                    <button className='w-full bg-green-400 p-2 rounded-md font-medium mt-2 text-sm shadow-md'
                        onClick={() => approve(daoWalletContract, props.id, accounts)} disabled={loading}>approve {partners && (web3.utils.toNumber(partners.approve))}</button>
                    <button className='w-full bg-red-300 p-2 rounded-md font-medium mt-2 ml-2 text-sm shadow-md'
                        onClick={() => reject(daoWalletContract, props.id, accounts)} disabled={loading}>reject {partners && (web3.utils.toNumber(partners.reject))}</button>
                </div>
            )}

        </>
    )
}

export default PartnerButton