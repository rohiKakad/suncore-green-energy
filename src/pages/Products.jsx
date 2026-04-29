import React, { useState } from 'react'

const brands = [
  {
    id: 'waaree',
    name: 'Waaree',
    tagline: "India's Largest Solar Manufacturer",
    description: "Waaree Energies is India's largest solar panel manufacturer with over 12 GW of installed capacity worldwide. Known for high efficiency and durability.",
    activeBg: 'linear-gradient(135deg,#1E5C8E,#0C2E48)',
    lightBg: '#EBF4FB',
    textColor: '#1E5C8E',
    border: '#C8E0F4',
    emoji: '🔵',
    products: [
      { name: 'Waaree Mono PERC 400W', price: '₹12,000', efficiency: '20.8%', warranty: '25 Years', type: 'Mono PERC', best: true  },
      { name: 'Waaree Bifacial 450W',  price: '₹15,500', efficiency: '22.5%', warranty: '25 Years', type: 'Bifacial',      best: false },
      { name: 'Waaree Poly 330W',      price: '₹9,500',  efficiency: '17.2%', warranty: '25 Years', type: 'Polycrystalline',best: false },
      { name: 'Waaree HJT 500W',       price: '₹19,000', efficiency: '22.8%', warranty: '30 Years', type: 'HJT',           best: false },
    ],
  },
  {
    id: 'adani',
    name: 'Adani',
    tagline: 'Trusted by Millions Across India',
    description: "Adani Solar is part of the Adani Group, one of India's largest conglomerates. Their panels are known for consistent performance and excellent after-sales support.",
    activeBg: 'linear-gradient(135deg,#6B8E23,#3A5012)',
    lightBg: '#F4F7EC',
    textColor: '#6B8E23',
    border: '#C5D791',
    emoji: '🟢',
    products: [
      { name: 'Adani Mono PERC 390W', price: '₹11,500', efficiency: '20.2%', warranty: '25 Years', type: 'Mono PERC',     best: true  },
      { name: 'Adani Bifacial 440W',  price: '₹14,800', efficiency: '21.8%', warranty: '25 Years', type: 'Bifacial',      best: false },
      { name: 'Adani Poly 320W',      price: '₹9,000',  efficiency: '16.8%', warranty: '25 Years', type: 'Polycrystalline',best: false },
      { name: 'Adani TopCon 480W',    price: '₹17,500', efficiency: '22.1%', warranty: '30 Years', type: 'TopCon',        best: false },
    ],
  },
  {
    id: 'tata',
    name: 'Tata',
    tagline: 'Premium Quality, Proven Reliability',
    description: 'Tata Power Solar is a pioneer in India\'s solar industry with 35+ years of experience. Their panels are synonymous with quality, reliability, and trust.',
    activeBg: 'linear-gradient(135deg,#F5A623,#C97D08)',
    lightBg: '#FFFBEB',
    textColor: '#C97D08',
    border: '#FDE68A',
    emoji: '🟡',
    products: [
      { name: 'Tata Mono PERC 380W', price: '₹13,000', efficiency: '19.8%', warranty: '25 Years', type: 'Mono PERC',     best: true  },
      { name: 'Tata Bifacial 430W',  price: '₹16,000', efficiency: '21.3%', warranty: '25 Years', type: 'Bifacial',      best: false },
      { name: 'Tata Poly 310W',      price: '₹9,200',  efficiency: '16.5%', warranty: '25 Years', type: 'Polycrystalline',best: false },
      { name: 'Tata Premium 460W',   price: '₹18,000', efficiency: '21.8%', warranty: '30 Years', type: 'Premium',       best: false },
    ],
  },
]

const systemPackages = [
  { size: '1 kW',  area: '~10 sq ft',  units: '4–5 units/day',   price: '₹65,000',   subsidy: '₹30,000',    ideal: 'Small apartment / 2–3 fans, lights' },
  { size: '3 kW',  area: '~30 sq ft',  units: '12–15 units/day', price: '₹1,80,000', subsidy: '₹78,000',    ideal: 'Medium home / AC + appliances' },
  { size: '5 kW',  area: '~50 sq ft',  units: '20–25 units/day', price: '₹2,80,000', subsidy: '₹78,000',    ideal: 'Large home / multiple ACs' },
  { size: '10 kW', area: '~100 sq ft', units: '40–50 units/day', price: '₹5,20,000', subsidy: 'Commercial', ideal: 'Small business / office' },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('waaree')
  const ab = brands.find(b => b.id === activeTab)

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg,#0C2E48,#1E5C8E)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Solar Products</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Premium solar panels from India's top 3 manufacturers. All products come with manufacturer warranty and professional installation.
          </p>
        </div>
      </section>

      {/* Brand Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Choose Your Brand</h2>
            <p className="section-subtitle">All brands are authorized and come with full manufacturer support</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {brands.map(brand => (
              <button
                key={brand.id}
                onClick={() => setActiveTab(brand.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border-2"
                style={
                  activeTab === brand.id
                    ? { background: brand.activeBg, color: '#fff', borderColor: 'transparent', transform: 'scale(1.05)', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }
                    : { background: '#fff', color: brand.textColor, borderColor: brand.border }
                }
              >
                <span>{brand.emoji}</span> {brand.name} Solar
              </button>
            ))}
          </div>

          {/* Brand Info */}
          <div className="rounded-2xl p-6 mb-8 border" style={{ background: ab.lightBg, borderColor: ab.border }}>
            <div className="flex items-start gap-4">
              <span className="text-5xl">{ab.emoji}</span>
              <div>
                <h3 className="text-2xl font-bold mb-1" style={{ color: ab.textColor }}>{ab.name} Solar</h3>
                <p className="text-gray-500 font-medium mb-2">{ab.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ab.description}</p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ab.products.map((product, i) => (
              <div key={i} className={`card relative ${product.best ? 'ring-2' : ''}`} style={product.best ? { '--tw-ring-color': '#F5A623' } : {}}>
                {product.best && (
                  <div className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#F5A623' }}>
                    ⭐ Best Seller
                  </div>
                )}
                <div className="p-8 flex items-center justify-center" style={{ background: ab.activeBg }}>
                  <span className="text-5xl">{ab.emoji}</span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">{product.name}</h4>
                  <div className="text-2xl font-extrabold mb-3" style={{ color: '#1E5C8E' }}>{product.price}</div>
                  <div className="space-y-1 text-xs text-gray-500 mb-4">
                    <div className="flex justify-between"><span>Type</span><span className="font-medium text-gray-700">{product.type}</span></div>
                    <div className="flex justify-between"><span>Efficiency</span><span className="font-medium" style={{ color: '#6B8E23' }}>{product.efficiency}</span></div>
                    <div className="flex justify-between"><span>Warranty</span><span className="font-medium text-gray-700">{product.warranty}</span></div>
                  </div>
                  <a href="tel:9637324922" className="block text-center text-white text-sm font-semibold py-2 rounded-lg transition-colors" style={{ background: '#F5A623' }}
                    onMouseEnter={e => e.currentTarget.style.background='#E8960F'}
                    onMouseLeave={e => e.currentTarget.style.background='#F5A623'}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Complete System Packages</h2>
            <p className="section-subtitle">Turnkey solar solutions including panels, inverter, mounting &amp; installation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemPackages.map((pkg, i) => (
              <div key={i} className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-4xl font-extrabold mb-1" style={{ color: '#F5A623' }}>{pkg.size}</div>
                <div className="text-gray-400 text-xs mb-4">System</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>📐 Area: <span className="font-medium">{pkg.area}</span></div>
                  <div>⚡ Generates: <span className="font-medium">{pkg.units}</span></div>
                  <div>🏠 Ideal for: <span className="font-medium">{pkg.ideal}</span></div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold text-gray-800">{pkg.price}</div>
                  <div className="text-xs font-medium" style={{ color: '#6B8E23' }}>Subsidy: {pkg.subsidy}</div>
                </div>
                <a href="tel:9637324922" className="mt-4 block text-white text-sm font-semibold py-2 rounded-lg transition-colors" style={{ background: '#1E5C8E' }}
                  onMouseEnter={e => e.currentTarget.style.background='#174D78'}
                  onMouseLeave={e => e.currentTarget.style.background='#1E5C8E'}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* Prices are indicative. Final price depends on site conditions and brand selection. Subsidy subject to government scheme availability.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(90deg,#1E5C8E,#F5A623)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which System to Choose?</h2>
          <p className="text-white/90 mb-8">Our solar experts will assess your energy needs and recommend the perfect system for your home or business.</p>
          <a href="tel:9637324922" className="font-bold px-8 py-3 rounded-lg shadow-lg inline-block transition-colors" style={{ background: '#fff', color: '#1E5C8E' }}>
            📞 Call +91 96373 24922 for Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
