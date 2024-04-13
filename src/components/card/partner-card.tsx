"use client"
import React, { useState } from 'react'
import { useForm } from '../hooks/useInput'

const PartnerCard = (props : {name: string, id: string}) => {
    const [selected, setSelected] = useState<boolean>(false)
    const form = useForm()
    const [value, handleOnChange] = form()
    const handleClick = (id: string) => {
        var partners = value.partners as Array<string>
        if (partners.includes(id)) {
            partners = partners.filter(partner => partner !== id)
        } else (
            partners.push(id)
        )
        setSelected(!selected)
        handleOnChange("partners", partners)
    }
    return (
        <div
            className={`w-full h-[3rem] bg-red-00 p-2 flex items-start justify-center outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-2 cursor-pointer ${selected ? "bg-blue-200/40" : "bg-transparent"}`}
            onClick={() => handleClick(props.id)}>
            <div className='w-[2rem] h-[2rem] bg-green-500 p-2 rounded-full flex justify-center items-center mr-2'>a</div>
            <div className='w-full h-full bg-green-00'>
                <div className='bg-gray-00 h-full flex font-medium items-center shadow-sm w-full p-1 overflow-hidden text-ellipsis text-nowrap'>{props.name}</div>
            </div>
        </div>
    )
}

export default PartnerCard