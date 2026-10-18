import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Bed, Bath, Maximize, MapPin, Calendar, Ruler, Check, Heart, Share2,
  Phone, Mail, ArrowLeft, ArrowRight,
} from 'lucide-react'
import { getPropertyBySlug, getSimilarProperties } from '../data/properties'
import { PropertyGallery } from '../components/PropertyGallery'
import { PropertyCard } from '../components/PropertyCard'
import { SectionLabel } from '../components/Button'

export function PropertyDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const property = slug ? getPropertyBySlug(slug) : undefined
  const [saved, setSaved] = useState(false)

  if (!property) {
    return (
      <div className="bg-ivory min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="font-serif text-4xl font-semibold text-navy">Property not found</h1>
        <p className="mt-3 text-ink/60">The property you're looking for may have been sold or moved.</p>
        <button onClick={() => navigate('/properties')} className="btn-primary mt-8">
          <ArrowLeft size={16} /> Back to all properties
        </button>
      </div>
    )
  }

  const similar = getSimilarProperties(property)

  const stats = [
    { icon: Bed, label: 'Bedrooms', value: property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    { icon: Maximize, label: 'Interior', value: `${property.sqft.toLocaleString()} ft²` },
    { icon: Ruler, label: 'Lot Size', value: property.lotSize },
    { icon: Calendar, label: 'Year Built', value: property.yearBuilt },
  ]

  return (
    <div className="bg-ivory">
      {/* Breadcrumb / back */}
      <div className="pt-28 md:pt-32">
        <div className="container-editorial">
          <nav className="flex items-center gap-2 text-sm text-ink/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-navy">Properties</Link>
            <span>/</span>
            <span className="text-navy">{property.name}</span>
          </nav>
        </div>
      </div>

      {/* Title row */}
      <div className="container-editorial mt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <span className="inline-block rounded-full bg-champagne/15 px-3 py-1 text-xs font-semibold uppercase tracking-label text-champagne">
              {property.type}
            </span>
            <h1 className="mt-4 font-serif font-semibold leading-tight text-navy"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              {property.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-ink/60">
              <MapPin size={16} className="text-champagne" />
              {property.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSaved((v) => !v)}
              aria-pressed={saved}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition-all ${
                saved
                  ? 'border-champagne bg-champagne/10 text-champagne'
                  : 'border-navy/15 text-navy hover:border-navy'
              }`}
            >
              <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
              {saved ? 'Saved' : 'Save'}
            </button>
            <button
              onClick={() => navigator.share?.({ title: property.name, url: window.location.href }).catch(() => {})}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm text-navy transition-all hover:border-navy"
            >
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container-editorial mt-8">
        <PropertyGallery images={property.gallery} alt={property.name} />
      </div>

      {/* Content split */}
      <div className="container-editorial mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Left: details */}
        <div className="lg:col-span-2">
          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-navy/10 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-ivory p-5 text-center">
                <s.icon size={20} className="mx-auto text-champagne" />
                <div className="mt-2 font-serif text-xl font-semibold text-navy">{s.value}</div>
                <div className="mt-0.5 text-[0.65rem] uppercase tracking-label text-ink/50">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-12">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-navy">About this property</h2>
            <p className="mt-5 text-ink/70 text-lg leading-relaxed">{property.description}</p>
          </div>

          {/* Features */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-semibold text-navy">Key Features</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl bg-stone px-4 py-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-ink/80">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-semibold text-navy">Amenities</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {property.amenities.map((a) => (
                <span key={a} className="rounded-full border border-navy/15 px-4 py-2 text-sm text-ink/70">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: sticky agent card */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-navy p-7 text-white">
              <div className="font-serif text-3xl font-semibold">{property.priceLabel}</div>
              <div className="mt-1 text-sm text-white/55">
                Listed for sale · {property.type}
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="text-xs uppercase tracking-label text-champagne">Listed by</div>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="h-14 w-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold">{property.agent.name}</div>
                    <div className="text-sm text-white/60">{property.agent.role}</div>
                  </div>
                </div>
                <div className="mt-5 space-y-2.5 text-sm">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center gap-2.5 text-white/80 hover:text-champagne">
                    <Phone size={15} className="text-champagne" /> {property.agent.phone}
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-champagne break-all">
                    <Mail size={15} className="text-champagne" /> {property.agent.email}
                  </a>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <button className="btn-gold w-full">Schedule a Viewing</button>
                <button className="btn w-full rounded-full border border-white/25 py-3.5 text-sm text-white hover:border-white/60">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar properties */}
      {similar.length > 0 && (
        <div className="container-editorial mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>More Like This</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl font-semibold text-navy">Similar Properties</h2>
            </div>
            <Link to="/properties" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-champagne">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-ivory/95 backdrop-blur px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="font-serif text-lg font-semibold text-navy leading-none">{property.priceLabel}</div>
            <div className="text-xs text-ink/50 mt-0.5">{property.beds} bed · {property.baths} bath</div>
          </div>
          <button className="btn-gold shrink-0">Schedule Viewing</button>
        </div>
      </div>
      <div className="lg:hidden h-20" aria-hidden />
    </div>
  )
}
