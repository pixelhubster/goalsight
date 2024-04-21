"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkCard = () => {
    const path = usePathname()
    const [active, setActive] = useState<string>(path)
    useEffect(() => {
        setActive(path)
    }, [path])
    return (
        <div className="w-full h-[20rem] bg-emerald-300 flex items-end">
            <div className="w-full h-[3rem] bg-red-200 flex items-end px-2 md:px-10">
                <Link href={"/"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active ===  '/' ? "border-black" : ""} mx-1`}>Insight</div>
                </Link>
                {/* <Link href={"/saved"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active ===  '/saved' ? "border-black" : ""} mx-1`}>aved</div>
                </Link> */}
                <Link href={"/partners"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active ===  '/partners' ? "border-black" : ""} mx-1`}>partners</div>
                </Link>
                <Link href={"/partner"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active ===  '/partner' ? "border-black" : ""} mx-1`}>Partner</div>
                </Link>
                <Link href={"/approver"}>
                    <div className={`w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid ${active ===  '/approver' ? "border-black" : ""} mx-1`}>Approver</div>
                </Link>
            </div>
        </div>
    )
}

export default LinkCard