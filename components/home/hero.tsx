import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-finance.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-accent">
            <ShieldCheck className="size-3.5" />
            Authorized DSA partner to leading banks
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Secure the right financing for what matters most
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            From your first home to your growing business, we compare offers across a wide
            network of banks to get you the best rates — with expert guidance every step of
            the way.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/services" />}
            >
              Explore Loan Options
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/contact" />}
            >
              Apply Now
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-accent text-accent" />
              4.9/5 average client rating
            </span>
            <span>2,500+ loans secured</span>
            <span>20+ partner banks</span>
          </div>
        </div>
      </div>
    </section>
  )
}
