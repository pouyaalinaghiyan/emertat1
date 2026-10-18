import { Link } from 'react-router-dom'
import type { ReactNode, MouseEventHandler } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="section-label">{children}</span>
}

type Variant = 'primary' | 'gold' | 'outline' | 'outline-dark' | 'ghost'

interface ButtonLinkProps {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  className?: string
  onClick?: MouseEventHandler
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  'outline-dark': 'btn-outline-dark',
  ghost: 'btn-ghost',
}

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonLinkProps) {
  const cls = `${variants[variant]} ${className}`
  const content = <>{children}</>

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
