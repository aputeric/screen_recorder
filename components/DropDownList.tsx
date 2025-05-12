"use client";

import React, { useState } from 'react'

const DropDownList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
     <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
       <div className='filter-trigger'
      </div>
      </div>
  )
}

export default DropDownList