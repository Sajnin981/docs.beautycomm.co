import { PageRoutes } from '@/lib/pageroutes'

export type NavItem = {
  title: string
  href: string
  external?: boolean
  demo?: boolean
}

export const Navigations: NavItem[] = [
  {
    title: 'Overview',
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: 'Support',
    href: '/docs/support',
  },
  {
    title: 'View Demo',
    href: 'https://shop.beautycomm.co',
    external: true,
    demo: true,
  },
]

export const GitHubLink = {
  href: '',
}
