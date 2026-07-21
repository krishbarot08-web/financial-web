import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const team = [
  {
    name: 'Ashvin Kulkarni',
    role: 'Founder & Principal Advisor',
    bio: 'Two decades in retail and SME lending, Ashvin founded the firm to make honest financing advice accessible to everyone.',
    image: '/images/team-1.png',
  },
  {
    name: 'Neha Sharma',
    role: 'Head of Home Loans',
    bio: 'A specialist in mortgage structuring, Neha has helped hundreds of families move into homes they love.',
    image: '/images/team-2.png',
  },
  {
    name: 'Vikram Desai',
    role: 'Business & MSME Loan Advisor',
    bio: 'Vikram partners with founders and manufacturers to fund growth with the right mix of working capital and term loans.',
    image: '/images/team-3.png',
  },
]

export function TeamSection() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Meet the team"
          title="Experts who make finance feel simple"
          description="Approachable advisors with deep banking experience, dedicated to getting you the right outcome."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-accent-foreground">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
