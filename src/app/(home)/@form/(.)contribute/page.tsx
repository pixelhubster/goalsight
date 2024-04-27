import { getPrice } from '@/app/backend/init'
import ContributeBoard from '@/components/contribute'
import React from 'react'

const page = async () => {
  const rate:number = await getPrice()
  return (
    <ContributeBoard rate={rate} />
  )
}

export default page