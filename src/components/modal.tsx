"use client"
import { useRouter } from "next/navigation"
const Modal = ({children}: {children: React.ReactNode}) => {
    const router = useRouter()
  return (
    <div className='w-screen h-screen bg-black/10 top-0 fixed flex items-center justify-center'>
        <button className='w-[4rem] h-[4rem] bg-white absolute left-10 top-5'
        onClick={() => router.back()}>close</button>
        {children}
    </div>
  )
}

export default Modal