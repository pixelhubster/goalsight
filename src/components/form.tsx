"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Form = ({children, btn} : {children: React.ReactNode[], btn?: string}) => {
    const router = useRouter()
    const [index, setIndex] = useState<number>(0)
    return (
    <div className='w-[30rem] bg-white rounded-md overflow-hidden shadow-lg'>
    <div className='w-full flex justify-between items-center bg-gray-00 p-2 px-5'>
        <button className='text-gray-600' onClick={() => router.back()}>close</button>
    </div>
    {children[index]}
    <div className='w-full flex justify-between items-center bg-gray-00 p-2 px-5 py-3'>
        <button className={`text-gray-600 visible ${index === 0 && "invisible"}`} onClick={() => {index > 0 && index <= children.length -1 ? setIndex(index-1) : setIndex(0)}}>back</button>
        <div className='flex'>
            {/* <div className='w-[7px] cursor-pointer m-[1px] h-[7px] bg-red-300 rounded-full flex justify-center items-center'></div> */}

        </div>
        <button className='bg-blue-300 p-1 px-5 rounded-md shadow-sm' onClick={() => {index >= 0 && index < (children.length-1) ? setIndex(index+1) : setIndex(children.length -1 )}}>{index === children.length-1 ? btn || "Submit" : "Continue"}</button>
    </div>
</div>
  )
}

export default Form