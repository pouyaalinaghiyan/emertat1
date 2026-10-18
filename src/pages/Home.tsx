import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { FeaturedProperties } from '../components/FeaturedProperties'
import { Services } from '../components/Services'
import { WhyChoose } from '../components/WhyChoose'
import { Team } from '../components/Team'
import { CTA } from '../components/CTA'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Services />
      <WhyChoose />
      <Team />
      <CTA />
    </>
  )
}
