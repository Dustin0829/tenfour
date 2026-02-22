"use client"

import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { BounceCards } from "@/components/ui/bounce-cards"

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"]

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Soft lighting gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 50%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + BounceCards */}
          <div className="flex flex-col gap-12">
            <Fade direction="up" triggerOnce duration={700} fraction={0.2}>
              <div>
                <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed">
                  We shoot and produce everything from films to videos, with a
                  quality you can trust. We work with businesses and creatives to
                  create the best content possible, working around the clock to
                  deliver results in an efficient manner.
                </p>
                <p className="text-white/50 text-xs md:text-sm font-light tracking-[0.2em] uppercase mt-12">
                  Cinematic. Elite. Intentional.
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce duration={700} fraction={0.2} delay={200}>
              <div className="flex justify-center lg:justify-start overflow-visible min-h-[250px]">
                <BounceCards
                  className="about-bounce-cards"
                  images={images}
                  containerWidth={500}
                  containerHeight={250}
                  animationDelay={0.8}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover
                />
              </div>
            </Fade>
          </div>

          {/* Right: Photo */}
          <Fade direction="up" triggerOnce duration={700} fraction={0.2} delay={100}>
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-lg">
              <Image
                src="/7.jpg"
                alt="tenFOUR production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
