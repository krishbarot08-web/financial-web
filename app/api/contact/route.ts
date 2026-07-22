import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Where submissions get delivered. Set this in your environment variables.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL
// Resend requires the "from" address to be on a domain you've verified with them.
// onboarding@resend.dev works for testing without a verified domain.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !TO_EMAIL) {
      console.error('Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars')
      return NextResponse.json(
        { error: 'Contact form is not configured yet. Please try again later.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, phone, email, loanType, message } = body ?? {}

    // Basic server-side validation — never trust the client.
    if (!name || !phone || !email || !loanType) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const safe = {
      name: escapeHtml(String(name)),
      phone: escapeHtml(String(phone)),
      email: escapeHtml(String(email)),
      loanType: escapeHtml(String(loanType)),
      message: escapeHtml(String(message || '(no message provided)')),
    }

    const { error } = await resend.emails.send({
      from: `Website Contact Form <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: safe.email,
      subject: `New enquiry: ${safe.loanType} — ${safe.name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Loan type:</strong> ${safe.loanType}</p>
        <p><strong>Message:</strong><br/>${safe.message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
