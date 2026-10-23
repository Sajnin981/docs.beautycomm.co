import { Search } from '@/components/navigation/search'
import { Link } from '@/lib/transition'

const entryPoints = [
  {
    title: 'User Portal',
    description: 'Learn how to manage your store and use available Beautycomm features.',
    href: '/docs/user-portal',
  },
  {
    title: 'Admin Panel',
    description:
      'Find administrative guides for the configuration and management tasks available to your role.',
    href: '/docs/admin-panel',
  },
  {
    title: 'Mobile App Guides',
    description: 'Learn how to access and use supported Beautycomm mobile features.',
    href: '/docs/mobile-app',
  },
]

const gettingStarted = [
  { title: 'Welcome to Beautycomm', href: '/docs/getting-started' },
  {
    title: 'Accessing Your Account',
    href: '/docs/getting-started/accessing-your-beautycomm-account',
  },
  { title: 'Logging In', href: '/docs/getting-started/logging-in' },
  { title: 'Dashboard Overview', href: '/docs/user-portal/dashboard/dashboard-overview' },
  {
    title: 'Understanding Your Role',
    href: '/docs/getting-started/understanding-your-account-and-role',
  },
]

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col px-4 py-14">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-action)]">
        BeautyComm Documentation
      </div>
      <h1
        className="mb-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl"
        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
      >
        BeautyComm Help Center
      </h1>
      <p className="mb-6 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
        Find clear, step-by-step guidance to manage your beauty commerce with Beautycomm.
      </p>
      <div className="mb-12 max-w-md">
        <Search />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {entryPoints.map((item) => (
          <Link
            className="rounded-2xl border bg-card p-5 transition-colors duration-200 hover:border-[var(--beauty-purple)] hover:bg-[var(--surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            href={item.href}
            key={item.href}
          >
            <h2 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h2>
            <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">Getting Started</h2>
          <ul className="space-y-2 text-sm">
            {gettingStarted.map((item) => (
              <li key={item.href}>
                <Link className="text-[var(--brand-action)] hover:underline" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
            Help and support
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                className="text-[var(--brand-action)] hover:underline"
                href="/docs/troubleshooting"
              >
                Troubleshooting and FAQ
              </Link>
            </li>
            <li>
              <Link className="text-[var(--brand-action)] hover:underline" href="/docs/support">
                Support and Feedback
              </Link>
            </li>
          </ul>
          <h2 className="mb-3 mt-7 text-lg font-semibold text-[var(--text-primary)]">
            Product updates
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-[var(--brand-action)] hover:underline" href="/docs/changelog">
                Changelog
              </Link>
            </li>
            <li>
              <Link className="text-[var(--brand-action)] hover:underline" href="/docs/roadmap">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
