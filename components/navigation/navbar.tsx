'use client'

import { LuArrowUpRight } from 'react-icons/lu'

import { Anchor } from '@/components/anchor'
import { Logo } from '@/components/navigation/logo'
import { Search } from '@/components/navigation/search'
import { SheetLeft } from '@/components/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { Navigations } from '@/settings/navigation'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--surface-primary)] px-3 text-[var(--text-primary)] sm:px-4 md:px-6">
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <SheetLeft />
        <Logo />
        <div className="hidden items-center gap-2 lg:flex">
          <NavMenu />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Search />
        <ModeToggle />
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const demoButton = item.demo
        const Comp = (
          <Anchor
            absolute
            activeClassName={demoButton ? 'text-white' : 'font-semibold text-[#6D49B8]'}
            className={
              demoButton
                ? buttonVariants({
                    className:
                      'h-9 rounded-lg border border-[#FC568C] bg-[#FC568C] px-3 text-sm font-semibold text-white shadow-none hover:border-[#6D49B8] hover:bg-[#6D49B8] hover:text-white',
                    size: 'sm',
                  })
                : 'flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--brand-action)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]'
            }
            href={item.href}
            key={item.title + item.href}
            rel={item.external ? 'noopener noreferrer' : undefined}
            target={item.external ? '_blank' : undefined}
          >
            {item.title}
            {item.external && <LuArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />}
          </Anchor>
        )

        return isSheet ? (
          <SheetClose asChild key={item.title + item.href}>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
