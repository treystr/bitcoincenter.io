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
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${backgroundColorClass}`}
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
      </div>
    </section>
  )
}

export default Hero 