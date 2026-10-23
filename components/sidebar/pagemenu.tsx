'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { navIcons } from '@/components/sidebar/icons'
import { SubLink } from '@/components/sidebar/sublink'
import { Separator } from '@/components/ui/separator'
import { Routes } from '@/lib/pageroutes'

export function PageMenu({ isSheet = false }) {
  const path = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!path.startsWith('/docs')) return

    const timeout = window.setTimeout(() => {
      const scrollRegion = menuRef.current?.closest<HTMLElement>('[data-sidebar-scroll]')
      const activeLink = menuRef.current?.querySelector<HTMLElement>('[aria-current="page"]')

      if (!scrollRegion || !activeLink) return

      const regionBounds = scrollRegion.getBoundingClientRect()
      const linkBounds = activeLink.getBoundingClientRect()

      if (linkBounds.top < regionBounds.top) {
        scrollRegion.scrollTop -= regionBounds.top - linkBounds.top
      } else if (linkBounds.bottom > regionBounds.bottom) {
        scrollRegion.scrollTop += linkBounds.bottom - regionBounds.bottom
      }
    }, 350)

    return () => window.clearTimeout(timeout)
  }, [path])

  if (!path.startsWith('/docs')) return null

  return (
    <div className="flex min-w-0 flex-col gap-3.5 pb-6" ref={menuRef}>
      {Routes.map((item, index) => {
        if ('spacer' in item) {
          return <Separator className="my-2" key={`spacer-${index}`} />
        }

        const SectionIcon = item.icon ? navIcons[item.icon] : undefined

        return (
          <div key={item.title + index}>
            {item.heading && (
              <div className="mb-2 flex min-w-0 items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                {SectionIcon && (
                  <SectionIcon aria-hidden className="h-4 w-4 text-[var(--brand-action)]" />
                )}
                {item.heading}
              </div>
            )}
            <SubLink
              {...{
                ...item,
                icon: undefined,
                href: `/docs${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
