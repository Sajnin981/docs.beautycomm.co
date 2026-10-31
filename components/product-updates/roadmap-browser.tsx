'use client'

import { useMemo, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

import { roadmapEntries, type RoadmapStatus } from '@/data/beautycomm-roadmap'

const statusLabels: Record<RoadmapStatus, string> = {
  planned: 'Planned', 'next-up': 'Next Up', 'in-progress': 'In Progress', completed: 'Completed',
}
const statusStyles: Record<RoadmapStatus, string> = {
  planned: 'bg-[var(--surface-highlight)] text-[var(--brand-action)]',
  'next-up': 'bg-[var(--beauty-lilac)]/40 text-[var(--text-primary)]',
  'in-progress': 'border border-[var(--beauty-pink)]/40 bg-[var(--beauty-pink-soft)] text-[var(--brand-action)]',
  completed: 'bg-[var(--brand-action)] text-white',
}

export function RoadmapBrowser() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const [status, setStatus] = useState<RoadmapStatus | 'all'>('all')
  const categories = useMemo(() => ['All categories', ...Array.from(new Set(roadmapEntries.map((item) => item.category))).sort()], [])
  const groupedStatuses: RoadmapStatus[] = ['planned', 'next-up', 'in-progress', 'completed']
  const filtered = useMemo(() => roadmapEntries.filter((item) => {
    const matchesQuery = `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (category === 'All categories' || item.category === category) && (status === 'all' || item.status === status)
  }), [query, category, status])

  return (
    <div className="not-prose -mt-5 mb-6 space-y-5">
      <div className="grid gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-3 sm:grid-cols-[minmax(0,1fr)_180px_170px]">
        <label className="relative block">
          <LuSearch aria-hidden className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]" />
          <span className="sr-only">Search roadmap</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roadmap" className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] pr-3 pl-9 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--beauty-lilac)]" />
        </label>
        <label><span className="sr-only">Category</span><select value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3 text-sm text-[var(--text-primary)]">{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span className="sr-only">Status</span><select value={status} onChange={(event) => setStatus(event.target.value as RoadmapStatus | 'all')} className="h-10 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3 text-sm text-[var(--text-primary)]"><option value="all">All statuses</option>{groupedStatuses.map((item) => <option key={item} value={item}>{statusLabels[item]}</option>)}</select></label>
      </div>
      {filtered.length === 0 ? <div className="rounded-xl border border-dashed border-[var(--border-subtle)] py-12 text-center text-sm text-[var(--text-secondary)]">No roadmap items match your search and filters.</div> : groupedStatuses.map((group) => {
        const items = filtered.filter((item) => item.status === group)
        if (!items.length) return null
        return <section key={group}><h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">{statusLabels[group]}</h2><div className="grid gap-3 md:grid-cols-2">{items.map((item) => <article key={item.title} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--beauty-pink)]/50 hover:shadow-sm"><div className="flex flex-wrap items-center gap-2 text-xs"><span className={`rounded-full px-2.5 py-1 font-semibold ${statusStyles[item.status]}`}>{statusLabels[item.status]}</span><span className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[var(--text-secondary)]">{item.category}</span></div><h3 className="mt-3 text-base font-semibold text-[var(--text-primary)]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>{item.quarter && <p className="mt-3 text-xs font-medium text-[var(--brand-action)]">Estimated release: {item.quarter}</p>}</article>)}</div></section>
      })}
    </div>
  )
}
