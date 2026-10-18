# Horizon Properties — Base44 Dev Environment

A premium real-estate marketing site (Vite + React + TypeScript + Tailwind CSS).

## Stack
- **Vite 5** dev server with React + TypeScript, served on port 3000.
- **Tailwind CSS 3** with a custom design system (`navy`, `ivory`, `champagne`, `stone`, `ink`).
- **React Router 6** for `/`, `/properties`, `/properties/:slug` routes.
- **lucide-react** icons, **framer-motion** available for motion.
- Property data lives in `src/data/properties.ts` as typed records — structured so it can later be backed by a database/API.

## Running locally (Base44 sandbox)
```
docker compose -f docker-compose.base44.yml up -d --build
```
The compose uses a `node:20-alpine` image, bind-mounts the repo, runs `npm install` then `npm run dev` (Vite with polling watch for bind-mount reliability). Live reload applies source edits without rebuilds.

## Project layout
- `src/components/` — reusable UI (Header, Footer, Hero, About, FeaturedProperties, PropertyCard, Services, WhyChoose, Team, CTA, PropertyGallery, Button, Logo).
- `src/pages/` — Home, Properties (filter/search/sort), PropertyDetail (gallery, agent card, similar properties).
- `src/hooks/useScrollReveal.ts` — IntersectionObserver-based reveal-on-scroll.

## Notes
- Images are loaded from Unsplash CDN URLs (`images.unsplash.com`); they require network access from the browser.
- The header is transparent over the hero and turns solid navy on scroll (`useScrollReveal`/Header scroll listener).
- No backend/database is required to run; all data is client-side typed records.
