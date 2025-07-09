'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import DocCard from './DocCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Tool = {
  name: string
  description: string
  image: string
}

const tools: Tool[] = [
  {
    name: 'Stethoscope',
    description: 'For Listening To Heartbeats',
    image: '/stethoscope.png'
  },
  {
    name: 'Hammer',
    description: 'For testing reflexes',
    image: '/hammer.png'
  },
  {
    name: 'Band Aid',
    description: 'For Covering Up Ouchies',
    image: '/bandaid.png'
  },
  {
    name: 'Syringe',
    description: 'For Giving Injections',
    image: '/syringe.png'
  }
]

const Tools = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          opacity: 0,
          rotateX: 90,
          y: 50,
          transformOrigin: 'top center',
          duration: 1,
          delay: i * 0.1,
          ease: 'bounce.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="w-screen min-h-screen bg-purple-50 flex flex-col items-center px-4 py-16"
    >
      <p className="text-4xl font-bold text-purple-800 text-center">Some Of Doc's Tools</p>
      <p className="text-2xl text-black/80 text-center mt-2 max-w-xl">
        These are the best tools Doc uses to treat her patients
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        <DocCard />

        <div className="grid grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="p-4 bg-white/30 backdrop-blur-md border border-purple-200 rounded-2xl shadow-md flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105"
            >
              <Image
                src={tool.image}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <h3 className="text-lg font-semibold text-purple-700">{tool.name}</h3>
              <p className="text-sm text-gray-600 text-center">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools
