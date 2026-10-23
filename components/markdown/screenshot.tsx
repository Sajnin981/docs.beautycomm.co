import { LuImage } from 'react-icons/lu'

import { cn } from '@/lib/utils'

interface ScreenshotProps {
  align?: 'left' | 'center' | 'right'
  alt: string
  caption?: string
  label?: string
  src?: string
  step?: number
  width?: number
}

// Renders the image when `src` is provided, otherwise a clear placeholder.
// Add real files under public/images/<surface>/ and pass src="/images/<surface>/file.png".
export function Screenshot({
  alt,
  align = 'center',
  caption,
  label,
  src,
  step,
  width,
}: ScreenshotProps) {
  const style = width ? { maxWidth: `${width}px` } : undefined

  return (
    <figure
      className={cn(
        'not-prose my-6 w-full',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )}
      style={style}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        // biome-ignore lint/performance/noImgElement: preserve intrinsic dimensions for arbitrary user-provided images
        <img
          alt={alt}
          className="w-full rounded-lg border border-[var(--border-strong)]"
          loading="lazy"
          src={src}
        />
      ) : (
        <div
          aria-label={`Screenshot placeholder: ${alt}`}
          className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--beauty-purple)]/60 bg-[var(--surface-highlight)] px-4 py-8 text-center"
          role="img"
        >
          <LuImage aria-hidden className="h-6 w-6 text-[var(--brand-action)]" />
          <p className="text-sm font-medium text-[var(--text-primary)]">
            [SCREENSHOT TO ADD: {label ?? alt}]
          </p>
        </div>
      )}
      {(caption || step) && (
        <figcaption className="mt-2 text-center text-xs text-[var(--text-secondary)]">
          {step ? <span className="font-semibold">Step {step}. </span> : null}
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
