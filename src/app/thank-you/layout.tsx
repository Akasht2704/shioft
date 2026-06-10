import { ReactNode } from 'react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Shioft Digital. We will get back to you soon.',
  path: '/thank-you',
  noIndex: true,
})

export default function ThankYouLayout({ children }: { children: ReactNode }) {
  return children
}
