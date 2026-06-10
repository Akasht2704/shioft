import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Technologies from '@/components/Technologies'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSecction'
import JsonLd from '@/components/JsonLd'
import { buildPageMetadata, websiteJsonLd } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Web Development, Mobile Apps & Digital Marketing',
  description:
    'Shioft Digital delivers web development, mobile apps, cloud solutions, SEO, and social media marketing to help businesses grow online.',
  path: '/',
  keywords: [
    'hire web developers',
    'digital agency',
    'IT services company',
  ],
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <About />
      <AboutSection />
      <StatsSection />
      <Services />
      <Technologies />
      <Testimonials />
      <Contact />
      <Clients />
    </>
  )
}
