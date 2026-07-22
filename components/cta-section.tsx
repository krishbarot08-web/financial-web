import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection({
  title = 'Ready to secure the right financing?',
  description = 'Schedule a free, no-obligation consultation. Our advisors will understand your goals and match you with the best offers from our partner banks.',
  primaryLabel = 'Book a Free Consultation',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href={primaryHref} />}
          >
            {primaryLabel}
            <ArrowRight className="size-4" />
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href={secondaryHref} />}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
