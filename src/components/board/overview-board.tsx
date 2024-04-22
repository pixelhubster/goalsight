"use client"
import { contract, web3 } from '@/app/backend/init';
import React, { useEffect, useState } from 'react'


const OverviewBoard = (props: {id: number, data: any}) => {
  let date: any = props.data ? web3.utils.toNumber(props.data?.createdAt): 0;
  date = new Date(date as number * 1000);
  return (
    <div className='w-full h-fit bg-gray-200 rounded-t-xl flex flex-col justify-end overflow-hidden'>
        <div className='w-full h-[5rem] bg-gray-200'></div>
        <div className='w-full h-full bg-gray-400 rounded-t-xl p-5'>

          <div>
            <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-bold">{props.data?.aim}</h3>
            <h3 className="text-md font-medium">{props.data?.goal}</h3>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.data?.owner}</p> <p className="px-2 text-[12px]">
              {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
              </p>
              {/* <p>GNEC</p> */}
              </div>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>{props.data?.location?.city},{props.data?.location?.country}</p> <p className="px-2 text-[12px]">{props.data?.email}</p> </div>
            {/* <div className="flex flex-auto flex-wrap">
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
            </div> */}
          </div>

          <div className='w-full my-5'>
            <h4 className='font-medium'>Description</h4>
            <h4 className='text-[15px] text-gray-800 px-2'>{props.data?.description}</h4>
          </div>
              {/* <PartnerCard name='ridge' /> */}

        </div>
      </div>
  )
}

export default OverviewBoard