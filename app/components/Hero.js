import Image from 'next/image';

export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : '';

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center md:space-x-6 w-full">
        <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
          <Image 
            src={`${basePath}/bust.png`} 
            alt="Bitcoin Academic Center" 
            width={248} 
            height={248} 
            className="w-32 sm:w-40 md:w-52 lg:w-[300px] h-auto"
          />
        </div>
        
        <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-tight lg:whitespace-nowrap drop-shadow-[0_8px_32px_rgba(0,0,0,0.75)]">
            Bitcoin Academic
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,140,0,0.5)]">
              Center
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto md:mx-0">
            The Bitcoin Academic Center will be the epicenter of Bitcoin scholarship and intellectual influence in the United States. It will be a pioneering interdisciplinary institution dedicated to advancing the understanding, adoption & innovation of Bitcoin through education, research, advocacy, and engagement with decision-makers.
          </p>
        </div>
      </div>
    </section>
  );
} 