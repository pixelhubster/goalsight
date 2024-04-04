"use client"
import { useRouter } from "next/navigation"
import { MdClose } from "react-icons/md"
const Modal = ({children}: {children: React.ReactNode}) => {
    const router = useRouter()
  return (
    <div className='w-screen h-screen bg-black/10 top-0 fixed flex items-center justify-center z-10'>
        <button className='w-[4rem] h-[4rem] absolute left-10 top-5 flex items-center justify-center'
        onClick={() => router.back()}>
          <MdClose className="font-xl text-3xl"/>
        </button>
        {children}
    </div>
  )
}

export default Modal