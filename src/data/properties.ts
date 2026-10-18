export type PropertyType =
  | 'Villa'
  | 'Penthouse'
  | 'Estate'
  | 'Residence'
  | 'Townhouse'
  | 'Lake House'

export interface Property {
  id: string
  slug: string
  name: string
  location: string
  city: string
  country: string
  price: number
  priceLabel: string
  type: PropertyType
  beds: number
  baths: number
  sqft: number
  lotSize: string
  yearBuilt: number
  featured: boolean
  hero: string
  gallery: string[]
  description: string
  features: string[]
  amenities: string[]
  agent: {
    name: string
    role: string
    phone: string
    email: string
    avatar: string
  }
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const properties: Property[] = [
  {
    id: '1',
    slug: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    country: 'USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 6200,
    lotSize: '0.8 acres',
    yearBuilt: 2021,
    featured: true,
    hero: u('1600596542815-ffad4c1539a9', 1400),
    gallery: [
      u('1600596542815-ffad4c1539a9', 1400),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
    ],
    description:
      'A sculptural lakeside villa defined by floor-to-ceiling glass, cantilevered terraces, and a seamless connection between interior and landscape. The infinity pool mirrors the horizon, while warm oak interiors soften the architectural rigor.',
    features: [
      'Floor-to-ceiling glass walls',
      'Infinity edge pool',
      'Cantilevered terrace',
      'Smart home automation',
      'Private dock',
    ],
    amenities: ['Wine cellar', 'Home cinema', 'Gym', 'Spa room', '3-car garage'],
    agent: {
      name: 'Daniel Morgan',
      role: 'Managing Director',
      phone: '+1 (555) 246-7890',
      email: 'daniel@horizonproperties.com',
      avatar: u('1472099645785-5658abf4ff4e', 400),
    },
  },
  {
    id: '2',
    slug: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    city: 'Malibu',
    country: 'USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'Residence',
    beds: 4,
    baths: 5,
    sqft: 5400,
    lotSize: '1.2 acres',
    yearBuilt: 2020,
    featured: true,
    hero: u('1600596542815-ffad4c1539a9', 1400),
    gallery: [
      u('1600596542815-ffad4c1539a9', 1400),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
    ],
    description:
      'Perched above the Pacific, this glass-walled residence dissolves the boundary between architecture and ocean. Polished concrete, brushed brass, and panoramic views form a serene retreat tuned to the rhythm of the coast.',
    features: [
      'Panoramic ocean views',
      'Glass curtain walls',
      'Rooftop terrace',
      'Solar power system',
    ],
    amenities: ['Oceanfront deck', 'Chef kitchen', 'Library', 'Guest house'],
    agent: {
      name: 'Olivia Carter',
      role: 'Luxury Property Advisor',
      phone: '+1 (555) 246-7891',
      email: 'olivia@horizonproperties.com',
      avatar: u('1494790108377-be9c29b29330', 400),
    },
  },
  {
    id: '3',
    slug: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    city: 'Scottsdale',
    country: 'USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    beds: 6,
    baths: 5,
    sqft: 7100,
    lotSize: '2.4 acres',
    yearBuilt: 2019,
    featured: true,
    hero: u('1600566753086-00f18fb6b3ea', 1400),
    gallery: [
      u('1600566753086-00f18fb6b3ea', 1400),
      u('1600566753086-00f18fb6b3ea', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
    ],
    description:
      'A minimalist desert estate where rammed-earth walls and deep overhangs frame the Sonoran landscape. Shadow, light, and material move together across a plan designed for stillness and expansive sky views.',
    features: ['Rammed-earth walls', 'Reflecting pool', 'Desert landscaping', 'Observation deck'],
    amenities: ['Casita', 'Pool & spa', 'Wine room', 'Outdoor kitchen'],
    agent: {
      name: 'James Wilson',
      role: 'Investment Consultant',
      phone: '+1 (555) 246-7892',
      email: 'james@horizonproperties.com',
      avatar: u('1506794778202-cad84cf45f1d', 400),
    },
  },
  {
    id: '4',
    slug: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    city: 'Miami',
    country: 'USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'Residence',
    beds: 5,
    baths: 6,
    sqft: 6800,
    lotSize: '0.5 acres',
    yearBuilt: 2022,
    featured: true,
    hero: u('1600607687939-ce8a6c25118c', 1400),
    gallery: [
      u('1600607687939-ce8a6c25118c', 1400),
      u('1600596542815-ffad4c1539a9', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600596542815-ffad4c1539a9', 1200),
    ],
    description:
      'A waterfront residence composed of white concrete volumes and travertine, opening to a private beach. Interiors flow through double-height living spaces toward uninterrupted Atlantic horizon views.',
    features: ['Private beach access', 'Double-height living', 'Travertine finishes', 'Elevator'],
    amenities: ['Infinity pool', 'Summer kitchen', 'Boat dock', 'Staff quarters'],
    agent: {
      name: 'Sophia Bennett',
      role: 'Senior Property Specialist',
      phone: '+1 (555) 246-7893',
      email: 'sophia@horizonproperties.com',
      avatar: u('1438761681033-6461ffad8d80', 400),
    },
  },
  {
    id: '5',
    slug: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    city: 'Los Angeles',
    country: 'USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'Villa',
    beds: 4,
    baths: 4,
    sqft: 4900,
    lotSize: '0.6 acres',
    yearBuilt: 2021,
    featured: false,
    hero: u('1600566753086-00f18fb6b3ea', 1400),
    gallery: [
      u('1600566753086-00f18fb6b3ea', 1400),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
    ],
    description:
      'Set into the hillside, this retreat frames the city below through a ribbon of glass. Tiered terraces, a vanishing-edge pool, and quiet material palettes create a calm perch above the city.',
    features: ['Vanishing-edge pool', 'Tiered terraces', 'City views', 'Glass ribbon facade'],
    amenities: ['Media room', 'Bar', 'Gym', '2-car garage'],
    agent: {
      name: 'Daniel Morgan',
      role: 'Managing Director',
      phone: '+1 (555) 246-7890',
      email: 'daniel@horizonproperties.com',
      avatar: u('1472099645785-5658abf4ff4e', 400),
    },
  },
  {
    id: '6',
    slug: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    city: 'Beverly Hills',
    country: 'USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Estate',
    beds: 7,
    baths: 8,
    sqft: 9300,
    lotSize: '1.5 acres',
    yearBuilt: 2023,
    featured: true,
    hero: u('1600596542815-ffad4c1539a9', 1400),
    gallery: [
      u('1600596542815-ffad4c1539a9', 1400),
      u('1600596542815-ffad4c1539a9', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
    ],
    description:
      'A gated estate centered on a palm-fringed courtyard and reflecting pool. Limestone, bronze, and landscaped gardens compose a private world minutes from the heart of Beverly Hills.',
    features: ['Gated entry', 'Courtyard pool', 'Garden grounds', 'Motor court'],
    amenities: ['Guest house', 'Spa', 'Wine cellar', '10-car gallery'],
    agent: {
      name: 'Olivia Carter',
      role: 'Luxury Property Advisor',
      phone: '+1 (555) 246-7891',
      email: 'olivia@horizonproperties.com',
      avatar: u('1494790108377-be9c29b29330', 400),
    },
  },
  {
    id: '7',
    slug: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    city: 'Lake Tahoe',
    country: 'USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'Lake House',
    beds: 4,
    baths: 3,
    sqft: 4100,
    lotSize: '0.9 acres',
    yearBuilt: 2020,
    featured: false,
    hero: u('1600566753086-00f18fb6b3ea', 1400),
    gallery: [
      u('1600566753086-00f18fb6b3ea', 1400),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
    ],
    description:
      'A timber-and-stone lake house that opens to the water through wide glazing. Cedar cladding, a stone hearth, and a deep deck make a year-round retreat tuned to the seasons of the lake.',
    features: ['Lake frontage', 'Stone hearth', 'Cedar cladding', 'Deep deck'],
    amenities: ['Boat slip', 'Sauna', 'Loft studio', 'Hot tub'],
    agent: {
      name: 'James Wilson',
      role: 'Investment Consultant',
      phone: '+1 (555) 246-7892',
      email: 'james@horizonproperties.com',
      avatar: u('1506794778202-cad84cf45f1d', 400),
    },
  },
  {
    id: '8',
    slug: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    city: 'Austin',
    country: 'USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    sqft: 3200,
    lotSize: 'N/A',
    yearBuilt: 2022,
    featured: false,
    hero: u('1600607687939-ce8a6c25118c', 1400),
    gallery: [
      u('1600607687939-ce8a6c25118c', 1400),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600607687939-ce8a6c25118c', 1200),
      u('1600566753086-00f18fb6b3ea', 1200),
    ],
    description:
      'A full-floor penthouse with double-height living, a private rooftop terrace, and skyline views in every direction. Matte oak, microcement, and integrated lighting define a calm, vertical home.',
    features: ['Full-floor plan', 'Rooftop terrace', 'Double-height living', 'Skyline views'],
    amenities: ['Concierge', 'Gym', 'Rooftop pool', 'Private elevator'],
    agent: {
      name: 'Sophia Bennett',
      role: 'Senior Property Specialist',
      phone: '+1 (555) 246-7893',
      email: 'sophia@horizonproperties.com',
      avatar: u('1438761681033-6461ffad8d80', 400),
    },
  },
]

export const featuredProperties = properties.filter((p) => p.featured)

export const allCities = Array.from(new Set(properties.map((p) => p.city))).sort()
export const allTypes = Array.from(new Set(properties.map((p) => p.type))).sort()

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug)
}

export function getSimilarProperties(property: Property, count = 3) {
  return properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (p: Property) =>
        (p.type === property.type ? 2 : 0) + (p.city === property.city ? 1 : 0)
      return score(b) - score(a)
    })
    .slice(0, count)
}
