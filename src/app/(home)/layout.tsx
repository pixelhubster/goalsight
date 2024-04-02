import React from 'react'
import Frame from '../frame'

const layout = ({children, form}: {children: React.ReactNode, form: React.ReactNode}) => (
    <>
        {form}
        <Frame>
            {children}
        </Frame>
    </>
)

export default layout