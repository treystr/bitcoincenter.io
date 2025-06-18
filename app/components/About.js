"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Simple data structure representing each card in the About section
const aboutItems = [
  {
    image: '/lincoln.png',
    alt: 'Shaping Education',
    title: 'Shaping Education',
    text: 'The Bitcoin Academic Center aims to develop innovative academic programs to provide students with a comprehensive understanding of Bitcoin\'s technology, economics, and societal potential. From introductory courses to advanced seminars, we plan to cultivate critical thinking and practical expertise, empowering future leaders in a decentralized financial landscape.'
  },
  {
    image: '/capitol.png',
    alt: 'Advancing Research',
    title: 'Advancing Research',
    text: "Our center seeks to lead groundbreaking research into Bitcoin's protocol, scalability, and practical applications. By fostering collaboration between faculty and students, we aim to explore blockchain technology, monetary systems, and financial inclusion, producing insights to guide policymakers and enrich academic scholarship."
  },
  {
    image: '/court.png',
    alt: 'Global Awareness',
    title: 'Global Awareness',
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

const About = () => {
  // Resolve correct base path for static assets in production just like other components
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''

  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {aboutItems.map((item, index) => {
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
                className="flex flex-col items-center text-center transition-all duration-700 ease-out group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(48px)',
                  transitionDelay: delay
                }}
              >
                <div className="w-full h-56 relative mb-6 overflow-hidden rounded-lg">
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

export default About 