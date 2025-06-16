'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-15 h-15 rounded-lg flex items-center justify-center">
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Bitcoin Academic Center</h1>
              <p className="text-xs text-slate-400">Washington, DC</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar 