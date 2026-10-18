import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Modern luxury villa with infinity pool at blue hour"
          className="h-full w-full object-cover animate-kenBurns"
          {...{ fetchpriority: "high" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/35 to-navy-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <span
          className="section-label mb-6 opacity-0"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' }}
        >
          Luxury Redefined
        </span>
        <h1
          className="font-serif text-white font-semibold leading-[1.05] text-balance opacity-0"
          style={{
            fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
            animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s forwards',
          }}
        >
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p
          className="mt-7 max-w-xl text-base md:text-lg text-white/85 leading-relaxed opacity-0"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards' }}
        >
          Premium properties in prime locations. Find your dream home or the perfect
          investment with confidence.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s forwards' }}
        >
          <button
            onClick={() => navigate('/properties')}
            className="btn-gold group"
          >
            Explore Properties
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[0.65rem] uppercase tracking-label">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-champagne/80 to-transparent" />
      </div>
    </section>
  )
}
