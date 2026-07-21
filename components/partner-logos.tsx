import { Building2 } from 'lucide-react'
import { partnerBanks } from '@/lib/site-data'

export function PartnerLogos({
  title = 'Trusted by clients, backed by leading banks',
}: {
  title?: string
}) {
  return (
    <section className="border-y border-border bg-secondary/60 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {partnerBanks.map((bank) => (
            <div
              key={bank}
              className="flex items-center justify-center gap-2 text-muted-foreground"
            >
              <Building2 className="size-5 text-accent-foreground" />
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                {bank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
