export interface ChangelogEntry {
  date: string
  title: string
  description: string
  category: string
  platform: string
  version?: string
}

export const changelogEntries: ChangelogEntry[] = [
  { date: '2026-10-18', title: 'AI beauty recommendation experience', description: 'Introduced personalized product suggestions based on skin goals, saved products, and browsing preferences.', category: 'AI & Personalization', platform: 'Web & Mobile App', version: '3.8.0' },
  { date: '2026-09-26', title: 'Improved product browsing and filters', description: 'Added cleaner filter controls for concerns, ingredients, shades, finishes, brands, and price ranges.', category: 'Shopping Experience', platform: 'Customer Website', version: '3.7.2' },
  { date: '2026-09-08', title: 'New product category pages', description: 'Introduced dedicated skincare, makeup, fragrance, haircare, and beauty tool category destinations.', category: 'New Feature', platform: 'Customer Website' },
  { date: '2026-08-21', title: 'Enhanced shopping cart', description: 'Improved quantity controls, automatic coupon validation, stock messages, and live price summaries.', category: 'Improvement', platform: 'Web & Mobile App', version: '3.6.1' },
  { date: '2026-08-05', title: 'Streamlined checkout experience', description: 'Reduced checkout steps while making shipping, payment, coupon, and order review clearer.', category: 'Shopping Experience', platform: 'Customer Website', version: '3.6.0' },
  { date: '2026-07-19', title: 'Updated customer dashboard', description: 'Reorganized orders, saved products, rewards, account details, and recent activity for faster access.', category: 'Improvement', platform: 'Web App' },
  { date: '2026-07-02', title: 'Improved order tracking', description: 'Added clearer shipment milestones, estimated delivery windows, and courier status updates.', category: 'New Feature', platform: 'Web & Mobile App', version: '3.5.0' },
  { date: '2026-06-14', title: 'New loyalty rewards interface', description: 'Customers can now review points, unlock progress, available benefits, and redemption history.', category: 'New Feature', platform: 'Customer Website & Mobile App' },
  { date: '2026-05-28', title: 'Admin product management improvements', description: 'Simplified bulk edits, product status controls, media previews, and variation management for staff.', category: 'Admin Panel', platform: 'Admin Panel', version: '3.4.2' },
  { date: '2026-05-10', title: 'Better inventory visibility', description: 'Added low-stock indicators, warehouse availability summaries, and clearer inventory change history.', category: 'Admin Panel', platform: 'Admin Panel' },
  { date: '2026-04-22', title: 'New promotional campaign tools', description: 'Administrators can prepare discount coupons, banner campaigns, and scheduled promotions from one workspace.', category: 'New Feature', platform: 'Admin Panel', version: '3.3.0' },
  { date: '2026-04-05', title: 'Improved mobile responsiveness', description: 'Refined navigation, product cards, forms, and account screens across common mobile screen sizes.', category: 'Mobile App', platform: 'Mobile App & Web App' },
  { date: '2026-03-17', title: 'Faster product and search responses', description: 'Optimized catalog queries and image loading for quicker browsing during peak shopping activity.', category: 'Performance', platform: 'Customer Website', version: '3.2.4' },
  { date: '2026-03-02', title: 'Updated beauty consultation interface', description: 'Made consultation questions easier to complete and presentation of recommended routines more accessible.', category: 'AI & Personalization', platform: 'Web & Mobile App' },
  { date: '2026-02-12', title: 'Resolved checkout address validation issue', description: 'Fixed an intermittent validation problem affecting international delivery addresses during checkout.', category: 'Bug Fix', platform: 'Customer Website', version: '3.1.3' },
]
