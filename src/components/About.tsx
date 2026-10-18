import { ArrowUpRight } from 'lucide-react'
import { Button, SectionLabel } from './Button'

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: text */}
        <div className="reveal">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="mt-6 font-serif font-semibold leading-tight text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}>
            Who We Are
          </h2>
          <p className="mt-7 max-w-md text-ink/70 text-lg leading-relaxed">
            At Horizon Properties, we connect people with extraordinary homes and smart
            investments. Integrity, transparency, and client satisfaction are at the heart
            of everything we do.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            {[
              { value: '511+', label: 'Completed Deals' },
              { value: '15', label: 'Years Experience' },
              { value: '$2.4B', label: 'In Sales' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl md:text-4xl font-semibold text-navy">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-label text-ink/50">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/properties" variant="primary">
              Learn More
              <ArrowUpRight size={17} />
            </Button>
          </div>
        </div>

        {/* Right: asymmetric image composition */}
        <div className="reveal relative">
          <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[460px] md:h-[560px]">
            <div className="col-span-3 row-span-6 overflow-hidden rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a8a0cb?auto=format&fit=crop&w=900&q=80"
                alt="Luxury modern home interior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 row-span-4 overflow-hidden rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80"
                alt="Modern architectural home exterior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl bg-navy flex flex-col justify-end p-5 text-white">
              <div className="font-serif text-2xl leading-none">20+</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-label text-champagne">
                Cities Nationwide
              </div>
            </div>
          </div>

          {/* Floating arrow button */}
          <button
            onClick={() => document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute -bottom-6 -left-6 md:left-1/3 flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-navy shadow-xl shadow-navy/20 transition-all duration-500 hover:scale-110 hover:bg-champagne-light"
            aria-label="View featured properties"
          >
            <ArrowUpRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
