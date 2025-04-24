// src/app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Technologies from '@/components/Technologies'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSecction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <AboutSection/>
      <StatsSection/>
      <Services />
      <Technologies/>
      <Testimonials />
      <Contact />
      
      <Clients/>
    </>
  )
}
