"use client"
import { walletContract } from '@/app/backend/init'
import React, { useEffect, useState } from 'react'
import { useNotification } from '../context/notificationContext'

const EndGoalButton = (props: { id: number }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [accounts, setAccounts] = useState<any>([])
    const setNotification = useNotification()
    async function endGoal(wallet: any, id: number, acc: Array<any>) {
        setLoading(true)
        await wallet.methods.endGoal(id).send({ from: acc[0] })
            .then((res: Response) => {
                console.log(res)
                setNotification({
                    active: true,
                    ok: true,
                    message: `You have successfully ended the goal`
                })
            }).catch((err: Error) => {
                console.log(err)
                setNotification({
                    active: true,
                    ok: false,
                    message: err.message
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
        <button className='w-[stretch] bg-red-300 p-2 rounded-md font-medium mb-1 m-2 text-sm shadow-md'
            disabled={loading} onClick={() => endGoal(walletContract, props.id, accounts)}>
            {loading && (<p>loading...</p>)}
            End Project 
        </button>
    )
}

export default EndGoalButton