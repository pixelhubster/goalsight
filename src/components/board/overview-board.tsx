import { web3 } from '@/app/backend/init';
import React from 'react'
import Image from 'next/image';
export const dynamic = 'force-dynamic'
export const revalidate = 0;

const OverviewBoard = (props: { id: number, data: any }) => {
  let date: any = props.data ? web3.utils.toNumber(props.data?.createdAt) : 0;
  date = new Date(date as number * 1000);
  return (
    <div className='w-full h-fit bg-inherit rounded-t-xl flex flex-col justify-end overflow-hidden'>
      <div className='w-full h-[5rem] bg-sky-200'>
        {/* <Image src={`/images/${props.id}.jpg`} alt={''} width={300} height={300} layout='responsive' /> */}
      </div>
      <div className='w-full h-full bg-white rounded-t-xl p-5'>

        <div>
          <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-medium">{props.data?.aim}</h3>
          <h3 className="text-sm font-medium text-gray-800 py-1">{props.data?.goal}</h3>
          <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.data?.owner}</p> <p className="px-2 text-[12px]">
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </p>
            {/* <p>GNEC</p> */}
          </div>
          <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.data?.location?.city},{props.data?.location?.country}</p> <p className="px-2 text-[12px]">{props.data?.email}</p> </div>
        </div>

        <div className='w-full my-5'>
          <h4 className='font-medium text-sm py-1'>Description</h4>
          <h4 className='text-[15px] text-gray-800'>{props.data?.description}</h4>
        </div>
        {/* <PartnerCard name='ridge' /> */}
      </div>
    </div>
  )
}

export default OverviewBoard