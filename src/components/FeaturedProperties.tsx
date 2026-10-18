import { useRef, useCallback, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PropertyCard } from './PropertyCard'
import { featuredProperties } from '../data/properties'
import { SectionLabel } from './Button'

export function FeaturedProperties() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 8)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="featured" className="bg-stone py-24 md:py-32 lg:py-40">
      <div className="container-editorial">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel>Featured</SectionLabel>
            <h2 className="mt-5 font-serif font-semibold leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}>
              Featured Properties
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 leading-relaxed">
            A curated selection of distinguished residences and investment opportunities,
            each chosen for architectural integrity and enduring value.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-6 md:px-10 lg:px-[max(4rem,calc((100vw-1320px)/2+4rem))]"
        >
          {featuredProperties.map((p, i) => (
            <div
              key={p.id}
              data-card
              className={`reveal snap-start shrink-0 ${
                i === 0
                  ? 'w-[300px] sm:w-[380px] lg:w-[460px]'
                  : 'w-[280px] sm:w-[340px] lg:w-[400px]'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <PropertyCard property={p} size={i === 0 ? 'large' : 'default'} />
            </div>
          ))}
          {/* trailing spacer for peek effect */}
          <div className="shrink-0 w-4 md:w-10" aria-hidden />
        </div>

        {/* Arrows */}
        <div className="container-editorial mt-8 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canLeft}
              aria-label="Previous properties"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canRight}
              aria-label="Next properties"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <a
            href="/properties"
            className="text-sm font-medium text-navy hover:text-champagne transition-colors"
          >
            View All Properties →
          </a>
        </div>
      </div>
    </section>
  )
}
