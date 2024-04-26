import Insight from '@/components/insight'
import React, { useState } from 'react'

const page = ({params}: {params: {id: number[],}}) => {
    const id = params.id[0];
  return (
    <>
        <Insight id={id}/>
    </>
  )
}

export default page