import type { MetadataRoute } from 'next'
import { SERVICES, LOCATIONS } from '@/lib/data'

const BASE_URL = 'https://savvydentalimplants.com'

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, '-')

export default function sitemap(): MetadataRoute.Sitemap {
  const cities = Object.values(LOCATIONS).flat()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/services`, lastModified: new Date() },
    { url: `${BASE_URL}/location`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    lastModified: new Date(),
  }))

  const locationRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/location/${slugify(city)}`,
    lastModified: new Date(),
  }))

  const serviceLocationRoutes: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    cities.map((city) => ({
      url: `${BASE_URL}/services/${service.id}/${slugify(city)}`,
      lastModified: new Date(),
    }))
  )

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...serviceLocationRoutes]
}
