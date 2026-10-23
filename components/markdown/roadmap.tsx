import { type PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type RoadmapStatus = 'planned' | 'in-progress' | 'completed'

interface RoadmapItemProps extends PropsWithChildren {
  category: string
  example?: boolean
  href?: string
  status: RoadmapStatus
  target?: string
  title: string
  updated?: string
}

const statusLabel: Record<RoadmapStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In progress',
  completed: 'Completed',
}

const statusStyle: Record<RoadmapStatus, string> = {
  planned: 'bg-[var(--surface-highlight)] text-[var(--brand-action)]',
  'in-progress': 'bg-[var(--beauty-lilac)]/40 text-[var(--text-primary)]',
  completed: 'bg-[var(--brand-action)] text-white dark:text-[#18111e]',
}

export function RoadmapItem({
  category,
  children,
  example,
  href,
  status,
  target,
  title,
  updated,
}: RoadmapItemProps) {
  return (
    <article className="not-prose my-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className={cn('rounded-full px-2 py-0.5 font-semibold', statusStyle[status])}>
          {statusLabel[status]}
        </span>
        <span className="text-[var(--text-secondary)]">{category}</span>
        {target && <span className="text-[var(--text-secondary)]">· Target: {target}</span>}
        {updated && <span className="text-[var(--text-secondary)]">· Updated: {updated}</span>}
        {example && (
          <span className="rounded-full border border-dashed border-[var(--beauty-pink)] px-2 py-0.5 font-medium text-[var(--brand-action)]">
            Illustrative example
          </span>
        )}
      </div>
      <p className="mt-2 text-base font-semibold text-[var(--text-primary)]">{title}</p>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{children}</div>
      {href && (
        <a
          className="mt-2 inline-block text-sm text-[var(--brand-action)] hover:underline"
          href={href}
        >
          Related documentation
        </a>
      )}
    </article>
  )
}
