'use client'

import React from 'react'
import { FaHeart, FaStethoscope } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 text-purple-900 pt-12 pb-6 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/doc_mcstuffins.png"
            alt="Doc McStuffins"
            width={60}
            height={60}
            className="rounded-full bg-white p-1"
          />
          <p className="mt-2 font-semibold text-lg">Doc McStuffins Clinic</p>
          <p className="text-sm text-purple-700">Where toys get love & care 💖</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-2">
          <a href="#tools" className="hover:text-purple-600 font-medium">Tools</a>
          <a href="#patients" className="hover:text-purple-600 font-medium">Patients</a>
          <a href="#checkup" className="hover:text-purple-600 font-medium">Check-up</a>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right space-y-2">
          <p className="font-semibold">Contact Us</p>
          <p className="text-sm">123 Toy Lane, Imaginationville</p>
          <p className="text-sm">Email: care@docclinic.toys</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-purple-300 mt-8 pt-4 text-center text-sm text-purple-700">
        <div className="flex justify-center items-center gap-2">
          <FaStethoscope />
          <span>Stay healthy, happy & helpful!</span>
          <FaHeart className="text-pink-500 animate-pulse" />
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Doc McStuffins. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
