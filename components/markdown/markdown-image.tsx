import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

const MOBILE_IMAGE_PREFIX = '/images/mobile/'
const DESKTOP_IMAGE_PREFIXES = ['/images/user-portal/', '/images/admin/']

// Mobile screenshots are tall, so they are shown at phone width inside a soft panel.
// Desktop and admin screenshots fill the content width inside a bordered card.
// Spans keep the markup valid when the image sits inside a paragraph or list item.
export function MarkdownImage({
  alt,
  className,
  src,
  ...props
}: ComponentPropsWithoutRef<'img'>) {
  const isMobile = typeof src === 'string' && src.startsWith(MOBILE_IMAGE_PREFIX)
  const isDesktop =
    typeof src === 'string' &&
    DESKTOP_IMAGE_PREFIXES.some((prefix) => src.startsWith(prefix))

  if (isDesktop) {
    return (
      <span className="not-prose my-6 block overflow-hidden rounded-lg border border-[var(--border-strong)] bg-white p-2">
        {/* biome-ignore lint/performance/noImgElement: preserve intrinsic dimensions for screenshots */}
        <img
          alt={alt}
          className={cn('block h-auto w-full rounded-md', className)}
          loading="lazy"
          src={src}
          {...props}
        />
      </span>
    )
  }

  if (!isMobile) {
    return (
      // biome-ignore lint/performance/noImgElement: markdown images use arbitrary intrinsic sizes
      <img alt={alt} className={className} loading="lazy" src={src} {...props} />
    )
  }

  return (
    <span className="not-prose my-6 block rounded-lg bg-[var(--surface-highlight)] px-4 py-8">
      {/* biome-ignore lint/performance/noImgElement: preserve intrinsic dimensions for screenshots */}
      <img
        alt={alt}
        className={cn(
          'mx-auto block h-auto w-full max-w-[300px] rounded-md border border-[var(--border-strong)]',
          className
        )}
        loading="lazy"
        src={src}
        {...props}
      />
    </span>
  )
}
