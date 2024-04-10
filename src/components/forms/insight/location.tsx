import { useDetails } from '@/components/context/form_context'
import React from 'react'

const LocationForm = () => {
    // const [value, updateValue] = useDetails()
    return (
        <div className='w-full bg-gray-00'>
            <h3 className='w-full flex justify-center items-center p-2 bg-red-00 font-medium text-[14px]'>Location</h3>
            <div className='p-5 px-5 text-[14px]'>
                <label htmlFor="country" className='font-medium text-gray-800'>Country</label>
                <input id='s' name="country" type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' 
                placeholder='e.g Ghana'
                //  onChange={(e) => updateValue(e,"country")} value={value.country}
                />

                {/* <label htmlFor="state" className='font-medium text-gray-800'>State</label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' 
                placeholder='e.g California' onChange={(e) => updateValue(e,"state")} value={value.state}/>

                <label htmlFor="city" className='font-medium text-gray-800'>City</label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' 
                placeholder='Accra' onChange={(e) => updateValue(e,"city")} value={value.city}/>

                <label htmlFor="location-address" className='font-medium text-gray-800'>Address</label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                placeholder='e.g 144 Jon Street apt. 21' onChange={(e) => updateValue(e,"address")} value={value.address}/>
                
                <label htmlFor="location-address2" className='font-medium text-gray-800 flex'>Address 2 <p className='text-[12px] text-gray-500'>&nbsp;(optional)</p></label>
                <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400' 
                placeholder='e.g 914 Cal Street apt. 23' onChange={(e) => updateValue(e,"altaddress")} value={value.altaddress}/> */}
            </div>
        </div>
    )
}

export default LocationForm