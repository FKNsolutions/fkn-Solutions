import React from 'react'
import { Link } from 'react-router-dom'

const industries = [
  {
    icon: '🏫',
    name: 'Schools & Educational Facilities',
    desc: 'Schools require reliable surveillance, dependable networking for computer labs and administration, and ongoing IT support. FKN Solutions understands the safety and operational requirements of educational environments.',
    services: ['CCTV & Perimeter Surveillance', 'Lab & Office Networking', 'IT Hardware Support', 'Maintenance Contracts'],
  },
  {
    icon: '🏢',
    name: 'Offices & Commercial Properties',
    desc: 'Professional office environments need structured networks, access control, and technology that works reliably every day. We install and maintain the infrastructure that keeps your business running.',
    services: ['Network Infrastructure', 'CCTV & Access Points', 'IT Support', 'System Upgrades'],
  },
  {
    icon: '🛒',
    name: 'Retail & Shopping Environments',
    desc: 'Retail businesses need surveillance, functioning POS systems, and connectivity. Downtime means lost sales. FKN Solutions delivers fast installation and responsive support for retail environments.',
    services: ['CCTV & Loss Prevention', 'Point of Sale Setup & Support', 'Network Connectivity', 'POS Repairs'],
  },
  {
    icon: '🏭',
    name: 'Warehouses & Industrial Sites',
    desc: 'Warehouses present unique challenges: large spaces, harsh conditions, and complex surveillance requirements. We design solutions that provide coverage across large footprints.',
    services: ['Wide-Area Surveillance', 'DVR & NVR Setup', 'Network Installation', 'System Maintenance'],
  },
  {
    icon: '💼',
    name: 'Small & Medium Businesses',
    desc: 'Small businesses deserve the same professional technology infrastructure as large corporations. FKN Solutions provides practical, cost-effective solutions that grow with your business.',
    services: ['Starter CCTV Packages', 'Basic Network Setup', 'IT Support', 'POS Installation'],
  },
  {
    icon: '🏗️',
    name: 'Commercial & Construction Sites',
    desc: 'Commercial developments and active construction sites require temporary and permanent surveillance, structured connectivity, and IT support as the project progresses.',
    services: ['Site Surveillance', 'Temporary & Permanent CCTV', 'Network Setup', 'System Handover'],
  },
]

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Industries We Serve</div>
          <h1 className="section-title">Technology Solutions<br />Across Every Sector</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            From schools and offices to warehouses and retail sites — FKN Solutions delivers technology infrastructure that fits the specific demands of your environment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 24 }}>
            {industries.map(ind => (
              <div className="industry-card" key={ind.name}>
                <div className="icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
                <div className="tags">
                  {ind.services.map(s => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-banner">
            <div className="section-label" style={{ justifyContent: 'center' }}>Don't See Your Industry?</div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>
              We Work Across All Business Environments
            </h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
              If your business needs reliable surveillance, connectivity, or IT support — get in touch and we'll assess what you need.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Contact Franklin Marcus</Link>
              <a href="https://wa.me/27645053439" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
