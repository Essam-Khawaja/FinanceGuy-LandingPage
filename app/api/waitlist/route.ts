import { neon } from "@neondatabase/serverless"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)

    // Check if email already exists
    const existing = await sql`SELECT id FROM waitlist WHERE email = ${email}`

    if (existing.length > 0) {
      return Response.json({ error: "Email already on waitlist" }, { status: 400 })
    }

    // Insert email into waitlist table
    await sql`INSERT INTO waitlist (email, created_at) VALUES (${email}, NOW())`

    console.log("[v0] Waitlist email added:", email)

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error("[v0] Email credentials not configured")
      } else {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Thanks for joining the FinanceGuy waitlist!",
          html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a1a; margin-bottom: 16px;">
    Welcome to the FinanceGuy Waitlist
  </h2>

  <p style="color: #555; line-height: 1.6; margin-bottom: 14px;">
    Thank you for signing up for the FinanceGuy waitlist. We’re excited to have you join us and appreciate your interest in what we’re building.
  </p>

  <p style="color: #555; line-height: 1.6; margin-bottom: 14px;">
    As a waitlist member, you’ll receive early access when FinanceGuy launches, along with updates as we continue developing tools designed to help students build smarter financial habits.
  </p>

  <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
    We’ll be in touch soon with more information. Until then, thank you for being part of our journey.
  </p>

  <p style="color: #999; font-size: 14px; margin-top: 24px;">
    — The FinanceGuy Team<br />
    <span style="font-style: italic;">Building better money habits for students</span>
  </p>
</div>
          `,
        })
        console.log("[v0] Confirmation email sent to:", email)
      }
    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Don't fail the request if email sending fails
      // The email is already saved to the database
    }

    return Response.json({ message: "Successfully added to waitlist" }, { status: 201 })
  } catch (error) {
    console.error("[v0] Waitlist error:", error)
    return Response.json({ error: "Failed to add to waitlist" }, { status: 500 })
  }
}
