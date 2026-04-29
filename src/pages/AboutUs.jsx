import React from 'react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Rohidas Kakad',    role: 'Founder & CEO',        exp: '15+ years in renewable energy',   avatar: 'SP' },
  { name: 'Kavita Desai',   role: 'Head of Operations',   exp: '10+ years in project management', avatar: 'KD' },
  { name: 'Rahul Mane',     role: 'Lead Solar Engineer',  exp: '12+ years in solar installation', avatar: 'RM' },
  { name: 'Pooja Kulkarni', role: 'Customer Relations',   exp: '8+ years in customer success',    avatar: 'PK' },
]

const milestones = [
  { year: '2015', event: 'Suncore Green Energy founded in Pune' },
  { year: '2017', event: 'Became authorized Waaree dealer for Pune region' },
  { year: '2019', event: 'Crossed 100 successful installations' },
  { year: '2020', event: 'Added Adani Solar to our product portfolio' },
  { year: '2022', event: 'Partnered with Tata Power Solar; crossed 300 installations' },
  { year: '2024', event: 'Crossed 500 installations & 10 MW capacity milestone' },
]

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'Every solar system we install reduces carbon emissions and contributes to a greener India.' },
  { icon: '🤝', title: 'Integrity',      desc: 'Transparent pricing, honest advice, and no hidden charges – ever.' },
  { icon: '⭐', title: 'Excellence',     desc: 'We use only certified products and follow best-in-class installation practices.' },
  { icon: '❤️', title: 'Customer First', desc: "Your satisfaction is our priority. We're with you from consultation to after-sales support." },
]

export default function AboutUs() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg,#6B8E23,#3A5012)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Suncore Green Energy</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Pune's most trusted solar energy company, empowering homes and businesses with clean, affordable solar power since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E5C8E' }}>Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suncore Green Energy was founded in 2015 with a simple mission: make solar energy accessible and affordable for every home and business in Pune. What started as a small team of passionate engineers has grown into Pune's most trusted solar solutions provider.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are proud authorized dealers of India's top three solar brands – <strong>Waaree, Adani, and Tata</strong> – ensuring our customers get only the best quality panels backed by manufacturer warranties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With 500+ successful installations and 10 MW+ of solar capacity deployed across Pune, we have helped hundreds of families and businesses slash their electricity bills while contributing to a cleaner environment.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { val: '500+',  label: 'Installations', bg: '#EBF4FB', color: '#1E5C8E' },
                  { val: '10 MW+',label: 'Capacity',      bg: '#F4F7EC', color: '#6B8E23' },
                  { val: '9 Yrs', label: 'Experience',    bg: '#FFFBEB', color: '#C97D08' },
                ].map(s => (
                  <div key={s.label} className="rounded-xl px-5 py-3 text-center" style={{ background: s.bg }}>
                    <div className="text-2xl font-bold" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-10 text-white text-center" style={{ background: 'linear-gradient(135deg,#F5A623,#6B8E23)' }}>
              <div className="text-8xl mb-6">☀️</div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To accelerate Pune's transition to clean solar energy by providing affordable, high-quality solar solutions with exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: '#1E5C8E' }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Key milestones in our growth story</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: '#C8E0F4' }}></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-6 pl-4">
                  <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ background: '#1E5C8E' }}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex-grow">
                    <span className="font-bold text-sm" style={{ color: '#F5A623' }}>{m.year}</span>
                    <p className="text-gray-700 font-medium mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to your solar journey</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg,#F5A623,#1E5C8E)' }}>
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: '#1E5C8E' }}>{member.role}</p>
                <p className="text-gray-400 text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Find Us in Pune</h2>
            <p className="section-subtitle">Visit our office or reach out – we're always happy to help</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span style={{ color: '#F5A623' }}>📍</span> Our Office
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shop No. 12, Sai Complex,<br />
                  Karve Road, Kothrud,<br />
                  Pune – 411038,<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span style={{ color: '#F5A623' }}>📞</span> Contact Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span style={{ color: '#6B8E23' }}>📱</span>
                    <a href="tel:9637324922" className="text-gray-700 font-medium transition-colors hover:underline" style={{ color: '#1E5C8E' }}>
                      +91 96373 24922
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: '#1E5C8E' }}>✉️</span>
                    <a href="mailto:info@suncoregreen.com" className="text-gray-700 transition-colors hover:underline">
                      info@suncoregreen.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: '#F5A623' }}>🕐</span>
                    <span className="text-gray-600">Mon–Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span style={{ color: '#F5A623' }}>🏢</span> Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Kothrud','Baner','Wakad','Hinjewadi','Aundh','Viman Nagar','Hadapsar','Kondhwa','Katraj','Pimpri-Chinchwad'].map(area => (
                    <span key={area} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#EBF4FB', color: '#1E5C8E' }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card overflow-hidden" style={{ minHeight: '380px' }}>
              <iframe
                title="Suncore Green Energy – Kothrud, Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8067!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0xa0a0a0a0a0a0a0a0!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="380"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: 'linear-gradient(90deg,#6B8E23,#1E5C8E)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let's Build a Greener Pune Together</h2>
          <p className="text-white/90 mb-8">Join 500+ happy customers who trust Suncore for their solar needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9637324922" className="font-bold px-8 py-3 rounded-lg shadow-lg transition-colors" style={{ background: '#F5A623', color: '#fff' }}>
              📞 Call Us Now
            </a>
            <Link to="/products" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
