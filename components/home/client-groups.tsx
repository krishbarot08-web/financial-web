import { Users, Building2, Coins, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    icon: Users,
    title: 'Individuals',
    description: 'Personal financing tailored to life’s milestones.',
    items: ['First-time homebuyers', 'Salaried professionals', 'Self-employed individuals'],
  },
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Capital to launch, run, and scale your venture.',
    items: ['Startups & founders', 'Small business owners', 'Manufacturers & MSMEs'],
  },
  {
    icon: Coins,
    title: 'Financing Types',
    description: 'A full range of loan products under one roof.',
    items: ['Home & car loans', 'Business & machinery loans', 'Overdrafts & industrial loans'],
  },
]

export function ClientGroups() {
  return (
    <section className="bg-secondary/50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who we serve"
          title="Financing solutions for every goal"
          description="Whatever stage you’re at, we have the right lender relationships to help you move forward."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <group.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 shrink-0 text-accent-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
