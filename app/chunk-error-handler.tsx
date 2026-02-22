"use client"

import { useEffect } from "react"

export default function ChunkErrorHandler() {
  useEffect(() => {
    const handleChunkError = (event: ErrorEvent) => {
      const error = event.error
      const message = error?.message || event.message || ""
      
      if (
        error?.name === "ChunkLoadError" ||
        message.includes("chunk") ||
        message.includes("Loading chunk") ||
        message.includes("Failed to fetch dynamically imported module")
      ) {
        console.warn("Chunk load error detected, reloading page...", error)
        // Small delay to prevent rapid reloads
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    }

    // Handle unhandled promise rejections (common for chunk errors)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const message = reason?.message || String(reason) || ""
      
      if (
        reason?.name === "ChunkLoadError" ||
        message.includes("chunk") ||
        message.includes("Loading chunk") ||
        message.includes("Failed to fetch dynamically imported module")
      ) {
        console.warn("Chunk load error detected (promise rejection), reloading page...", reason)
        event.preventDefault()
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    }

    window.addEventListener("error", handleChunkError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleChunkError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}
