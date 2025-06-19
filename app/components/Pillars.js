"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import assetPath from '@/lib/assetPath'

// Simple data structure representing each card in the Pillars section
const pillarItems = [
  {
    image: '/education.png',
    alt: 'EDUCATION',
    title: 'EDUCATION',
    text: 'Creation of university degrees, PhD scholarships, online courses, podcasts and webinars.'
  },
  {
    image: '/research.png',
    alt: 'RESEARCH',
    title: 'RESEARCH',
    text: "Papers, books, and briefs. Conferences and lectures. Chairs, professorships, and fellowship programs."
  },
  {
    image: '/advocacy.png',
    alt: 'ADVOCACY',
    title: 'ADVOCACY',
    text: 'Engage with decision-makers at federal, local, international levels. Policy reports and roundtables.'
  },
  {
    image: '/evangelization.png',
    alt: 'EVANGELIZATION',
    title: 'EVANGELIZATION',
    text: 'Outreach promoting Bitcoin adoption, targeting corporations, nonprofits, charities, and organizations.'
  },
  {
    image: '/preservation.png',
    alt: 'PRESERVATION',
    title: 'PRESERVATION',
    text: 'Partnership with Satoshi Nakamoto Institute to build a library, museum, and art gallery.'
  }
]

// Custom hook for intersection observer
function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      options
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])
  return [ref, inView]
}

const Pillars = () => {
  return (
    <section id="pillars" className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-10 text-center tracking-tight">The Five Pillars</h2>
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-8 lg:gap-x-8">
          {pillarItems.map((item, index) => {
            const resolvedSrc = item.image.startsWith('http')
              ? item.image
              : assetPath(item.image)

            // Use intersection observer for each card
            const [cardRef, inView] = useInView({ threshold: 0.2 })
            // Stagger delay for each card
            const delay = `${index * 120}ms`

            return (
              <div
                key={index}
                ref={cardRef}
                className="w-full sm:w-1/2 lg:basis-[30%] lg:w-[30%] flex flex-col items-center text-center transition-all duration-700 ease-out group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(48px)',
                  transitionDelay: delay
                }}
              >
                <div className="w-full h-56 relative mb-6 overflow-hidden">
                  <Image
                    src={resolvedSrc}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed max-w-sm">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pillars 