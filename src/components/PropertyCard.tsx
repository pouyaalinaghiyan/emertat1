import { Link } from 'react-router-dom'
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from 'lucide-react'
import type { Property } from '../data/properties'

interface PropertyCardProps {
  property: Property
  className?: string
  size?: 'default' | 'large'
}

export function PropertyCard({ property, className = '', size = 'default' }: PropertyCardProps) {
  return (
    <Link
      to={`/properties/${property.slug}`}
      className={`group block overflow-hidden rounded-2xl bg-white border border-navy/5 shadow-sm card-hover hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 ${className}`}
    >
      <div className={`relative overflow-hidden ${size === 'large' ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
        <img
          src={property.hero}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-label text-navy">
          {property.type}
        </span>
        {property.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-champagne px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-label text-navy">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy leading-snug truncate">
              {property.name}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink/55">
              <MapPin size={14} className="text-champagne shrink-0" />
              <span className="truncate">{property.location}</span>
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="mt-5 flex items-center gap-5 text-sm text-ink/60">
          <span className="inline-flex items-center gap-1.5">
            <Bed size={16} className="text-champagne" /> {property.beds}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath size={16} className="text-champagne" /> {property.baths}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize size={16} className="text-champagne" /> {property.sqft.toLocaleString()} ft²
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-navy/10 pt-4">
          <span className="text-xs uppercase tracking-label text-ink/45">Price</span>
          <span className="font-serif text-2xl font-semibold text-navy">{property.priceLabel}</span>
        </div>
      </div>
    </Link>
  )
}
