'use client'

import React from 'react'
import Image from 'next/image'

const DocCard = () => {
  return (
    <div className="w-80 p-6 flex flex-col justify-between relative rounded-3xl bg-violet-300/30 backdrop-blur-xl border border-white/20 shadow-xl text-white text-center space-y-4">
          {/* Title image */}
          <div className="flex">
            <Image
              src="/doc-text.png"
              alt="Doc title"
              width={200}
              height={50}
              className="object-contain absolute -top-12 left-1/2 transform -translate-x-1/2"
            />
          </div>
    
          {/* Character image */}
          <Image
            src="/doc.png"
            alt="doc"
            width={200}
            height={200}
            className='hover:scale-105 transition-transform duration-300 mx-auto'
          />
    
          {/* Name */}
          <div>
            <p className="text-blue-600 text-left font-semibold text-xl">Doc</p>
    
          {/* Description */}
          <p className="text-black text-left text-sm">
            Chilly is always scared that he would melt away. <br />
            I keep telling him that he's just a toy!
          </p>
          </div>
        </div>
  )
}

export default DocCard