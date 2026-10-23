import { LuCalendar } from 'react-icons/lu'

interface ReleaseEntryProps {
  added?: string[]
  breaking?: string[]
  date: string
  example?: boolean
  fixed?: string[]
  improved?: string[]
  summary: string
  title: string
  version?: string
}

function ReleaseList({ items, label }: { items?: string[]; label: string }) {
  if (!items?.length) return null

  return (
    <div className="mt-4">
      <p className="mb-1 text-xs font-semibold tracking-wide text-[var(--brand-action)] uppercase">
        {label}
      </p>
      <ul className="m-0 list-disc space-y-1 pl-5 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function ReleaseEntry({
  added,
  breaking,
  date,
  example,
  fixed,
  improved,
  summary,
  title,
  version,
}: ReleaseEntryProps) {
  return (
    <article className="not-prose my-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
        <LuCalendar aria-hidden className="h-3.5 w-3.5" />
        <time>{date}</time>
        {version && (
          <span className="rounded-full bg-[var(--surface-highlight)] px-2 py-0.5 font-medium text-[var(--brand-action)]">
            {version}
          </span>
        )}
        {example && (
          <span className="rounded-full border border-dashed border-[var(--beauty-pink)] px-2 py-0.5 font-medium text-[var(--brand-action)]">
            Illustrative example
          </span>
        )}
      </div>
      <p className="mt-2 text-base font-semibold text-[var(--text-primary)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">{summary}</p>
      <ReleaseList items={added} label="New features" />
      <ReleaseList items={improved} label="Improvements" />
      <ReleaseList items={fixed} label="Bug fixes" />
      <ReleaseList items={breaking} label="Breaking changes" />
    </article>
  )
}
