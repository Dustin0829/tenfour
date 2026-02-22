"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    let ticking = false
    let lastScrollTime = 0
    const throttleDelay = 4 // Faster response

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      
      if (now - lastScrollTime < throttleDelay) {
        return // Throttle scroll events
      }
      
      lastScrollTime = now

      if (!ticking) {
        ticking = true
        
        requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset || window.scrollY
          const scrollAmount = e.deltaY * 0.9 // Only reduce scroll speed by 10% for lighter feel
          
          window.scrollTo({
            top: currentScroll + scrollAmount,
            behavior: "auto"
          })
          
          ticking = false
        })
      }
    }

    try {
      window.addEventListener("wheel", handleWheel, { passive: true })
    } catch (error) {
      // Fallback if addEventListener fails
      console.warn("Could not add smooth scroll listener:", error)
    }

    return () => {
      try {
        window.removeEventListener("wheel", handleWheel)
      } catch (error) {
        // Ignore cleanup errors
      }
    }
  }, [])

  return null
}
