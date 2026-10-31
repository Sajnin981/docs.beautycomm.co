export type RoadmapStatus = 'planned' | 'next-up' | 'in-progress' | 'completed'

export interface RoadmapEntry {
  title: string
  description: string
  category: string
  status: RoadmapStatus
  quarter?: string
}

export const roadmapEntries: RoadmapEntry[] = [
  { title: 'AI Beauty Consultation Studio', description: 'Guided skin and makeup consultations that combine preferences, goals, and product compatibility insights.', category: 'AI & Personalization', status: 'planned', quarter: 'Q1 2027' },
  { title: 'Personalized Makeup Routines', description: 'Create tailored makeup recommendations based on complexion, style preferences, and occasion.', category: 'AI & Personalization', status: 'planned', quarter: 'Q2 2027' },
  { title: 'Visual Product Search', description: 'Upload a photo or scan a beauty look to discover similar products in the catalog.', category: 'Shopping Experience', status: 'planned', quarter: 'Q2 2027' },
  { title: 'Community Beauty Challenges', description: 'Participate in themed routines, share looks, and discover trusted community recommendations.', category: 'Community', status: 'planned', quarter: 'Q3 2027' },
  { title: 'Predictive Restock Alerts', description: 'Notify shoppers before frequently purchased products run low and suggest suitable alternatives.', category: 'Shopping Experience', status: 'next-up', quarter: 'Q1 2027' },
  { title: 'Advanced Shade Matching', description: 'Refine foundation and cosmetic matching with undertones, finish, coverage, and skin concerns.', category: 'AI & Personalization', status: 'next-up', quarter: 'Q1 2027' },
  { title: 'Flexible Checkout Offers', description: 'Preview available delivery windows, coupons, wallet credits, and installment options before payment.', category: 'Checkout', status: 'next-up', quarter: 'Q2 2027' },
  { title: 'Customer Support Knowledge Handoff', description: 'Connect shoppers to support with their order, product, and conversation context already attached.', category: 'Customer Support', status: 'next-up', quarter: 'Q2 2027' },
  { title: 'Smarter Product Recommendations', description: 'Blend browsing, purchase history, skin preferences, and saved products into relevant product suggestions.', category: 'AI & Personalization', status: 'in-progress', quarter: 'Q4 2026' },
  { title: 'Unified Order Tracking', description: 'Combine payment, fulfillment, courier, and delivery updates in one customer timeline.', category: 'Orders', status: 'in-progress', quarter: 'Q4 2026' },
  { title: 'Cart Price and Stock Summary', description: 'Keep totals, discounts, stock availability, and delivery estimates synchronized during checkout.', category: 'Shopping Experience', status: 'in-progress', quarter: 'Q1 2027' },
  { title: 'Mobile Notification Preferences', description: 'Give shoppers clear controls for order, promotion, community, and consultation notifications.', category: 'Mobile App', status: 'in-progress', quarter: 'Q1 2027' },
  { title: 'Advanced Catalog Filters', description: 'Browse beauty products by concern, ingredient, shade, finish, brand, price, and availability.', category: 'Product Discovery', status: 'completed' },
  { title: 'Verified Product Reviews', description: 'Help customers evaluate products with verified purchases, ratings, and useful review feedback.', category: 'Reviews', status: 'completed' },
  { title: 'Membership Rewards Dashboard', description: 'Show points, available rewards, recent activity, and redemption progress in one interface.', category: 'Membership', status: 'completed' },
  { title: 'Inventory Operations Overview', description: 'Give administrators clearer low-stock alerts, product availability, and fulfillment visibility.', category: 'Admin Panel', status: 'completed' },
]
