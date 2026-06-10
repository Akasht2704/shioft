export type ServicePage = {
  slug: string
  title: string
  description: string
}

export const servicePages: ServicePage[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'Custom web development with React, Next.js, and Node.js — fast, secure, and SEO-friendly websites for businesses.',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile app development for Android and iOS using React Native and Flutter.',
  },
  {
    slug: 'cloud-solution',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure, DevOps, and deployment on AWS, Azure, and Google Cloud Platform.',
  },
  {
    slug: 'e-commerce-app-development',
    title: 'E-commerce App Development',
    description:
      'Custom e-commerce platforms with secure payments, inventory management, and conversion-focused design.',
  },
  {
    slug: 'ai-ml',
    title: 'AI / Machine Learning',
    description:
      'AI and machine learning solutions for automation, predictions, and intelligent business insights.',
  },
  {
    slug: 'natural-language-processing',
    title: 'Natural Language Processing (NLP)',
    description:
      'NLP solutions including chatbots, sentiment analysis, and language models for your business.',
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    description:
      'Computer vision systems for object detection, image classification, and video intelligence.',
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    description:
      'Strategic AI consulting to identify opportunities, choose tools, and deliver measurable ROI.',
  },
  {
    slug: 'web-design',
    title: 'UI/UX Design',
    description:
      'User-centered UI/UX design with wireframes, prototypes, and polished interfaces that convert.',
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    description:
      'Manual and automated QA testing to ensure reliable, secure, and bug-free software releases.',
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    description:
      'Ongoing application support, updates, and performance monitoring after launch.',
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description:
      'On-page SEO, technical SEO, and content strategies to improve rankings, traffic, and leads.',
  },
  {
    slug: 'smm',
    title: 'Social Media Marketing',
    description:
      'Social media marketing across Instagram, LinkedIn, Facebook, and Twitter to grow your brand.',
  },
  {
    slug: 'email-sms-marketing',
    title: 'Email & SMS Marketing',
    description:
      'Targeted email and SMS campaigns with higher open rates, engagement, and conversions.',
  },
]

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug)
}
