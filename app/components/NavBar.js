'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Accept an optional `backgroundClass` prop to apply custom background styles.
const NavBar = ({ backgroundClass = '' }) => {
  const pathname = usePathname()
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-15 h-15 rounded-lg flex items-center justify-center">
              <Image src={`${basePath}/logo.svg`} alt="Logo" width={28} height={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Bitcoin Academic Center</h1>
              <p className="text-xs text-slate-400">Washington, DC</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#contact">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar 