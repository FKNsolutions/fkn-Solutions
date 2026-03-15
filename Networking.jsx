import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'Network Installation', desc: 'End-to-end network setup for new offices, warehouses, and commercial spaces.' },
  { title: 'Router & Switch Configuration', desc: 'Professional setup and configuration of routers and switches for reliable business connectivity.' },
  { title: 'Office Connectivity', desc: 'Wired and wireless connectivity solutions designed for productivity and performance.' },
  { title: 'Structured Cabling', desc: 'Neat, organised data cabling that makes future maintenance and expansion straightforward.' },
  { title: 'IT Hardware Support', desc: 'Setup, configuration, and support for business computers, devices, and peripherals.' },
  { title: 'Software Assistance', desc: 'Basic software setup and business system support to keep your team operational.' },
]

export default function Networking() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Networking & IT Support</div>
          <h1 className="section-title">Business Connectivity &<br />IT Infrastructure</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            Reliable networks are the backbone of modern business operations. FKN Solutions installs, configures, and maintains the connectivity your team depends on.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            <a href="https://wa.me/27645053439" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div
              className="img-placeholder"
              style={{ height: 380, borderRadius: 'var(--radius-lg)' }}
            >
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
              <span>Networking Installation Photo</span>
            </div>
            <div>
              <div className="section-label">What We Provide</div>
              <h2 className="section-title">Infrastructure That Performs</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                A badly configured network causes downtime, frustration, and security vulnerabilities. We install it right from the start and support it when needed.
              </p>
              <ul className="check-list">
                <li>Site assessment and network planning</li>
                <li>Router, switch and access point configuration</li>
                <li>Structured data cabling and cable management</li>
                <li>Business device setup and integration</li>
                <li>Basic IT support for installed systems</li>
                <li>Documentation of your network layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Services</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Networking & IT Services</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="service-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Network Issues or New Setup?</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              Get in touch with Franklin for a straight-talking assessment of your connectivity needs.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
              <a href="tel:0645053439" className="btn btn-outline">📞 064 505 3439</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
