import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Overview',
    icon: 'book',
    title: 'Documentation Home',
    href: '/overview',
    items: [
      { title: 'System Components', href: '/system-components', icon: 'dashboard' },
      { title: 'Technology Stack', href: '/technology-stack', icon: 'settings' },
    ],
  },
  {
    heading: 'Getting Started',
    icon: 'compass',
    title: 'Welcome to BeautyComm',
    href: '/getting-started',
  },
  {
    heading: 'User Portal',
    icon: 'dashboard',
    title: 'User Portal',
    href: '/user-portal',
    items: [
      {
        title: 'Shop Online',
        href: '/storefront-and-shopping',
        icon: 'store',
      },
      {
        title: 'Shopper Account',
        href: '/customer-account',
        icon: 'profile',
      },
    ],
  },
  {
    heading: 'Admin Panel',
    icon: 'admin',
    title: 'Admin Panel',
    href: '/admin-panel',
    items: [
      {
        title: 'Store Operations',
        href: '/store-operations',
        icon: 'dashboard',
      },
      {
        title: 'Stock, Suppliers, and Fulfillment',
        href: '/stock-suppliers-and-fulfillment',
        icon: 'boxes',
      },
      {
        title: 'Customers, Content, and Growth',
        href: '/customer-and-engagement-management',
        icon: 'users',
      },
      {
        title: 'Storefront and Platform Configuration',
        href: '/storefront-and-platform-configuration',
        icon: 'settings',
      },
      {
        title: 'Team and Account Administration',
        href: '/team-and-account-administration',
        icon: 'profile',
      },
    ],
  },
  {
    heading: 'Mobile App Guides',
    icon: 'mobile',
    title: 'Mobile App Guides',
    href: '/mobile-app',
    items: [
      { title: 'App Setup and Sign-In', href: '/mobile-app-overview' },
      { title: 'Shopper App Navigation', href: '/mobile-navigation' },
      { title: 'Shop, Orders, and Customer Features', href: '/supported-mobile-workflows' },
      { title: 'Shopper Profile and Notifications', href: '/mobile-account-and-settings' },
      { title: 'Shopper App Troubleshooting', href: '/mobile-support' },
    ],
  },
  {
    heading: 'Common Tasks',
    icon: 'tasks',
    title: 'Common Tasks',
    href: '/common-tasks',
  },
  {
    heading: 'Troubleshooting',
    icon: 'help',
    title: 'Troubleshooting',
    href: '/troubleshooting',
  },
  {
    heading: 'FAQ',
    icon: 'help',
    title: 'Frequently Asked Questions',
    href: '/faq',
  },
  {
    heading: 'Support',
    icon: 'support',
    title: 'Support and Feedback',
    href: '/support',
  },
]
