import { contract } from "../../backend/init"
import ApprovalCard from "@/components/card/approval-card";

async function fetch() {
  const result = await contract.methods.getPartners().call();
  return result;
}
export default async function Home() {
  let partners: any = [];
  async function ft() {
    const result = await fetch();
    partners = result;
  }
  await ft()
  return (
    <>
      <div className='customgrid w-full min-h-screen'>
        {partners ? (partners.map((partner: any, key: number) => (
          <ApprovalCard key={key} btn='Join as Partner' {...partner} id={key} />
        ))) : (
          <div>No partners</div>
        )
        }
      </div>
    </>
  );
}
