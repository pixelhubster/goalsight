import React from 'react'

const UserBoard = () => {
    return (
        <div className="w-[15rem] h-[20em] bg-white m-2 rounded-md shadow-md absolute top-[5rem] right-2">
            <div className="w-[14rem] m-2 bg-gray-200 h-[5rem] rounded-sm flex flex-col justify-center items-center">
                <p className="font-semibold text-lg">1220 TK</p>
                <p className="text-[12px]">address</p>
            </div>
            <div className="w-[15rem] bg-gray-00 p-2 px-4 flex items-center cursor-pointer hover:bg-gray-300/90">
                <p className="w-full bg-red-00 text-ellipsis text-nowrap whitespace-nowrap overflow-hidden text-sm">Goal Insigsssssssssssssht</p>
                <p className="px-2">200</p>
            </div>
        </div>
    )
}

export default UserBoard