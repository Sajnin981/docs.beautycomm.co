'use client'

import { type MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ScrollArea } from '@/components/ui/scroll-area'

export interface TableAnchorProps {
  tocs: { href: string; level: number; text: string }[]
}

export function TableAnchor({ tocs }: TableAnchorProps) {
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const headings = tocs
      .map(({ href }) => document.getElementById(href.startsWith('#') ? href.slice(1) : href))
      .filter((heading): heading is HTMLElement => heading !== null)

    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)
        if (visible[0]?.target.id) setActiveHref(`#${visible[0].target.id}`)
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    )

    for (const heading of headings) observer.observe(heading)

    return () => observer.disconnect()
  }, [tocs])

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.startsWith('#') ? href.slice(1) : href
    const targetElement = document.getElementById(id)
    if (targetElement) {
      setActiveHref(`#${id}`)
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth'
      targetElement.scrollIntoView({ behavior, block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  if (!tocs.length) return null

  return (
    <div className="flex w-full flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">On this page</h3>
      <ScrollArea className="pt-0.5 pb-4">
        <div className="flex flex-col gap-2.5 text-sm text-foreground">
          {tocs.map(({ href, level, text }) => (
            <Link
              aria-label={text}
              className={clsx(
                'border-l-2 px-2 py-1 transition-colors duration-150',
                activeHref === href
                  ? 'border-[var(--beauty-pink)] font-medium text-[var(--brand-action)]'
                  : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--brand-action)]',
                {
                  'ml-0': level === 2,
                  'ml-3': level === 3,
                  'ml-6': level === 4,
                }
              )}
              href={href}
              key={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              scroll={false}
              title={text}
            >
              {text}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
