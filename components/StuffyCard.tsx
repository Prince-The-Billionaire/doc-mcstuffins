'use client'

import React from 'react'
import Image from 'next/image'

const StuffyCard = () => {
  return (
    <div className="w-80 p-6 relative flex flex-col justify-between rounded-3xl bg-blue-500/30 backdrop-blur-xl border border-white/20 shadow-xl text-white text-center space-y-4">
      {/* Title image */}
      <div className="flex">
        <Image
          src="/stuffy-text.png"
          alt="stuffy title"
          width={200}
          height={50}
          className="object-contain absolute -top-12 left-1/2 transform -translate-x-1/2"
        />
      </div>

      {/* Character image */}
      <Image
        src="/stuffy.png"
        alt="stuffy"
        width={200}
        height={200}
        className='hover:scale-105 transition-transform duration-300 mx-auto'
      />

      {/* Name */}
      <div>
        <p className="text-blue-800 text-left font-semibold text-xl">Stuffy</p>

      {/* Description */}
      <p className="text-black text-left text-sm">
        Ah, Stuffy The Brave Dragon but when push comes to shove, he is always scared of everything! <br />
        Which is okay
      </p>   
    </div>
    </div>
  )
}

export default StuffyCard
