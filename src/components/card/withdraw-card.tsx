"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const WithdrawButton = (props: { id: number }) => {
    const router = useRouter()
    return (
        <button className='w-[stretch] bg-blue-400 p-2 rounded-md font-medium mb-1 m-2 text-sm shadow-md'
            onClick={() => router.push(`/withdraw?id=${props.id}`)}
        >Withdraw</button>
    )
}

export default WithdrawButton