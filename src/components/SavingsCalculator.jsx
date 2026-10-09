import React, { useState } from 'react'
import { whatsappLink } from '../contact'
import { QUOTE_CONFIG, PROPERTY_TYPES, subsidyFor, priceFor, inr } from '../quote'
import PropertyTypePicker from './PropertyTypePicker'

// Indicative estimate only – final price after site survey
const TARIFF_PER_UNIT = QUOTE_CONFIG.tariff
const UNITS_PER_KW    = QUOTE_CONFIG.unitsPerKwMonth

export default function SavingsCalculator() {
  const [bill, setBill] = useState(3000)
  const [type, setType] = useState(PROPERTY_TYPES[0])

  const units        = bill / TARIFF_PER_UNIT
  const kw           = Math.min(10, Math.max(1, Math.ceil((units / UNITS_PER_KW) * 2) / 2))
  const cost         = priceFor(kw)
  const subsidy      = subsidyFor(kw, type)
  const netCost      = cost - subsidy
  const monthlySave  = Math.min(units, kw * UNITS_PER_KW) * TARIFF_PER_UNIT
  const paybackYears = netCost / (monthlySave * 12)
  const lifetimeSave = monthlySave * 12 * 25 - netCost

  const results = [
    { label: 'Recommended System', value: `${kw} kW` },
    { label: 'Govt. Subsidy',      value: inr(subsidy) },
    { label: 'Net Cost After Subsidy', value: inr(netCost) },
    { label: 'Monthly Savings',    value: inr(monthlySave) },
    { label: 'Payback Period',     value: `${paybackYears.toFixed(1)} years` },
    { label: '25-Year Savings',    value: inr(lifetimeSave) },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Solar Savings Calculator</h2>
          <p className="section-subtitle">See how much you can save with PM Surya Ghar subsidy</p>
        </div>

        <div className="card p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-6">
              <PropertyTypePicker value={type} onChange={setType} />
              {type === 'Commercial' && (
                <p className="text-xs text-gray-500 mt-2">PM Surya Ghar subsidy is not available for commercial properties.</p>
              )}
              {type === 'Society' && (
                <p className="text-xs text-gray-500 mt-2">Society subsidy of ₹18,000 per kW is for common facilities only (lifts, common lighting, water pumps, EV charging).</p>
              )}
            </div>
            <label className="block font-semibold text-gray-700 mb-2">Your average monthly electricity bill</label>
            <div className="text-4xl font-extrabold mb-4" style={{ color: '#F5A623' }}>{inr(bill)}</div>
            <input
              type="range" min="500" max="20000" step="100"
              value={bill}
              onChange={e => setBill(Number(e.target.value))}
              className="w-full accent-sun-400"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>₹500</span><span>₹20,000</span>
            </div>
            <p className="text-xs text-gray-400 mt-6 leading-relaxed">
              *Indicative estimate based on ₹{TARIFF_PER_UNIT}/unit tariff and {UNITS_PER_KW} units/kW/month generation in Pune.
              Final price depends on brand, rooftop and site survey.
            </p>
            <p className="text-xs mt-2 leading-relaxed rounded-lg px-3 py-2" style={{ background: '#FFFBEB', color: '#A66405' }}>
              ⚠️ Prices shown are tentative and may increase or decrease after our free site visit,
              depending on roof type, structure height, cable length and brand selected.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {results.map(r => (
                <div key={r.label} className="rounded-xl p-4" style={{ background: '#EBF4FB' }}>
                  <div className="text-xs text-gray-500 mb-1">{r.label}</div>
                  <div className="text-xl font-bold" style={{ color: '#1E5C8E' }}>{r.value}</div>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink(`Hi Suncore, my monthly bill is about ${inr(bill)}. The calculator suggests a ${kw} kW system. Please share an exact quote.`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              Get Exact Quote on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
