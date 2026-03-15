import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '📷',
    title: 'CCTV & Surveillance',
    desc: 'Professional camera installation, DVR/NVR setup, and ongoing support for new and existing systems.',
    to: '/cctv',
  },
  {
    icon: '🌐',
    title: 'Networking & IT',
    desc: 'Structured network installations, router and switch configuration, and office connectivity solutions.',
    to: '/networking',
  },
  {
    icon: '🔧',
    title: 'Repairs & Maintenance',
    desc: 'Fault finding, system repairs, and preventative maintenance to keep your business running smoothly.',
    to: '/repairs',
  },
  {
    icon: '🖥️',
    title: 'Point of Sale',
    desc: 'POS hardware and software support for retail and business environments — setup, install, and troubleshoot.',
    to: '/point-of-sale',
  },
  {
    icon: '💻',
    title: 'IT Hardware & Software',
    desc: 'Business device setup, hardware support, and basic IT configuration for your team.',
    to: '/networking',
  },
  {
    icon: '🔄',
    title: 'System Upgrades',
    desc: 'Bring your existing technology up to date. We assess, plan, and execute upgrades that matter.',
    to: '/repairs',
  },
]

const whyItems = [
  {
    icon: '🎯',
    title: 'Single Point of Contact',
    desc: 'One trusted provider for CCTV, networking, IT, and maintenance. No juggling multiple contractors.',
  },
  {
    icon: '🤝',
    title: 'Business-First Approach',
    desc: 'We understand business operations. Our solutions are designed around what your environment actually needs.',
  },
  {
    icon: '⚡',
    title: 'Responsive Support',
    desc: 'When something goes wrong, you need it fixed fast. We prioritise response times for our clients.',
  },
  {
    icon: '🔒',
    title: 'Confidential & Professional',
    desc: 'Your site layout, systems, and infrastructure information are handled with full professional discretion.',
  },
]

const industries = [
  { emoji: '🏫', label: 'Schools' },
  { emoji: '🏢', label: 'Offices' },
  { emoji: '🛒', label: 'Retail' },
  { emoji: '🏭', label: 'Warehouses' },
  { emoji: '💼', label: 'Small Business' },
  { emoji: '🏗️', label: 'Commercial Sites' },
]

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const message = form.message.value
    const phone = form.phone.value
    const whatsappMsg = encodeURIComponent(`Hi FKN Solutions,\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`)
    window.open(`https://wa.me/27645053439?text=${whatsappMsg}`, '_blank')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Serving Businesses Across South Africa
            </div>
            <h1 className="hero-title">
              <span className="line">Technology &</span>
              <span className="line accent">Surveillance</span>
              <span className="line">Built for Business</span>
            </h1>
            <p className="hero-desc">
              CCTV, networking, IT support, repairs and point-of-sale solutions — all under one reliable provider.
              FKN Solutions delivers professional technology infrastructure that keeps your business secure and operational.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Consultation
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/cctv" className="btn btn-outline">View Services</Link>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <span className="hero-proof-num">5+</span>
                <span className="hero-proof-label">Service Categories</span>
              </div>
              <div className="hero-proof-item">
                <span className="hero-proof-num">6+</span>
                <span className="hero-proof-label">Industries Served</span>
              </div>
              <div className="hero-proof-item">
                <span className="hero-proof-num">1</span>
                <span className="hero-proof-label">Trusted Provider</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-grid">
              <div className="hero-vis-card">
                <div className="hero-vis-icon">📹</div>
                <div className="hero-vis-label">HD Surveillance</div>
                <div className="hero-vis-sub">DVR / NVR Systems</div>
                <div style={{ marginTop: 16, padding: '10px 16px', background: 'rgba(0,200,122,0.1)', borderRadius: 8, fontSize: 12, color: 'var(--accent)', border: '1px solid rgba(0,200,122,0.2)' }}>
                  Live Monitoring Ready
                </div>
              </div>
              <div className="hero-vis-card">
                <div className="hero-vis-icon">🌐</div>
                <div className="hero-vis-label">Network Setup</div>
                <div className="hero-vis-sub">Business Connectivity</div>
              </div>
              <div className="hero-vis-card">
                <div className="hero-vis-icon">🖥️</div>
                <div className="hero-vis-label">Point of Sale</div>
                <div className="hero-vis-sub">Retail & Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Complete Technology Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              From camera installation to network setup and ongoing maintenance — one team, one number, fully covered.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link to={s.to} key={s.title} className="service-card" style={{ display: 'block' }}>
                <div className="service-icon" style={{ fontSize: 22 }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-card-link">
                  Learn more
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="section-label">Why FKN Solutions</div>
              <h2 className="section-title">One Provider.<br />Full Accountability.</h2>
              <p className="section-subtitle">
                Businesses across the Western Cape trust FKN Solutions because we show up, we communicate, and we get the job done properly — the first time.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/contact" className="btn btn-primary">
                  Start a Conversation
                </Link>
              </div>
            </div>
            <div className="why-grid">
              {whyItems.map((item) => (
                <div className="why-item" key={item.title}>
                  <div className="why-item-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Industries</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>We Work Across Sectors</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              From schools and offices to warehouses and retail floors — FKN Solutions delivers technology solutions that fit your environment.
            </p>
          </div>
          <div className="industries-row" style={{ justifyContent: 'center' }}>
            {industries.map(ind => (
              <Link to="/industries" className="industry-chip" key={ind.label}>
                <span>{ind.emoji}</span>
                <span>{ind.label}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/industries" className="btn btn-outline">View All Industries →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>
              Ready to Secure and Support Your Business?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              Contact Franklin Marcus directly. We'll assess your needs, give you an honest recommendation, and provide a clear quote.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
              <a href="https://wa.me/27645053439" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Inquiry ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Quick Inquiry</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Send a Message via WhatsApp</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              Fill in the form below and we'll connect you directly to Franklin on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="John Dlamini" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="082 000 0000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" placeholder="I need CCTV installed at my office / I need my network looked at..." required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
