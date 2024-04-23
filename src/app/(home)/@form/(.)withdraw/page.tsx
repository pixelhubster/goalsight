"use client"
import { walletContract } from '@/app/backend/init'
import Modal from '@/components/modal'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const Page = () => {
    const [amount, setAmount] = useState<number>(0);
    const [purpose, setPurpose] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const query = useSearchParams()
    const id = Number(query.get("id"))
    const [accounts, setAccounts] = useState<Array<string>>([]);

    async function withdraw(wallet: any, id: number, acc: Array<any>, purpose: string, amount: number) {
        setLoading(true)
        await wallet.methods.withdraw(id, purpose, amount).send({ from: acc[0] })
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
        <Modal>
            <div className='w-[30rem] bg-white rounded-md overflow-hidden shadow-lg'>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 pt-5 px-5 bg-red-00'>
                </div>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 px-5 py-3 flex-col'>
                    <label htmlFor="address" className='font-medium text-gray-800'>Amount in USD</label><br />
                    <input name='address' type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 text-black placeholder:text-gray-400'
                        placeholder="" onChange={(e) => setAmount(Number(e.target.value))} />
                    <label htmlFor="insight-aim" className='font-medium text-gray-800/80 w-full'>Purpose</label>
                    <textarea name="purpose" id="1" cols={1} rows={2} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00 text-black'
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

export default Page