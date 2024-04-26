import React from 'react'
import { ethToUSD, getPrice, web3 } from '@/app/backend/init'
import ContributeCard from '../card/contribute-card';
import EndGoalButton from '../card/endGoal-card';
import RewardButton from '../card/reward-card';
import WithdrawButton from '../card/withdraw-card';

const Statistics = async (props: { balance: number, partner: number, id: number, onWait: number, hasEnded: boolean }) => {
    const rate = await getPrice()
    const balance = ethToUSD(rate, Number(props.balance))
    const eth = parseFloat(props.balance.toString()) / Math.pow(10, 18)
    const ethValue = eth.toFixed(4)
    return (
        <div className='w-full bg-white rounded-md p-2 px-3 mb-2'>
            <div className='flex justify-between items-center mx-2 shrink overflow-hidden'>
                <div className='px-2 bg-gray-300/10 rounded-md py-3 mb-2 w-full mr-2 flex-shrink'>
                    <h4 className='text-xl'>${balance}</h4>
                    <h4 className='text-sm my-1'>{ethValue} eth</h4>
                    <h3 className='text-[12px] font-mono'>Raised</h3>
                </div>
                <div className='px-2 bg-gray-300/10 rounded-md py-3 mb-2 w-full mr-2 flex-shrink'>
                    <h4 className='text-xl'>{props.partner}</h4>
                    <h3 className='text-[12px] font-mono'>Partners</h3>
                </div>
                <div className='px-2 bg-gray-300/10 rounded-md py-3 mb-2 w-full mr-2 flex-shrink'>
                    <h4 className='text-xl'>{props.onWait}</h4>
                    <h3 className='text-[12px] font-mono'>pending</h3>
                </div>
                <div className='px-2 bg-gray-300/10 rounded-md py-3 mb-2 w-full flex-shrink'>
                    <h4 className='text-xl'>0</h4>
                    <h3 className='text-[12px] font-mono'>Withdrawal</h3>
                </div>
            </div>

            <div className='px-2 bg-gray-00/30 rounded-md py-3 mb-2 mx-2'>
                <h3 className='text-[14px] text-sm py-1 font-medium'>Gratitude</h3>
                <h4 className='text-[14px]'>
                    The insight community views your donation as
                    a life saver this project helps resolve so many isssues and provide life,
                    food and hope to people all over the world. The world is gratiful to have you.
                </h4>
            </div>
            <div className='w-full h-fit flex'>
                <ContributeCard id={props.id} path={`/insight/${props.id}/contribute`}/>
                <WithdrawButton id={props.id} />
                {props.hasEnded && (
                    <RewardButton id={props.id} />
                )}
            </div>
            {!props.hasEnded && (
                <EndGoalButton id={props.id} />
            )}
        </div>
    )
}

export default Statistics