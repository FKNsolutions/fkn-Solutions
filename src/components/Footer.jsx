import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-fkn">FKN</span>
            <div className="logo-dot" />
            <span className="logo-solutions">Solutions</span>
          </div>
          <p>
            Professional technology and surveillance solutions for businesses that demand reliable support.
            CCTV, networking, repairs and IT services — under one trusted provider.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/cctv">CCTV & Surveillance</Link></li>
            <li><Link to="/networking">Networking & IT</Link></li>
            <li><Link to="/repairs">Repairs & Maintenance</Link></li>
            <li><Link to="/point-of-sale">Point of Sale</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Franklin Marcus</span>
          </div>
          <div className="footer-contact-item">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>064 505 3439</span>
          </div>
          <div className="footer-contact-item">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>franklin@fknsolutions.co.za</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FKN Solutions. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
          <Link to="/contact" style={{ color: 'var(--text-muted)' }}>Contact</Link>
        </div>
      </div>
    </footer>
  )
}
