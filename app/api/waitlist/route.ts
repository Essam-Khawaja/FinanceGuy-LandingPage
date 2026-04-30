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
          html:`
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the FinanceGuy waitlist</title>
</head>
<body style="margin:0;padding:0;background:#e8dcc8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif;">

  <div style="max-width:520px;margin:40px auto;padding:0 16px 40px;">

    <!-- Header -->
    <div style="background:#3b1e0f;border-radius:12px 12px 0 0;padding:20px 28px;">
      <span style="font-family:'Courier New',monospace;font-size:22px;color:#e3b44c;letter-spacing:2px;">FG</span>
<span style="font-family:'Courier New',monospace;font-size:15px;color:#c4b196;letter-spacing:2px;margin-left:12px;">FINANCEGUY</span>
    </div>

    <!-- Body card -->
    <div style="background:#f2e6cf;border:2px solid #3b1e0f;border-top:none;border-radius:0 0 12px 12px;padding:32px 28px;">

      <div style="font-size:36px;margin-bottom:16px;">🏴‍☠️</div>

      <h2 style="font-family:'Courier New',monospace;font-size:13px;color:#3b1e0f;line-height:1.6;margin:0 0 20px;letter-spacing:0.5px;">
        YOU'RE IN THE GUILD.
      </h2>

      <p style="color:#3b1e0f;font-size:15px;line-height:1.7;margin:0 0 16px;">
        Your spot on the FinanceGuy waitlist is locked in.
      </p>

      <p style="color:#5c4a42;font-size:14px;line-height:1.7;margin:0 0 16px;">
        I built this because I was tired of budgeting apps that stressed me out more than my actual bank balance. FinanceGuy is different. It's a pocket finance bro that learns how you spend, and pings you <em>before</em> you make the dumb call. Not after.
      </p>

      <p style="color:#5c4a42;font-size:14px;line-height:1.7;margin:0 0 28px;">
        You'll get early access before anyone else. I'll also send updates as I build. No spam, no fluff. Just real progress.
      </p>

      <div style="border-top:2px solid #c4b196;margin-bottom:24px;"></div>

      <p style="font-family:'Courier New',monospace;font-size:13px;color:#855a33;letter-spacing:1px;margin:0 0 8px;">WAITLIST PROGRESS</p>
      <div style="background:#d9c9ae;border:1.5px solid #855a33;border-radius:4px;height:12px;overflow:hidden;margin-bottom:6px;">
        <div style="height:12px;background:#e3b44c;width:55%;border-radius:3px;"></div>
      </div>
      <p style="font-size:12px;color:#855a33;margin:0 0 28px;">40 adventurers and counting. Beta opens when the treasury is ready.</p>

      <a href="https://www.financeguy.app" style="display:inline-block;background:#3b1e0f;color:#f2e6cf;font-family:'Courier New',monospace;font-size:8px;letter-spacing:0.5px;padding:14px 24px;border-radius:8px;text-decoration:none;border:2px solid #1f0f0a;">
        VIEW THE REALM
      </a>

      <p style="color:#855a55;font-size:13px;margin:28px 0 0;line-height:1.6;">
        Essam<br/>
        <span style="font-size:12px;color:#c4b196;">Founder, FinanceGuy</span>
      </p>

    </div>

    <p style="text-align:center;font-size:11px;color:#9a8070;margin-top:20px;line-height:1.6;">
      FinanceGuy · Not financial advice.<br/>
      You're receiving this because you joined the waitlist at financeguy.app
    </p>

  </div>

</body>
</html>
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
