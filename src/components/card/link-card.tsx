import React from 'react'
import Link from 'next/link'

const LinkCard = () => {
    return (
        <div className="w-full h-[15rem] bg-emerald-300 flex items-end">
            <div className="w-full h-[3rem] bg-red-200 flex items-end px-2 md:px-10">
                <Link href={"/"}>
                    <div className="w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Insight</div>
                </Link>
                <Link href={"/saved"}>
                    <div className="w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Saved</div>
                </Link>
                <Link href={"/partner"}>
                    <div className="w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Partner</div>
                </Link>
                <Link href={"/approver"}>
                    <div className="w-fit bg-green-00 p-1 flex justify-center items-center cursor-pointer border-b-2 border-solid border-black mx-1">Approver</div>
                </Link>
            </div>
        </div>
    )
}

export default LinkCard