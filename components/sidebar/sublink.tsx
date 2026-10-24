import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'

import { Anchor } from '@/components/anchor'
import { navIcons } from '@/components/sidebar/icons'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { SheetClose } from '@/components/ui/sheet'
import { type Paths } from '@/lib/pageroutes'
import { cn } from '@/lib/utils'

function isRoute(item: Paths): item is Extract<Paths, { title: string; href: string }> {
  return 'title' in item && 'href' in item
}

function hasActiveDescendant(item: Paths, pathname: string, parentHref: string): boolean {
  if (!isRoute(item)) return false

  const href = item.absolute ? `/docs${item.href}` : `${parentHref}${item.href}`
  if (pathname === href || pathname.startsWith(`${href}/`)) return true
  return item.items?.some((child) => hasActiveDescendant(child, pathname, href)) ?? false
}

export function SubLink(props: Paths & { level: number; isSheet: boolean }) {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(
    () =>
      isRoute(props) &&
      (path === props.href ||
        path.startsWith(`${props.href}/`) ||
        (props.items?.some((child) => hasActiveDescendant(child, path, props.href)) ?? false))
  )

  useEffect(() => {
    if (
      isRoute(props) &&
      props.items?.some((child) => hasActiveDescendant(child, path, props.href))
    ) {
      Promise.resolve().then(() => setIsOpen(true))
    }
  }, [path, props])

  if (!isRoute(props)) return

  const { title, href, items, noLink, level, isSheet, icon } = props
  const Icon = icon ? navIcons[icon] : undefined

  const Comp = (
    <Anchor
      activeClassName="border-l-2 border-[var(--beauty-pink)] bg-[var(--surface-highlight)] font-semibold text-[var(--brand-action)]"
      aria-current={path === href ? 'page' : undefined}
      className="block rounded-md border-l-2 border-transparent px-2 py-1.5 text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--surface-soft)] hover:text-[var(--brand-action)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
      href={href}
    >
      <span className="flex min-w-0 items-center gap-2 break-words">
        {Icon && <Icon aria-hidden className="h-4 w-4 shrink-0" strokeWidth={2} />}
        {title}
      </span>
    </Anchor>
  )

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h2 className="font-semibold text-[var(--text-primary)] sm:text-sm">{title}</h2>
  )

  if (!items) {
    return <div className="flex flex-col text-sm">{titleOrLink}</div>
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <Collapsible onOpenChange={setIsOpen} open={isOpen}>
        <div className="mr-1 flex min-w-0 items-center gap-2 text-sm">
          {titleOrLink}
          <CollapsibleTrigger asChild>
            <Button
              aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
              className="ml-auto h-6 w-6 shrink-0 text-[var(--text-secondary)] hover:text-[var(--brand-action)]"
              size="icon"
              variant="ghost"
            >
              {!isOpen ? (
                <LuChevronRight className="h-[0.9rem] w-[0.9rem]" />
              ) : (
                <LuChevronDown className="h-[0.9rem] w-[0.9rem]" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="CollapsibleContent">
          <div
            className={cn(
              'mt-2.5 flex flex-col items-start gap-3 border-l pl-4 text-sm',
              level > 0 && 'ml-1 border-l pl-4'
            )}
          >
            {items?.map((innerLink) => {
              if (!isRoute(innerLink)) {
                return null
              }

              const modifiedItems = {
                ...innerLink,
                href: innerLink.absolute
                  ? `/docs${innerLink.href}`
                  : `${href}${innerLink.href}`,
                level: level + 1,
                isSheet,
              }

              return <SubLink key={modifiedItems.href} {...modifiedItems} />
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
