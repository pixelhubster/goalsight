"use client"
import React, { useContext, useState } from 'react'
import NotificationCard from '../card/notification-card'
const NotificationProvider = React.createContext({})

export const useNotification = () => {
    return useContext(NotificationProvider) as any
}
const NotificatonContext = ({ children }: { children: React.ReactNode }) => {
    const [notification, setNotification] = useState({
        ok: true,
        message: "",
        active: false,
    })
    return (
        <NotificationProvider.Provider value={setNotification}>
            {notification.active && (
                <NotificationCard message={notification.message} ok={notification.ok} />
            )}
            {children}
        </NotificationProvider.Provider>
    )
}

export default NotificatonContext