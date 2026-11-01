import { type Paths } from '@/lib/pageroutes'

const userPortalPages = [
  { title: 'Registration & Login', href: '/login-registration-social-sign-in' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Profile', href: '/profile-and-account-settings' },
  { title: 'Shop', href: '/shop-and-browse-products' },
  { title: 'Cart & Checkout', href: '/checkout-and-payments' },
  { title: 'Orders', href: '/my-orders-tracking' },
  { title: 'Rewards', href: '/membership-and-reward-points' },
  { title: 'Consultation', href: '/beauty-consultation' },
  { title: 'Community', href: '/community-and-discussions' },
  { title: 'Customer Support', href: '/customer-support' },
  { title: 'Logout', href: '/logout' },
]

const adminPortalPages = [
  { title: 'Dashboard', href: '/dashboard-and-best-practices' },
  { title: 'Products', href: '/products' },
  { title: 'Categories & Brands', href: '/categories-brands-and-product-attributes' },
  { title: 'Inventory', href: '/inventory-and-stock-management' },
  { title: 'Orders', href: '/orders' },
  { title: 'Shipping', href: '/shipping-and-delivery-management' },
  { title: 'Returns & Refunds', href: '/returns-and-refund-management' },
  { title: 'Promotions', href: '/campaigns-and-banner-management' },
  { title: 'Membership', href: '/membership-and-reward-points' },
  { title: 'Consultation', href: '/beauty-consultation-management' },
  { title: 'Content', href: '/beauty-tips-and-blog-management' },
  { title: 'Customer Insights', href: '/customer-insights-and-analytics' },
  { title: 'Reports', href: '/sales-reports-and-analytics' },
  { title: 'Staff & Roles', href: '/staff-and-role-permissions' },
  { title: 'Settings', href: '/general-settings-and-configurations' },
  { title: 'Activity Logs', href: '/activity-logs' },
]

const mobileAppPages = [
  { title: 'Installation', href: '/app-installation-and-updates' },
  { title: 'Login / Signup', href: '/registration-and-login' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Home', href: '/home-screen' },
  { title: 'Shop', href: '/shop-and-browse-products' },
  { title: 'Product Details', href: '/product-details' },
  { title: 'Cart', href: '/shopping-cart' },
  { title: 'Checkout', href: '/checkout-and-payments' },
  { title: 'My Orders', href: '/my-orders' },
  { title: 'Wishlist', href: '/wishlist' },
  { title: 'Logout', href: '/logout' },
]

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function pageDescription(section: string, title: string) {
  const normalizedTitle = title.toLowerCase()
  let topic = ''

  if (section === 'Admin Panel') {
    if (/dashboard/.test(normalizedTitle))
      topic = 'A quick reference to the admin dashboard and safe operational practices.'
    else if (/product|catalog|category|brand|variation|shade|authentic|supplier/.test(normalizedTitle))
      topic = 'Product catalogue administration, including core product data and merchandising workflows.'
    else if (/inventory|stock|barcode/.test(normalizedTitle))
      topic = 'Stock records and inventory operations, including multi-store or barcode topics where applicable.'
    else if (/order|sales|preorder/.test(normalizedTitle))
      topic = 'Administrative order and sales workflows covered by this guide.'
    else if (/shipping|delivery|courier/.test(normalizedTitle))
      topic = 'Delivery settings and courier operations; supported providers require confirmation.'
    else if (/return|refund/.test(normalizedTitle))
      topic = 'Administrative return and refund handling, subject to the store’s confirmed process.'
    else if (/customer|insight|report|analytics/.test(normalizedTitle))
      topic = 'Business-facing customer records and insights used to monitor performance and retention.'
    else if (/promotion|campaign|coupon|discount|banner|marketing|seo|social|payment|setting/.test(normalizedTitle))
      topic = 'Marketing, promotion, and configuration settings used to manage the storefront experience.'
    else if (/membership|reward|consult|beauty|community|video|staff|permission/.test(normalizedTitle))
      topic = 'Operational workflows for content, rewards, support, and access controls.'
    else if (/activity|log/.test(normalizedTitle))
      topic = 'Operational visibility into backend activity and platform monitoring.'
    else topic = `The purpose and scope of ${title.toLowerCase()} for store operators.`
  }

  if (section === 'User Portal') {
    if (/dashboard|profile|account/.test(normalizedTitle))
      topic = 'Personal account and customer dashboard activities for a signed-in shopper.'
    else if (/shop|browse|category|search|filter/.test(normalizedTitle))
      topic = 'How shoppers discover products and browse the catalog in the storefront.'
    else if (/cart|checkout|payment|order|tracking|invoice|return/.test(normalizedTitle))
      topic = 'How customers complete purchases, review order status, and manage returns.'
    else if (/consult|recommend|dermatolog|skincare/.test(normalizedTitle))
      topic = 'Beauty guidance and expert support experiences offered through the customer portal.'
    else if (/membership|reward|coupon|discount|notification/.test(normalizedTitle))
      topic = 'Loyalty, promotions, and account communications available to customers.'
    else if (/blog|community|influencer|video/.test(normalizedTitle))
      topic = 'Social and content experiences that complement discovery and shopping.'
    else if (/support|logout/.test(normalizedTitle))
      topic = 'Help, account actions, and support resources for customer self-service.'
    else topic = `The purpose and scope of ${title.toLowerCase()} for customer users.`
  }

  if (section === 'Mobile App Guides') {
    if (/install|update|app/.test(normalizedTitle))
      topic = 'How users install, open, and keep the mobile app current.'
    else if (/registration|login|profile|account|notification/.test(normalizedTitle))
      topic = 'Mobile account access, profile management, and notifications.'
    else if (/shop|browse|search|product|cart|checkout|payment/.test(normalizedTitle))
      topic = 'Mobile shopping flows, product discovery, and purchase completion.'
    else if (/order|tracking|invoice|return/.test(normalizedTitle))
      topic = 'Order management, delivery tracking, and post-purchase support in the app.'
    else if (/consult|recommend|dermatolog|skincare/.test(normalizedTitle))
      topic = 'Beauty advice and personalized recommendation experiences available within the app.'
    else if (/blog|community|influencer|video/.test(normalizedTitle))
      topic = 'Content-driven shopping and community features on mobile.'
    else if (/support/.test(normalizedTitle))
      topic = 'Help and account management for mobile users.'
    else topic = `The purpose and scope of ${title.toLowerCase()} for mobile shoppers.`
  }

  if (section === 'Overview') {
    if (/documentation home/.test(normalizedTitle))
      topic = 'The main landing page for the BeautyComm documentation.'
    else if (/system components/.test(normalizedTitle))
      topic = 'An overview of the primary BeautyComm platform components and how they work together.'
    else if (/technology stack/.test(normalizedTitle))
      topic = 'The technology choices and architecture supporting the BeautyComm platform.'
    else topic = 'A landing page for the BeautyComm documentation and platform overview.'
  }

  if (section === 'Troubleshooting') {
    topic = 'Solutions for access, login, navigation, and common issues.'
  }

  if (section === 'Support') {
    topic = 'How customers and operators can contact support and share feedback.'
  }

  return topic
}

function createSection(
  heading: string,
  icon: string,
  slug: string,
  pages: Array<{ title: string; href: string; items?: Paths[] }>,
  title = heading
): Paths {
  return {
    heading,
    icon,
    title,
    href: `/${slug}`,
    items: pages.map(({ title, href, items }) => ({
      title,
      href,
      description: pageDescription(heading, title),
      ...(items ? {
        items: items.map((child) => (
          'title' in child && 'href' in child
            ? { ...child, description: pageDescription(heading, child.title) }
            : child
        )),
      } : {}),
    })),
  }
}

export const Documents: Paths[] = [
  {
    heading: 'Overview',
    icon: 'book',
    title: 'Documentation Home',
    href: '/overview',
    items: [
      {
        title: 'System Components',
        href: '/system-components',
        description: pageDescription('Overview', 'System Components'),
      },
      {
        title: 'Technology Stack',
        href: '/technology-stack',
        description: pageDescription('Overview', 'Technology Stack'),
      },
    ],
  },
  {
    heading: 'Getting Started',
    icon: 'compass',
    title: 'Welcome to BeautyComm',
    href: '/getting-started',
  },
  createSection('User Portal', 'dashboard', 'user-portal', userPortalPages),
  createSection('Admin Panel', 'admin', 'admin-portal', adminPortalPages),
  createSection('Mobile App Guides', 'mobile', 'mobile-app', mobileAppPages),
  {
    heading: 'Troubleshooting',
    icon: 'help',
    title: 'Troubleshooting',
    href: '/troubleshooting',
  },
  {
    heading: 'Support',
    icon: 'support',
    title: 'Support and Feedback',
    href: '/support',
  },
]
