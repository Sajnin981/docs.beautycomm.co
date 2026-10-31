export type NavItem = {
  title: string
  href: string
  external?: boolean
  demo?: boolean
}

export const Navigations: NavItem[] = [
  {
    title: 'Roadmap',
    href: '/docs/roadmap',
  },
  {
    title: 'Changelog',
    href: '/docs/changelog',
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
