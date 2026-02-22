"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument"></span> | Creative Production Team
          <br />
        </h1>

        {/* Description */}
        <p className="text-lg font-light text-white/70 mb-4 leading-relaxed">
        We don’t chase views. We build them.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            BUILD WITH US
          </button>
        </div>
      </div>
    </main>
  )
}
