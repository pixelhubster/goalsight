"use client"
import { getPrice, usdToETH, walletContract } from '@/app/backend/init'
import Modal from '@/components/modal'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useNotification } from './context/notificationContext'



const WithdrawBoard = ({rate}: {rate: number}) => {
    const [amount, setAmount] = useState<number>(0);
    const [purpose, setPurpose] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [convert, setConvert] = useState(0);
    const setNotification = useNotification()
    const query = useSearchParams()
    const id = Number(query.get("id"))
    const router = useRouter()
    const [accounts, setAccounts] = useState<Array<string>>([]);
    async function withdraw(wallet: any, id: number, acc: Array<any>, purpose: string, amount: number) {
        setLoading(true)
        await wallet.methods.withdraw(id, purpose, amount).send({ from: acc[0] })
            .then((res: Response) => {
                console.log(res)
                setNotification({
                    ok: true,
                    message: `You have withdrew ${amount}`,
                    active: true,
                })
                router.back()
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
    async function onChange(value: number) {
        const [eth, ethValue] = usdToETH(rate, value)
        setAmount(Number(eth))
        setConvert(Number(ethValue))
    }
    return (
        <Modal>
            <div className='w-[30rem] bg-white rounded-md overflow-hidden shadow-lg'>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 pt-5 px-5 bg-red-00'>
                </div>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 px-5 py-3 flex-col'>
                    <label htmlFor="usd" className='font-medium text-gray-800'>Amount in USD</label><br />
                    <input name='tel' type="text" className='w-full h-[stretch] p-2 px-4 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 text-black placeholder:text-gray-400'
                        placeholder="" onChange={(e) => onChange(Number(e.target.value))} />
                    <p className='p-1 text-sm text-black'>{convert} eth</p>
                    <label htmlFor="insight-aim" className='font-medium text-gray-800/80 w-full'>Purpose</label>
                    <textarea name="purpose" id="1" cols={1} rows={2} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 placeholder:text-sm bg-red-00 text-black'
                        placeholder='What is the purpose of this withdrawal' onChange={(e) => setPurpose(e.target.value)}></textarea>
                    <button className='w-full bg-blue-400 p-2 rounded-md font-medium mb-1'
                        onClick={() => withdraw(walletContract, id, accounts, purpose, amount)}
                        disabled={loading}
                    >
                        {loading && <p>loading...</p>}
                        withdraw</button>
                </div>
            </div>
        </Modal>
    )
}

export default WithdrawBoard