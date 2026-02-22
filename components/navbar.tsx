"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback } from "react"

const navItems = [
  { href: "/", label: "Home", scrollTo: null },
  { href: "/#projects", label: "Projects", scrollTo: "projects" },
  { href: "/#team", label: "Team", scrollTo: "team" },
  { href: "/#contact", label: "Contact", scrollTo: "contact" },
] as const

export default function Navbar() {
  const pathname = usePathname()

  const smoothScrollTo = useCallback((elementId: string | null) => {
    try {
      if (!elementId) return
      
      const element = document.getElementById(elementId)
      if (!element) {
        // Fallback: try scrolling to hash
        const hash = `#${elementId}`
        window.location.hash = hash
        return
      }

      const startPosition = window.pageYOffset || window.scrollY
      const elementRect = element.getBoundingClientRect()
      const targetPosition = elementRect.top + startPosition - 80 // Offset for navbar
      const distance = targetPosition - startPosition
      const duration = 800 // Faster, lighter scroll
      let start: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animation = (currentTime: number) => {
        try {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          const easedProgress = easeInOutCubic(progress)

          window.scrollTo(0, startPosition + distance * easedProgress)

          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        } catch (error) {
          console.warn("Animation error:", error)
        }
      }

      requestAnimationFrame(animation)
    } catch (error) {
      console.warn("Smooth scroll error:", error)
      // Fallback to native scroll
      const element = document.getElementById(elementId || "")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>, scrollTo: string | null, href: string) => {
    try {
      if (scrollTo) {
        e.preventDefault()
        e.stopPropagation()
        smoothScrollTo(scrollTo)
      } else if (href === "/") {
        // Scroll to top for Home
        e.preventDefault()
        e.stopPropagation()
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    } catch (error) {
      // Fallback to default behavior if smooth scroll fails
      console.warn("Click handler error:", error)
    }
  }, [smoothScrollTo])

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
      <div className="flex items-center gap-1 px-1.5 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
        {navItems.map(({ href, label, scrollTo }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
          const isHashLink = scrollTo !== null
          
          if (isHashLink) {
            // Use regular anchor for hash links to avoid Next.js router conflicts
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, scrollTo, href)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {label}
              </a>
            )
          }
          
          return (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleClick(e, scrollTo, href)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
