'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
}

const stats: Stat[] = [
  { value: 2500, suffix: '+', label: 'Loans Secured' },
  { value: 1800, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Partner Banks' },
  { value: 35, suffix: '+', label: 'Years Combined Experience' },
]

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-4xl font-bold text-accent sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-primary-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
