'use client'

import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
 // if clip-path is in a separate CSS file

const GlassCard = () => {
  return (
    <div className="w-72 absolute left-12 bottom-4  bg-white/10 backdrop-blur-md border flex flex-row gap-3 border-white/20 text-white rounded-2xl shadow-lg">
      {/* Image */}
      <div className="w-full h-40 relative rounded-xl flex flex-row gap-3 overflow-hidden mb-4">
        <Image
          src="/stuffy.png"
          alt="Preview"
          fill
          className="object-contain"
        />
      </div>

      {/* Title & Rating */}
      <div className='flex flex-col'>
        <div className="">
        <h2 className="text-lg text-left font-semibold">Doc McStuffins</h2>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm mt-2 text-left text-white/80">
        A caring young girl who fixes toys with her magic stethoscope. Source - Trust Me Bro
      </p>
      </div>
    </div>
  )
}

export default GlassCard
