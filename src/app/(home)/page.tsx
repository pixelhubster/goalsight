"use client"
import InsightCard from "@/components/card/insight-card";
import { contract } from "../backend/init"
// import { contract } from "@/components/context/contractContext";
import { useEffect, useState } from "react";

async function fetch() {
  const goals = await contract.methods.getGoals().call();
  // const daoadd = await contract.methods.daoLibrary().call();
  // console.log(daoadd)
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
  console.log("goals", goals)
  return (
    <>
      <div className='customgrid w-full'>
        {goals ? (
          (goals as Array<any>).map((goal, key) => (
            <InsightCard key={key} props={{...goal, id: key}}/>
          ))
        ) : (
            <div>Loading...</div>
        )}
      </div>
    </>
  );
}
