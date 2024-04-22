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
  console.log("IN", partners)
  const partner = {
    name: "Ridge Hospital",
    goal: "The goal",
    description: "the description",
    date: "",
    email: "pixelhusbter@gmail.com",
    location: {
      country: "Ghana",
      city: "Accra",
      state: "Greater Accra",
      locationAddress: "",
      locationAddress2: "",
    },
    approved: false,
    owner: "",
    id: 1
  }
  return (
    <>
    <div className='customgridApprovalCard w-full'>
        <ApprovalCard btn='Join as Partner' {...partner} />
    </div>
    </>
  )
}

export default Page