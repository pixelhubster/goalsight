import React, {useState} from 'react'
// import { useDetails } from '@/components/context/form_context'

const CreateInsightForm = () => {
    // const updateValue = useDetails()
    // const value = {}
    // console.log(value)
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Create an Insight</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="insight-aim" className='font-medium text-gray-800'>Insight Aim</label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='Project insight...' onChange={(e) => updateValue(e,"name")} value={value.name}/>
                <label htmlFor="address" className='font-medium text-gray-800'>Owner Address</label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='the...' disabled/>

                <label htmlFor="email" className='font-medium text-gray-800'>Email</label>
                <input type="email" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='email@gmail.com' onChange={(e) => updateValue(e,"email")} value={value.email}/>
                {/* <textarea name="new" id="1" cols={1} rows={1} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00'></textarea> */}

            </div>
        </div>
    )
}

export default CreateInsightForm