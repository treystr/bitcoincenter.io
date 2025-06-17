'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const pathname = usePathname()
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 animate-slow-zoom"
        style={{
          backgroundImage: `url('${basePath}/hero.jpg')`,
          filter: 'sepia(20%) saturate(120%) brightness(80%)'
        }}
      ></div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Bitcoin Academic
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advancing Bitcoin research, education, and policy in the heart of the nation's capital.
            Where classical scholarship meets digital innovation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Email Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4 max-w-md w-full">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="w-full px-6 py-4 bg-slate-800/50 backdrop-blur-lg border border-amber-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap ${
                isSubscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/25'
              }`}
            >
              {isSubscribed ? 'Thanks!' : 'Connect'}
            </button>
          </form>

          {isSubscribed && (
            <p className="text-green-400 mt-4 text-sm font-medium animate-pulse">
              Thank's for your interest! We'll reach out with more updates.
            </p>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero 