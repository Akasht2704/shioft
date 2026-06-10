export const siteConfig = {
  name: 'Shioft Digital',
  legalName: 'Shioft Digital Pvt Limited',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shioft.com',
  description:
    'Shioft Digital builds high-performance websites, mobile apps, cloud solutions, and digital marketing services including SEO and social media marketing for startups and enterprises.',
  tagline: 'Web development, mobile apps, cloud solutions & digital marketing',
  email: 'support@shioft.com',
  locale: 'en_US',
  linkedin: 'https://www.linkedin.com/company/shioft/',
  defaultOgImage: '/images/shioftlogo.png',
  keywords: [
    'Shioft Digital',
    'web development company',
    'mobile app development',
    'cloud solutions',
    'SEO services',
    'social media marketing',
    'UI UX design',
    'digital marketing agency',
    'software development',
    'Next.js development',
  ],
} as const
