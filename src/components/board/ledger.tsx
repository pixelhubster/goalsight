"use client"
import { contract, web3 } from '@/app/backend/init'
import React, { useEffect } from 'react'
const Ledger = (props: {id: number}) => {
    useEffect(() => {
        async function getEvents() {
            const result = await contract.getPastEvents("Ledger",{
                fromBlock: 0,
            }
            ).then((res: any) => {
                console.log(res)
            }).catch((error: Error) => console.log(error))
            return result
        }
        getEvents()
    },[props.id])
    return (
        <div className='w-full bg-white rounded-md p-2 mb-2 px-5'>
            <h3 className='text-[16px] font-mono text-gray-900 my-2 px-1 font-medium'>Ledger</h3>
            <div className='px-2 bg-gray-300/30 rounded-md py-3 my-1'>
                <p className='text-sm px-2'>$3004</p>
                <p className='px-2 text-sm font-medium'>Ox0000..s0ksw0 to Ridge Hospital</p>
                <p className='px-2 text-sm'>The new construction of the bridge of ghana in accra sports stadium</p>
            </div>
            
        </div>
    )
}

export default Ledger