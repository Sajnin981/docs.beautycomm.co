import { type ReactNode } from 'react'

import { Sidebar } from '@/components/sidebar'

interface DocumentsProps {
  children: Readonly<ReactNode>
}

export default function Documents({ children }: DocumentsProps) {
  return (
    <div className="flex min-w-0 items-start gap-5 py-5 lg:gap-6">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 dark:border-slate-800 dark:bg-slate-950">
          {children}
        </div>
      </div>
    </div>
  )
}
