import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Horizon Properties home">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0">
        <path
          d="M16 5 L27 13.5 V27 H20.5 V18.5 H11.5 V27 H5 V13.5 Z"
          stroke="#C5A059"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
          className="transition-transform duration-500 group-hover:scale-105"
          style={{ transformOrigin: 'center' }}
        />
        <circle cx="16" cy="11.5" r="1.4" fill="#C5A059" />
      </svg>
      <span className={`font-serif text-lg font-semibold tracking-wide leading-none ${textColor}`}>
        HORIZON
        <span className="block text-[0.6rem] font-sans font-medium tracking-label text-champagne mt-0.5">
          PROPERTIES
        </span>
      </span>
    </Link>
  )
}


