import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { FAQSection } from '@/components/faq-section'
import { siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us | Shree Maa Financial Consultancy',
  description:
    'Get in touch for a free, no-obligation consultation on your financing needs. Call, email, or book a call with our loan advisors.',
}

const contactDetails = [
  { icon: Phone, label: 'Call us', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email us', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Visit us', value: siteConfig.address },
  { icon: Clock, label: 'Office hours', value: 'Mon – Sat, 9:30 AM – 6:30 PM' },
]

const contactFaqs = [
  {
    q: 'What documents do I need to get started?',
    a: 'For an initial consultation, none. To assess eligibility we typically need KYC (ID and address proof), recent income proof, and bank statements. We’ll share a tailored checklist based on your loan type.',
  },
  {
    q: 'How long does the loan approval process take?',
    a: 'It varies by product and lender. Personal and car loans can be sanctioned within a day or two, while home and business loans may take a few working days after documents are submitted.',
  },
  {
    q: 'Is there a fee for the initial consultation?',
    a: 'No. Your first consultation is completely free and carries no obligation. We only want to understand your needs and show you the options available.',
  },
  {
    q: 'Do you charge me for your advisory service?',
    a: 'As a Direct Selling Agent, we’re typically compensated by the lender, so our guidance comes at no direct cost to you. We’ll always be transparent about this.',
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="Reach out for a free consultation on your financing needs. We’ll listen first, then guide you to the right loan."
        />

        {/* Form + details */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill in the form and an advisor will get back to you within one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Contact details
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer to reach out directly? We’re here to help.
              </p>
              <ul className="mt-2 space-y-3">
                {contactDetails.map((detail) => (
                  <li
                    key={detail.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <detail.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-medium text-foreground transition-colors hover:text-accent-foreground"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Book a call CTA */}
        <section className="bg-primary px-4 py-16 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-12 text-center sm:px-12">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <CalendarCheck className="size-7" />
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground">
              Skip the line — book a free call
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
              Choose a time that works for you and speak directly with a loan advisor. No
              obligation, no pressure — just clear answers to your financing questions.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="size-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </section>

        {/* Location map */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">
                Our office
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground">
                Come say hello
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {siteConfig.address}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Prime+Shoppers+Vesu+Surat&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </section>

        <FAQSection
          eyebrow="Before you reach out"
          title="Frequently asked questions"
          description="Quick answers to the questions we hear most before a first conversation."
          faqs={contactFaqs}
          muted
        />
      </main>
      <SiteFooter />
    </>
  )
}
