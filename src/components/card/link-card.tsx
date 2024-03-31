import React from 'react'

const LinkCard = () => {
    return (
        <div className="w-full h-[15rem] bg-emerald-300 flex items-end">
            <div className="w-full h-[3rem] bg-red-200 flex items-end px-2 md:px-10">
                <div className="w-fit bg-green-300 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Goals</div>
                <div className="w-fit bg-green-300 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Goals</div>
            </div>
        </div>
    )
}

export default LinkCard