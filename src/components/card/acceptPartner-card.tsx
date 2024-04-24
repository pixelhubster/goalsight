"use client"
import { walletContract } from '@/app/backend/init'
import React, { useEffect, useState } from 'react'

const AcceptPartnerButton = (props: { id: number }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [accounts, setAccounts] = useState<any>([])
    async function accept(wallet: any, id: number, acc: Array<any>) {
        setLoading(true)
        await wallet.methods.acceptPartnership(id).send({ from: acc[0] })
            .then((res: Response) => {
                console.log(res)
            }).catch((err: Error) => {
                console.log(err)
            })
        setLoading(false)
    }
    useEffect(() => {
        async function getAccount() {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' })
            setAccounts(accounts)
        }
        getAccount()
    }, [])
    return (
        <button className='w-full bg-blue-400 p-2 rounded-md font-medium mb-1 text-sm shadow-md' disabled={loading} onClick={() => accept(walletContract, props.id, accounts)}>
            {loading && (<p>loading...</p>)} Accept Partnership
        </button>
    )
}

export default AcceptPartnerButton