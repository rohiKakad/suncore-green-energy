import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSeo } from '../seo'

export const openings = [
  {
    title: 'Sales Executive – Solar',
    type: 'Full-time', location: 'Pune', experience: '2–4 years',
    description: 'Generate leads, conduct client meetings, and close solar system sales for residential and commercial clients across Pune.',
    skills: ['B2C Sales', 'Lead Generation', 'Client Relationship', 'Solar Knowledge'],
  },
  {
    title: 'Customer Support Executive',
    type: 'Full-time', location: 'Pune / Sangamner', experience: '0–2 years',
    description: 'Handle customer queries, schedule site visits, coordinate with installation teams, and ensure post-installation satisfaction.',
    skills: ['Communication', 'CRM Tools', 'Problem Solving', 'Marathi/Hindi/English'],
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

export default function Career() {
  useSeo({
    title: 'Careers – Solar Jobs in Pune & Sangamner | Suncore Green Energy',
    description: 'Join Suncore Green Energy. Current openings: Sales Executive (Pune) and Customer Support Executive (Pune / Sangamner). Apply online with your resume.',
    path: '/career',
  })
  const navigate = useNavigate()

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
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1A8BD4' }}></span>
            {openings.length} Open Positions in Pune &amp; Sangamner
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
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#EBF4FB', color: '#1E5C8E' }}>{job.type}</span>
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#E6F4FC', color: '#1A8BD4' }}>📍 {job.location}</span>
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: '#FFFBEB', color: '#C97D08' }}>💼 {job.experience}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{skill}</span>
                  ))}
                </div>
                <button
                  onClick={() => navigate(`/career/apply?role=${encodeURIComponent(job.title)}`)}
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
              href="mailto:suncoregreen@gmail.com"
              className="inline-block text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{ background: '#1A8BD4' }}
              onMouseEnter={e => e.currentTarget.style.background='#1A4E9C'}
              onMouseLeave={e => e.currentTarget.style.background='#1A8BD4'}
            >
              ✉️ Send Resume to suncoregreen@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
