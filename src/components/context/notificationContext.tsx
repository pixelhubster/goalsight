"use client"
import React, { useContext, useState } from 'react'
import NotificationCard from '../card/notification-card'
import Modal from '../modal'
const NotificationProvider = React.createContext({})

export const useNotification = () => {
    return useContext(NotificationProvider)
}
const NotificatonContext = ({ children }: { children: React.ReactNode }) => {
    const [notification, setNotification] = useState({
        ok: true,
        message: "",
        active: false,
    })
    return (
        <NotificationProvider.Provider value={[notification, setNotification]}>
            {notification.active && (
                <Modal>
                    <NotificationCard />
                </Modal>

            )}
            {children}
        </NotificationProvider.Provider>
    )
}

export default NotificatonContext