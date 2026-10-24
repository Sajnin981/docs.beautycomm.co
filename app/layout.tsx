import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { DM_Sans, Sora } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

import { Footer } from '@/components/navigation/footer'
import { Navbar } from '@/components/navigation/navbar'
import { Providers } from '@/providers'
import { Settings } from '@/types/settings'

import '@/styles/globals.css'

const dmSans = DM_Sans({
  adjustFontFallback: true,
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const sora = Sora({
  adjustFontFallback: true,
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-sora',
})

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  icons: {
    icon: [
      {
        url: '/beautycomm-icon.jpeg',
        type: 'image/jpeg',
        sizes: '1080x1080',
      },
    ],
    shortcut: '/beautycomm-icon.jpeg',
    apple: [
      {
        url: '/beautycomm-icon.jpeg',
        type: 'image/jpeg',
        sizes: '1080x1080',
      },
    ],
  },
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  publisher: Settings.name,
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm} />}
      <body className={`${dmSans.variable} ${sora.variable} font-regular antialiased`}>
        <Providers>
          <Navbar />
          <main className="h-auto px-5 sm:px-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
