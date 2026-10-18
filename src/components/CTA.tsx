import { ArrowRight, Key } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function CTA() {
  const navigate = useNavigate()
  return (
    <section id="contact" className="bg-stone py-24 md:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-white border border-navy/5 px-8 py-12 md:px-14 md:py-14 shadow-sm">
          <div className="flex items-center gap-6 md:gap-8 text-center md:text-left">
            <span className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
              <Key size={26} />
            </span>
            <div>
              <h2 className="font-serif font-semibold leading-tight text-navy"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                Ready to Find Your Perfect Property?
              </h2>
              <p className="mt-3 text-ink/60 max-w-md">
                Let our experts guide you to the right home or investment.
              </p>
            </div>
          </div>
          <button onClick={() => navigate('/properties')} className="btn-primary group shrink-0">
            Get in Touch
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
