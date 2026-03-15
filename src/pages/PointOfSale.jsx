import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: 'POS Hardware Setup', desc: 'Installation and configuration of till systems, receipt printers, barcode scanners, and cash drawers.' },
  { title: 'POS Software Assistance', desc: 'Basic setup and support for point-of-sale software environments to get your system operational.' },
  { title: 'POS Installation Support', desc: 'On-site installation at retail shops, restaurants, and business environments.' },
  { title: 'POS Repairs', desc: 'Fault diagnosis and repairs for POS hardware — reducing costly downtime at the till.' },
  { title: 'System Upgrades', desc: 'Upgrading outdated POS hardware to improve speed, reliability, and compatibility.' },
  { title: 'Ongoing POS Support', desc: 'Support contracts available for businesses that need ongoing technical assistance for their POS environment.' },
]

export default function PointOfSale() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Point of Sale</div>
          <h1 className="section-title">POS Solutions for<br />Retail & Business</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            A malfunctioning point-of-sale system directly impacts your revenue and customer experience. FKN Solutions provides reliable POS setup, support, and repairs for business environments.
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6" />
              </svg>
              <span>POS System Installation Photo</span>
            </div>
            <div>
              <div className="section-label">Our POS Services</div>
              <h2 className="section-title">Your Till Must Work.<br />Every Time.</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Whether you're opening a new shop, upgrading old hardware, or dealing with an existing fault — FKN Solutions provides practical POS support for business operators.
              </p>
              <ul className="check-list">
                <li>Till systems, receipt printers, and scanners</li>
                <li>POS software basic setup and support</li>
                <li>Retail, restaurant, and service business environments</li>
                <li>Fast fault response to minimise trading disruption</li>
                <li>Hardware upgrades for aging POS infrastructure</li>
                <li>Support contracts available for ongoing peace of mind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Services</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Point of Sale Services</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="service-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6" />
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
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>POS Problem or New Setup?</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              Don't let a failing till cost you business. Contact us for fast, honest POS support.
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
