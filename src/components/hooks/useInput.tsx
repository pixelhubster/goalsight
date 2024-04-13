"use client"
import React, { useContext, useState } from 'react'


const FormProvider = React.createContext({})

export function useForm() {
    return useContext(FormProvider) as any
}
const FormContext = ({children}: {children: React.ReactNode}) => {
    const [value, setValue] = useState({})
    function useInput() {
        function handleOnChange(field: string, value: string) {
            setValue(prevValue => ({
                ...prevValue,
                [field]: value
            }))
        }
        return [value, handleOnChange]
    }
    return (
        <FormProvider.Provider value={useInput}>
            {children}
        </FormProvider.Provider>   
    )
}

export default FormContext;