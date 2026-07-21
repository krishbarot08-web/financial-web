import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-primary-foreground) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/60">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-accent">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground/90">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <ChevronRight className="size-4" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
