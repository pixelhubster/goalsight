"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { MdClose } from "react-icons/md"
const Modal = ({ children }: { children?: React.ReactNode }) => {
  const y_value = window.scrollY
  const router = useRouter()
  const closeModal = () => router.back()
  useEffect(() => {
    window.scrollTo(0,y_value)
  })
  return (
    <main className='w-screen h-screen bg-black/10 top-0 fixed flex items-center justify-center z-[1]'
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}>
      {/* <button className='w-[4rem] h-[4rem] absolute left-10 top-5 flex items-center justify-center'
        onClick={e => closeModal()}
        >
          <MdClose className="font-xl text-3xl"/>
        </button> */}
      {children}
    </main>
  )
}

export default Modal