import { type PropsWithChildren } from 'react'
import { LuCircleAlert, LuCircleCheck, LuInfo, LuLightbulb, LuTriangleAlert } from 'react-icons/lu'

import { cn } from '@/lib/utils'

interface NoteProps extends PropsWithChildren {
  title?: string
  type?: 'note' | 'info' | 'tip' | 'important' | 'success' | 'warning' | 'danger'
}

export function Note({ children, title = 'Note', type = 'note' }: NoteProps) {
  const styles = {
    note: {
      icon: LuInfo,
      className:
        'border-[var(--border-subtle)] bg-[var(--surface-soft)] text-[var(--text-primary)]',
    },
    info: {
      icon: LuInfo,
      className:
        'border-[var(--border-subtle)] bg-[var(--surface-soft)] text-[var(--text-primary)]',
    },
    tip: {
      icon: LuLightbulb,
      className:
        'border-[var(--beauty-lilac)]/70 bg-[var(--surface-highlight)] text-[var(--text-primary)]',
    },
    important: {
      icon: LuCircleAlert,
      className:
        'border-[var(--beauty-pink)]/50 bg-[var(--surface-highlight)] text-[var(--text-primary)]',
    },
    success: {
      icon: LuCircleCheck,
      className:
        'border-green-300 bg-green-50 text-green-950 dark:border-green-900 dark:bg-green-950 dark:text-green-100',
    },
    warning: {
      icon: LuTriangleAlert,
      className:
        'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100',
    },
    danger: {
      icon: LuCircleAlert,
      className:
        'border-red-300 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950 dark:text-red-100',
    },
  } satisfies Record<NonNullable<NoteProps['type']>, { className: string; icon: typeof LuInfo }>
  const { className, icon: Icon } = styles[type]

  return (
    <div className={cn('not-prose my-5 flex gap-3 rounded-xl border px-4 py-3 text-sm', className)}>
      <Icon aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="min-w-0">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-[var(--text-secondary)]">{children}</div>
      </div>
    </div>
  )
}
