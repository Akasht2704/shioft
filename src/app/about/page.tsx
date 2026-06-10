import About from '@/components/About'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSecction'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'About Us — Technology & Digital Solutions Experts',
  description:
    'Learn about Shioft Digital — a technology-driven team building scalable web, mobile, cloud, and marketing solutions for startups and enterprises worldwide.',
  path: '/about',
  keywords: [
    'about Shioft Digital',
    'software development team',
    'technology company',
  ],
})

export default function AboutPage() {
  return (
    <>
      <About />
      <AboutSection />
      <StatsSection />
      <Testimonials />
      <Contact />
      <Clients />
    </>
  )
}
