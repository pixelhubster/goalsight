"use client"
import { useForm } from '@/components/hooks/useInput'
import React from 'react'

const BecomePartner = () => {
    const form = useForm()
    const [value, handleOnChange] = form()
    console.log(value)
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Become a Partner</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800'>Organisation Name</label>
                <input name='name' type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='CTF Donation centre' onChange={(e) =>handleOnChange(e.target.name, e.target.value)} value={value.name}/>
                <label htmlFor="address" className='font-medium text-gray-800'>Owner Address</label>
                <input name='address' type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='the...' disabled onChange={(e) =>handleOnChange(e.target.name, e.target.value)} value={value.address}/>

                <label htmlFor="email" className='font-medium text-gray-800'>Professinal Email</label>
                <input name='email' type="email" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='email@gmail.com' onChange={(e) =>handleOnChange(e.target.name, e.target.value)} value={value.email}/>

                <label htmlFor="number" className='font-medium text-gray-800'>Phone number</label>
                <input name='number' type="tel" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='+233 555 111 090' onChange={(e) =>handleOnChange(e.target.name, e.target.value)} value={value.number}/>
                {/* <textarea name="new" id="1" cols={1} rows={1} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00'></textarea> */}

            </div>
        </div>
    )
}

export default BecomePartner