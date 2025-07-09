'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-16 max-md:left-0 max-md:w-full w-[90%] rounded-b-xl z-50 backdrop-blur-md bg-white/10 shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/doc_mcstuffins.png" width={50} height={50} alt="logo" className="rounded-full" />
          </div>

          {/* Menu - Desktop */}
          <div className="hidden md:flex space-x-6 text-black font-semibold">
            <a href="#" className="hover:text-purple-300 transition">Home</a>
            <a href="#" className="hover:text-purple-300 transition">About</a>
            <a href="#" className="hover:text-purple-300 transition">Contact</a>
          </div>

          {/* Menu Icon - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/10 backdrop-blur-md text-black rounded-b-lg">
          <a href="#" className="block py-2 border-b border-white/20">Home</a>
          <a href="#" className="block py-2 border-b border-white/20">About</a>
          <a href="#" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
