'use client'

import Image from 'next/image'
import assetPath from '@/lib/assetPath'

const PersonSpotlight = ({ 
  name, 
  title, 
  imageSrc,
  imageAlt = "Person headshot"
}) => {
  return (
    <section className="py-12 sm:py-18 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Card Container */}
          <div className="backdrop-blur-lg border border-amber-500/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-2xl">
            {/* Image Section */}
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src={assetPath(imageSrc)}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, 600px"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Footer Section */}
            <div className="bg-slate-800/20 backdrop-blur-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-center">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold text-white mb-1 sm:mb-2 leading-tight">
                {name}
              </h2>
              <p className="text-sm sm:text-md md:text-lg text-slate-200 leading-relaxed">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonSpotlight