import React, { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../contact'
import { BILL_RANGES, PROPERTY_TYPES } from '../quote'

const fields = [
  { key: 'name',    label: 'Full Name *',          type: 'text', placeholder: 'Your name',        required: true },
  { key: 'phone',   label: 'WhatsApp Number *',    type: 'tel',  placeholder: '10-digit mobile',   required: true, pattern: '[0-9]{10}' },
  { key: 'pincode', label: 'Pin Code *',           type: 'text', placeholder: 'e.g. 411045',       required: true, pattern: '[0-9]{6}' },
]

const CAPACITIES = [1, 2, 3, 4, 5, 6, 7, 8, 10]

const selectClass = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white'

// Collects the enquiry and sends it to Kisan Erande's WhatsApp for follow-up
export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', pincode: '', type: '', bill: BILL_RANGES[1], kw: '' })
  const [waUrl, setWaUrl] = useState('')

  const set = key => e => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message =
      `New Solar Enquiry (Website)\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Pin Code: ${form.pincode}\n` +
      `Property Type: ${form.type}\n` +
      `Monthly Bill: ${form.bill}\n` +
      `Capacity: ${form.kw ? `${form.kw} kW` : 'Not sure – please suggest'}`
    const url = whatsappLink(message)
    setWaUrl(url)
    window.open(url, '_blank', 'noopener')
  }

  if (waUrl) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800 text-center">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E5C8E' }}>Almost done!</h3>
        <p className="text-gray-600 text-sm mb-5">
          WhatsApp has opened with your details. Please press <strong>Send</strong> – our team will call you shortly.
        </p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary block mb-3" style={{ background: '#25D366' }}>
          Open WhatsApp again
        </a>
        <a href={PHONE_TEL} className="block text-center py-2.5 rounded-lg border-2 font-semibold text-sm mb-3" style={{ borderColor: '#1E5C8E', color: '#1E5C8E' }}>
          📞 Call {PHONE_DISPLAY}
        </a>
        <button type="button" onClick={() => setWaUrl('')} className="text-sm underline" style={{ color: '#1E5C8E' }}>
          Edit details
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
      <h3 className="text-2xl font-bold mb-1" style={{ color: '#1E5C8E' }}>Get a Free Solar Quote</h3>
      <p className="text-gray-500 text-sm mb-5">Free site survey · Subsidy support · Quick callback</p>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type *</label>
          <select required value={form.type} onChange={set('type')} className={selectClass}>
            <option value="" disabled>Select property type</option>
            {PROPERTY_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        {fields.map(f => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <input
              type={f.type}
              required={f.required}
              pattern={f.pattern}
              placeholder={f.placeholder}
              value={form[f.key]}
              onChange={set(f.key)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Bill</label>
            <select value={form.bill} onChange={set('bill')} className={selectClass}>
              {BILL_RANGES.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
            <select value={form.kw} onChange={set('kw')} className={selectClass}>
              <option value="">Not sure</option>
              {CAPACITIES.map(k => <option key={k} value={k}>{k} kW</option>)}
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full mt-5">Send Enquiry on WhatsApp →</button>
      <a href={PHONE_TEL} className="block text-center w-full mt-3 py-2.5 rounded-lg border-2 font-semibold text-sm transition-colors hover:bg-brand-50" style={{ borderColor: '#1E5C8E', color: '#1E5C8E' }}>
        📞 Or call directly: {PHONE_DISPLAY}
      </a>
    </form>
  )
}
