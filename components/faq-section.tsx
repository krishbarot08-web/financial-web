import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function FAQSection({
  title = 'Frequently asked questions',
  description = 'Answers to the questions we hear most often.',
  eyebrow = 'FAQ',
  faqs,
  muted = false,
}: {
  title?: string
  description?: string
  eyebrow?: string
  faqs: { q: string; a: string }[]
  muted?: boolean
}) {
  return (
    <section className={`px-4 py-20 sm:px-6 ${muted ? 'bg-secondary/50' : ''}`}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 py-5 [&_summary]:list-none">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-foreground">
                {faq.q}
                <Plus className="size-5 shrink-0 text-accent-foreground transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
