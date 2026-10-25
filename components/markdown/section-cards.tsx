import { Card, CardGrid } from '@/components/markdown/card'
import { Documents } from '@/settings/documents'

interface SectionCardsProps {
  section: string
}

export function SectionCards({ section: sectionHref }: SectionCardsProps) {
  const section = Documents.find((item) => 'href' in item && item.href === `/${sectionHref}`)

  if (!section || !('items' in section)) {
    throw new Error(`Documentation section not found: ${sectionHref}`)
  }

  return (
    <CardGrid className="auto-rows-[144px]">
      {section.items?.map((item) => {
        if (!('href' in item) || !('title' in item) || !item.description) return null

        return (
          <Card
            description={item.description}
            href={`/docs${section.href}${item.href}`}
            key={item.href}
            title={item.title}
            variant="directory"
          />
        )
      })}
    </CardGrid>
  )
}
