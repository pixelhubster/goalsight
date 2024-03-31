import InsightCard from '@/components/card/insight-card'
import LinkCard from '@/components/card/link-card'
import Navbar from '@/components/navbar'
import React from 'react'

const Frame = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            {/* <div className="w-[15rem] h-[20em] bg-white m-2 rounded-2xl shadow-md">
            </div> */}
            <LinkCard />
            <button className="bg-black p-3 px-5 rounded-3xl shadow-md fixed bottom-5 right-5 text-white">Create Goal</button>
            <div className="w-full bg-white p-10 pt-5 max-md:p-5 customgrid">
                {children}
            </div>
        </main>
    )
}

export default Frame