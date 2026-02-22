"use client"

import Image from "next/image"
import Link from "next/link"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
] as const

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/profile.php?id=61587010215224", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://vimeo.com", label: "Vimeo" },
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative w-full py-16 md:py-20 px-6 md:px-16 border-t border-white/5"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 md:gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/Logo.png"
              alt="tenFOUR"
              width={400}
              height={150}
              className="h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Email */}
          <a
            href="mailto:hello@tenfour.com"
            className="text-white/80 hover:text-white text-lg font-light transition-colors shrink-0"
          >
            hello@tenfour.com
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/40 text-xs font-light">
            © {currentYear} tenFOUR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
