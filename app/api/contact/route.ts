import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // TODO: Add your email service (Resend, Nodemailer, etc.)
    // Example with Resend:
    // await resend.emails.send({ from: '...', to: '...', subject, html: message })

    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
