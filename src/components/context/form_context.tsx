"use client"
import React, { useContext, useState } from 'react'

const FormContext = React.createContext()
const UpdateDetailsContext = React.createContext()

export function useDetails() {
    return [useContext(FormContext), useContext(UpdateDetailsContext)]
} 

const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [details, setDetails] = useState({})
    const updateDetails = (e: any, key: String) => {
        const obj = {
            [key as string]: e
        }
        setDetails({ ...details, ...obj })
    }
    return (
        <FormContext.Provider value={details}>
            <UpdateDetailsContext.Provider value={updateDetails}>
                {children}
            </UpdateDetailsContext.Provider>
        </FormContext.Provider>
    )
}

export default FormProvider