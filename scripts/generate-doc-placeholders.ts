import { promises as fs } from 'node:fs'
import path from 'node:path'

import { type Paths } from '../lib/pageroutes'
import { Documents } from '../settings/documents'

function isRoute(item: Paths): item is Extract<Paths, { title: string; href: string }> {
  return 'title' in item && 'href' in item
}

function sectionFor(slug: string) {
  if (slug.startsWith('user-portal/')) return 'User Portal'
  if (slug.startsWith('admin-portal/')) return 'Admin Portal'
  if (slug.startsWith('storefront/')) return 'Storefront'
  return 'Mobile App'
}

function primaryPagePath(section: string) {
  const paths: Record<string, string> = {
    'User Portal': '/docs/user-portal/registration-and-login',
    'Admin Portal': '/docs/admin-portal/dashboard-and-best-practices',
    Storefront: '/docs/storefront/home-page',
    'Mobile App': '/docs/mobile-app/app-installation-and-updates',
  }

  return paths[section]
}

const docsRoot = path.join(process.cwd(), 'contents', 'docs')

for (const section of Documents) {
  if (!isRoute(section)) continue

  for (const page of section.items ?? []) {
    if (!isRoute(page)) continue

    const slug = `${section.href.slice(1)}${page.href}`
    const destination = path.join(docsRoot, slug, 'index.mdx')
    try {
      await fs.access(destination)
      continue
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
    }

    const sectionName = sectionFor(slug)
    const summary = `Proposed ${sectionName} guidance for ${page.title.toLowerCase()}; feature availability and workflows require confirmation.`
    const keywords = [sectionName, page.title, 'BeautyComm']
    const overview = `## Overview

This page will document ${page.title.toLowerCase()} from the ${sectionName} perspective. The topic is part of the proposed documentation scope; its availability and behavior have not been confirmed here.

## Purpose and intended audience

Add the verified purpose, benefits, and intended user or operational role when product information is available.

## Access, interface, and workflows

Add the confirmed navigation path, interface areas, supported actions, and task-specific instructions. No menu labels or actions are assumed in this placeholder.

## Fields, validation, and expected results

Document only verified fields, input requirements, permissions, outcomes, and status changes.

## Common issues

Add known issues and supported troubleshooting steps after they are confirmed.

## Related documentation

See [${sectionName} guidance](${primaryPagePath(sectionName)}) for a related starting point.`
    const screenshot = `${page.title} interface`
    const content = `---
title: "${page.title}"
description: "${summary}"
keywords: ${JSON.stringify(keywords)}
status: "draft"
---

${overview}

## Screenshot placeholder

<Screenshot
  alt="${screenshot}"
  label="${screenshot}"
  description="Replace with a real BeautyComm ${sectionName} screenshot after it is provided and approved."
  annotationNotes="Add annotations only for verified interface elements."
/>
`

    await fs.mkdir(path.dirname(destination), { recursive: true })
    await fs.writeFile(destination, content, 'utf8')
  }
}
