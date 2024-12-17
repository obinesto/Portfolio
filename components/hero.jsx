'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="min-h-screen flex items-center px-8 pt-32">
      <div>
        <p className="text-[#4ECCA3] mb-4 hero-anim">Hi, my name is</p>
        <h1 className="text-4xl lg:text-6xl font-light mb-4 hero-anim">Cyprian.</h1>
        <h2 className="text-3xl lg:text-5xl font-light text-gray-400 mb-6 hero-anim">A web developer</h2>
        <p className="max-w-2xl text-gray-400 mb-8 hero-anim">
          A full stack engineer with experience building web apps with modern technologies. I&apos;m able to create pixel perfect UI design with front end technologies. I can also create and implement REST-ful APIs.
        </p>
        <Link
          href="https://drive.google.com/file/d/1KtmoT0O0bpFjf4hCdlcQ2QB7e1ln-6_1/view?usp=sharing"
          target='blank'
          className="inline-block px-6 py-2 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors hero-anim"
        >
          MY CV
        </Link>
      </div>
    </div>
  )
}
