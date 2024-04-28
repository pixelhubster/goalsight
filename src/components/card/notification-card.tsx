"use client"
import React, { useEffect } from 'react'
import { useNotification } from '../context/notificationContext'

const NotificationCard = (props: {message: string, ok: boolean}) => {
    const setNotification = useNotification()
    setTimeout(() => {
        setNotification({
            active: false,
            ok: true,
            message: ""
        })
    }, 8000)
    return (
        <div className="max-w-[25rem] fixed top-[8rem] left-[50%] z-[2] h-fit p-2 flex flex-col justfiy-center items-start m-auto translate-x-[-50%] translate-y-[-50%] bg-white rounded-md shadow-lg">
            <div className="w-full px-2 text-gray-600 text-[12px]">{props.ok ? "Successful": "Failed"}</div>
            <div className="w-full px-2 flex text-sm">{props.message}</div>
        </div>
    )
}

export default NotificationCard