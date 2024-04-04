import React from 'react'
import { MdBookmarkBorder } from 'react-icons/md'
import BookmarkCard from './bookmark-card'

const InsightCard = () => {
    return (
        <div className=" bg-gray-300 rounded-xl overflow-hidden flex flex-col justify-end max-sm:w-full shadow-lg cursor-pointer mr-2 my-2">
            <div className="w-full h-[5rem]"></div>
            <div className="w-full bg-gray-400 rounded-xl overflow-hidden">
                <div className="w-full flex ">

                    <div className="p-4 bg-gray-400 px-4 w-full">
                        <h3 className="text-md line-clamp-3 overflow-hidden text-ellipsis font-medium">Reconstructing aaaaaaaaaaaa Accra Bridge in Ghana Accra Greater Accra</h3>
                        <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>@hengry</p> <p className="px-2 text-[12px]">24/23/23</p> <p>GNEC</p></div>
                        <div className="text-[12px] flex m-1 ml-0 text-gray-800"><p>Accra, Ghana</p> <p className="px-2 text-[12px]">24 views</p> </div>
                        <div className="flex flex-auto flex-wrap">
                            <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
                            <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
                            <div className="p-1 bg-green-100 rounded-md text-[12px] px-3 m-1 ml-0 overflow-hidden whitespace-nowrap text-ellipsis w-[4rem]">gnec hospital</div>
                        </div>
                    </div>

                    <div className="p-2 bg-gray-400 px-4 flex flex-col items-start pr-5 overflow-hidden">
                        <div className="w-[min-content] self-end bg-gray-00 p-1 flex justify-end">
                            <BookmarkCard />
                        </div>
                        <h3 className="text-lg ml-0 font-medium w-full">$45004</h3>
                        <div className="flex flex-wrap bg-red-00 text-gray-800 w-full">
                            <h3 className="text-[12px] mr-1 ">404 contributors</h3>
                            <h3 className="text-[12px] mr-1">404 evidence </h3>
                        </div>
                        <div className="text-sm flex mr-5">&nbsp;</div>
                        {/* <div className="text-sm flex bg-white mr-5"><p>@hengry</p> <p className="px-2">24/23/23</p> <p>GNEC</p></div> */}
                        {/* <h3 className="text-sm">123 evidence</h3> */}
                        {/* <button className='w-full px-5 bg-blue-400 shadow-md rounded-md flex justify-center items-center my-2'>Contribute</button> */}
                    </div>
                </div>
                <button className='w-[stretch] shrink m-2 py-1 px-5 bg-blue-400 shadow-md rounded-md flex justify-center items-center my-2'>Contribute</button>
            </div>
            {/* <div className="flex flex-auto flex-wrap">
                <div className="p-1 bg-green-100 w-fit rounded-md text-[12px] px-3 m-1 ml-0">gnec hospital</div>
                <div className="p-1 bg-green-100 w-fit rounded-md text-[12px] px-3 m-1 ml-0">gnec hospital</div>
                <div className="p-1 bg-green-100 w-fit rounded-md text-[12px] px-3 m-1 ml-0">gnec hospital</div>
                <div className="p-1 bg-green-100 w-fit rounded-md text-[12px] px-3 m-1 ml-0">gnec hospital</div>
            </div> */}
            {/* <div className="w-full p-2 px-4 bg-gray-300/40">The new description of this projecgt a bunch of crazy and long stuffs just to take 
          snad waste space soa aoa the tjej s sdjod sdjtej sfjej  tjeo te e eoooooooooos adjdjdjajdodfdo </div> */}

        </div>
    )
}

export default InsightCard