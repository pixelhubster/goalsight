import Insight from '@/components/insight'
import React from 'react'
export const dynamic = 'force-dynamic'
export const revalidate = 0;

const page = ({params}: {params: {id: number[],}}) => {
    const id = params.id[0];
  return (
    <>
        <Insight id={id}/>
    </>
  )
}

export default page