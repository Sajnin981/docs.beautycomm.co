import { type MetadataRoute } from 'next/types'

import { PageRoutes } from '@/lib/pageroutes'
import { Settings } from '@/types/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  return PageRoutes.map((page) => ({
    url: `${Settings.metadataBase}/docs${page.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
}
