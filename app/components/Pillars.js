"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Simple data structure representing each card in the Pillars section
const pillarItems = [
  {
    image: '/education.png',
    alt: 'EDUCATION',
    title: 'EDUCATION',
    text: 'The Bitcoin Academic Center aims to develop innovative academic programs to provide students with a comprehensive understanding of Bitcoin\'s technology, economics, and societal potential. From introductory courses to advanced seminars, we plan to cultivate critical thinking and practical expertise, empowering future leaders in a decentralized financial landscape.'
  },
  {
    image: '/research.png',
    alt: 'RESEARCH',
    title: 'RESEARCH',
    text: "Our center seeks to lead groundbreaking research into Bitcoin's protocol, scalability, and practical applications. By fostering collaboration between faculty and students, we aim to explore blockchain technology, monetary systems, and financial inclusion, producing insights to guide policymakers and enrich academic scholarship."
  },
  {
    image: '/advocacy.png',
    alt: 'ADVOCACY',
    title: 'ADVOCACY',
    text: 'Through a global network, the Bitcoin Academic Center plans to connect scholars, policymakers, and communities to champion Bitcoin adoption worldwide. We intend to organize workshops, conferences, and outreach initiatives to demystify Bitcoin, inspiring diverse audiences to embrace its transformative possibilities.'
  },
  {
    image: '/evangelization.png',
    alt: 'EVANGELIZATION',
    title: 'EVANGELIZATION',
    text: 'Through a global network, the Bitcoin Academic Center plans to connect scholars, policymakers, and communities to champion Bitcoin adoption worldwide. We intend to organize workshops, conferences, and outreach initiatives to demystify Bitcoin, inspiring diverse audiences to embrace its transformative possibilities.'
  },
  {
    image: '/preservation.png',
    alt: 'PRESERVATION',
    title: 'PRESERVATION',
    text: 'Through a global network, the Bitcoin Academic Center plans to connect scholars, policymakers, and communities to champion Bitcoin adoption worldwide. We intend to organize workshops, conferences, and outreach initiatives to demystify Bitcoin, inspiring diverse audiences to embrace its transformative possibilities.'
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
  // Resolve correct base path for static assets in production just like other components
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''

  return (
    <section id="pillars" className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">The Five Pillars</h2>
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-8 lg:gap-x-8">
          {pillarItems.map((item, index) => {
            const resolvedSrc = item.image.startsWith('http')
              ? item.image
              : `${basePath}${item.image.startsWith('/') ? '' : '/'}${item.image}`

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