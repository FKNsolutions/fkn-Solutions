import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.fullName.value
    const company = form.company.value
    const phone = form.phone.value
    const service = form.service.value
    const message = form.message.value
    const text = `Hi FKN Solutions,\n\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nService Needed: ${service}\n\nMessage:\n${message}`
    window.open(`https://wa.me/27645053439?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h1 className="section-title">Contact FKN Solutions</h1>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Speak directly to Franklin Marcus for a professional assessment, quote request, or any enquiry about our services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 28, color: 'var(--text-primary)' }}>
                Direct Contact
              </h2>

              <div className="contact-info-item">
                <div className="icon">👤</div>
                <div>
                  <h4>Contact Person</h4>
                  <p>Franklin Marcus</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon">📞</div>
                <div>
                  <h4>Phone / Cell</h4>
                  <p><a href="tel:0645053439" style={{ color: 'var(--accent)' }}>064 505 3439</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:franklin@fknsolutions.co.za" style={{ color: 'var(--accent)', wordBreak: 'break-all' }}>franklin@fknsolutions.co.za</a></p>
                </div>
              </div>

              <div style={{ marginTop: 32 }}>
                <a
                  href="https://wa.me/27645053439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: 16, gap: 10, marginBottom: 12 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href="tel:0645053439"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', padding: 16 }}
                >
                  📞 Call 064 505 3439
                </a>
              </div>

              <div style={{
                marginTop: 28,
                padding: '20px 24px',
                background: 'rgba(0,200,122,0.06)',
                border: '1px solid rgba(0,200,122,0.15)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 14,
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>📍 Service Area</strong>
                Based in Cape Town, serving businesses across the Western Cape and surrounding areas.
              </div>
            </div>

            <div className="contact-form-card">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                Request a Consultation
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 28 }}>
                Fill in your details and we'll connect your inquiry to Franklin directly via WhatsApp.
              </p>

              {submitted && (
                <div style={{
                  padding: '16px 20px',
                  background: 'rgba(0,200,122,0.1)',
                  border: '1px solid rgba(0,200,122,0.2)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--accent)',
                  fontSize: 14,
                  marginBottom: 24,
                  fontWeight: 500
                }}>
                  ✅ Opening WhatsApp... Franklin will respond shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Business</label>
                    <input id="company" name="company" type="text" placeholder="Business name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" placeholder="082 000 0000" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@company.co.za" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                    <option value="Networking & IT">Networking & IT</option>
                    <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                    <option value="Point of Sale">Point of Sale</option>
                    <option value="IT Hardware & Software">IT Hardware & Software</option>
                    <option value="System Upgrade">System Upgrade</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe what you need — location, current setup, or the problem you're facing..."
                    required
                    style={{ minHeight: 140 }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 16 }}>
                  Send Inquiry via WhatsApp →
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
                  Your details are kept confidential — see our <a href="#/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
