import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'

const columns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Properties', to: '/properties' },
      { label: 'About Us', to: '/#about' },
      { label: 'Services', to: '/#services' },
      { label: 'Team', to: '/#team' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#about' },
      { label: 'Careers', to: '/#' },
      { label: 'Press', to: '/#' },
      { label: 'Privacy Policy', to: '/#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', to: '/#contact' },
      { label: 'FAQ', to: '/#' },
      { label: 'Terms of Service', to: '/#' },
      { label: 'Sitemap', to: '/#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm text-white/55 leading-relaxed">
              Horizon Properties curates exceptional homes and investment opportunities
              with integrity, discretion, and architectural expertise.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-champagne mt-0.5 shrink-0" />
                1200 Architectural Way, Suite 500, New York, NY
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-champagne shrink-0" />
                (555) 246-7890
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={16} className="text-champagne shrink-0" />
                hello@horizonproperties.com
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-label text-champagne">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-label text-champagne">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-white/55 leading-relaxed">
              Receive new listings and market insights, discreetly.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne text-navy transition-colors hover:bg-champagne-light"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-xs text-white/45 order-2 sm:order-1">
            © {new Date().getFullYear()} Horizon Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-champagne hover:text-champagne"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
