import React from 'react'
import { PROPERTY_TYPES } from '../quote'

const ICONS = { Residential: '🏠', Commercial: '🏢', Society: '🏘️' }

// Residential / Commercial / Society toggle used by the quote form and calculator
export default function PropertyTypePicker({ value, onChange, label = 'Property Type *' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2">
        {PROPERTY_TYPES.map(t => (
          <button
            type="button"
            key={t}
            onClick={() => onChange(t)}
            aria-pressed={value === t}
            className="flex-1 text-xs font-semibold py-2 rounded-lg border transition-colors"
            style={value === t
              ? { background: '#1E5C8E', color: '#fff', borderColor: '#1E5C8E' }
              : { background: '#fff', color: '#1E5C8E', borderColor: '#C8E0F4' }}
          >
            {ICONS[t]} {t}
          </button>
        ))}
      </div>
    </div>
  )
}
