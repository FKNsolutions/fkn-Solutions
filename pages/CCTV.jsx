import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'CCTV Camera Sales', desc: 'We supply a range of professional-grade cameras suited to indoor, outdoor, and high-risk environments.' },
  { title: 'Camera Installation', desc: 'Full on-site installation including mounting, cabling, and configuration for optimal coverage.' },
  { title: 'DVR & NVR Setup', desc: 'Digital and network video recorder configuration for centralised, reliable recording and playback.' },
  { title: 'Existing System Upgrades', desc: 'Extend the life and performance of your current surveillance system without a full replacement.' },
  { title: 'System Support', desc: 'Ongoing support for existing CCTV installations — diagnostics, troubleshooting, and repairs.' },
  { title: 'Maintenance Contracts', desc: 'Scheduled maintenance visits to ensure cameras, recorders, and cabling remain in working condition.' },
]

export default function CCTV() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>CCTV & Surveillance</div>
          <h1 className="section-title">Professional Surveillance<br />for Business Environments</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            From single-site camera installations to multi-building DVR setups — FKN Solutions delivers surveillance infrastructure that businesses can rely on.
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
            <div>
              <div className="section-label">What We Provide</div>
              <h2 className="section-title">Surveillance You Can Count On</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                A poorly installed camera system is often worse than no system at all. We ensure your surveillance coverage is complete, reliable, and properly recorded.
              </p>
              <ul className="check-list">
                <li>Full site assessment before any installation</li>
                <li>Indoor and outdoor camera placement</li>
                <li>High-definition recording capability</li>
                <li>Remote viewing setup where applicable</li>
                <li>Clean cable management and professional finish</li>
                <li>Handover and basic user training included</li>
              </ul>
            </div>
            <div
              className="img-placeholder"
              style={{ height: 380, borderRadius: 'var(--radius-lg)' }}
            >
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.262a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>CCTV Installation Photo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Services</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Everything Surveillance-Related</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="service-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.262a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>Need Cameras Installed or Upgraded?</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              Contact Franklin directly for a site assessment and honest recommendation.
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
