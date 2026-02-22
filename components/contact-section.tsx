"use client"

import { useState } from "react"
import { Fade } from "react-awesome-reveal"

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 md:py-32 px-6 md:px-16"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      {/* Soft lighting gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 50%)",
        }}
      />

      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-xl text-center">
          <Fade direction="up" triggerOnce duration={700} fraction={0.2}>
            <div>
              <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-3">
                Get in touch
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light mb-12">
                Ready to create something together? Drop us a line.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/70 text-sm font-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/70 text-sm font-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 bg-transparent border border-white/10 rounded text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-transparent border border-white/10 rounded text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="px-8 py-3 rounded border border-white/30 text-white text-sm font-light hover:bg-white/5 hover:border-white/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  {status === "sent" && (
                    <span className="text-white/60 text-sm font-light">
                      Thanks! We&apos;ll be in touch soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400/80 text-sm font-light">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
