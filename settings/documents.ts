import { type Paths } from '@/lib/pageroutes'

const userPortalPages = [
  'Registration & Login',
  'Dashboard',
  'My Profile & Account Settings',
  'Addresses & Personal Information',
  'Shop & Browse Products',
  'Product Details',
  'Product Variations & Shades',
  'Search, Categories & Filters',
  'AI Product Recommendations',
  'Wishlist & Saved Products',
  'Shopping Cart',
  'Checkout & Payments',
  'My Orders',
  'Order Tracking',
  'Invoices & Receipts',
  'Returns & Refunds',
  'Coupons & Discounts',
  'Membership & Reward Points',
  'Notifications',
  'Product Reviews & Ratings',
  'Product Authenticity',
  'Beauty Consultation',
  'Dermatologist Support',
  'Skincare Recommendations',
  'Beauty Tips & Blogs',
  'Community & Discussions',
  'Kirei Tube & Beauty Videos',
  'Influencer Content',
  'Social Product Sharing',
  'Customer Support',
  'Logout',
]

const adminPortalPages = [
  'Dashboard & Best Practices',
  'Products',
  'Categories, Brands & Product Attributes',
  'Product Variations & Shades',
  'Product Authenticity Management',
  'Suppliers & Product Sourcing',
  'Orders',
  'Sales Management',
  'Preorders',
  'Inventory & Stock Management',
  'Multi-Store Stock Synchronization',
  'Barcode Scanning',
  'Shipping & Delivery Management',
  'Courier Integration',
  'Returns & Refund Management',
  'Product Reviews & Ratings',
  'Coupons & Discounts',
  'Flash Sales & Group Shopping',
  'Membership & Reward Points',
  'AI Recommendations & Personalization',
  'Beauty Consultation Management',
  'Dermatologist Management',
  'Skin Types & Beauty Preferences',
  'Influencer Management',
  'Beauty Tips & Blog Management',
  'Community Management',
  'Kirei Tube & Video Management',
  'Campaigns & Banner Management',
  'Email & Push Notification Management',
  'Marketing & Subscribers',
  'SEO Management',
  'Facebook Pixel & Event Tracking',
  'Google Tag Manager',
  'Sales Reports & Analytics',
  'Product & Inventory Reports',
  'Customer Insights & Analytics',
  'Payment Gateway Configuration',
  'Invoice Management',
  'Shipping Zones & Rates',
  'Staff & Role Permissions',
  'General Settings & Configurations',
  'Social Login Configuration',
  'File & Media Management',
  'Activity Logs',
  'Logout',
]

const storefrontPages = [
  'Home Page',
  'Registration & Login',
  'Home & Promotional Banners',
  'Product Categories',
  'Brands & Collections',
  'Shop & Product Listing',
  'Search & Advanced Filters',
  'Product Details',
  'Product Variations & Shades',
  'Product Authenticity Information',
  'Product Reviews & Ratings',
  'AI Product Recommendations',
  'Personalized Shopping Experience',
  'Wishlist',
  'Shopping Cart',
  'Checkout',
  'Payment Methods',
  'Coupons & Discounts',
  'Flash Sales & Group Shopping',
  'Order Confirmation',
  'Order Tracking',
  'Beauty Tips & Blogs',
  'Community & Discussions',
  'Influencer Profiles & Storefronts',
  'Kirei Tube & Video Commerce',
  'Beauty Consultation',
  'Dermatologist Support',
  'Skincare Recommendations',
  'Membership & Rewards',
  'Notifications & Promotional Offers',
  'Social Product Sharing',
  'Customer Support',
  'About BeautyComm',
  'Contact Us',
  'Shipping & Delivery Policy',
  'Returns & Refund Policy',
  'Privacy Policy',
  'Terms & Conditions',
]

const mobileAppPages = [
  'App Installation & Updates',
  'Registration & Login',
  'Home Screen',
  'Dashboard',
  'Shop & Browse Products',
  'Search, Categories & Filters',
  'Product Details',
  'Product Variations & Shades',
  'AI Product Recommendations',
  'Wishlist',
  'Shopping Cart',
  'Checkout & Payments',
  'My Orders',
  'Order Tracking',
  'Invoices & Receipts',
  'Returns & Refunds',
  'Coupons & Discounts',
  'Membership & Reward Points',
  'Profile & Account Settings',
  'Addresses & Delivery Information',
  'Notifications & Push Alerts',
  'Product Reviews & Ratings',
  'Product Authenticity',
  'Beauty Consultation',
  'Dermatologist Support',
  'Skincare Recommendations',
  'Beauty Tips & Blogs',
  'Community & Discussions',
  'Kirei Tube & Beauty Videos',
  'Influencer Content',
  'Social Sharing',
  'Customer Support',
  'Logout',
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
  let topic: string

  if (section === 'Admin Panel') {
    if (/dashboard/.test(normalizedTitle))
      topic = 'A quick reference to the admin dashboard and safe operational practices.'
    else if (/product|categor|brand|variation|shade|authenticity/.test(normalizedTitle))
      topic =
        'Product catalogue administration, including the specific product data named in this guide.'
    else if (/supplier|sourcing/.test(normalizedTitle))
      topic =
        'The proposed supplier and product-sourcing area; confirm availability before relying on it.'
    else if (/order|sales|preorder/.test(normalizedTitle))
      topic = 'Administrative order and sales workflows covered by this guide.'
    else if (/inventory|stock|barcode/.test(normalizedTitle))
      topic =
        'Stock records and inventory operations, including multi-store or barcode topics where applicable.'
    else if (/shipping|delivery|courier/.test(normalizedTitle))
      topic = 'Delivery settings and courier operations; supported providers require confirmation.'
    else if (/return|refund/.test(normalizedTitle))
      topic = 'Administrative return and refund handling, subject to the store’s confirmed process.'
    else if (/customer|group|insight|segment/.test(normalizedTitle))
      topic =
        'Business-facing customer records and insights; available data and controls require confirmation.'
    else if (/review|rating|question/.test(normalizedTitle))
      topic = 'Moderation and administration of customer feedback, where supported.'
    else if (/coupon|discount|flash|group shopping|campaign|banner/.test(normalizedTitle))
      topic = 'Promotion and campaign management, including the offer types named in this guide.'
    else if (/membership|reward|point/.test(normalizedTitle))
      topic = 'Business administration of membership and reward programs, where available.'
    else if (/recommendation|personalization|skin type|beauty preference/.test(normalizedTitle))
      topic = 'Personalization and beauty-preference tools proposed for the admin experience.'
    else if (/consultation|dermatologist/.test(normalizedTitle))
      topic =
        'Administrative consultation or specialist-service topics, pending feature verification.'
    else if (/influencer|creator/.test(normalizedTitle))
      topic = 'Creator and influencer program administration, where enabled.'
    else if (/blog|beauty tips|content/.test(normalizedTitle))
      topic = 'Publishing and managing beauty content in the admin experience, where supported.'
    else if (/community/.test(normalizedTitle))
      topic = 'Community moderation and administration, subject to verified product capabilities.'
    else if (/tube|video/.test(normalizedTitle))
      topic = 'Video-commerce content administration; confirm current product availability.'
    else if (/notification|email|subscriber|marketing/.test(normalizedTitle))
      topic = 'Business messaging and marketing tools, where enabled.'
    else if (/seo|pixel|tag manager|tracking/.test(normalizedTitle))
      topic = 'Search and analytics configuration; supported integrations must be confirmed.'
    else if (/report|analytics/.test(normalizedTitle))
      topic = 'Business reporting for the data area named in this guide.'
    else if (/payment|gateway|invoice/.test(normalizedTitle))
      topic = 'Payment or invoice administration; supported options vary and require confirmation.'
    else if (/staff|role|permission|login|logout/.test(normalizedTitle))
      topic = 'Staff access and account-security guidance for authorized administrators.'
    else if (/setting|configuration/.test(normalizedTitle))
      topic = 'Store and business configuration topics available to authorized staff.'
    else if (/social login/.test(normalizedTitle))
      topic = 'Social authentication configuration, if supported for the release.'
    else if (/file|media/.test(normalizedTitle))
      topic = 'Managing store media and files, subject to verified access and supported formats.'
    else if (/activity|log/.test(normalizedTitle))
      topic = 'Administrative activity records and audit visibility, where available.'
    else topic = `The purpose and proposed scope of ${title.toLowerCase()} in the Admin Panel.`
  } else if (section === 'Storefront') {
    if (/home page|banner/.test(normalizedTitle))
      topic = 'The public storefront home page and promotional content visitors may encounter.'
    else if (/registration|login/.test(normalizedTitle))
      topic = 'Public entry points for customer account registration and sign-in.'
    else if (/categor|brand|collection|listing|browse|search|filter/.test(normalizedTitle))
      topic = 'How visitors explore and narrow down the public product catalogue.'
    else if (/product details|variation|shade|authenticity|review|rating/.test(normalizedTitle))
      topic = 'Customer-facing product information and the related details named in this guide.'
    else if (/recommendation|personaliz/.test(normalizedTitle))
      topic = 'Personalized product discovery topics for storefront visitors, if enabled.'
    else if (/wishlist|cart|sharing/.test(normalizedTitle))
      topic = 'Saving, sharing, or reviewing products during public shopping.'
    else if (/checkout|payment/.test(normalizedTitle))
      topic = 'The customer checkout experience and payment options actually offered by the store.'
    else if (/coupon|discount|flash|group shopping/.test(normalizedTitle))
      topic = 'Customer-facing offers and promotions, subject to the store’s confirmed terms.'
    else if (/order confirmation|tracking/.test(normalizedTitle))
      topic = 'Public order confirmation and delivery-tracking entry points.'
    else if (/blog|beauty tips/.test(normalizedTitle))
      topic = 'Beauty articles, tips, and tutorials published for storefront visitors.'
    else if (/community|question/.test(normalizedTitle))
      topic = 'Public community and product-question topics, where available.'
    else if (/influencer|creator/.test(normalizedTitle))
      topic = 'Influencer profiles and creator content shown to storefront visitors, if available.'
    else if (/tube|video/.test(normalizedTitle))
      topic = 'Kirei Tube and video-commerce content, pending storefront verification.'
    else if (/consultation|dermatologist|skincare/.test(normalizedTitle))
      topic = 'Customer-facing beauty advice and expert-service topics, subject to confirmation.'
    else if (/membership|reward/.test(normalizedTitle))
      topic = 'Public information about membership benefits and rewards, where offered.'
    else if (/notification|promotional offer/.test(normalizedTitle))
      topic = 'Customer-facing notifications and promotional messages, where enabled.'
    else if (/support|contact/.test(normalizedTitle))
      topic = 'Ways storefront visitors can find help or contact the relevant support team.'
    else if (/policy|terms|privacy/.test(normalizedTitle))
      topic = 'Store-published policies and terms; use only the versions provided by the business.'
    else if (/about beautycomm/.test(normalizedTitle))
      topic = 'An introduction to BeautyComm for storefront visitors.'
    else
      topic = `The public-facing ${title.toLowerCase()} experience, pending confirmation of store-specific details.`
  } else if (section === 'Mobile App Guides') {
    if (/installation|updates/.test(normalizedTitle))
      topic =
        'App availability, installation, and update guidance; platform details require verification.'
    else if (/registration|login|logout/.test(normalizedTitle))
      topic = 'Account access and sign-in topics for the mobile app, once verified.'
    else if (/home screen|dashboard/.test(normalizedTitle))
      topic = 'The mobile app’s home and overview experience, subject to app-version confirmation.'
    else if (/shop|browse|search|categor|filter/.test(normalizedTitle))
      topic = 'Finding and exploring products in the mobile app, if supported.'
    else if (/product details|variation|shade|authenticity|review|rating/.test(normalizedTitle))
      topic = 'Product information and related details in the mobile experience, once verified.'
    else if (/recommendation/.test(normalizedTitle))
      topic = 'Mobile product recommendations, if included in the supported app.'
    else if (/wishlist|sharing/.test(normalizedTitle))
      topic = 'Saving or sharing products from the mobile app, if available.'
    else if (/cart|checkout|payment/.test(normalizedTitle))
      topic = 'Mobile purchase steps and payment choices, pending release-specific confirmation.'
    else if (/order|tracking|invoice|receipt|return|refund/.test(normalizedTitle))
      topic = 'Personal order and after-purchase guidance for the mobile app, where supported.'
    else if (/coupon|discount|membership|reward|point/.test(normalizedTitle))
      topic = 'Mobile access to offers and rewards, subject to feature verification.'
    else if (/profile|account|address|delivery/.test(normalizedTitle))
      topic = 'Personal account settings and delivery information in the mobile app.'
    else if (/notification|push/.test(normalizedTitle))
      topic = 'Mobile notification topics and controls, verified separately for each platform.'
    else if (/consultation|dermatologist|skincare/.test(normalizedTitle))
      topic = 'Mobile access to beauty advice and expert services, if provided.'
    else if (/blog|beauty tips/.test(normalizedTitle))
      topic = 'Beauty articles and tutorials available in the mobile experience, if supported.'
    else if (/community|discussion/.test(normalizedTitle))
      topic = 'Community participation from the mobile app, pending feature confirmation.'
    else if (/tube|video/.test(normalizedTitle))
      topic = 'Mobile access to Kirei Tube or beauty videos, if available.'
    else if (/influencer|creator/.test(normalizedTitle))
      topic = 'Influencer content in the mobile app, where supported.'
    else if (/support/.test(normalizedTitle))
      topic = 'Help and troubleshooting resources for the mobile app.'
    else topic = `The proposed ${title.toLowerCase()} guidance for BeautyComm mobile app users.`
  } else {
    if (/registration|login|logout/.test(normalizedTitle))
      topic = 'Account access and sign-in guidance for the customer’s personal shopping experience.'
    else if (/dashboard/.test(normalizedTitle))
      topic = 'A personal account summary and relevant shopping activity, if available.'
    else if (/profile|account setting|personal information|address/.test(normalizedTitle))
      topic = 'Managing personal account details and preferences, subject to confirmed options.'
    else if (/shop|browse|search|categor|filter/.test(normalizedTitle))
      topic = 'Discovering and exploring products through the customer shopping experience.'
    else if (/product details|variation|shade|authenticity|review|rating/.test(normalizedTitle))
      topic =
        'Understanding customer-facing product information and the details named in this guide.'
    else if (/recommendation|personaliz/.test(normalizedTitle))
      topic = 'Beauty and product recommendations for the customer, if available.'
    else if (/wishlist|saved|sharing/.test(normalizedTitle))
      topic = 'Saving and sharing favorite products from a customer account.'
    else if (/shopping cart/.test(normalizedTitle))
      topic = 'Reviewing selected items before proceeding to checkout.'
    else if (/checkout|payment/.test(normalizedTitle))
      topic = 'Customer checkout and payment guidance; available payment methods vary by store.'
    else if (/order|tracking|invoice|receipt|return|refund/.test(normalizedTitle))
      topic = 'Personal order information and after-purchase guidance for the signed-in customer.'
    else if (/coupon|discount|membership|reward|point/.test(normalizedTitle))
      topic = 'Customer access to available offers, membership benefits, or reward points.'
    else if (/notification/.test(normalizedTitle))
      topic = 'Customer-facing account and shopping notifications, where supported.'
    else if (/consultation|dermatologist|skincare/.test(normalizedTitle))
      topic = 'Beauty advice and expert-service topics for customers, pending confirmation.'
    else if (/blog|beauty tips/.test(normalizedTitle))
      topic = 'Beauty articles, tips, and tutorials for customers.'
    else if (/community|discussion/.test(normalizedTitle))
      topic = 'Customer participation in beauty community discussions, if available.'
    else if (/tube|video/.test(normalizedTitle))
      topic = 'Kirei Tube and beauty-video viewing topics, pending feature confirmation.'
    else if (/influencer|creator/.test(normalizedTitle))
      topic = 'Influencer content and creator discovery for customers, where supported.'
    else if (/support/.test(normalizedTitle))
      topic = 'How customers can find help and request assistance.'
    else topic = `The purpose and scope of ${title.toLowerCase()} for signed-in customers.`
  }

  return topic
}

function createSection(
  heading: string,
  icon: string,
  slug: string,
  pages: string[],
  title = heading
): Paths {
  return {
    heading,
    icon,
    title,
    href: `/${slug}`,
    items: pages.map((title) => ({
      title,
      href: `/${slugify(title)}`,
      description: pageDescription(heading, title),
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
  createSection('User Portal', 'dashboard', 'user-portal', userPortalPages),
  createSection('Admin Panel', 'admin', 'admin-portal', adminPortalPages),
  createSection('Storefront', 'store', 'storefront', storefrontPages),
  createSection('Mobile App Guides', 'mobile', 'mobile-app', mobileAppPages),
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
    heading: 'Support',
    icon: 'support',
    title: 'Support and Feedback',
    href: '/support',
  },
]
