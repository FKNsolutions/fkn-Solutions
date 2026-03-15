import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cctv', label: 'CCTV' },
    { to: '/networking', label: 'Networking & IT' },
    { to: '/repairs', label: 'Repairs' },
    { to: '/point-of-sale', label: 'Point of Sale' },
    { to: '/industries', label: 'Industries' },
  ]

  return (
    <>
      <header className="header" style={scrolled ? { boxShadow: '0 4px 32px rgba(0,0,0,0.4)' } : {}}>
        <div className="header-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-fkn">FKN</span>
            <div className="logo-dot" />
            <span className="logo-solutions">Solutions</span>
          </Link>

          <nav className="nav">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta">
            <Link to="/contact" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Contact
            </Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Get a Quote
            </Link>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
              <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
          Request a Quote
        </Link>
      </div>
    </>
  )
}
