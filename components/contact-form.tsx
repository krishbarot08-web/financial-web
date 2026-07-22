'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const loanTypes = [
  'Home Loan',
  'Business Loan',
  'Machinery Loan',
  'Car Loan',
  'Overdraft & Cash Credit',
  'Industrial Purchase Loan',
  'Other',
]

const fieldClasses =
  'w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/40'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage(null)
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      loanType: formData.get('loanType'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Failed to send message.')
      }

      form.reset()
      setSubmitted(true)
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-foreground">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your request has been received. One of our advisors will reach out within one business
          day to schedule your free consultation.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 00000 00000"
              className={fieldClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="loanType" className="mb-1.5 block text-sm font-medium text-foreground">
            Loan type of interest
          </label>
          <select id="loanType" name="loanType" required defaultValue="" className={fieldClasses}>
            <option value="" disabled>
              Select a loan type
            </option>
            {loanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about what you’re looking for…"
            className={fieldClasses}
          />
        </div>

        {errorMessage && (
          <p className="rounded-lg bg-destructive/10 px-3.5 py-2.5 text-center text-sm text-destructive">
            {errorMessage}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send message'}
          <Send className="size-4" />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We’ll never share your details. No obligation, no spam.
        </p>
      </div>
    </form>
  )
}
