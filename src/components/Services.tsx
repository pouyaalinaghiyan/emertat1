import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './Button'

const services = [
  {
    title: 'Luxury Home Sales',
    desc: 'Discreet representation for distinguished residences, from listing to closing.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a8a0cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property Investment',
    desc: 'Data-driven acquisition strategies across high-growth luxury markets.',
    img: 'https://images.unsplash.com/photo-1480074558705-e3f72035711b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property Marketing',
    desc: 'Editorial-grade photography, film, and storytelling for exceptional homes.',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Real Estate Advisory',
    desc: 'Strategic counsel on portfolio composition, timing, and market positioning.',
    img: 'https://images.unsplash.com/photo-1600210492486-7dc6f5e9e3cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Property Valuation',
    desc: 'Precise, defensible appraisals grounded in comparable sales and architecture.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Relocation Services',
    desc: 'End-to-end support for seamless moves into your new home and city.',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3acd361a3?auto=format&fit=crop&w=800&q=80',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="container-editorial">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-5 font-serif font-semibold leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}>
              Our Services
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 leading-relaxed">
            A full spectrum of premium real estate services, delivered with the discretion
            and rigor our clients expect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-navy text-white"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-55 transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-40"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xs">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-champagne">
                  Learn more
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
