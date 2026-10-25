import Image from 'next/image'

import { Link } from '@/lib/transition'
import { Settings } from '@/types/settings'

export function Logo() {
  return (
    <Link
      aria-label={`${Settings.title} main logo`}
      className="flex shrink-0 items-center gap-2"
      href="/docs/overview"
      title={`${Settings.title} main logo`}
    >
      <Image
        alt={`${Settings.title} main logo`}
        aria-label={`${Settings.title} main logo`}
        decoding="async"
        height={34}
        src={Settings.siteicon}
        title={`${Settings.title} main logo`}
        width={34}
      />
      <span
        className="flex flex-col leading-none"
        style={{ fontFamily: 'var(--font-sora), "Segoe UI", sans-serif' }}
      >
        <span className="text-base font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-lg">
          {Settings.title}
        </span>
        <span className="mt-0.5 hidden text-[0.55rem] font-medium uppercase tracking-[0.12em] text-[#6D49B8] sm:block">
          Your Beauty Shop with AI
        </span>
      </span>
    </Link>
  )
}
