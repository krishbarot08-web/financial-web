import { SectionHeading } from '@/components/section-heading'
import { benefits } from '@/lib/site-data'

export function BenefitsSection() {
  return (
    <section className="bg-secondary/50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The DSA advantage"
          title="Why work with us instead of a single bank"
          description="A Direct Selling Agent gives you the whole market — not just one lender’s products."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <benefit.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
