"use client"
import LinkCard from '@/components/card/link-card'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'
import { MdFeed } from 'react-icons/md'
import React from 'react'
import { IoIosCreate } from 'react-icons/io'

const Frame = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            <LinkCard />
            <button className="bg-slate-800 p-3 px-5 rounded-3xl shadow-md fixed bottom-[5rem] right-5 text-white flex items-center justify-center" onClick={() => router.push("/createinsight")}>
                {/* <MdFeed className='mx-2 text-md' /> */}
                <IoIosCreate className='mx-2 text-lg text-blue-00'/>
                Create Goal</button>
            <button className="bg-slate-800 p-3 px-5 rounded-3xl shadow-md fixed bottom-5 right-5 text-white flex items-center justify-center" onClick={() => router.push("/become-partner")}>
                <MdFeed className='mx-2 text-lg' />
                Become a Partner</button>
            <div className="w-full bg-white p-10 pt-5 max-md:p-5">
                {children}
            </div>
        </main>
    )
}

export default Frame