"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const LinkCard = () => {
    const path = usePathname()
    const [active, setActive] = useState<string>(path)
    useEffect(() => {
        setActive(path)
    }, [path])
    return (
        <div className="w-full h-[20rem] md:h-[25rem] flex flex-col items-end">
            <div className='h-[17rem] md:h-[22rem] w-full'>
                <Image src={`/images/0.jpg`} alt={''} width={300} height={0} style={{ width: '100%', height: '100%'}}/>
            </div>
            <div className="w-full h-[3rem] bg-white flex items-end px-2 md:px-10">
                <Link href={"/"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active === '/' ? "border-sky-400" : ""} mx-1`}>Insight</div>
                </Link>
                <Link href={"/partners"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active === '/partners' ? "border-sky-400" : ""} mx-1`}>partners</div>
                </Link>
            </div>
        </div>
    )
}

export default LinkCard