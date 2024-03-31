import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full h-[5rem] bg-white px-4 flex justify-between items-center">
            <div>menu</div>
            <div>GoalSight</div>
            <div className="bg-red-00 w-fit px-2 flex h-[3rem]">
                <button className="p-2 px-5 rounded-lg shadow-sm bg-blue-300">connect</button>
                <div className="w-[3rem] h-[3rem] bg-red-300 flex justify-center items-center rounded-full mx-2 cursor-pointer">user</div>
            </div>
            {/* <div className="w-[15rem] h-[20em] bg-white m-2 rounded-md shadow-md">
      <div className="w-[14rem] m-2 bg-gray-200 h-[5rem] rounded-sm flex flex-col justify-center items-center">
        <p className="font-semibold text-lg">1220 TK</p>
        <p className="text-[12px]">address</p>
      </div>
      <div className="w-[15rem] bg-gray-00 p-2 px-4 flex items-center cursor-pointer hover:bg-gray-300/90">
        <p className="w-full bg-red-00 text-ellipsis text-nowrap whitespace-nowrap overflow-hidden text-sm">Goal Insigsssssssssssssht</p>
        <p className="px-2">200</p>
      </div>
    </div> */}
        </div>
        /*  */
    )
}

export default Navbar