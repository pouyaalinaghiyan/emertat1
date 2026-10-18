import { Check } from 'lucide-react'
import { SectionLabel } from './Button'

const points = [
  {
    title: 'Curated, Not Crowded',
    desc: 'We represent a deliberately small portfolio of exceptional properties, giving each the attention it deserves.',
  },
  {
    title: 'Architectural Expertise',
    desc: 'Our advisors understand design, materials, and value — not just square footage and price.',
  },
  {
    title: 'Global Network',
    desc: 'A discreet network of qualified buyers, sellers, and investors across twenty cities.',
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication and honest counsel at every stage, from first viewing to closing.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-stone py-24 md:py-32 lg:py-40">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="reveal relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
              alt="Modern luxury home at dusk"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 md:right-8 md:top-8 rounded-2xl bg-navy px-7 py-6 text-white shadow-xl shadow-navy/20">
            <div className="font-serif text-4xl font-semibold text-champagne">98%</div>
            <div className="mt-1 text-xs uppercase tracking-label text-white/70">
              Client Satisfaction
            </div>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <SectionLabel>Why Horizon</SectionLabel>
          <h2 className="mt-6 font-serif font-semibold leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}>
            Why Choose Horizon
          </h2>
          <p className="mt-6 max-w-md text-ink/65 text-lg leading-relaxed">
            We are not a volume business. We are a relationship business built on trust,
            taste, and results that endure beyond the transaction.
          </p>

          <div className="mt-10 space-y-6">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                  <Check size={15} strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1 text-ink/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
