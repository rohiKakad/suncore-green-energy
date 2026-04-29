import React, { useState } from 'react'

const openings = [
  {
    title: 'Solar Installation Engineer',
    type: 'Full-time', location: 'Pune', experience: '2–5 years', salary: '₹3–5 LPA',
    description: 'Install and commission residential and commercial solar PV systems. Conduct site surveys and ensure quality installation standards.',
    skills: ['Solar PV Installation', 'Electrical Wiring', 'Safety Compliance', 'Site Survey'],
  },
  {
    title: 'Sales Executive – Solar',
    type: 'Full-time', location: 'Pune', experience: '1–3 years', salary: '₹2.5–4 LPA + Incentives',
    description: 'Generate leads, conduct client meetings, and close solar system sales for residential and commercial clients across Pune.',
    skills: ['B2C Sales', 'Lead Generation', 'Client Relationship', 'Solar Knowledge'],
  },
  {
    title: 'Solar Design Engineer',
    type: 'Full-time', location: 'Pune (Hybrid)', experience: '2–4 years', salary: '₹4–6 LPA',
    description: 'Design solar PV systems using AutoCAD and PVsyst. Prepare technical proposals and energy yield reports for clients.',
    skills: ['AutoCAD', 'PVsyst', 'Solar Design', 'Energy Modeling'],
  },
  {
    title: 'Customer Support Executive',
    type: 'Full-time', location: 'Pune', experience: '0–2 years', salary: '₹2–3 LPA',
    description: 'Handle customer queries, schedule site visits, coordinate with installation teams, and ensure post-installation satisfaction.',
    skills: ['Communication', 'CRM Tools', 'Problem Solving', 'Marathi/Hindi/English'],
  },
  {
    title: 'Digital Marketing Executive',
    type: 'Full-time', location: 'Pune (Hybrid)', experience: '1–3 years', salary: '₹2.5–4 LPA',
    description: 'Manage social media, run Google/Meta ad campaigns, create content, and drive online lead generation for solar products.',
    skills: ['SEO/SEM', 'Social Media', 'Content Creation', 'Google Ads'],
  },
  {
    title: 'Solar Intern – Engineering',
    type: 'Internship (6 months)', location: 'Pune', experience: 'Fresher', salary: '₹8,000–12,000/month',
    description: 'Assist installation engineers, learn solar system design, and gain hands-on experience in the renewable energy sector.',
    skills: ['Electrical Engineering', 'Eagerness to Learn', 'Team Player'],
  },
]

const perks = [
  { icon: '💰', title: 'Competitive Salary',      desc: 'Market-leading pay with performance incentives' },
  { icon: '📈', title: 'Growth Opportunities',    desc: 'Fast-growing industry with clear career paths' },
  { icon: '🎓', title: 'Training & Certification',desc: 'Sponsored solar certifications and skill development' },
  { icon: '🏥', title: 'Health Insurance',         desc: 'Medical coverage for you and your family' },
  { icon: '🌱', title: 'Green Mission',            desc: 'Work with purpose – contribute to a sustainable India' },
  { icon: '🤝', title: 'Great Culture',            desc: 'Collaborative, inclusive, and supportive work environment' },
]

function ApplicationModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
            <p className="text-gray-500 mb-6">Thank you for applying for <strong>{job.title}</strong>. Our HR team will contact you within 3–5 business days.</p>
            <button onClick={onClose} className="btn-secondary">Close</button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.type} · {job.location}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Full Name *',     key: 'name',    type: 'text',  placeholder: 'Your full name' },
                { label: 'Email Address *', key: 'email',   type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone Number *',  key: 'phone',   type: 'tel',   placeholder: '+91 XXXXX XXXXX' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                  <input
                    type={f.type} required={f.label.includes('*')}
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#1E5C8E' }}
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Note</label>
                <textarea
                  rows={3} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none"
                  placeholder="Tell us why you're a great fit..."
                />
              </div>
              <button type="submit" className="w-full text-white font-semibold py-3 rounded-lg transition-colors" style={{ background: '#1E5C8E' }}
                onMouseEnter={e => e.currentTarget.style.background='#174D78'}
                onMouseLeave={e => e.currentTarget.style.background='#1E5C8E'}
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg,#1E5C8E,#F5A623)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join Our Solar Mission</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Be part of India's clean energy revolution. Build a meaningful career at Suncore Green Energy and help power a sustainable future.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6B8E23' }}></span>
            {openings.length} Open Positions in Pune
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">We invest in our people as much as we invest in solar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="card p-6 text-left flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{perk.icon}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#1E5C8E' }}>{perk.title}</h3>
                  <p className="text-gray-500 text-sm">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle">Find your perfect role in the solar industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <div key={i} className="card p-6 hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#EBF4FB', color: '#1E5C8E' }}>{job.type}</span>
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#F4F7EC', color: '#6B8E23' }}>📍 {job.location}</span>
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#FFFBEB', color: '#C97D08' }}>💼 {job.experience}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="font-bold text-sm" style={{ color: '#1E5C8E' }}>{job.salary}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full text-white font-semibold py-2.5 rounded-lg transition-colors"
                  style={{ background: '#F5A623' }}
                  onMouseEnter={e => e.currentTarget.style.background='#E8960F'}
                  onMouseLeave={e => e.currentTarget.style.background='#F5A623'}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10">
            <div className="text-5xl mb-4">📬</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#1E5C8E' }}>Don't See Your Role?</h2>
            <p className="text-gray-500 mb-6">
              We're always looking for talented, passionate people. Send us your resume and we'll reach out when a suitable opportunity arises.
            </p>
            <a
              href="mailto:careers@suncoregreen.in"
              className="inline-block text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ background: '#6B8E23' }}
              onMouseEnter={e => e.currentTarget.style.background='#5A7A1E'}
              onMouseLeave={e => e.currentTarget.style.background='#6B8E23'}
            >
              ✉️ Send Resume to careers@suncoregreen.in
            </a>
          </div>
        </div>
      </section>

      {selectedJob && <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  )
}
