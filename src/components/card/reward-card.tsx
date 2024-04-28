"use client"
import { walletContract } from '@/app/backend/init'
import React, { useEffect, useState } from 'react'
import { useNotification } from '../context/notificationContext'

const RewardButton = (props: { id: number }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [accounts, setAccounts] = useState<any>([])
    const setNotification = useNotification()
    async function reward(wallet: any, id: number, acc: Array<any>) {
        setLoading(true)
        await wallet.methods.reward(id).send({ from: acc[0] })
            .then((res: Response) => {
                console.log(res)
                setNotification({
                    ok: true,
                    message: `You have successfully claimed your reward`,
                    active: true,
                })
            }).catch((err: Error) => {
                console.log(err)
                setNotification({
                    ok: false,
                    message: err.message,
                    active: true,
                })
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
        <button className='w-[stretch] bg-green-400 p-2 rounded-md font-medium mb-1 m-2 text-sm shadow-md'
        disabled={loading} onClick={() => reward(walletContract, props.id, accounts)}>
            {loading && (<p>loading...</p>)} Get Reward
        </button>
    )
}

export default RewardButton