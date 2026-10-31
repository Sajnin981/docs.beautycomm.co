import { Card, CardGrid } from '@/components/markdown/card'
import { type Paths } from '@/lib/pageroutes'
import { Documents } from '@/settings/documents'

interface SectionCardsProps {
  section: string
  group?: string
}

export function SectionCards({ section: sectionHref, group }: SectionCardsProps) {
  const section = Documents.find((item) => 'href' in item && item.href === `/${sectionHref}`)

  if (!section || !('items' in section)) {
    throw new Error(`Documentation section not found: ${sectionHref}`)
  }

  const sectionItems = section.items as Paths[]
  const groupItem = group
    ? sectionItems.find((item) => 'title' in item && item.title === group)
    : undefined
  const sourceItems = group
    ? groupItem && 'items' in groupItem ? groupItem.items : undefined
    : sectionItems

  if (!sourceItems?.length) {
    throw new Error(`Documentation group not found: ${group || sectionHref}`)
  }

  return (
    <CardGrid className="auto-rows-[144px]">
      {sourceItems.map((item) => {
        if (!('href' in item) || !('title' in item) || !item.description) return null

        const href = item.href.startsWith('/docs/')
          ? item.href
          : `/docs${section.href}${item.href}`

        return (
          <Card
            description={item.description}
            href={href}
            key={item.href}
            title={item.title}
            variant="directory"
          />
        )
      })}
    </CardGrid>
  )
}
