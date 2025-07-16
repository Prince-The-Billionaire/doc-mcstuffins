import React from 'react'
import ChillyCard from './ChillyCard'
import StuffyCard from './StuffyCard'
import LambieCard from './LambieCard'
import HollieCard from './HollieCard'

const Team = () => {
  return (
    <div className='w-screen h-screen bg-purple-100 items-center flex flex-col justify-center'> 
        <h1 className='text-5xl font-bold text-black '>Our Team</h1>
        <p className='text-lg text-gray-700 mt-4'>Meet the talented toys behind our success.</p>
        <div className='mt-10 flex flex-row gap-10'>
          <ChillyCard/>
          <StuffyCard/>
          <LambieCard/>
          <HollieCard/>
        </div>
    </div>
  )
}

export default Team