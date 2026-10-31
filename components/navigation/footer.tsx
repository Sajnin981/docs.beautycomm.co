import Link from 'next/link'

import { Settings } from '@/types/settings'

export function Footer() {
  return (
    <footer className="flex h-16 w-full flex-wrap items-center justify-center gap-4 border-t px-2 py-3 text-sm text-foreground sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
      <p className="items-center">
        &copy; {new Date().getFullYear()}{' '}
        <Link
          aria-label={Settings.name}
          className="font-semibold"
          href={Settings.link}
          title={Settings.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Settings.name}
        </Link>
        .
      </p>
      {Settings.branding !== false && (
        <div className="hidden items-center md:block">
          <Link
            href="/docs/support"
            className="font-semibold text-muted-foreground transition-colors hover:text-[var(--brand-action)]"
          >
            Support center
          </Link>
        </div>
      )}
    </footer>
  )
}
