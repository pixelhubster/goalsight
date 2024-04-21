"use client"
import InsightCard from "@/components/card/insight-card";
import { contract } from "../../backend/init"
import { useEffect, useState } from "react";

async function fetch() {
  const partners = await contract.methods.getPartners().call();
  return partners;
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
  console.log("IN", partners)
  return (
    <>
      <div className='customgrid w-full'>
        {partners ? (
          (partners as Array<any>).map((partner, key) => (
            <InsightCard key={key}/>
          ))
        ) : (
            <div>Loading</div>
        )}
      </div>
    </>
  );
}
