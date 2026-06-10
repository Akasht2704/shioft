import type { Metadata } from 'next'
import { siteConfig } from './site'

type PageSeoOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
  ogImage?: string
}

export function buildPageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
  ogImage = siteConfig.defaultOgImage,
}: PageSeoOptions): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`
  const url = `${siteConfig.url}${canonicalPath === '/' ? '' : canonicalPath}`
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin],
    description: siteConfig.description,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.defaultOgImage}`,
      },
    },
  }
}

export function serviceJsonLd(service: { title: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
    areaServed: 'Worldwide',
  }
}
