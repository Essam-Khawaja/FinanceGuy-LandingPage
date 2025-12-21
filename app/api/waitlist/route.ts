import { neon } from "@neondatabase/serverless"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Initialize Neon database using the provided DATABASE_URL
    const sql = neon(process.env.DATABASE_URL!)

    const existing = await sql`SELECT id FROM waitlist WHERE email = ${email}`

    if (existing.length > 0) {
      return Response.json({ error: "Email already on waitlist" }, { status: 400 })
    }

    // Insert email into waitlist table
    await sql`INSERT INTO waitlist (email, created_at) VALUES (${email}, NOW())`

    return Response.json({ message: "Successfully added to waitlist" }, { status: 201 })
  } catch (error) {
    console.error("Waitlist error:", error)
    return Response.json({ error: "Failed to add to waitlist" }, { status: 500 })
  }
}