import { SectionHeading } from '@/components/section-heading'

const defaultSteps = [
  {
    title: 'Free consultation',
    description:
      'We start by understanding your goals, finances, and the kind of loan you need.',
  },
  {
    title: 'Compare offers',
    description:
      'We match your profile against our network of banks and present the best options.',
  },
  {
    title: 'Guided application',
    description:
      'We help you prepare and submit a clean application with the right documents.',
  },
  {
    title: 'Secure your loan',
    description:
      'From sanction to disbursement, we stay with you until the funds are in hand.',
  },
]

export function HowItWorks({
  eyebrow = 'How it works',
  title = 'A simple path from consultation to loan',
  description = 'We’ve streamlined the entire process so financing feels effortless.',
  steps = defaultSteps,
  muted = false,
}: {
  eyebrow?: string
  title?: string
  description?: string
  steps?: { title: string; description: string }[]
  muted?: boolean
}) {
  return (
    <section className={`px-4 py-20 sm:px-6 ${muted ? 'bg-secondary/50' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
