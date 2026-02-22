"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"
import HeroContent from "@/components/hero-content"
import Navbar from "@/components/navbar"
import TeamSection from "@/components/team-section"
import ProjectSection from "@/components/project-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
const ShaderBackground = dynamic(
  () => import("@/components/shader-background"),
  { ssr: false }
)

export default function ShaderShowcase() {
  return (
    <>
    <SmoothScroll />
    <ShaderBackground>
      <HeroCarousel />
      <Navbar />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/Logo.png"
          alt="tenFOUR"
          width={700}
          height={260}
          className="w-[min(90vw,700px)] h-auto object-contain"
          priority
        />
      </div>
      <HeroContent />
    </ShaderBackground>
    <ProjectSection />
    <AboutSection />
    <TeamSection />
    <ContactSection />
    <Footer />
    </>
  )
}
