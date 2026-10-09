import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CAREERS_EMAIL } from '../contact'
import { openings } from './Career'
import { useSeo } from '../seo'

// Applications are emailed (with the resume attached) via FormSubmit.
// The very first submission sends an activation email to CAREERS_EMAIL – click it once.
const FORM_ACTION = `https://formsubmit.co/${CAREERS_EMAIL}`
const MAX_RESUME_MB = 5

const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-base md:text-sm focus:outline-none focus:ring-2'

export default function Apply() {
  const [params] = useSearchParams()
  const role = params.get('role') || openings[0].title
  const job = openings.find(o => o.title === role)
  const submitted = params.get('submitted') === '1'
  const [fileError, setFileError] = useState('')
  useSeo({ title: `Apply for ${role} | Suncore Green Energy`, description: `Apply for the ${role} role at Suncore Green Energy.`, path: '/career/apply', noindex: true })

  const thanksUrl = `${window.location.origin}/career/apply?submitted=1&role=${encodeURIComponent(role)}`

  const checkFile = (e) => {
    const file = e.target.files[0]
    if (file && file.size > MAX_RESUME_MB * 1024 * 1024) {
      setFileError(`Resume must be smaller than ${MAX_RESUME_MB} MB`)
      e.target.value = ''
    } else {
      setFileError('')
    }
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <section className="text-white py-12" style={{ background: 'linear-gradient(135deg,#1E5C8E,#F5A623)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Apply for {role}</h1>
          {job && <p className="text-white/90">{job.type} · 📍 {job.location} · 💼 {job.experience}</p>}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
                <p className="text-gray-500 mb-6">Thank you for applying for <strong>{role}</strong>. Our HR team will contact you within 3–5 business days.</p>
                <Link to="/career" className="btn-secondary inline-block">Back to Careers</Link>
              </div>
            ) : (
              <form action={FORM_ACTION} method="POST" encType="multipart/form-data" className="space-y-4">
                <input type="hidden" name="_subject" value={`Job Application – ${role}`} />
                <input type="hidden" name="_next" value={thanksUrl} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="Position" value={role} />

                {[
                  { label: 'Full Name *',        name: 'Name',       type: 'text',  placeholder: 'Your full name' },
                  { label: 'Email Address *',    name: 'email',      type: 'email', placeholder: 'your@email.com' },
                  { label: 'Phone Number *',     name: 'Phone',      type: 'tel',   placeholder: '+91 XXXXX XXXXX', pattern: '[+0-9 ]{10,15}' },
                  { label: 'Current City *',     name: 'City',       type: 'text',  placeholder: 'e.g. Pune' },
                  { label: 'Total Experience *', name: 'Experience', type: 'text',  placeholder: 'e.g. 3 years' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                    <input type={f.type} name={f.name} required pattern={f.pattern} placeholder={f.placeholder}
                      className={inputClass} style={{ '--tw-ring-color': '#1E5C8E' }} />
                  </div>
                ))}

                {job?.location.includes('/') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                    <select name="Preferred Location" required className={inputClass} style={{ '--tw-ring-color': '#1E5C8E' }}>
                      {job.location.split('/').map(l => <option key={l.trim()}>{l.trim()}</option>)}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume * <span className="text-gray-400 font-normal">(PDF or Word, max {MAX_RESUME_MB} MB)</span></label>
                  <input type="file" name="attachment" required accept=".pdf,.doc,.docx" onChange={checkFile}
                    className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:text-white file:bg-[#1E5C8E] hover:file:bg-[#174D78]" />
                  {fileError && <p className="text-red-600 text-xs mt-1">{fileError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Note</label>
                  <textarea name="Cover Note" rows={3} placeholder="Tell us why you're a great fit..."
                    className={`${inputClass} resize-none`} style={{ '--tw-ring-color': '#1E5C8E' }} />
                </div>

                <button type="submit" className="w-full text-white font-semibold py-3 rounded-lg transition-colors" style={{ background: '#1E5C8E' }}
                  onMouseEnter={e => e.currentTarget.style.background='#174D78'}
                  onMouseLeave={e => e.currentTarget.style.background='#1E5C8E'}
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
