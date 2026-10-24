'use client'

import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { LuFileText, LuSearch } from 'react-icons/lu'

import { Anchor } from '@/components/anchor'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { advanceSearch, cn, debounce, highlight, type search } from '@/lib/utils'
import { Documents } from '@/settings/documents'

interface Document {
  absolute?: boolean
  href?: string
  items?: Document[]
  noLink?: boolean
  spacer?: boolean
  title?: string
}

export function Search() {
  const [searchedInput, setSearchedInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<search[]>([])

  const debounceSearch = useMemo(
    () =>
      debounce((input) => {
        setIsLoading(true)
        const results = advanceSearch(input.trim())
        setResults(results)
        setIsLoading(false)
      }, 300),
    []
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Enter' && results.length > 0) {
        const selected = results[0]
        if ('href' in selected) {
          event.preventDefault()
          window.location.href = `/docs${selected.href}`
          setIsOpen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, results])

  useEffect(() => {
    if (searchedInput.length < 3) {
      Promise.resolve().then(() => setResults([]))
      return
    }

    debounceSearch(searchedInput)
  }, [searchedInput, debounceSearch])

  function renderDocuments(documents: Document[], parentHref = '/docs'): ReactNode[] {
    if (!Array.isArray(documents) || documents.length === 0) {
      return []
    }

    return documents.flatMap((doc) => {
      if ('spacer' in doc && doc.spacer) {
        return []
      }

      const href = doc.href ? (doc.absolute ? `/docs${doc.href}` : `${parentHref}${doc.href}`) : ''

      return [
        !doc.noLink && doc.href && (
          <DialogClose asChild key={href}>
            <Anchor
              className={cn(
                'flex w-full items-center gap-2.5 rounded-sm px-3 text-[15px] transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              )}
              href={href}
            >
              <div className="flex h-full w-fit items-center gap-1.5 py-3 whitespace-nowrap">
                <LuFileText className="h-[1.1rem] w-[1.1rem]" /> {doc.title}
              </div>
            </Anchor>
          </DialogClose>
        ),

        ...renderDocuments(
          doc.items?.filter((item) => !item.noLink || item.items?.length) || [],
          `${href}`
        ),
      ]
    })
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) {
          setTimeout(() => setSearchedInput(''), 200)
        }
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <button
          aria-label="Search documentation"
          className="flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-input bg-background text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-48 sm:justify-start sm:px-3 md:w-56"
          type="button"
        >
          <LuSearch aria-hidden className="h-4 w-4 shrink-0" />
          <span className="hidden truncate sm:block">Search documentation</span>
        </button>
      </DialogTrigger>

      <DialogContent className="top-[45%] max-w-xs p-0 sm:top-[38%] sm:max-w-lg">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogHeader>
          <input
            autoFocus
            className="h-14 border-b bg-transparent px-4 text-[15px] outline-none"
            onChange={(e) => setSearchedInput(e.target.value)}
            placeholder="Search..."
            value={searchedInput}
          />
        </DialogHeader>

        {searchedInput.length > 0 && searchedInput.length < 3 && (
          <p className="text-warning mx-auto mt-2 text-sm">Please enter at least 3 characters.</p>
        )}

        {isLoading ? (
          <p className="mx-auto mt-2 text-sm text-muted-foreground">Searching...</p>
        ) : (
          results.length === 0 &&
          searchedInput.length >= 3 && (
            <p className="mx-auto mt-2 text-sm text-muted-foreground">
              No results found for <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )
        )}

        <ScrollArea className="max-h-87.5 w-full overflow-hidden">
          <div className="flex w-full flex-col items-start px-1 pt-1 pb-4 sm:px-3">
            {searchedInput
              ? results.map((item) => {
                  if ('href' in item) {
                    return (
                      <DialogClose asChild key={item.href}>
                        <Anchor
                          className={cn(
                            'flex w-full max-w-77.5 flex-col gap-0.5 rounded-sm p-3 text-[15px] transition-all duration-300 hover:bg-neutral-100 sm:max-w-120 dark:hover:bg-neutral-900'
                          )}
                          href={`/docs${item.href}`}
                        >
                          <div className="flex h-full items-center gap-x-2">
                            <LuFileText className="h-[1.1rem] w-[1.1rem]" />
                            <span className="truncate">{item.title}</span>
                          </div>
                          {'snippet' in item && item.snippet && (
                            <p
                              className="truncate text-xs text-neutral-500 dark:text-neutral-400"
                              dangerouslySetInnerHTML={{
                                __html: highlight(item.snippet, searchedInput),
                              }}
                            />
                          )}
                        </Anchor>
                      </DialogClose>
                    )
                  }
                  return null
                })
              : renderDocuments(Documents)}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
