"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ContributeCard = (props: { id: number }) => {
    const router = useRouter()
    return (
        <button className='w-[stretch] bg-blue-400 p-2 rounded-md font-medium mb-1 m-2'
            onClick={() => router.push(`/contribute?id=${props.id}`)}
        >Contribute</button>
    )
}

export default ContributeCard