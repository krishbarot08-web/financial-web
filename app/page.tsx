import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { PartnerLogos } from '@/components/partner-logos'
import { ValueProposition } from '@/components/home/value-proposition'
import { ClientGroups } from '@/components/home/client-groups'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PartnerLogos />
        <ValueProposition />
        <ClientGroups />
        <HowItWorks />
        <Testimonials />
        <CTASection secondaryLabel="View Services" secondaryHref="/services" />
      </main>
      <SiteFooter />
    </>
  )
}
