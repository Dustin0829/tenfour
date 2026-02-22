"use client"

import Image from "next/image"

const TEAM_MEMBERS = [
  { name: "Agabus Maza", title: "Creative Director", image: "/agabus-maza.jpg", objectPosition: "left" as const },
  { name: "Carlo Santos", title: "Director of Photography", image: "/carlo-santos.jpg", objectPosition: "center" as const },
  { name: "Cyrill Factor", title: "Post-Production Lead", image: "/Cyrill-Factor.jpg", objectPosition: "right" as const },
  { name: "Ephraim Abraca", title: "Story & Concept", image: "/ephraim-abraca.jpg", objectPosition: "left" as const },
  { name: "Steve Wijayawickrama", title: "Visual Strategist", image: "/Steve.jpg", objectPosition: "center" as const },
]

export default function TeamSection() {
  return (
    <section id="team" className="w-full" style={{ backgroundColor: "#0B0B0B" }}>
      {/* Header */}
      <div className="w-full pt-24 pb-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-3">
          People Behind the Cameras
        </h2>
        <p className="text-white/60 text-base md:text-lg font-light max-w-xl">
          The creatives who bring your vision to life.
        </p>
      </div>

      {/* Team panels - horizontal strips */}
      <div className="flex items-stretch h-[500px] md:h-[600px]">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.name}
            className="group relative flex-1 min-w-[60px] md:min-w-[80px] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:flex-[2.5] border-r border-black shrink-0"
          >
            <div className="absolute inset-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                style={{
                  objectPosition:
                    member.objectPosition === "left"
                      ? "left center"
                      : member.objectPosition === "right"
                        ? "right center"
                        : "center center",
                }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            {/* Gradient overlay - darker when not hovered for inactive look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            {/* Text - only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white/80 text-xs font-light uppercase">
                {member.title}
              </span>
              <span className="text-white font-semibold text-lg md:text-xl tracking-tight">
                {member.name}
              </span>
              <span className="text-white/60 text-xs font-light mt-1">
                FB · TW · BE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
