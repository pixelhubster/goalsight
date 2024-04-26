import React from 'react'

const InsightLayout = ({children, modal}: {children: React.ReactNode, modal: React.ReactNode}) => {
  return (
    <>
    {modal}
    {children}
    </>
  )
}

export default InsightLayout