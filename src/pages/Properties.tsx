import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { PropertyCard } from '../components/PropertyCard'
import { properties, allCities, allTypes } from '../data/properties'
import { SectionLabel } from '../components/Button'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'sqft-desc'

export function Properties() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('All')
  const [type, setType] = useState('All')
  const [minBeds, setMinBeds] = useState(0)
  const [maxPrice, setMaxPrice] = useState(7000000)
  const [sort, setSort] = useState<SortKey>('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (query) {
        const q = query.toLowerCase()
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.location.toLowerCase().includes(q) &&
          !p.city.toLowerCase().includes(q)
        )
          return false
      }
      if (city !== 'All' && p.city !== city) return false
      if (type !== 'All' && p.type !== type) return false
      if (p.beds < minBeds) return false
      if (p.price > maxPrice) return false
      return true
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'sqft-desc':
          return b.sqft - a.sqft
        default:
          return Number(b.featured) - Number(a.featured)
      }
    })
    return list
  }, [query, city, type, minBeds, maxPrice, sort])

  const resetFilters = () => {
    setQuery('')
    setCity('All')
    setType('All')
    setMinBeds(0)
    setMaxPrice(7000000)
    setSort('featured')
  }

  const activeCount =
    (city !== 'All' ? 1 : 0) +
    (type !== 'All' ? 1 : 0) +
    (minBeds > 0 ? 1 : 0) +
    (maxPrice < 7000000 ? 1 : 0) +
    (query ? 1 : 0)

  return (
    <div className="bg-ivory">
      {/* Header band */}
      <div className="bg-navy-deep pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-editorial">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-5 font-serif font-semibold text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            All Properties
          </h1>
          <p className="mt-5 max-w-xl text-white/65 text-lg leading-relaxed">
            Browse our complete collection of distinguished residences and investment
            opportunities across the country.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[68px] z-30 bg-ivory/95 backdrop-blur border-b border-navy/10">
        <div className="container-editorial py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, city, or location…"
                aria-label="Search properties"
                className="w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-champagne"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                aria-label="Sort properties"
                className="rounded-full border border-navy/15 bg-white py-3 px-5 text-sm text-ink outline-none focus:border-champagne cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="sqft-desc">Largest first</option>
              </select>

              <button
                onClick={() => setShowFilters((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white py-3 px-5 text-sm text-navy transition-colors hover:border-navy"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-champagne text-[0.65rem] font-semibold text-navy">
                    {activeCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Expandable filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl bg-white border border-navy/10 p-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-label text-ink/50">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory py-2.5 px-3 text-sm outline-none focus:border-champagne"
                >
                  <option>All</option>
                  {allCities.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-label text-ink/50">Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory py-2.5 px-3 text-sm outline-none focus:border-champagne"
                >
                  <option>All</option>
                  {allTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-label text-ink/50">
                  Min Bedrooms: {minBeds === 0 ? 'Any' : minBeds}+
                </label>
                <input
                  type="range"
                  min={0}
                  max={7}
                  value={minBeds}
                  onChange={(e) => setMinBeds(Number(e.target.value))}
                  className="mt-3 w-full accent-champagne"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-label text-ink/50">
                  Max Price: ${(maxPrice / 1000000).toFixed(1)}M
                </label>
                <input
                  type="range"
                  min={1500000}
                  max={7000000}
                  step={100000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-3 w-full accent-champagne"
                />
              </div>
              {activeCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-navy lg:col-span-4 justify-self-start"
                >
                  <X size={15} /> Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container-editorial py-12 md:py-16">
        <p className="text-sm text-ink/55 mb-8">
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
        </p>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-navy/15 py-24 text-center">
            <p className="font-serif text-2xl text-navy">No properties match your search</p>
            <p className="mt-2 text-ink/55">Try adjusting or clearing your filters.</p>
            <button onClick={resetFilters} className="btn-outline-dark mt-6">
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 6) * 50}ms` }}>
                <PropertyCard property={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
