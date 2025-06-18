'use client'

import { FaChevronDown } from 'react-icons/fa'

const Hero = ({
  backgroundImage = '',
  backgroundColorClass = '',
  withGradient = false,
  gradientClassName = 'bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90',
  filter = 'sepia(20%) saturate(120%) brightness(80%)',
  separatorImage = '/separator.png'
}) => {
  // Resolve full path for background image when a relative path is provided.
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''
  const resolvedBgImage = backgroundImage
    ? backgroundImage.startsWith('http')
      ? backgroundImage
      : `${basePath}${backgroundImage.startsWith('/') ? '' : '/'}${backgroundImage}`
    : ''

  // Resolve full path for separator image
  const resolvedSeparatorImage = separatorImage
    ? separatorImage.startsWith('http')
      ? separatorImage
      : `${basePath}${separatorImage.startsWith('/') ? '' : '/'}${separatorImage}`
    : ''

  return (
    <section
      id="home"
      className={`relative h-screen flex items-center justify-center overflow-hidden ${backgroundColorClass}`}
    >
      {withGradient && (
        <div className={`absolute inset-0 z-10 ${gradientClassName}`}></div>
      )}

      {resolvedBgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110 animate-slow-zoom"
          style={{
            backgroundImage: `url('${resolvedBgImage}')`,
            filter
          }}
        ></div>
      )}

      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl lg:text-[8rem] font-extrabold text-white mb-8 leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.75)]">
            Bitcoin Academic
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,140,0,0.5)]">
              Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Pioneering Bitcoin research, education, and policy from the heart of Washington, DC. Where rigorous scholarship drives bold innovation to redefine the future of global finance.
          </p>
        </div>
      </div>
      {/* Decorative Scroll Down Arrow */}
      <button
        type="button"
        aria-label="Scroll to next section"
        tabIndex={0}
        onClick={() => {
          const nextSection = document.querySelector('#about')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center focus:outline-none group"
      >
        <FaChevronDown
          className="text-amber-400 drop-shadow-lg animate-bounce group-focus:animate-pulse"
          style={{ fontSize: 48 }}
        />
        <span className="sr-only">Scroll to next section</span>
      </button>
    </section>
  )
}

export default Hero 