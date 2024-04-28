"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoMdRefresh } from "react-icons/io";
const LinkCard = () => {
    const router = useRouter()
    const path = usePathname()
    const [active, setActive] = useState<string>(path)
    useEffect(() => {
        setActive(path)
    }, [path])
    return (
        <div className="w-full h-[20rem] md:h-[25rem] flex flex-col items-end">
            <div className='h-[17rem] md:h-[22rem] w-full'>
                <Image src={`/images/6.jpg`} alt={''} width={300} height={0} style={{ width: '100%', height: '100%' }} priority={true} />
            </div>
            <div className="w-full h-[3rem] bg-[#FAF5FF]/30 flex px-2 md:px-10 items-center justify-between">
                <div className='flex h-full items-end'>
                    <Link href={"/"}>
                        <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active === '/' ? "border-sky-400" : ""} mx-1`}>Insight</div>
                    </Link>
                    <Link href={"/partners"}>
                        <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active === '/partners' ? "border-sky-400" : ""} mx-1`}>partners</div>
                    </Link>
                </div>
                <div className='text-lg cursor-pointer pr-5' onClick={() => router.refresh()}>
                    <IoMdRefresh />
                </div>
            </div>
        </div>
    )
}

export default LinkCard