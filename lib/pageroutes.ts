import { Documents } from '@/settings/documents'

export type Paths =
  | {
      title: string
      href: string
      description?: string
      absolute?: boolean
      noLink?: true
      heading?: string
      icon?: string
      items?: Paths[]
    }
  | {
      spacer: true
    }

export const Routes: Paths[] = [...Documents]

interface Page {
  href: string
  title: string
}

function isRoute(node: Paths): node is Extract<Paths, { title: string; href: string }> {
  return 'title' in node && 'href' in node
}

function getAllLinks(node: Paths, rootHref?: string): Page[] {
  const pages: Page[] = []
  const sectionHref = rootHref ?? (isRoute(node) ? node.href : '')

  if (isRoute(node) && node.href.includes('#')) {
    return pages
  }

  if (isRoute(node) && !node.noLink) {
    pages.push({ title: node.title, href: node.href })
  }

  if (isRoute(node) && node.items) {
    node.items.forEach((subNode) => {
      if (isRoute(subNode)) {
        const temp = {
          ...subNode,
          href: node.href === sectionHref
            ? subNode.absolute ? `${sectionHref}${subNode.href}` : `${node.href}${subNode.href}`
            : `${sectionHref}${subNode.href}`,
        }
        pages.push(...getAllLinks(temp, sectionHref))
      }
    })
  }

  return pages
}

const extraRoutes: Page[] = [
  { href: '/roadmap', title: 'BeautyComm Roadmap' },
  { href: '/changelog', title: "What's New at BeautyComm" },
]

export const PageRoutes = [...Routes.flatMap((it) => getAllLinks(it)), ...extraRoutes]

export const PageTitles = new Map([
  ...PageRoutes.map((page) => [page.href, page.title] as const),
  ...Routes.flatMap((item) =>
    isRoute(item) && item.noLink ? ([[item.href, item.title]] as const) : []
  ),
])
