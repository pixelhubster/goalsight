import React from 'react'

const AddImage = () => {
    return (
        <div className='w-full p-5'>

            <div className='w-full h-[8rem] bg-slate-300/20 flex items-center justify-center rounded-md my-2'>
                <input type="file" name="" id="" />
            </div>
            <label htmlFor="insight-aim" className='font-medium text-gray-800'>Description</label>
            {/* <input type="text" className='w-full h-[stretch] p-2 px-4 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400'
                    placeholder='Project insight...' /> */}
            <textarea name="new" id="1" cols={1} rows={4} className='w-full min-h-[20px] overflow-y-hidden resize-y p-2 my-2 outline-none outline-solid outline-gray-300/90 outline-1 rounded-sm mb-5 placeholder:text-gray-400 bg-red-00'
                placeholder='How will you describe to us what it is about?'></textarea>

        </div>
    )
}

export default AddImage