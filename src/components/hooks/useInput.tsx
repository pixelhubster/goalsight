"use client"
import React, { useContext, useState } from 'react'

const FormProvider = React.createContext({})
const FormFunction = React.createContext({})
export function useForm() {
    return useContext(FormProvider) as any
}
export function useFunction() {
    return useContext(FormFunction) as any;
}
async function goal(smartcontract: any, arg: any, method: any, setNotification: any) {
    const accounts = await window.ethereum.request({method: 'eth_accounts'})
    // const result = await smartcontract.methods.createGoal(
    //         arg.aim,
    //         arg.email,
    //         {
    //             country: arg.country,
    //             state: arg.state,
    //             city: arg.city,
    //             locationAddress: arg.locationAddress,
    //             locationAddress2: arg.locationAltaddress
    //         },
    //         arg.description,
    //         arg.goal,
    //         arg.partners
    // ).call().then((res: Response) => {
    //     console.log(res)
    // }).catch((error: Error) => {
        
    //     console.log(error)
    // })
    const result = await smartcontract.methods.createGoal(
            arg.aim,
            arg.email,
            {
                country: arg.country,
                state: arg.state,
                city: arg.city,
                locationAddress: arg.locationAddress,
                locationAddress2: arg.locationAltaddress
            },
            arg.description,
            arg.goal,
            arg.partners
    ).send({ from: accounts[0] }).then((res: Response) => {
        setNotification({
            ok: true,
            active: true,
            message: `You have successfully created a goal`
        })
    }).catch((err: Error) => {
        setNotification({
            ok: false,
            active: true,
            message: err.message
        })
    })
    return result;
}
async function partner(smartcontract: any, arg: any, setNotification: any) {
    const accounts = await window.ethereum.request({method: 'eth_accounts'})
    const result = await smartcontract.methods.becomePartner(
            arg.name,
            arg.email,
            arg.number,
            {
                country: arg.country,
                state: arg.state,
                city: arg.city,
                locationAddress: arg.locationAddress,
                locationAddress2: arg.locationAltaddress
            },
            arg.description,
            arg.goal
    ).send({ from: accounts[0] }).then((res: Response) => {
        setNotification({
            ok: true,
            active: true,
            message: `You have successfully created a partner`
        })
    }).catch((err: Error) => {
        setNotification({
            ok: false,
            active: true,
            message: err.message
        })
    })
    return result;
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
            <FormFunction.Provider value={[goal,partner]}>
                {children}
            </FormFunction.Provider>
        </FormProvider.Provider>   
    )
}

export default FormContext;