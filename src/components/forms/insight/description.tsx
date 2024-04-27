"use client"
import { useForm } from '@/components/hooks/useInput'
import React from 'react'

const DescriptionForm = () => {
    const form = useForm()
    const [value, handleOnChange] = form()
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Description</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800'>Description</label>
                {/* <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='Project insight...' /> */}
                <textarea name="description" id="1" cols={1} rows={5} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00' 
                placeholder='How will you describe to us what it is about?' onChange={(e)=> handleOnChange(e.target.name, e.target.value)} value={value.description}></textarea>

                <label htmlFor="insight-aim" className='font-medium text-gray-800'>Goal</label>
                <textarea name="goal" id="1" cols={1} rows={2} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00'
                placeholder='What is the aim of this initiative?' onChange={(e)=> handleOnChange(e.target.name, e.target.value)} value={value.goal}></textarea>
            </div>
        </div>
    )
}

export default DescriptionForm