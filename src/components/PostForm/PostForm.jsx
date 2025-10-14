import React, { useRef } from 'react'

export default function PostForm() {
    const inputRef = useRef();

  return (
    <div className='flex items-center gap-5'>
        <input type="file" ref={inputRef}  className="" />

        <i className=""></i>
    </div>
  )
}
