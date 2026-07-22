import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, CircleCheckBig } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { HowItWorks } from '@/components/how-it-works'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { getService, services } from '@/lib/site-data'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service not found | Ashvin Finserv' }
  return {
    title: `${service.name} | Ashvin Finserv`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = service.icon

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Loan service"
          title={service.name}
          description={service.tagline}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]}
        />

        {/* Overview */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Overview"
                title={`Everything you need to know about ${service.name.toLowerCase()}`}
                description={service.longDescription}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Because we work with a wide network of lenders, we can match your profile to the
                bank most likely to approve you on the best terms — saving you time, money, and
                repeated applications.
              </p>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-card p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Ideal for
              </h3>
              <p className="mt-1.5 font-medium text-foreground">{service.idealFor}</p>
              <div className="mt-6 border-t border-border pt-6">
                <Button
                  size="lg"
                  className="w-full"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  Apply for this loan
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* Features list */}
        <section className="bg-secondary/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Key features"
              title="Features & advantages"
              description="What makes this loan product a smart choice through our consultancy."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <CircleCheckBig className="mt-0.5 size-6 shrink-0 text-accent-foreground" />
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works (tailored) */}
        <HowItWorks
          eyebrow="The process"
          title={`How to get your ${service.name.toLowerCase()}`}
          description="A clear, guided path from eligibility check to disbursement."
          steps={service.steps}
        />

        {/* Pricing comparison */}
        <section className="bg-secondary/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Compare lenders"
              title="Indicative rates from partner banks"
              description="A snapshot of how offers can differ across our lending network. Final terms depend on your profile."
            />
            <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary text-primary-foreground">
                    <th className="px-5 py-4 font-semibold">Partner bank</th>
                    <th className="px-5 py-4 font-semibold">Interest rate (from)</th>
                    <th className="px-5 py-4 font-semibold">Processing fee</th>
                    <th className="px-5 py-4 font-semibold">Max amount</th>
                  </tr>
                </thead>
                <tbody>
                  {service.rates.map((rate) => (
                    <tr key={rate.bank} className="border-b border-border last:border-0">
                      <td className="px-5 py-4 font-medium text-foreground">{rate.bank}</td>
                      <td className="px-5 py-4 text-foreground">{rate.rate} p.a.</td>
                      <td className="px-5 py-4 text-muted-foreground">{rate.fee}</td>
                      <td className="px-5 py-4 text-muted-foreground">{rate.maxAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-3.5 text-accent-foreground" />
              Rates are indicative and subject to change at the lender’s discretion.
            </p>
          </div>
        </section>

        <FAQSection
          title={`${service.name}: your questions answered`}
          description="Common questions about eligibility, documents, and terms for this loan."
          faqs={service.faqs}
        />

        <CTASection
          title={`Apply for your ${service.name.toLowerCase()} today`}
          description="Talk to an advisor for personalized guidance, or start your application now. There’s no obligation."
          primaryLabel="Apply Now"
          secondaryLabel="Talk to an Advisor"
          secondaryHref="/contact"
        />
      </main>
      <SiteFooter />
    </>
  )
}
