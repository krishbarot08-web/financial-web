import type { Metadata } from 'next'
import Image from 'next/image'
import { Target } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'
import { StatsSection } from '@/components/stats-section'
import { TeamSection } from '@/components/team-section'
import { PartnerLogos } from '@/components/partner-logos'
import { CTASection } from '@/components/cta-section'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'About Us | Shree Maa Financial',
  description:
    'Founded to bridge the gap between people’s aspirations and complex banking procedures, we offer personalized service and expert loan guidance.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="About us"
          title="Your Trusted Financial Partner"
          description="We simplify finance so you can focus on what you’re working towards. From homes to businesses, our commitment is personalized guidance and complete transparency."
        />

        {/* Story */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/office.png"
                alt="Our modern consultancy office"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Built to bridge aspirations and banking"
               description="Shree Maa Financial was founded on a simple realisation: securing the right loan is often harder than it should be. Between confusing paperwork, opaque interest rates, and endless bank visits, people give up on good opportunities."
              />
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  We set out to change that — to be the knowledgeable partner who sits on your
                  side of the table. As a Direct Selling Agent for a wide network of banks and
                  financial institutions, we compare the market on your behalf and guide you to
                  the offer that genuinely fits.
                </p>
                <p>
                  Today, we’re proud to have helped thousands of individuals and businesses
                  secure financing with clarity and confidence, one personal relationship at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-secondary/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Target className="size-7" />
            </span>
            <h2 className="mt-6 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              To empower dreams — whether it’s buying a first home or expanding a factory — by
              making the right financing accessible, understandable, and fair for everyone we
              serve.
            </p>
          </div>
        </section>

        <StatsSection />
        <TeamSection />
        <PartnerLogos title="The banking partners we work with" />
        <CTASection
          title="Experience finance, personalized"
          description="Get in touch to discover our tailored approach. We’ll listen first, then find the financing that fits you."
          primaryLabel="Get in Touch"
        />
      </main>
      <SiteFooter />
    </>
  )
}
