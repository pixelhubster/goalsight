"use client"
import PartnerCard from '@/components/card/partner-card'
import { useForm } from '@/components/hooks/useInput'
import React, { useEffect } from 'react'

const PartnerForm = () => {
    const form = useForm()
    const [, handleOnChange] = form()
    useEffect(() => {
        handleOnChange("partners", [])
    }, [])
    const partners = [
        {
            id: "13434",
            name: "Ridge Hospital"
        },
        {
            id: "13432",
            name: "Cage"
        },
        {
            id: "13431",
            name: "Mat"
        },
    ]
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Request a Partnership</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800 my-2'>Partners</label>
                {/* <input type="search" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' /> */}
                <div className='flex flex-wrap'>
                    {partners.map((partner) => 
                        <PartnerCard key={partner.id} {...partner} />
                    )}
                    {/* <PartnerCard name='Ridge Hospital'/> */}
                    {/* <div className='bg-gray-200 shadow-sm w-fit p-1 px-2 rounded-md m-1 overflow-hidden text-ellipsis max-w-[10rem] text-nowrap cursor-pointer'>hospital name is too long and too long</div> */}
                </div>
            </div>
        </div>
    )
}

export default PartnerForm