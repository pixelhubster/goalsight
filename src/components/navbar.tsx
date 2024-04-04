import React, { useState } from 'react'
import UserBoard from './board/user-board'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="w-full h-[5rem] bg-white px-4 flex justify-between items-center fixed z-1">
      <div>menu</div>
      <div>GoalSight</div>
      <div className="bg-red-00 w-fit px-2 flex h-[3rem]">
        <button className="p-2 px-5 rounded-lg shadow-sm bg-blue-300">connect</button>
        <div className="w-[3rem] h-[3rem] bg-red-300 flex justify-center items-center rounded-full mx-2 cursor-pointer" onClick={() => setIsClicked(!isClicked)}>user</div>
      </div>
      {isClicked && (<UserBoard />)}

    </div>
    /*  */
  )
}

export default Navbar