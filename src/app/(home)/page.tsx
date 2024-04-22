"use client"
import InsightCard from "@/components/card/insight-card";
import { contract } from "../backend/init"
import { useEffect, useState } from "react";

async function fetch() {
  const goals = await contract.methods.getGoals().call();
  return goals;
}
export default function Home() {
  const [goals, setGoals] = useState<any>(null);
  async function ft() {
    const result = await fetch();
    setGoals(result);
  }
  useEffect(() => {
    ft();
  }, [])
  console.log("IN", goals)
  return (
    <>
      <div className='customgrid w-full'>
        {goals ? (
          (goals as Array<any>).map((goal, key) => (
            <InsightCard key={key} props={{...goal, id: key}}/>
          ))
        ) : (
            <div>Loading</div>
        )}
      </div>
    </>
  );
}
