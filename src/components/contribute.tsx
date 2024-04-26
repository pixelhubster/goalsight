"use client"
import { getPrice, usdToETH, walletContract } from '@/app/backend/init'
import Modal from '@/components/modal'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const ContributeBoard = () => {
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [convert, setConvert] = useState<number>(0)
    const query = useSearchParams()
    const id = Number(query.get("id"))
    const [accounts, setAccounts] = useState<Array<string>>([]);

    async function contribute(wallet: any, id: number, acc: Array<any>, amount: number) {
        setLoading(true)
        await wallet.methods.contribute(id).send({ from: acc[0], value: amount })
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
    function onChange(value: number) {
        const [eth, ethValue] = usdToETH(value)
        setAmount(Number(eth))
        setConvert(Number(ethValue))
    }
    return (
        <Modal>
            <div className='w-[30rem] bg-white rounded-md overflow-hidden shadow-lg'>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 pt-5 px-5 bg-red-00'>
                </div>
                <div className='w-full flex justify-between items-center bg-gray-00 p-2 px-5 py-3 flex-col'>
                    <label htmlFor="address" className='font-medium text-gray-800'>Amount in USD</label><br />
                    <input name='address' type="tel" className='w-full h-[stretch] p-2 px-4 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 text-black placeholder:text-gray-400'
                        placeholder="" onChange={(e) => onChange(Number(e.target.value))} />
                    {/* <ContributeButton id={Number(id)}/> */}
                    <p className='p-1 text-sm'>{convert} eth</p>
                    <button className='w-full bg-blue-400 p-2 rounded-md font-medium mb-1'
                        onClick={() => contribute(walletContract, id, accounts, amount)}
                        disabled={loading}
                    >
                        {loading && <p>loading...</p>}
                        Contribute</button>
                </div>
            </div>
        </Modal>
    )
}

export default ContributeBoard