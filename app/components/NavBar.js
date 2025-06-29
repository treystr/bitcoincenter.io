'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import assetPath from '@/lib/assetPath'

// Accept an optional `backgroundClass` prop to apply custom background styles.
const NavBar = ({ backgroundClass = '' }) => {
  const pathname = usePathname()

  // State to track scroll direction
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        // Scrolling down
        setShowNav(false)
      } else {
        // Scrolling up
        setShowNav(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${backgroundClass} ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-[15px] h-[15px] rounded-lg flex items-center justify-center ml-auto">
              <Image
                src={assetPath('/monument.png')}
                alt="Bitcoin Center Logo"
                width={60}
                height={60}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Bitcoin Academic Center</h2>
              <p className="text-xs text-slate-400">Washington, DC</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#contact">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar 