"use client"

import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"

const YOUTUBE_VIDEO_ID = "L3l7xgbmIkY"

const PROJECTS = [
  {
    id: 1,
    title: "tenFOUR × COIN",
    collection: "COLLECTION // BRAND FILM",
    tagline: "Creative production that moves.",
    location: "PHILIPPINES",
    year: "2026",
    poster: "/8.jpg",
    videoSrc: YOUTUBE_VIDEO_ID,
  },
  {
    id: 2,
    title: "HOTEL ROSE",
    collection: "COLLECTION // COMMERCIAL",
    tagline: "Frames that capture the moment.",
    location: "PHILIPPINES",
    year: "2026",
    poster: "/6.jpg",
    videoSrc: YOUTUBE_VIDEO_ID,
  },
]

export default function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  const openModal = (videoId: string) => {
    setActiveVideoId(videoId)
    setIsModalOpen(true)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Soft lighting gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(255,255,255,0.02) 0%, transparent 40%)",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header - title left, description right */}
        <Fade direction="up" triggerOnce duration={700} fraction={0.15}>
          <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight uppercase">
                Selected Works
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                Frames that move brands. Created for those who create. Every element is crafted
                for impact—cinematic storytelling, minimal forms, intentional motion. This is not
                just video production—it&apos;s visual code.
              </p>
            </div>
          </div>
        </Fade>

        {/* Two project previews side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <Fade key={project.id} direction="up" triggerOnce duration={600} fraction={0.15} delay={index * 100}>
              <ProjectCard project={project} onWatch={() => openModal(project.videoSrc)} />
            </Fade>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {isModalOpen && activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({
  project,
  onWatch,
}: {
  project: (typeof PROJECTS)[0]
  onWatch: () => void
}) {
  return (
    <div className="flex flex-col">
      {/* Image - clickable, subtle hover zoom */}
      <button
        onClick={onWatch}
        className="group relative w-full aspect-video overflow-hidden focus:outline-none focus:ring-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.poster}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </button>

      {/* Text below image - on black background */}
      <div className="mt-6 space-y-1">
        <p className="text-white/80 text-sm font-light tracking-wide">
          {project.collection}
        </p>
        <p className="text-white text-lg font-light tracking-tight">
          {project.tagline}
        </p>
        <p className="text-white/50 text-sm font-light">
          {project.location} · {project.year}
        </p>
      </div>

      {/* Action links */}
      <div className="mt-6 flex gap-6 text-sm font-light">
        <button
          onClick={onWatch}
          className="text-white/70 hover:text-white transition-colors"
        >
          WATCH
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          DETAILS
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          CREDITS
        </button>
      </div>
    </div>
  )
}
