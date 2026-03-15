import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Legal</div>
          <h1 className="section-title">Privacy & Confidentiality</h1>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            FKN Solutions is committed to handling all client information with the highest level of professional discretion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ padding: '20px 28px', background: 'rgba(0,200,122,0.06)', border: '1px solid rgba(0,200,122,0.15)', borderRadius: 'var(--radius-lg)', marginBottom: 40, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Business:</strong> FKN Solutions &nbsp;|&nbsp;
              <strong style={{ color: 'var(--text-primary)' }}>Contact:</strong> franklin@fknsolutions.co.za
            </div>
            <div className="privacy-section">
              <h2>Our Commitment to Confidentiality</h2>
              <p>FKN Solutions takes the privacy and confidentiality of all clients seriously. When you engage our services, share details about your business, or request a consultation, you can expect that information to be treated with full professional discretion.</p>

              <h2>Information We Collect</h2>
              <p>In the course of providing our services, FKN Solutions may collect and use the following:</p>
              <ul>
                <li>Contact details: name, phone number, email address, and business name</li>
                <li>Site and location information relevant to the installation or service</li>
                <li>Technical details about your existing systems or infrastructure</li>
                <li>Business requirements and operational context shared during consultations</li>
              </ul>

              <h2>Site and Infrastructure Confidentiality</h2>
              <p>Details about your security infrastructure, surveillance layout, network configuration, and business operations are treated as strictly confidential. This includes camera placement, network architecture, access control setups, and POS configurations.</p>

              <h2>How We Use Your Information</h2>
              <p>Information is used solely to deliver requested services, prepare quotes, and maintain support records. FKN Solutions does not sell or share client information with any third party.</p>

              <h2>Contact for Privacy Enquiries</h2>
              <div style={{ marginTop: 20, padding: '24px 28px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
                <p style={{ marginBottom: 8 }}><strong style={{ color: 'var(--text-primary)' }}>Franklin Marcus</strong></p>
                <p style={{ marginBottom: 4 }}>📞 <a href="tel:0645053439" style={{ color: 'var(--accent)' }}>064 505 3439</a></p>
                <p>✉️ <a href="mailto:franklin@fknsolutions.co.za" style={{ color: 'var(--accent)' }}>franklin@fknsolutions.co.za</a></p>
              </div>
            </div>
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Contact FKN Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
