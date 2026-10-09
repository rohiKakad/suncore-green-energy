import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeo } from '../seo'

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
    specs: [
      { icon: '🔬', label: 'Technology',    value: 'TOPCon & Mono PERC, Bifacial options' },
      { icon: '⚡', label: 'Power Range',   value: '540 – 590 Wp per panel' },
      { icon: '📈', label: 'Efficiency',    value: 'Up to 22.8%' },
      { icon: '🛡️', label: 'Warranty',      value: '12 yr product · 30 yr performance' },
      { icon: '✅', label: 'Certification', value: 'DCR & ALMM listed – subsidy eligible' },
      { icon: '🌦️', label: 'Durability',    value: 'Low degradation, built for Indian heat & monsoon' },
    ],
  },
  {
    id: 'adani',
    name: 'Adani',
    tagline: 'Trusted by Millions Across India',
    description: "Adani Solar is part of the Adani Group, one of India's largest conglomerates. Their panels are known for consistent performance and excellent after-sales support.",
    activeBg: 'linear-gradient(135deg,#1A8BD4,#1A4E9C)',
    lightBg: '#E6F4FC',
    textColor: '#1A8BD4',
    border: '#C5D791',
    emoji: '🟢',
    specs: [
      { icon: '🔬', label: 'Technology',    value: 'TOPCon & Mono PERC, Bifacial options' },
      { icon: '⚡', label: 'Power Range',   value: '540 – 585 Wp per panel' },
      { icon: '📈', label: 'Efficiency',    value: 'Up to 22.5%' },
      { icon: '🛡️', label: 'Warranty',      value: '12 yr product · 30 yr performance' },
      { icon: '✅', label: 'Certification', value: 'DCR & ALMM listed – subsidy eligible' },
      { icon: '🏭', label: 'Manufacturing', value: 'Fully integrated Indian production' },
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
    specs: [
      { icon: '🔬', label: 'Technology',    value: 'Mono PERC & TOPCon, Bifacial options' },
      { icon: '⚡', label: 'Power Range',   value: '540 – 580 Wp per panel' },
      { icon: '📈', label: 'Efficiency',    value: 'Up to 22%' },
      { icon: '🛡️', label: 'Warranty',      value: '10–12 yr product · 25–30 yr performance' },
      { icon: '✅', label: 'Certification', value: 'DCR & ALMM listed – subsidy eligible' },
      { icon: '🤝', label: 'Support',       value: 'Nationwide service network' },
    ],
  },
]

const systemPackages = [
  { size: '1 kW',  area: '~10 sq ft',  units: '4–5 units/day',   price: '₹75,000',   subsidy: '₹30,000',    ideal: 'Small apartment / 2–3 fans, lights' },
  { size: '3 kW',  area: '~30 sq ft',  units: '12–15 units/day', price: '₹2,10,000', subsidy: '₹78,000',    ideal: 'Medium home / AC + appliances' },
  { size: '5 kW',  area: '~50 sq ft',  units: '20–25 units/day', price: '₹3,10,000', subsidy: '₹78,000',    ideal: 'Large home / multiple ACs' },
  { size: '10 kW', area: '~100 sq ft', units: '40–50 units/day', price: '₹5,20,000', subsidy: 'Commercial', ideal: 'Small business / office' },
]

// Materials used in every Suncore system
const materials = [
  { icon: '🏗️', title: 'Mounting Structure', brands: 'Hot-Dip Galvanised (HDGI) Steel',
    desc: 'Rust-resistant hot-dip galvanised GI structure, designed for wind load and long life on RCC terraces and sheds.' },
  { icon: '🔌', title: 'DC & AC Cables',     brands: 'Polycab / V-Guard',
    desc: 'UV-resistant solar DC cables and copper AC cables from trusted brands for safe, low-loss power flow.' },
  { icon: '⚡', title: 'Solar Inverter',     brands: 'Polycab / Sungrow',
    desc: 'Efficient grid-tie inverters with remote monitoring, so you can track generation from your phone.' },
  { icon: '☀️', title: 'Solar Panels',       brands: 'Waaree / Adani / Tata & more',
    desc: 'High-efficiency TOPCon and Mono PERC modules with 25+ years performance warranty.' },
]

// Our installation photos – image files live in public/installations/.
// Add `location: 'Baner, Pune'` etc. to show a location under the title.
const installations = [
  { src: '/installations/install-1.png', title: 'Elevated Rooftop Structure – Residential' },
  { src: '/installations/install-2.png', title: 'Industrial Shed Rooftop' },
  { src: '/installations/install-3.png', title: 'High-Rise GI Structure – Terrace' },
  { src: '/installations/install-4.png', title: 'Commercial Metal Shed Rooftop' },
]

function InstallationPhoto({ src, title, location }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="card relative group h-64">
      {failed ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-6"
          style={{ background: 'linear-gradient(135deg,#EBF4FB,#F4F7EC)' }}>
          <span className="text-5xl mb-2">☀️</span>
          <span className="text-sm text-gray-500">Photo coming soon</span>
        </div>
      ) : (
        <img
          src={src}
          alt={`${title} solar installation by Suncore Green Energy`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white" style={{ background: 'linear-gradient(transparent, rgba(12,46,72,0.85))' }}>
        <div className="font-semibold text-sm">{title}</div>
        {location && <div className="text-xs text-white/80">📍 {location}</div>}
      </div>
    </div>
  )
}

export default function Products() {
  useSeo({
    title: 'Solar Panels & System Prices – 1kW to 10kW | Suncore Green Energy',
    description: 'Waaree, Adani & Tata TOPCon and Mono PERC solar panels. Complete 1kW, 3kW, 5kW & 10kW rooftop solar packages in Pune with subsidy support.',
    path: '/products',
  })
  const [activeTab, setActiveTab] = useState('waaree')
  const ab = brands.find(b => b.id === activeTab)

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg,#0C2E48,#1E5C8E)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Solar Products</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Solar panels from India's leading brands – Waaree, Adani, Tata, Sudarshan Saur, Vikram Solar &amp; more. All products come with manufacturer warranty and professional installation.
          </p>
        </div>
      </section>

      {/* Brand Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Choose Your Brand</h2>
            <p className="section-subtitle">All panels come with full manufacturer warranty. Sudarshan Saur, Vikram Solar &amp; other brands available on request.</p>
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

          {/* Panel Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ab.specs.map((spec, i) => (
              <div key={i} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl" style={{ background: ab.lightBg }}>
                  {spec.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: ab.textColor }}>{spec.label}</div>
                  <div className="font-bold text-gray-800">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/#quote" className="inline-block text-white font-semibold px-8 py-3 rounded-lg transition-colors" style={{ background: '#F5A623' }}
              onMouseEnter={e => e.currentTarget.style.background='#E8960F'}
              onMouseLeave={e => e.currentTarget.style.background='#F5A623'}
            >
              Get a Free Quote
            </Link>
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
                  <div className="text-xs font-medium" style={{ color: '#1A8BD4' }}>Subsidy: {pkg.subsidy}</div>
                </div>
                <Link to="/#quote" className="mt-4 block text-white text-sm font-semibold py-2 rounded-lg transition-colors" style={{ background: '#1E5C8E' }}
                  onMouseEnter={e => e.currentTarget.style.background='#174D78'}
                  onMouseLeave={e => e.currentTarget.style.background='#1E5C8E'}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* Prices are indicative. Final price depends on site conditions and brand selection. Subsidy subject to government scheme availability.</p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Quality Materials We Use</h2>
            <p className="section-subtitle">Every system is built with branded, long-lasting components</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map(m => (
              <div key={m.title} className="card p-6 text-left">
                <div className="text-4xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#1E5C8E' }}>{m.title}</h3>
                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3" style={{ background: '#FFFBEB', color: '#A66405' }}>
                  {m.brands}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Recent Installations</h2>
            <p className="section-subtitle">Real rooftop solar projects completed by the Suncore team</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {installations.map(photo => <InstallationPhoto key={photo.src} {...photo} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(90deg,#1E5C8E,#F5A623)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which System to Choose?</h2>
          <p className="text-white/90 mb-8">Our solar experts will assess your energy needs and recommend the perfect system for your home or business.</p>
          <a href="tel:9096900576" className="font-bold px-8 py-3 rounded-lg shadow-lg inline-block transition-colors" style={{ background: '#fff', color: '#1E5C8E' }}>
            📞 Call +91 90969 00576 for Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
