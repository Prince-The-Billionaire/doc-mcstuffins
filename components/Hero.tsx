'use client'

import React, { useEffect, useRef } from 'react'
import GlassCard from './GlassCard'
import { FaSyringe } from 'react-icons/fa'
import gsap from 'gsap'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const cardRef = useRef(null)
  const formRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } })

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(paragraphRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.5')
      .fromTo(cardRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, '-=0.4')
      .fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.4')

    gsap.to(buttonRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <div ref={containerRef} className="bg-[url(/doc-hero-img.jpg)] bg-fixed bg-cover bg-center relative w-screen min-h-screen overflow-hidden">
      <div className="absolute w-full h-full z-5 bg-black/50" />

      <div className="flex flex-col items-center z-20 relative justify-center h-screen text-white text-center space-y-6 px-4">
        <h1 ref={headingRef} className="font-bold text-5xl md:text-6xl">
          Time For The <span className="text-purple-300">CheckUp</span>
        </h1>

        <p ref={paragraphRef} className="text-2xl md:text-3xl text-white/75 max-w-3xl">
          Welcome to Doc McStuffins' Magical Clinic Where Toys Get All The Love And Care They Deserve
        </p>

          <GlassCard />
     

        <div ref={formRef} className="flex flex-col md:flex-row gap-4 mt-6">
          <input
            className="w-full md:w-[32rem] h-10 rounded-xl bg-black/10 backdrop-blur-2xl border-purple-200 border px-4 text-white placeholder:text-white/60"
            placeholder="Describe Your Problem"
            type="text"
          />
          <button
            ref={buttonRef}
            className="bg-purple-500 flex flex-row items-center justify-center gap-2 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            <FaSyringe />
            Visit Doc
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
