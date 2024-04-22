import Insight from '@/components/insight'
import React, { useState } from 'react'

const page = ({params}: {params: {id: number[],}}) => {
    const id = params.id.pop();
  return (
    <>
        <Insight id={id}/>
    </>
  )
}

export default page