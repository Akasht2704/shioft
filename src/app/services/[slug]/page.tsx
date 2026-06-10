import type { Metadata } from 'next'
import ServiceDetail from './ServiceDetail'
import JsonLd from '@/components/JsonLd'
import { buildPageMetadata, serviceJsonLd } from '@/lib/seo'
import { getServiceBySlug, servicePages } from '@/lib/service-pages'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return buildPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.title, 'Shioft Digital services'],
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  return (
    <>
      {service ? <JsonLd data={serviceJsonLd(service)} /> : null}
      <ServiceDetail slug={slug} />
    </>
  )
}
