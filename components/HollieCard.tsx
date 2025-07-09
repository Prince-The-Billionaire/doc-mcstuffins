'use client'

import React from 'react'
import Image from 'next/image'

const HollieCard = () => {
  return (
    <div className="w-80 p-6 relative rounded-3xl bg-pink-500/30 flex justify-between flex-col backdrop-blur-xl border border-white/20 shadow-xl text-white text-center space-y-4">
          {/* Title image */}
          <div className="flex">
            <Image
              src="/hallie-text.png"
              alt="hallie title"
              width={200}
              height={50}
              className="object-contain absolute -top-12 left-1/2 transform -translate-x-1/2"
            />
          </div>
    
          {/* Character image */}
          <Image
            src="/hallie.png"
            alt="hallie"
            width={200}
            height={200}
            className='hover:scale-105 transition-transform duration-300 mx-auto'
          />
    
          {/* Name */}
          <div className='justify-bottom  self-end'>
            <p className="text-purple-800 text-left font-semibold text-xl">Hallie</p>
    
          {/* Description */}
          <p className="text-black text-left text-sm">
            Lambie the cute lamb is always there to give hugs and cuddles. <br />
            She is the most adorable member of our team!
          </p>
          </div>
        </div>
  )
}

export default HollieCard