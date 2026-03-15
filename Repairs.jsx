import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'Fault Finding', desc: 'Systematic diagnosis of hardware, cabling, and software faults across installed systems.' },
  { title: 'System Repairs', desc: 'On-site repairs for CCTV, networking, and IT hardware — getting you operational quickly.' },
  { title: 'Ongoing Maintenance', desc: 'Regular scheduled maintenance visits to prevent issues before they cause disruption.' },
  { title: 'Preventative Maintenance', desc: 'Proactive checks and adjustments to extend the life of your installed technology.' },
  { title: 'Post-Installation Support', desc: 'Support contracts for systems we have installed, ensuring long-term performance.' },
  { title: 'Third-Party System Support', desc: 'Support and repairs on existing systems installed by other providers — no bias, just solutions.' },
]

export default function Repairs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Repairs & Maintenance</div>
          <h1 className="section-title">Keep Systems Running.<br />Avoid Costly Downtime.</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            A broken camera, failed switch, or faulty POS terminal directly impacts your business. FKN Solutions provides fast, reliable repairs and maintenance across your technology infrastructure.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Report a Fault</Link>
            <a href="https://wa.me/27645053439" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Our Approach</div>
              <h2 className="section-title">Reliable Repairs.<br />Honest Assessment.</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                We don't upsell. If something can be repaired cost-effectively, we'll repair it. If replacement is the better option, we'll tell you that too — and explain why.
              </p>
              <ul className="check-list">
                <li>Fast response for critical system failures</li>
                <li>Full fault diagnosis before any work begins</li>
                <li>Transparent cost assessment</li>
                <li>Repairs for CCTV, networking, IT, and POS</li>
                <li>Preventative maintenance scheduling available</li>
                <li>Support for third-party installed systems</li>
              </ul>
            </div>
            <div
              className="img-placeholder"
              style={{ height: 380, borderRadius: 'var(--radius-lg)' }}
            >
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Technical Support & Repairs Photo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Services</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Repair & Maintenance Services</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="service-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>System Fault? Let's Sort It Out.</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              Contact Franklin Marcus for a fast, professional assessment of your issue.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Report a Fault</Link>
              <a href="tel:0645053439" className="btn btn-outline">📞 064 505 3439</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
