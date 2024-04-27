import { getPrice } from '@/app/backend/init'
import WithdrawBoard from '@/components/withdraw'
import React from 'react'

const page = async () => {
    const rate = await getPrice()
  return (
    <WithdrawBoard rate={rate} />
  )
}

export default page