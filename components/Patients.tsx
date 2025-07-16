'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const patients = [
  {
    name: 'Croc',
    description: 'He had an ouchie tooth and we fixed it!',
    image: '/croc.png'
  },
  {
    name: 'Sir Kirby',
    description: 'He bravely battled a loose arm and came out victorious!',
    image: '/ouchie1.png'
  },
  {
    name: 'Gabby',
    description: 'Gabby had a squeaky voicebox — Doc tuned it perfectly!',
    image: '/trailer.png'
  },
  {
    name: 'Ballerina',
    description: 'Twisted her ankle during ballet — but Doc helped her twirl again!',
    image: '/ouchie2.png'
  }
]

const Patients = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset'
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="w-screen bg-purple-100 py-20 px-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-purple-700">Patients</h2>
      <p className="text-lg text-center text-gray-700 mt-2 mb-12">
        Meet our adorable patients who need Doc’s care.
      </p>

      <div className="space-y-16 max-w-6xl mx-auto">
        {patients.map((patient, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={index}
              ref={(el) => {
                    if (el) cardRefs.current[index] = el
                }}
              className={`flex flex-col md:flex-row ${
                !isEven ? 'md:flex-row-reverse' : ''
              } items-center gap-10`}
            >
              {/* Image Card */}
              <div className="rounded-3xl bg-gradient-to-br from-pink-200/60 to-purple-200/60 backdrop-blur-xl shadow-lg p-4 transition-transform hover:scale-105">
                <Image
                  src={patient.image}
                  alt={patient.name}
                  width={200}
                  height={200}
                  className="rounded-2xl"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left max-w-md">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
                  Meet {patient.name}
                </h3>
                <p className="text-md text-black/60 mt-2">{patient.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Patients
