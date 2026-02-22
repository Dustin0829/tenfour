import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tenfour | Creative Production Team",
  description: "Tenfour | Creative Production Team ",
  generator: "Tenfour",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comme:wght@100..900&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <style>{`
html {
  --font-sans: var(--font-comme);
  --font-comme: "Comme", system-ui, -apple-system, sans-serif;
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: "Instrument Serif", Georgia, serif;
}
        `}</style>
      </head>
      <body className="font-comme">{children}</body>
    </html>
  )
}
