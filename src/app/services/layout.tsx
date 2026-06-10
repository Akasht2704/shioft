import { ReactNode } from 'react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Our Services — Software Development & Digital Marketing',
  description:
    'Explore Shioft Digital services: web development, mobile apps, cloud solutions, UI/UX design, SEO, social media marketing, and more.',
  path: '/services',
  keywords: [
    'software development services',
    'digital marketing services',
    'IT consulting',
  ],
})

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children
}
