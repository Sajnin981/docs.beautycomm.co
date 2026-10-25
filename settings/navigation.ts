export type NavItem = {
  title: string
  href: string
  external?: boolean
  demo?: boolean
}

export const Navigations: NavItem[] = [
  {
    title: 'Overview',
    href: '/docs/overview',
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
