"use client"
import React, { useState } from 'react'
import { MdBookmarkBorder, MdBookmarkAdded } from 'react-icons/md'

const BookmarkCard = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <button className='text-blue-800' onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? <MdBookmarkAdded className='text-lg' /> : <MdBookmarkBorder className='text-lg' />}
        </button>
    )
}

export default BookmarkCard