import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'

interface PropertyGalleryProps {
  images: string[]
  alt: string
}

export function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, next, prev])

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Main image */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src={images[active]}
            alt={`${alt} — image ${active + 1}`}
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
          <button
            onClick={() => setLightbox(true)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy backdrop-blur transition-all hover:bg-white hover:scale-105"
            aria-label="Open fullscreen image viewer"
          >
            <Expand size={18} />
          </button>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-navy backdrop-blur opacity-0 transition-all group-hover:opacity-100 hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-navy backdrop-blur opacity-0 transition-all group-hover:opacity-100 hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
          <span className="absolute bottom-4 right-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs text-white">
            {active + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                active === i ? 'ring-2 ring-champagne ring-offset-2 ring-offset-ivory' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[active]}
            alt={`${alt} — fullscreen image ${active + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  )
}
