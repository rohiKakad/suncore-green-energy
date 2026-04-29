import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Brand palette (from logo)
// Sun orange  : #F5A623
// Brand blue  : #1E5C8E
// Olive green : #6B8E23

const stats = [
  { value: '500+',  label: 'Installations Done' },
  { value: '10 MW+', label: 'Solar Capacity Installed' },
  { value: '3',     label: 'Premium Brands' },
  { value: '98%',   label: 'Customer Satisfaction' },
]

const testimonials = [
  { name: 'Rajesh Patil',    location: 'Kothrud, Pune',    rating: 5, avatar: 'RP', text: 'SunCore installed a 5kW Waaree system on my rooftop. My electricity bill dropped from ₹4,500 to just ₹300 per month. Excellent service and professional team!' },
  { name: 'Sneha Kulkarni',  location: 'Baner, Pune',      rating: 5, avatar: 'SK', text: 'We went with Adani solar panels for our factory. The ROI has been amazing – we recovered the cost in under 4 years. Highly recommend SunCore for commercial projects.' },
  { name: 'Amit Deshmukh',   location: 'Wakad, Pune',      rating: 5, avatar: 'AD', text: 'The Tata solar system they installed is top-notch. The team was punctual, clean, and explained everything clearly. Best solar company in Pune!' },
  { name: 'Priya Joshi',     location: 'Hinjewadi, Pune',  rating: 5, avatar: 'PJ', text: 'Got a 3kW system for my home. The subsidy paperwork was handled entirely by SunCore. Stress-free experience from start to finish.' },
  { name: 'Vikram Sharma',   location: 'Aundh, Pune',      rating: 4, avatar: 'VS', text: 'Very happy with the installation quality. The panels are performing better than expected even on cloudy days. Great after-sales support too.' },
  { name: 'Meera Nair',      location: 'Viman Nagar, Pune',rating: 5, avatar: 'MN', text: 'SunCore helped us go completely off-grid with a battery backup system. No more power cuts! The team is knowledgeable and trustworthy.' },
]

const faqs = [
  { q: 'How much does a solar panel system cost in Pune?',           a: 'A residential solar system in Pune typically costs between ₹60,000 to ₹3,00,000 depending on capacity (1kW–10kW). Government subsidies under PM Surya Ghar Yojana can reduce costs by 20–40%.' },
  { q: 'What is the payback period for solar panels?',               a: 'Most residential solar systems in Pune have a payback period of 4–6 years. After that, you enjoy virtually free electricity for the remaining 20+ years of the panel\'s life.' },
  { q: 'Which solar panel brand is best – Waaree, Adani, or Tata?', a: 'All three are excellent Indian brands with strong warranties. Waaree is known for high efficiency, Adani for reliability and scale, and Tata for premium build quality. Our experts help you choose based on your budget and requirements.' },
  { q: 'Is my rooftop suitable for solar installation?',             a: 'Most rooftops in Pune are suitable. We need a shadow-free area of about 10 sq. ft. per 100W of capacity. We offer a free site survey to assess your rooftop.' },
  { q: 'What government subsidies are available for solar in Pune?', a: 'Under PM Surya Ghar Yojana, you can get up to ₹78,000 subsidy for a 3kW system. MSEDCL also offers net metering so you can sell excess power back to the grid.' },
  { q: 'How long does solar panel installation take?',               a: 'A typical residential installation takes 1–3 days. The entire process including survey, design, installation, and grid connection takes about 2–4 weeks.' },
  { q: 'Do solar panels work during monsoon or cloudy days?',        a: 'Yes! Solar panels generate electricity even on cloudy days, though at reduced efficiency (20–50%). Pune\'s climate is ideal for solar with 300+ sunny days per year.' },
  { q: 'What maintenance do solar panels require?',                  a: 'Solar panels require minimal maintenance – just periodic cleaning (every 2–3 months) to remove dust. We offer Annual Maintenance Contracts (AMC) for complete peace of mind.' },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4" fill={i <= rating ? '#F5A623' : '#D1D5DB'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <svg
          className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200"
          style={{ color: '#1E5C8E', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <section
        className="relative text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E5C8E 0%, #174D78 50%, #0C2E48 100%)' }}
      >
        {/* decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10" style={{ background: '#F5A623' }}></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: '#6B8E23' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6"
              style={{ background: 'rgba(245,166,35,0.2)', border: '1px solid rgba(245,166,35,0.4)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F5A623' }}></span>
              Pune's Most Trusted Solar Company
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Power Your Home<br />
              <span style={{ color: '#F5A623' }}>With Clean Solar Energy</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Authorized dealer of <strong>Waaree, Adani &amp; Tata</strong> solar panels.
              Save up to 90% on electricity bills with premium solar solutions for homes and businesses in Pune.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
                style={{ background: '#F5A623', color: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.background='#E8960F'}
                onMouseLeave={e => e.currentTarget.style.background='#F5A623'}
              >
                Explore Products
              </Link>
              <a
                href="tel:9637324922"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                📞 +91 96373 24922
              </a>
            </div>
          </div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold mb-1" style={{ color: '#F5A623' }}>{s.value}</div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Why Choose Suncore Energy?</h2>
          <p className="section-subtitle">We make going solar simple, affordable, and rewarding</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Premium Brands',     desc: "Authorized dealer of India's top 3 solar brands – Waaree, Adani & Tata with full manufacturer warranty." },
              { icon: '💰', title: 'Subsidy Assistance', desc: 'We handle all government subsidy paperwork under PM Surya Ghar Yojana – saving you up to ₹78,000.' },
              { icon: '⚡', title: 'Expert Installation',desc: 'Certified engineers with 10+ years of experience ensure safe, efficient, and clean installation.' },
              { icon: '🔧', title: 'AMC Support',        desc: 'Annual Maintenance Contracts available for worry-free operation of your solar system for years.' },
              { icon: '📊', title: 'Free Site Survey',   desc: 'Our experts visit your site, assess rooftop potential, and provide a detailed proposal at no cost.' },
              { icon: '🌱', title: 'Eco Friendly',       desc: 'Every installation helps reduce carbon footprint. Join 500+ Pune families going green with us.' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-left">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E5C8E' }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Preview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Our Solar Brands</h2>
          <p className="section-subtitle">We partner with India's most trusted solar manufacturers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { brand: 'Waaree', bg: 'linear-gradient(135deg,#1E5C8E,#174D78)', emoji: '🔵', tagline: "India's Largest Solar Manufacturer",  efficiency: 'Up to 22.5%' },
              { brand: 'Adani',  bg: 'linear-gradient(135deg,#6B8E23,#5A7A1E)', emoji: '🟢', tagline: 'Trusted by Millions Across India',     efficiency: 'Up to 21.8%' },
              { brand: 'Tata',   bg: 'linear-gradient(135deg,#F5A623,#C97D08)', emoji: '🟡', tagline: 'Premium Quality, Proven Reliability',  efficiency: 'Up to 21.3%' },
            ].map((p, i) => (
              <div key={i} className="card group cursor-pointer">
                <div className="p-10 flex items-center justify-center" style={{ background: p.bg }}>
                  <span className="text-6xl">{p.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{p.brand} Solar</h3>
                  <p className="text-gray-500 text-sm mb-4">{p.tagline}</p>
                  <div className="flex justify-between text-sm">
                    <span className="px-3 py-1 rounded-full font-medium text-xs" style={{ background: '#EBF4FB', color: '#1E5C8E' }}>⚡ {p.efficiency}</span>
                    <span className="px-3 py-1 rounded-full font-medium text-xs" style={{ background: '#F4F7EC', color: '#6B8E23' }}>🛡 25 Years</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn-secondary inline-block">View All Products →</Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg,#0C2E48,#1E5C8E)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-blue-200 mb-12 max-w-2xl mx-auto">Real stories from real Pune families who made the switch to solar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-6 text-left hover:bg-white/15 transition-colors" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <StarRating rating={t.rating} />
                <p className="text-blue-100 text-sm leading-relaxed my-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: '#F5A623' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-blue-300 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about going solar in Pune</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(90deg,#F5A623,#E8960F)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-white/90 text-lg mb-8">Get a free site survey and customised quote today. No obligation, no pressure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9637324922"
              className="font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
              style={{ background: '#1E5C8E', color: '#fff' }}
            >
              📞 Call Now: +91 96373 24922
            </a>
            <Link
              to="/about"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
