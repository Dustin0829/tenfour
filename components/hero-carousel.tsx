"use client"

import Image from "next/image"

const IMAGES = [
  { src: "/1.jpg", width: 2048, height: 1368 },
  { src: "/2.jpg", width: 1368, height: 2048 },
  { src: "/3.jpg", width: 1368, height: 2048 },
  { src: "/4.jpg", width: 2048, height: 1152 },
  { src: "/5.jpg", width: 2048, height: 1368 },
]

export default function HeroCarousel() {
  const slides = [...IMAGES, ...IMAGES]

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[min(35vw,420px)] overflow-hidden pointer-events-none z-0 opacity-50">
      <div className="absolute top-0 left-0 right-0 flex flex-col animate-hero-carousel">
        {slides.map((item, index) => (
          <div key={`${item.src}-${index}`} className="shrink-0 w-full">
            <Image
              src={item.src}
              alt="tenFOUR × COIN"
              width={item.width}
              height={item.height}
              className="w-full h-auto object-contain rounded-lg mx-4 my-2 border border-white/5"
              sizes="(max-width: 768px) 35vw, 420px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
