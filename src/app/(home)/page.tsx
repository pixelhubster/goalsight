import InsightCard from "@/components/card/insight-card";
import { contract } from "../backend/init"

export const dynamic = 'force-dynamic';
export const revalidate = 0;
async function fetchD() {
  const goals = await contract.methods.getGoals().call();
  // const daoadd = await contract.methods.daoLibrary().call();
  // console.log(daoadd)
  return goals;
}

export default async function Home() {
  let goals: any = [];
  async function ft() {
    const result = await fetchD();
    goals = result
  }
  await ft();
  return (
    <>
      <div className='w-full min-h-screen'>
      <div className='customgrid w-full min-h-fit'>
        {goals ? (
          (goals as Array<any>).map((goal, key) => (
            <InsightCard key={key} props={{ ...goal, id: key }} />
          ))
        ) : (
          <div>No contributions...</div>
        )}
      </div>
      </div>
    </>
  );
}
