"use client"
import { contract } from '@/app/backend/init';
import ApprovalCard from '@/components/card/approval-card'
import React, { useEffect, useState } from 'react'

async function fetch() {
  const result = await contract.methods.getPartners().call();
  return result;
}
const Page = () => {
  const [partners, setPartners] = useState<any>(null);
  async function ft() {
    const result = await fetch();
    setPartners(result);
  }
  useEffect(() => {
    ft();
  }, [])
  console.log("partners", partners)
  return (
    <>
    <div className='customgridApprovalCard w-full'>
      {partners && partners.map((partner: any, key: number) => (
        <ApprovalCard key={key} btn='Join as Partner' {...partner} id={key} />
      ))}
    </div>
    </>
  )
}

export default Page