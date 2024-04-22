"use client"
import { contract } from "../../backend/init"
import { useEffect, useState } from "react";
import ApprovalCard from "@/components/card/approval-card";

async function fetch() {
  const result = await contract.methods.getPartners().call();
  return result;
}
export default function Home() {
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
      <div className='customgrid w-full'>
        {partners ? (partners.map((partner: any, key: number) => (
          <ApprovalCard key={key} btn='Join as Partner' {...partner} id={key} />
        ))) : (
          <div>Loading</div>
        )
        }
      </div>
    </>
  );
}
