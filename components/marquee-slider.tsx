"use client"

const ITEMS = [
  "BRAND FILM",
  "COMMERCIAL",
  "MUSIC VIDEO",
  "CREATIVE DIRECTION",
  "CINEMATOGRAPHY",
  "EDITING",
  "MOTION",
  "BRANDING",
  "DESIGN",
  "ANIMATED REELS",
]

function MarqueeContent() {
  return (
    <span className="inline-flex items-center gap-4 px-4 text-white text-sm md:text-base font-medium tracking-wide uppercase shrink-0">
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-4">
          {item}
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
        </span>
      ))}
    </span>
  )
}

export default function MarqueeSlider() {
  return (
    <div
      className="w-full py-4 md:py-5 overflow-hidden border-y border-white/5"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}
