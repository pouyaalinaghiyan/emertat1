import { Linkedin, Mail, Phone } from 'lucide-react'
import { SectionLabel } from './Button'

const team = [
  {
    name: 'Daniel Morgan',
    role: 'Managing Director',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f52?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'James Wilson',
    role: 'Investment Consultant',
    img: 'https://images.unsplash.com/photo-1500648760916-46616141936a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
  },
]

export function Team() {
  return (
    <section id="team" className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="container-editorial">
        <div className="reveal text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <SectionLabel>Our People</SectionLabel>
          <h2 className="mt-5 font-serif font-semibold leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}>
            Meet The Team
          </h2>
          <p className="mt-6 text-ink/60 text-lg leading-relaxed">
            A dedicated group of advisors with deep architectural knowledge and an
            unwavering commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="reveal group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                {/* Social links reveal on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {[Linkedin, Mail, Phone].map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy"
                    >
                      <Icon size={15} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-serif text-xl font-semibold text-navy">{m.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-label text-champagne">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
