'use client'

import { useMemo, useState } from 'react'
import { LuCalendar, LuSearch } from 'react-icons/lu'

import { changelogEntries } from '@/data/beautycomm-changelog'

export function ChangelogBrowser() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest')
  const categories = useMemo(() => ['All categories', ...Array.from(new Set(changelogEntries.map((item) => item.category))).sort()], [])
  const filtered = useMemo(() => changelogEntries.filter((item) => {
    const matchesQuery = `${item.title} ${item.description} ${item.category} ${item.platform}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All categories' || item.category === category)
  }).sort((a, b) => order === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)), [query, category, order])

  const monthGroups = useMemo(() => {
    const groups = new Map<string, typeof filtered>()
    filtered.forEach((item) => {
      const label = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${item.date}T00:00:00Z`))
      groups.set(label, [...(groups.get(label) ?? []), item])
    })
    return Array.from(groups.entries())
  }, [filtered])

  return (
    <div className="not-prose -mt-5 mb-6 space-y-5">
      <div className="grid gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-3 sm:grid-cols-[minmax(0,1fr)_180px_150px]">
        <label className="relative block">
          <LuSearch aria-hidden className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]" />
          <span className="sr-only">Search updates</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search updates" className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] pr-3 pl-9 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--beauty-lilac)]" />
        </label>
        <label><span className="sr-only">Category</span><select value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3 text-sm text-[var(--text-primary)]">{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span className="sr-only">Sort updates</span><select value={order} onChange={(event) => setOrder(event.target.value as 'newest' | 'oldest')} className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3 text-sm text-[var(--text-primary)]"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label>
      </div>
      {filtered.length === 0 ? <div className="rounded-xl border border-dashed border-[var(--border-subtle)] py-12 text-center text-sm text-[var(--text-secondary)]">No changelog updates match your search and filters.</div> : monthGroups.map(([month, entries]) => (
        <section key={month}>
          <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">{month}</h2>
          <div className="space-y-3">
            {entries.map((entry) => (
              <article key={`${entry.date}-${entry.title}`} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--beauty-pink)]/50 hover:shadow-sm">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <LuCalendar aria-hidden className="h-3.5 w-3.5" />
                  <time dateTime={entry.date}>{new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${entry.date}T00:00:00Z`))}</time>
                  <span className="rounded-full bg-[var(--surface-highlight)] px-2.5 py-1 font-semibold text-[var(--brand-action)]">{entry.category}</span>
                  {entry.version && <span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 font-medium">{entry.version}</span>}
                </div>
                <h3 className="mt-3 text-base font-semibold text-[var(--text-primary)]">{entry.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{entry.description}</p>
                <p className="mt-3 text-xs font-medium text-[var(--brand-action)]">{entry.platform}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
