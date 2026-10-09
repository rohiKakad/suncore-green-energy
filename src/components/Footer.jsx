import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0C2E48' }} className="text-gray-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            {/* White-text logo for dark bg */}
            <div className="mb-4">
              <Logo size="md" linkTo="/" variant="light" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-2">
              Empowering Pune with clean, affordable solar energy. We work with leading brands like Waaree, Adani, Tata, Sudarshan Saur &amp; Vikram Solar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[['Home', '/'], ['Products', '/products'], ['About Us', '/about'], ['Career', '/career']].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-sun-400 transition-colors">{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-white font-semibold mb-4">Brands We Work With</h3>
            <ul className="space-y-2 text-sm">
              {['Waaree Solar Panels', 'Adani Solar Panels', 'Tata Solar Panels', 'Vikram Solar Panels', 'Sudarshan Saur', 'Solar Inverters', 'Battery Storage'].map(item => (
                <li key={item}>
                  <Link to="/products" className="hover:text-sun-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F5A623' }} className="mt-0.5">📍</span>
                <span><strong className="text-white">Pune:</strong> Office 1305/06, Maruti Millennium Tower, Pune–Bangalore Highway, Pashan Exit, Baner Annex, Baner, Pune – 411045, Maharashtra</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F5A623' }} className="mt-0.5">📍</span>
                <span><strong className="text-white">Sangamner:</strong> 1st Floor, Vishwkarma Building, Opp. Main Gate Market Yard, Sangamner, Ahilyanagar, Maharashtra – 422605</span>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#F5A623' }}>📞</span>
                <a href="tel:9096900576" className="hover:text-sun-400 transition-colors">+91 90969 00576</a>
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#F5A623' }}>✉️</span>
                <a href="mailto:info@suncoregreen.com" className="hover:text-sun-400 transition-colors">info@suncoregreen.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 pb-20 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Suncore Green Energy All rights reserved.</p>
          <p>Made with ☀️ in Pune, India</p>
        </div>
      </div>
    </footer>
  )
}
