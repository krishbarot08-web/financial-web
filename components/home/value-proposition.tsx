import Image from 'next/image'
import { Network, ShieldCheck, TrendingDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const points = [
  {
    icon: Network,
    title: 'One partner, many lenders',
    description:
      'Instead of applying to banks one by one, work with a single advisor who knows the whole market.',
  },
  {
    icon: TrendingDown,
    title: 'The best available rate',
    description:
      'We compare offers side by side so you never overpay in interest or hidden fees.',
  },
  {
    icon: ShieldCheck,
    title: 'Advice you can trust',
    description:
      'Guidance that puts your financial goals first — clear, honest, and jargon-free.',
  },
]

export function ValueProposition() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/consultation.png"
            alt="A financial advisor meeting with a happy client couple"
            width={720}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title="A trusted DSA partner with access to a wide banking network"
            description="We bridge the gap between your ambitions and complex banking procedures. As a Direct Selling Agent for leading financial institutions, we bring you choice, better rates, and a smoother journey to approval."
          />
          <ul className="mt-8 space-y-6">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <point.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
