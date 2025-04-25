import About from '@/components/About'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSecction'

export default function AboutPage() {
  return (
    <>
      <About />
      <AboutSection/>
      <StatsSection/>
      <Testimonials />
      <Contact />
      <Clients/>
    </>
  )
}
