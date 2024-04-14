import React, { useState } from 'react'
import UserBoard from './board/user-board'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="w-full h-[5rem] bg-white/40 backdrop-blur-md px-10 max-md:px-5 flex justify-between items-center fixed z-1 shadow-sm">
      {/* <div>menu</div> */}
      <div className='font-semibold text-md'>GoalSight</div>
      <div className="bg-red-00 w-fit px-2 flex">
        {/* <button className="p-2 px-5 rounded-lg shadow-sm bg-blue-300">connect</button> */}
        <ConnectButton />
        {/* <div className="w-[2rem] h-[2rem] bg-red-300 flex justify-center items-center rounded-full mx-2 cursor-pointer" onClick={() => setIsClicked(!isClicked)}>user</div> */}
      </div>
      {isClicked && (<UserBoard />)}

    </div>
    /*  */
  )
}

export default Navbar