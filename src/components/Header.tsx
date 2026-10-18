import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from './Logo'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Team', to: '/#team' },
  { label: 'Contact', to: '/#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (to: string) => {
    setOpen(false)
    if (to.startsWith('/#')) {
      const hash = to.slice(1)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(to)
    }
  }

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-navy/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(197,160,89,0.15)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Logo variant="light" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              (link.to === '/' && isHome && !location.hash) ||
              (link.to.startsWith('/#') && location.hash === link.to.slice(1)) ||
              (link.to === '/properties' && location.pathname.startsWith('/properties'))
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.to)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  active ? 'text-champagne' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-champagne transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+15552467890"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-champagne hover:text-champagne"
          >
            <Phone size={15} className="text-champagne" />
            (555) 246-7890
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-editorial flex flex-col gap-1 pb-8 pt-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.to)}
              className="flex items-center justify-between border-b border-white/10 py-3.5 text-left text-base font-medium text-white/90 transition-colors hover:text-champagne"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+15552467890"
            className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-full bg-champagne px-6 py-3.5 text-sm font-semibold text-navy"
          >
            <Phone size={16} />
            (555) 246-7890
          </a>
        </nav>
      </div>
    </header>
  )
}
