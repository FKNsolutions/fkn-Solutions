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
            <div style={{
              padding: '20px 28px',
              background: 'rgba(0,200,122,0.06)',
              border: '1px solid rgba(0,200,122,0.15)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: 40,
              fontSize: 15,
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Last updated:</strong> March 2025 &nbsp;|&nbsp;
              <strong style={{ color: 'var(--text-primary)' }}>Business:</strong> FKN Solutions &nbsp;|&nbsp;
              <strong style={{ color: 'var(--text-primary)' }}>Contact:</strong> franklin@fknsolutions.co.za
            </div>

            <div className="privacy-section">
              <h2>Our Commitment to Confidentiality</h2>
              <p>
                FKN Solutions takes the privacy and confidentiality of all clients seriously. When you engage our services,
                share details about your business, or request a consultation, you can expect that information to be treated
                with full professional discretion.
              </p>
              <p>
                This policy applies to all clients — whether you are a school, an office, a retail business, a warehouse, or any other organisation that has engaged or is considering engaging FKN Solutions.
              </p>

              <h2>Information We Collect</h2>
              <p>In the course of providing our services, FKN Solutions may collect and use the following categories of information:</p>
              <ul>
                <li>Contact details: name, phone number, email address, and business name</li>
                <li>Site and location information relevant to the installation or service</li>
                <li>Technical details about your existing systems, infrastructure, or equipment</li>
                <li>Business requirements, security concerns, and operational context shared during consultations</li>
                <li>Photographs or documentation of installations for record-keeping purposes</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>Information collected from clients is used solely for the purposes of:</p>
              <ul>
                <li>Providing the services requested — installation, support, maintenance, or consultation</li>
                <li>Communicating with you about your service, quote, or project</li>
                <li>Preparing accurate proposals, quotes, or documentation relevant to your site</li>
                <li>Maintaining service records for ongoing maintenance and support clients</li>
              </ul>
              <p>
                FKN Solutions does not sell, share, or disclose client information to any third party for marketing or commercial purposes.
              </p>

              <h2>Site and Infrastructure Confidentiality</h2>
              <p>
                FKN Solutions understands that details about your security infrastructure, surveillance layout, network configuration, and business operations are sensitive. This includes:
              </p>
              <ul>
                <li>Camera placement and coverage areas</li>
                <li>Network architecture and IP configurations</li>
                <li>Access control setups and entry/exit points</li>
                <li>POS configurations and business system layouts</li>
                <li>Site floor plans or layout details shared for installation purposes</li>
              </ul>
              <p>
                All such information is treated as strictly confidential. It is not shared with any party outside of FKN Solutions unless explicitly required for the delivery of a service and with your prior knowledge.
              </p>

              <h2>Data Protection</h2>
              <p>
                FKN Solutions takes reasonable measures to protect client information from unauthorised access, loss, or misuse. Client records and site documentation are stored securely and accessed only by FKN Solutions personnel directly involved in the delivery of your services.
              </p>

              <h2>Retention of Information</h2>
              <p>
                Client information is retained for as long as is necessary to deliver services and maintain accurate records for ongoing support relationships. Where a client relationship has ended, information is retained only as required by applicable legal or operational necessity.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the information FKN Solutions holds about you or your business</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request that your information be removed from our records, subject to any legal obligations</li>
              </ul>
              <p>To exercise any of these rights, please contact Franklin Marcus directly.</p>

              <h2>Communication Confidentiality</h2>
              <p>
                All discussions, whether in person, by telephone, by email, or via messaging platforms, are treated as confidential business communications. Details of your enquiry, security concerns, system weaknesses, or business operations shared in the course of any communication will not be disclosed to any third party.
              </p>

              <h2>Contact for Privacy Enquiries</h2>
              <p>
                For any questions relating to this policy or how FKN Solutions handles your information, please contact:
              </p>
              <div style={{
                marginTop: 20,
                padding: '24px 28px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <p style={{ marginBottom: 8 }}><strong style={{ color: 'var(--text-primary)' }}>Franklin Marcus</strong></p>
                <p style={{ marginBottom: 4 }}>📞 <a href="tel:0645053439" style={{ color: 'var(--accent)' }}>064 505 3439</a></p>
                <p>✉️ <a href="mailto:franklin@fknsolutions.co.za" style={{ color: 'var(--accent)' }}>franklin@fknsolutions.co.za</a></p>
              </div>
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Contact FKN Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
