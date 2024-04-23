"use client"
import { walletContract } from '@/app/backend/init';
import PartnerCard from '@/components/card/partner-card'
import { useForm } from '@/components/hooks/useInput'
import React, { useEffect, useState } from 'react'

async function fetch(smartcontract: any) {
    const result = await smartcontract.methods.getPartners().call().then((res: Response)=> {
        console.log(res);
        return res;
    }).catch((err: Error) => {
        console.log(err)
        return null
    });
    return result
}
const PartnerForm = () => {
    const form = useForm()
    const [value, handleOnChange] = form()
    console.log(value)
    const [partners, setPartners] = useState<any>(null);
    console.log(partners)
    useEffect(() => {
        handleOnChange("partners", [])
        const fetchData = async () => {
            const result = await fetch(walletContract)
            setPartners(result)
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Request a Partnership</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800 my-2'>Partners</label>
                {/* <input type="search" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' /> */}
                <div className='flex flex-wrap'>
                    {partners && partners.map((partner: any, key: number) => 
                        <PartnerCard key={key} {...partner} id={key} />
                    )}
                    {/* <PartnerCard name='Ridge Hospital'/> */}
                    {/* <div className='bg-gray-200 shadow-sm w-fit p-1 px-2 rounded-md m-1 overflow-hidden text-ellipsis max-w-[10rem] text-nowrap cursor-pointer'>hospital name is too long and too long</div> */}
                </div>
            </div>
        </div>
    )
}

export default PartnerForm