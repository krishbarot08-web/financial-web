import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'As first-time homebuyers we were overwhelmed. They compared lenders for us, handled the paperwork, and got us a rate lower than our own bank offered. We got our keys stress-free.',
    name: 'Priya & Arjun Mehta',
    role: 'First-time homebuyers',
    image: '/images/client-1.png',
  },
  {
    quote:
      'My working capital loan was approved in days, not weeks. Their advice was honest and they never pushed a product that didn’t fit my shop. Truly a partner for my business.',
    name: 'Sunita Rao',
    role: 'Small business owner',
    image: '/images/client-2.png',
  },
  {
    quote:
      'Financing new machinery felt complicated until I spoke with their team. They structured the loan around my cash flow and the disbursement was quick. Highly recommended.',
    name: 'Rajesh Patil',
    role: 'Manufacturing business owner',
    image: '/images/client-3.png',
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by people and businesses like you"
          description="Real results from clients who found the right financing with our guidance."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-accent" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={t.image || '/placeholder.svg'}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
