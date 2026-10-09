import React from 'react'
import { whatsappLink } from '../contact'

// Public-sector banks offering rooftop solar loans under PM Surya Ghar.
// Rates are repo-linked and change with RBI policy – keep copy indicative.
const BANKS = [
  { name: 'State Bank of India',    short: 'SBI', color: '#1E5C8E' },
  { name: 'Central Bank of India',  short: 'CBI', color: '#EE7D22' },
  { name: 'Bank of India',          short: 'BOI', color: '#174D78' },
  { name: 'Punjab National Bank',   short: 'PNB', color: '#1A4E9C' },
  { name: 'Bank of Baroda',         short: 'BOB', color: '#F5A623' },
  { name: 'Bank of Maharashtra',    short: 'BOM', color: '#1A8BD4' },
  { name: 'Canara Bank',            short: 'CB',  color: '#1E5C8E' },
  { name: 'Union Bank of India',    short: 'UBI', color: '#EE7D22' },
]

const TIERS = [
  { size: 'Up to 3 kW',   rate: '5.75% p.a.',  amount: 'Up to ₹2 lakh', note: 'No collateral' },
  { size: '3 kW – 10 kW', rate: '~10% p.a.', amount: 'Up to ₹6 lakh', note: 'Minimal documentation' },
]

const HIGHLIGHTS = [
  { icon: '💰', title: 'Lowest Interest',   desc: 'Govt.-backed rates linked to RBI repo rate' },
  { icon: '🔓', title: 'No Collateral',     desc: 'Collateral-free loans for residential rooftops' },
  { icon: '📅', title: 'Up to 10 Years',    desc: 'Easy EMIs often lower than your current bill' },
  { icon: '📝', title: 'We Handle It',      desc: 'Our team helps with the application & paperwork' },
]

export default function SolarLoans() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Govt. Bank Solar Loans at Lowest Interest</h2>
          <p className="section-subtitle">
            Finance your rooftop solar with leading public-sector banks under the PM Surya Ghar scheme
          </p>
        </div>

        {/* Loan tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {TIERS.map(t => (
            <div
              key={t.size}
              className="rounded-2xl p-6 text-white shadow-md"
              style={{ background: 'linear-gradient(135deg,#1E5C8E,#1A8BD4)' }}
            >
              <div className="text-sm font-medium text-white/80 mb-1">System size: {t.size}</div>
              <div className="text-sm text-white/80">Interest starting from</div>
              <div className="text-4xl font-extrabold mb-3" style={{ color: '#F5A623' }}>{t.rate}*</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/15">{t.amount}</span>
                <span className="px-3 py-1 rounded-full bg-white/15">{t.note}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bank cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {BANKS.map(b => (
            <div key={b.short} className="card p-6 text-center">
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                style={{ background: b.color }}
              >
                {b.short}
              </div>
              <h3 className="font-bold mb-1" style={{ color: '#1E5C8E' }}>{b.name}</h3>
              <p className="text-sm text-gray-500 mb-3">Rooftop Solar Loan</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#E6F4FC', color: '#1A4E9C' }}>
                From 5.75% p.a.*
              </span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {HIGHLIGHTS.map(h => (
            <div key={h.title} className="rounded-xl p-4 text-center" style={{ background: '#FFFBEB' }}>
              <div className="text-3xl mb-2">{h.icon}</div>
              <div className="font-semibold text-sm mb-1" style={{ color: '#1E5C8E' }}>{h.title}</div>
              <div className="text-xs text-gray-500">{h.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappLink('Hi Suncore, I would like help with a government bank solar loan. Please share details.')}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Get Loan Assistance on WhatsApp →
          </a>
          <p className="text-xs text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            *Indicative rates. Interest rates are linked to the RBI repo rate and may vary by bank, loan amount and applicant profile.
            Loan approval is at the sole discretion of the bank.
          </p>
        </div>
      </div>
    </section>
  )
}
