import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    // Don't jump to top on in-page hash navigation
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, search])
  return null
}
