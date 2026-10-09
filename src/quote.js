// Pricing used by the Savings Calculator. Update these numbers when prices change.
export const QUOTE_CONFIG = {
  unitsPerKwDay:   3,      // company standard: 3 units (kWh) per kW per day
  daysPerMonth:    30,
  tariff:          9,      // ₹ per unit, used for payback
}

QUOTE_CONFIG.unitsPerKwMonth = QUOTE_CONFIG.unitsPerKwDay * QUOTE_CONFIG.daysPerMonth  // 90 kWh per kW

// System prices (₹, GST included) – keep in sync with the packages on the Products page.
// Sizes in between are priced by straight-line interpolation.
export const PRICE_POINTS = [
  { kw: 1,  price: 75000 },
  { kw: 3,  price: 210000 },
  { kw: 5,  price: 310000 },
  { kw: 10, price: 520000 },
]

export function priceFor(kw) {
  const pts = PRICE_POINTS
  if (kw <= pts[0].kw) return Math.round(kw * pts[0].price / pts[0].kw)
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i]
    if (kw <= b.kw) return Math.round(a.price + (kw - a.kw) * (b.price - a.price) / (b.kw - a.kw))
  }
  const last = pts[pts.length - 1]
  return Math.round(kw * last.price / last.kw)
}

// Monthly bill options in the enquiry form
export const BILL_RANGES = ['Less than ₹1,500', '₹1,500 – ₹2,500', '₹2,500 – ₹4,000', '₹4,000 – ₹8,000', 'More than ₹8,000']

export const PROPERTY_TYPES = ['Residential', 'Commercial', 'Society']

// PM Surya Ghar CFA: homes ₹30,000/kW for first 2 kW + ₹18,000 for 3rd kW (max ₹78,000);
// housing societies ₹18,000/kW for common facilities only (up to 500 kW); commercial not eligible.
export function subsidyFor(kw, type = 'Residential') {
  if (type === 'Commercial') return 0
  if (type === 'Society') return kw * 18000
  if (kw <= 2) return Math.round(kw * 30000)
  return Math.min(60000 + Math.round((kw - 2) * 18000), 78000)
}

export const inr = n => '₹' + Math.round(n).toLocaleString('en-IN')
