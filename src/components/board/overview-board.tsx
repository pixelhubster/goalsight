import React from 'react'

const OverviewBoard = () => {
  return (
    <div className='w-full h-fit bg-gray-200 rounded-t-xl flex flex-col justify-end overflow-hidden'>
        <div className='w-full h-[5rem] bg-gray-200'></div>
        <div className='w-full h-full bg-gray-400 rounded-t-xl p-5'>

          <div>
            <h3 className="text-lg line-clamp-3 overflow-hidden text-ellipsis font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3>
            <h3 className="text-md font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>@hengry</p> <p className="px-2 text-[12px]">24/23/23</p> <p>GNEC</p></div>
            <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>Accra, Ghana</p> <p className="px-2 text-[12px]">24 views</p> </div>
            {/* <div className="flex flex-auto flex-wrap">
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
              <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
            </div> */}
          </div>

          <div className='w-full my-5'>
            <h4 className='font-medium'>Description</h4>
            <h4 className='text-[15px] text-gray-800 px-2'>The description of the project</h4>
          </div>
              {/* <PartnerCard name='ridge' /> */}

        </div>
      </div>
  )
}

export default OverviewBoard