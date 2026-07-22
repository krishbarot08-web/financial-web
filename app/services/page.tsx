import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { BenefitsSection } from '@/components/benefits-section'
import { CTASection } from '@/components/cta-section'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our Loan Services | Shree Maa Financial',
  description:
    'A comprehensive range of financing solutions: home loans, business loans, overdrafts & cash credit, machinery loans, car loans, and industrial purchase loans.',
}

const comparison = [
  {
    profile: 'First-Time Homebuyer',
    best: 'Home Loans',
    why: 'Low rates and long tenure to keep EMIs affordable.',
    href: '/services/home-loans',
  },
  {
    profile: 'Small Business Owner',
    best: 'Business Loans / OD & CC',
    why: 'Flexible capital to run and grow day-to-day operations.',
    href: '/services/business-loans',
  },
  {
    profile: 'Manufacturer',
    best: 'Machinery & Industrial Loans',
    why: 'Asset-backed funding for equipment and expansion.',
    href: '/services/machinery-loans',
  },
  {
    profile: 'Salaried Professional',
    best: 'Car Loans',
    why: 'High funding and quick approvals for your next vehicle.',
    href: '/services/car-loans',
  },
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Our services"
          title="Our Loan Services"
          description="A comprehensive range of financing solutions tailored to diverse needs — for individuals, businesses, and manufacturers alike."
        />

        {/* Services grid */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-accent hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-secondary/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Find your fit"
              title="Which loan is right for your profile?"
              description="A quick guide to the products that best match common borrower profiles."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary text-primary-foreground">
                    <th className="px-5 py-4 font-semibold">Your profile</th>
                    <th className="px-5 py-4 font-semibold">Best suited loan</th>
                    <th className="hidden px-5 py-4 font-semibold sm:table-cell">Why</th>
                    <th className="px-5 py-4 font-semibold">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.profile} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 font-medium text-foreground">{row.profile}</td>
                      <td className="px-5 py-4 text-foreground">{row.best}</td>
                      <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                        {row.why}
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href={row.href}
                          className="inline-flex items-center gap-1 font-medium text-primary hover:text-accent-foreground"
                        >
                          View
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <BenefitsSection />

        {/* Simple assurance strip */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              'No cost to you for our advisory',
              'Compare 20+ lenders',
              'Paperwork handled for you',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Check className="size-4 text-accent-foreground" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <CTASection
          title="Not sure which loan fits?"
          description="Get personalized advice from an advisor who knows the whole market. It’s free and there’s no obligation."
          primaryLabel="Get in Touch"
        />
      </main>
      <SiteFooter />
    </>
  )
}
