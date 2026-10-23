import Image from 'next/image'
import { LuAlignLeft } from 'react-icons/lu'

import { Logo } from '@/components/navigation/logo'
import { NavMenu } from '@/components/navigation/navbar'
import { PageMenu } from '@/components/sidebar/pagemenu'
import { Button } from '@/components/ui/button'
import { DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Sidebar() {
  return (
    <aside
      aria-label="Page navigation"
      className="sticky top-20 hidden h-[calc(100dvh-5.5rem)] min-h-0 w-72 shrink-0 flex-col overflow-hidden lg:flex"
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-primary)] shadow-[var(--shadow-soft)]">
        <div className="flex shrink-0 items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-4">
          <Image
            alt=""
            className="h-9 w-9 rounded-lg object-contain"
            height={36}
            src="/beautycomm-logo.jpeg"
            width={36}
          />
          <div className="min-w-0">
            <div className="truncate text-base font-semibold tracking-tight text-[var(--text-primary)]">
              BeautyComm
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Documentation
            </div>
          </div>
        </div>
        <nav
          aria-label="Documentation sections"
          className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)]"
          data-sidebar-scroll
        >
          <PageMenu />
        </nav>
      </div>
    </aside>
  )
}

export function SheetLeft() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open navigation menu"
          className="flex cursor-pointer lg:hidden"
          size="icon"
          variant="ghost"
        >
          <LuAlignLeft className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-dvh min-h-0 flex-col gap-0 overflow-hidden px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader className="shrink-0 border-b border-[var(--border-subtle)]">
          <SheetClose asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <SheetDescription className="sr-only">Page navigation</SheetDescription>
        <nav
          aria-label="Documentation navigation"
          className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)]"
          data-sidebar-scroll
        >
          <div className="mx-0 flex flex-col gap-2.5">
            <NavMenu isSheet />
            <Separator className="my-2" />
            <PageMenu isSheet />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
