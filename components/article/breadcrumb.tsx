import { Fragment } from 'react'
import { LuHouse } from 'react-icons/lu'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { PageRoutes, PageTitles } from '@/lib/pageroutes'
import { Link } from '@/lib/transition'

interface BreadcrumbProps {
  paths: string[]
}

export function ArticleBreadcrumb({ paths }: BreadcrumbProps) {
  return (
    <Breadcrumb className="pb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link aria-label="Documentation home" href="/" title="Documentation home">
              <LuHouse className="h-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((_, index) => {
          const key = `/${paths.slice(0, index + 1).join('/')}`
          const title = PageTitles.get(key) ?? paths[index]
          const isLast = index === paths.length - 1
          const isRoutable = PageRoutes.some((route) => route.href === key)

          return (
            <Fragment key={key}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : isRoutable ? (
                  <BreadcrumbLink asChild>
                    <Link href={`/docs${key}`} title={title}>
                      {title}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <span>{title}</span>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
